# **Study Guide: Number/Letter Counting \- எண்/எழுத்து எண்ணுதல் கல்வி வழிகாட்டி**

## **1\. Introduction**

## **1\. அறிமுகம்**

These questions test the candidate's ability to quickly and accurately analyze long strings of numbers, letters, or symbols. Success depends on following specific conditions and constraints provided in the question while maintaining speed.  
இந்த வகையான வினாக்கள் எண்கள், எழுத்துக்கள் அல்லது குறியீடுகளைக் கொண்ட நீண்ட வரிசைகளை விரைவாகவும் துல்லியமாகவும் ஆய்வு செய்யும் திறனைச் சோதிக்கின்றன. வினாவில் கொடுக்கப்பட்டுள்ள குறிப்பிட்ட நிபந்தனைகள் மற்றும் கட்டுப்பாடுகளைப் பின்பற்றி விரைவாக விடையளிப்பதே இதில் வெற்றிக்கான வழியாகும்.

## **2\. Logic Type 1: Positional Analysis**

## **2\. தர்க்க வகை 1: இடநிலை பகுப்பாய்வு**

This type requires finding a specific character based on relative directions (Left or Right) from a reference point within a series.  
இவ்வகை வினாக்களில், கொடுக்கப்பட்ட ஒரு தொடரில் ஒரு குறிப்பிட்ட புள்ளியிலிருந்து இடது அல்லது வலது திசைகளைக் கணக்கிட்டு ஒரு குறிப்பிட்ட உருப்படியைக் கண்டறிய வேண்டும்.

* **Example (based on 2025 MAT Q36 logic):** Find the 5th character to the right of the 11th character from the right end of a series.  
* **எடுத்துக்காட்டு (2025 MAT Q36 தர்க்கத்தின்படி):** ஒரு தொடரின் வலது முனையிலிருந்து 11-வதாக இருக்கும் உருப்படியின் வலதுபுறம் 5-வதாக உள்ள உருப்படியைக் கண்டறியவும்.

**Logic Method:**

1. Identify the starting point: "11th from the right end".  
2. Apply the shift: "5th to the right".  
3. **Formula:** Since both directions are "Right", subtract them (11 \- 5 \= 6). Find the 6th character from the right end.

**தர்க்க முறை:**

1. தொடக்கப் புள்ளியைக் கண்டறியவும்: "வலது முனையிலிருந்து 11-வது".  
2. இடமாற்றத்தைப் பயன்படுத்தவும்: "அதன் வலதுபுறம் 5-வது".  
3. **சூத்திரம்:** இரண்டு திசைகளும் "வலது" என இருப்பதால், அவற்றைக் கழிக்க வேண்டும் (11 \- 5 \= 6). எனவே வலது முனையிலிருந்து 6-வதாக உள்ள உருப்படியைக் கண்டறியவும்.

## **3\. Logic Type 2: Filtered Median**

## **3\. தர்க்க வகை 2: வடிகட்டப்பட்ட இடைநிலை**

In these questions, you must find the middle element of a series only after removing or ignoring specific types of characters (like digits, vowels, or symbols).  
இவ்வகை வினாக்களில், குறிப்பிட்ட வகை உருப்படிகளை (எண்கள், உயிர் எழுத்துக்கள் அல்லது குறியீடுகள் போன்றவை) நீக்கிய பிறகு அல்லது புறக்கணித்த பிறகு, மீதமுள்ள தொடரின் நடுப்பகுதியைக் கண்டறிய வேண்டும்.

* **Example (based on 2025 MAT Q37 logic):** Find the middle element of the series after removing all digits.  
* **எடுத்துக்காட்டு (2025 MAT Q37 தர்க்கத்தின்படி):** கொடுக்கப்பட்ட தொடரிலிருந்து அனைத்து எண்களையும் நீக்கிய பிறகு, அதன் நடுவில் உள்ள உருப்படியைக் கண்டறியவும்.

**Steps to solve:**

1. Physically cross out all characters that meet the "removal" condition.  
2. Count the remaining elements.  
3. Find the middle position using the formula: (Total \+ 1\) \\div 2\.

**தீர்வு காணும் நிலைகள்:**

1. "நீக்கப்பட வேண்டிய" நிபந்தனைக்கு உட்பட்ட அனைத்து உருப்படிகளையும் கோடிட்டு நீக்கவும்.  
2. மீதமுள்ள உருப்படிகளை எண்ணவும்.  
3. நடுநிலையைக் கண்டறியும் சூத்திரம்: (மொத்தம் \+ 1\) \\div 2\.

## **4\. Logic Type 3: Rearrangement & Invariant Positions**

## **4\. தர்க்க வகை 3: மறுசீரமைப்பு மற்றும் மாறாத இடங்கள்**

