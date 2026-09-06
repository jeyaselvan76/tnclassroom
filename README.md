# tnclassroom.com

An open, fast, and accessible digital learning portal for Tamil Nadu State Board (Samacheer Kalvi) school curriculum and competitive examination preparation (TNTET, NMMS).

---

## 🚀 Key Features

* **Textbook Hub:** Direct, organized digital textbook downloads for Classes 1 to 12.
* **Interactive Book-Back Practice:** Self-evaluating MCQ practice modules with instant scoring.
* **Competitive Exam Center:** Prep tracks and 10-step roadmaps for TNTET and NMMS (SAT & MAT).
* **Performance Dashboard:** Mobile-number-based test ledger with instant Excel report export.
* **Accessible UI:** Clean, ad-free, mobile-first design with enhanced Tamil typography support.

---

## 🛠 Tech Stack

* **Frontend:** Semantic HTML5, Vanilla JavaScript, Tailwind CSS, FontAwesome
* **Formula & Math Engine:** MathJax 3 (with Tamil unicode sanitization)
* **Data Layer:** Cloud Firestore (Firebase) & Google Sheets CSV streaming endpoints
* **File Exports:** SheetJS (`xlsx.js`)

---

## 📁 Directory Overview

```text
tnclassroom/
├── index.html            # Main Portal Gateway
├── navbar.html           # Universal dynamic navigation component
├── results.html          # Student score ledger & tracking dashboard
├── bb-practice/          # Interactive textbook practice modules
├── guide/                # TNTET success roadmap & infographics
├── nmms-sat/             # NMMS Scholastic Aptitude Test prep
├── nmms-mat/             # NMMS Mental Ability Test prep
├── nmms-model-test/      # Timed mock tests & evaluation portal
└── books-*-*/            # Class 1 to 12 textbook directories
