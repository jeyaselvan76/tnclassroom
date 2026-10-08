import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    getRedirectResult,
    signOut,
    onAuthStateChanged,
    setPersistence,
    browserLocalPersistence,
    indexedDBLocalPersistence
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

/**
 * Initializes authentication and access control for TNTET Subject Pages.
 * @param {object} app - The initialized Firebase App instance.
 * @param {object} options - Configuration options.
 */
export function initSubjectPaywall(app, options = {}) {
    const auth = getAuth(app);
    const db = getFirestore(app);
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });

    // Enable cross-tab & mobile-safe persistence
    setPersistence(auth, indexedDBLocalPersistence).catch(() => {
        setPersistence(auth, browserLocalPersistence).catch(() => {});
    });

    let currentUser = null;
    let isUserPro = false;

    const isMobileDevice = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.innerWidth <= 768;

    // Resolve any mobile redirect sign-in results on initial boot
    getRedirectResult(auth)
    .then(async (result) => {
        if (result && result.user) {
            await syncUserProfile(result.user);
        }
    })
    .catch((err) => {
        console.error("Auth redirect resolution error:", err);
    });

    async function syncUserProfile(user) {
        currentUser = user;
        if (!user) {
            isUserPro = false;
            triggerStateCallback();
            return;
        }

        try {
            const userRef = doc(db, "users", user.uid);
            let userDoc = await getDoc(userRef);

            if (!userDoc.exists()) {
                await setDoc(userRef, {
                    uid: user.uid,
                    displayName: user.displayName || "Candidate",
                    email: user.email || "",
                    isPaid: false,
                    plan: "free",
                    createdAt: serverTimestamp()
                });
                userDoc = await getDoc(userRef);
            }

            const data = userDoc.data() || {};
            const expiry = data.subscriptionExpiresAt ? data.subscriptionExpiresAt.toDate() : null;
            const notExpired = !expiry || expiry > new Date();

            isUserPro = (data.isPaid === true && notExpired);
        } catch (err) {
            console.error("Firestore user sync error:", err);
            isUserPro = false;
        }

        triggerStateCallback();
    }

    function triggerStateCallback() {
        if (typeof options.onAuthStateReady === "function") {
            options.onAuthStateReady({
                user: currentUser,
                isPro: isUserPro
            });
        }
    }

    // Auth state observer
    onAuthStateChanged(auth, async (user) => {
        await syncUserProfile(user);
    });

    // Public Sign-in Handler (Mobile-safe redirect + desktop popup)
    async function signIn() {
        try {
            if (isMobileDevice) {
                await signInWithRedirect(auth, provider);
            } else {
                await signInWithPopup(auth, provider);
            }
        } catch (err) {
            console.warn("Popup blocked or failed, falling back to redirect:", err);
            try {
                await signInWithRedirect(auth, provider);
            } catch (fallbackErr) {
                alert("Sign-in issue: " + fallbackErr.message);
            }
        }
    }

    // Public Sign-out Handler
    async function logOut() {
        await signOut(auth);
        window.location.reload();
    }

    // Rule: Session 1 is always free. Sessions 2+ require PRO.
    function checkAccess(sessionIdentifier) {
        const num = parseInt(String(sessionIdentifier).replace(/\D/g, '')) || 0;
        if (num === 1) return true;
        return isUserPro;
    }

    // Submit pending subscription verification claim to Firestore
    async function submitPaymentRequest(mobileNumber, amount = 545) {
        if (!currentUser) throw new Error("Candidate must sign in first.");

        const cleanMobile = mobileNumber.replace(/\D/g, "");
        if (cleanMobile.length !== 10) throw new Error("Please enter a valid 10-digit mobile number.");

        const requestId = `sub_${currentUser.uid}_${Date.now()}`;

        await setDoc(doc(db, "subscription_requests", requestId), {
            requestId: requestId,
            uid: currentUser.uid,
            name: currentUser.displayName || "Candidate",
            email: currentUser.email || "",
            mobile: cleanMobile,
            subject: "All TNTET Subjects (Unified PRO)",
                     amount: amount,
                     status: "pending",
                     requestedAt: serverTimestamp()
        });

        // Store candidate's verified contact number in user profile
        await setDoc(doc(db, "users", currentUser.uid), {
            mobile: cleanMobile
        }, { merge: true });

        return {
            requestId,
            name: currentUser.displayName || "Candidate",
            email: currentUser.email || "",
            mobile: cleanMobile
        };
    }

    return {
        signIn,
        signOut: logOut,
        checkAccess,
        submitPaymentRequest,
        isPro: () => isUserPro,
        getUser: () => currentUser
    };
}