Questions like **2024 MAT Q42** ask how many digits remain in the same position after sorting a given number in ascending or descending order.  
**2024 MAT Q42** போன்ற வினாக்கள், ஒரு எண்ணில் உள்ள இலக்கங்களை ஏறுவரிசை அல்லது இறங்குவரிசையில் மாற்றியமைத்த பிறகு, எத்தனை இலக்கங்கள் தங்களது பழைய இடத்திலேயே மாறாமல் இருக்கின்றன எனக் கேட்கும்.

| Original Position (அசல் இடம்) | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| **Original Digits (அசல் இலக்கங்கள்)** | 2 | 3 | 7 | 9 | 6 | 5 | 3 | 2 | 0 | 1 | **8** | 4 |
| **Ascending Order (ஏறுவரிசை)** | 0 | 1 | 2 | 2 | 3 | 3 | 4 | 5 | 6 | 7 | **8** | 9 |

**Analysis (ஆய்வு):** In the number 237965320184, after sorting, only the digit **8** remains in the same (11th) position. Total count \= 1\. மேலே உள்ள அட்டவணையில், 237965320184 என்ற எண்ணை ஏறுவரிசையில் அடுக்கிய பின், **8** என்ற இலக்கம் மட்டுமே அதன் பழைய (11-வது) இடத்திலேயே உள்ளது. மொத்த எண்ணிக்கை \= 1\.

## **5\. Logic Type 4: Conditional Pattern Counting**

## **5\. தர்க்க வகை 4: நிபந்தனை மாதிரி எண்ணுதல்**

This requires identifying a specific number or letter based on its immediate neighbors.  
ஒரு குறிப்பிட்ட எண் அல்லது எழுத்தைச் சுற்றியுள்ள உருப்படிகளின் அடிப்படையில் அவற்றை அடையாளம் காண வேண்டும்.

* **Preceded by:** The character coming immediately **before**. (முன்னால் வருவது)  
* **Followed by:** The character coming immediately **after**. (பின்னால் வருவது)

**Example Condition:** "How many 7s are there which are preceded by 3 and followed by 9?" **நிபந்தனை உதாரணம்:** "3-ஐ முன்னால் கொண்டும் 9-ஐ பின்னால் கொண்டும் அமைந்துள்ள 7-களின் எண்ணிக்கை எத்தனை?"

* **Target Pattern:** 3 \- 7 \- 9

## **6\. Logic Type 5: Letter Series Completion**

## **6\. தர்க்க வகை 5: எழுத்துத் தொடரை நிறைவு செய்தல்**

Based on **2024 MAT Q44**, you must count the gaps and fill missing letters to create a repeating rhythmic pattern.  
**2024 MAT Q44** வினாவின்படி, கொடுக்கப்பட்ட தொடரில் உள்ள இடைவெளிகளைக் கணக்கிட்டு, ஒரு குறிப்பிட்ட சீரான சுழற்சி முறையை உருவாக்கும் வகையில் விடுபட்ட எழுத்துக்களை நிரப்ப வேண்டும்.

* **Example (2024 Q44):** abc \_\_ abc \_\_ bbca \_\_ c \_\_ aaabc  
* **Logic:** Divide the total count of letters (including gaps) into equal groups (e.g., groups of 4 or 5\) to identify the repeating sequence.  
* **எடுத்துக்காட்டு (2024 Q44):** abc \_\_ abc \_\_ bbca \_\_ c \_\_ aaabc  
* **தர்க்கம்:** எழுத்துக்கள் மற்றும் இடைவெளிகளின் மொத்த எண்ணிக்கையைச் சமமான குழுக்களாகப் பிரிக்கவும் (எ.கா: 4 அல்லது 5 எழுத்துக்கள் கொண்ட குழுக்கள்). இதன் மூலம் மீண்டும் மீண்டும் வரும் வரிசையை அடையாளம் காணலாம்.

## **Expert Tips for the Exam**

## **தேர்வுக்கான நிபுணர் குறிப்புகள்**

* **Positional Formula (இடநிலை சூத்திரம்):**  
  * Right \+ Right \= Subtract (வலது \+ வலது \= கழிக்கவும்)  
  * Left \+ Left \= Subtract (இடது \+ இடது \= கழிக்கவும்)  
  * Right \+ Left \= Add (வலது \+ இடது \= கூட்டவும்)  
* **Physical Marking:** Always use a pencil to mark or cross out elements in the question paper string to avoid double-counting.  
* **நேரடி குறியிடுதல்:** தவறுகளைத் தவிர்க்க வினாத்தாளில் உள்ள தொடரில் உருப்படிகளை பென்சிலால் குறியிடவும் அல்லது கோடிட்டு நீக்கவும். இது மீண்டும் எண்ணுவதைத் தவிர்க்க உதவும்.  
* **Read Carefully:** Pay close attention to words like "not" (e.g., "not preceded by").  
* **கவனமாகப் படிக்கவும்:** "இல்லாத" போன்ற சொற்களைக் கவனமாகக் கவனிக்கவும் (எ.கா: "3-ஐ முன்னால் கொண்டிராத").

