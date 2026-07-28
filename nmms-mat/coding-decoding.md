# **NMMS MAT Study Guide: Coding and Decoding (குறியிடுதல் மற்றும் குறியீட்டை மாற்றுதல்)**

### **1\. Introduction to Coding and Decoding (அறிமுகம்)**

**Definition / வரையறை**

* **Coding:** The process of converting a word or information into a secret form or "code" based on a specific **தர்க்கம் (Logic)** or rule.  
* **Decoding:** The process of deciphering that code back into its original form.  
* **குறியிடுதல் (Coding):** ஒரு வார்த்தை அல்லது தகவலை ஒரு குறிப்பிட்ட **தர்க்கம் (Logic)** அல்லது விதியின் அடிப்படையில் ரகசிய வடிவம் அல்லது "குறியீடாக" மாற்றும் செயல்முறையாகும்.  
* **குறியீட்டை மாற்றுதல் (Decoding):** அந்த ரகசியக் குறியீட்டை மீண்டும் அதன் அசல் வடிவத்திற்கு மாற்றும் செயல்முறையாகும்.

### **2\. Logic Type 1: Letter Shifting and Reordering (எழுத்துக்களை இடமாற்றம் செய்தல் மற்றும் வரிசைப்படுத்துதல்)**

Letters in a word can be moved to fixed positions or rearranged based on a specific **தர்க்கம் (Logic)**.  
வார்த்தையில் உள்ள எழுத்துக்கள் ஒரு குறிப்பிட்ட **தர்க்கம் (Logic)** அடிப்படையில் இடமாற்றம் செய்யப்படலாம் அல்லது வரிசை மாற்றப்படலாம்.  
**மாதிரி வினா (Model Question):** If **KAVERI** is coded as **VBKISE**, find the code for **SPIDER**.  
**Step-by-Step Breakdown:**

1. Split the word into two halves: **K A V** | **E R I**  
2. Reverse each half: **V A K** | **I R E**  
3. Shift the middle letter of each half by \+1:  
   * V (**A+1**) K | I (**R+1**) E  
   * V **B** K | I **S** E  
4. **Result:** VBKISE

**Applying to SPIDER:**

1. Split: **S P I** | **D E R**  
2. Reverse: **I P S** | **R E D**  
3. Shift middle (+1): I (**P+1**) S | R (**E+1**) D ➜ **I Q S R F D**

**Alternative Example (Reordering):** In pure reordering, letters change spots without changing their identity. Example: **TEACHER** ➜ **AETEREH** (Positional swaps only).

### **3\. Logic Type 2: Numerical Value of Words (வார்த்தைகளின் எண் மதிப்புகள்)**

This involves assigning numbers to letters based on their position in the alphabet.  
ஆங்கில எழுத்துக்களின் அகரவரிசை நிலையின் அடிப்படையில் எண்களை ஒதுக்குவதன் மூலம் இது செய்யப்படுகிறது.  
**Alphabet-to-Number Mapping:**

| A | B | C | D | E | F | G | H | I | J | K | L | M |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 |

| N | O | P | Q | R | S | T | U | V | W | X | Y | Z |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 |

**மாதிரி வினா (Model Question):** If **PEN \= 32** and **CHALK \= 30**, find the code for **DESK**.  
**Analysis:**

* **Logic:** \[Sum of alphabetical positions\] \- \[Number of letters in the word\].  
* **PEN:** P(16) \+ E(5) \+ N(14) \= 35\. Word length is 3\. ➜ 35 \- 3 \= **32**.  
* **CHALK:** C(3) \+ H(8) \+ A(1) \+ L(12) \+ K(11) \= 35\. Word length is 5\. ➜ 35 \- 5 \= **30**.  
* **DESK:** D(4) \+ E(5) \+ S(19) \+ K(11) \= 39\. Word length is 4\. ➜ 39 \- 4 \= **35**.

### **4\. Logic Type 3: Direct Substitution using Symbols or Numbers (நேரடி குறியீடுகள் \- குறியீடுகள் மற்றும் எண்கள்)**

Letters are directly mapped to a specific digit or symbol. No calculation is needed.  
இந்த தர்க்கத்தில், ஒவ்வொரு எழுத்தும் நேரடியாக ஒரு குறிப்பிட்ட எண் அல்லது குறியீட்டுடன் இணைக்கப்படுகிறது.  
**மாதிரி வினா (Model Question):** If **EXAMINATION \= 24681365173**, find the code for **TIME**.

* **Mapping:** E=2, X=4, A=6, M=8, I=1, N=3, A=6, T=5, I=1, O=7, N=3.  
* **TIME:** T=5, I=1, M=8, E=2. ➜ **5182**.

**Symbol Mapping:** If **CAT** is coded as **Δ\#***, then C=Δ, A=\#, and T=*.

### **5\. Logic Type 4: Reverse Alphabetical Logic (எதிர் எழுத்துமுறை குறியீடு)**

This uses the "Opposite Pair" method where A is paired with Z, B with Y, etc.  
இது "எதிர் இணை" முறையைப் பயன்படுத்துகிறது, இதில் அகரவரிசையின் தொடக்கம் மற்றும் முடிவில் உள்ள நிலைகளின் அடிப்படையில் எழுத்துக்கள் இணைக்கப்படுகின்றன.  
**Opposite Pairs Table (The "Sum of 27" Rule):**

| Letter | A | B | C | D | E | F | G | H | I | J | K | L | M |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| **Forward (F)** | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 |
| **Reverse (R)** | 26 | 25 | 24 | 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 | 15 | 14 |
| **Opposite** | **Z** | **Y** | **X** | **W** | **V** | **U** | **T** | **S** | **R** | **Q** | **P** | **O** | **N** |

**Coach's Secret:** The sum of the forward position and reverse position of any pair always equals **27** (e.g., K=11, P=16; 11+16=27).  
**மாதிரி வினா (Model Question):** If **KING** is coded as **PRMT**:

* K (11) ➜ P (16) \[11+16=27\]  
* I (9) ➜ R (18) \[9+18=27\]  
* N (14) ➜ M (13) \[14+13=27\]  
* G (7) ➜ T (20) \[7+20=27\]

### **6\. Logic Type 5: Sentence Comparison (வாக்கியங்களை ஒப்பிட்டு குறியீட்டை கண்டறிதல்)**

Compare sentences to identify common words and their corresponding codes.  
பொதுவான எண்களை நீக்கி இலக்கு வார்த்தையின் குறியீட்டைத் தனியாகப் பிரிக்க பல வாக்கியங்களை ஒப்பிட வேண்டும்.  
**மாதிரி வினா (Model Question):**

1. **1729** \= all problems are serious.  
2. **4367** \= men have many problems.  
3. **1385** \= some men are happy.  
4. **8069** \= some have serious ailments.

**Find the code for "Serious men":**

* **Step 1:** Compare (1) and (2). Common word: "problems" | Common digit: **7**.  
* **Step 2:** Compare (1) and (4). Common word: "serious" | Common digit: **9**.  
* **Step 3:** Compare (2) and (3). Common word: "men" | Common digit: **3**.  
* **Speed Strategy:** If you need "Serious men", and you've found Serious=9 and Men=3, the result is **93**. Always look for the word that appears in only one sentence last.

### **7\. Expert Tips for the Exam (தேர்விற்கான நிபுணர் ஆலோசனைகள்)**

1. **Rough Work:** As soon as you receive the rough sheet, write the alphabet A to Z. **ரஃப் ஒர்க் ஷீட் வழங்கப்பட்டவுடன், A முதல் Z வரையிலான எழுத்துக்களை எழுதவும்.**  
2. **Numbering:** Number them 1 to 26 (forward) and 26 to 1 (reverse) immediately. **உடனடியாக 1 முதல் 26 வரை (நேரடியாக) மற்றும் 26 முதல் 1 வரை (தலைகீழாக) எழுத்துக்களுக்கு எண்ணிடவும்.**  
3. **EJOTY Mnemonic:** Use the word **EJOTY** to remember positions in multiples of 5: **E=5, J=10, O=15, T=20, Y=25**. **ஐந்தின் மடங்குகளை எளிதாக நினைவில் கொள்ள EJOTY (E=5, J=10, O=15, T=20, Y=25) என்ற வார்த்தையைப் பயன்படுத்தவும்.**  
4. **Check Differences:** In shifting questions, check the difference (e.g., \+2, \-3) between letters immediately. **எழுத்து மாற்றும் வினாக்களில், எழுத்துக்களுக்கு இடையிலான வித்தியாசத்தை (எ.கா., \+2, \-3) உடனடியாகச் சரிபார்க்கவும்.**  
5. **No Negative Marks:** There are no negative marks, so attempt every single question. **தவறான விடைகளுக்கு மதிப்பெண் குறைப்பு கிடையாது, எனவே அனைத்து வினாக்களுக்கும் பதிலளிக்கவும்.**

### **8\. Practice Exercise (பயிற்சி வினாக்கள்)**

**Q1:** If **BRAIN** is coded as **CSBJO**, then **FLIGHT** is coded as? **வினா 1:** **BRAIN** என்பது **CSBJO** எனக் குறிக்கப்பட்டால், **FLIGHT** என்பது எவ்வாறு குறிக்கப்படும்?  
**Q2:** If **CAT \= 21** and **DOG \= 23**, find the code for **BIRD**. **வினா 2:** **CAT \= 21** மற்றும் **DOG \= 23** என்றால், **BIRD** என்பதன் குறியீட்டைக் கண்டறியவும்.  
**Q3:** If **"253"** means **"books are old"**, **"546"** means **"man is old"**, and **"378"** means **"buy good books"**, what digit stands for **"are"**? **வினா 3:** **"253"** என்பது **"books are old"** என்பதையும், **"546"** என்பது **"man is old"** என்பதையும் குறித்தால், **"are"** என்பதைக் குறிக்கும் எண் எது?

#### **Answer Key (விடைக்குறிப்பு)**

* **Q1: GMJHIU** *(தர்க்கம்: Each letter shifts forward by \+1. B+1=C, R+1=S, etc.)*  
* **Q2: 29** *(தர்க்கம்: Sum of positions minus word length. BIRD \= 2+9+18+4 \= 33\. Word length is 4\. 33 \- 4 \= 29.)*  
* **Q3: 2** *(தர்க்கம்: Compare (1) & (2) to find 'old' \= 5\. Compare (1) & (3) to find 'books' \= 3\. Therefore, 'are' \= 2.)*

