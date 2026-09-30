**UNIT 6: VISUAL COMMUNICATION / COMPUTER GRAPHICS**  
**கணினி வரைகலை (Tux Paint & Tux Math)**  
*தேர்வு தயாரிப்பு வழிகாட்டி \- தமிழ் & ஆங்கில வழி*

# 

# **1\. Tux Paint User Interface Architecture / Tux Paint திரை கட்டமைப்பு**

Tux Paint is a free, open-source award-winning drawing program designed for young children. Its graphical user interface (GUI) consists of five distinct structural components, each performing specific editing and navigation functions.  
Tux Paint என்பது குழந்தைகளுக்காக வடிவமைக்கப்பட்ட ஒரு இலவச, திறந்த மூல வரைகலை மென்பொருளாகும். இதன் வரைகலை திரைப்பகுதி ஐந்து முக்கிய பாகங்களாகப் பிரிக்கப்பட்டுள்ளது, அவை ஒவ்வொன்றும் குறிப்பிட்ட வரைதல் மற்றும் திருத்துதல் பணிகளை மேற்கொள்கின்றன.

| UI Component / திரைப்பகுதி | English Location & Description | தமிழ் அமைவிடம் & விளக்கம் |
| :---- | :---- | :---- |
| Toolbarகருவிப்பட்டை | Situated on the LEFT side of the screen. Contains drawing, editing, and file control tools (Paint, Stamp, Lines, Shapes, Text, Magic, Eraser, Undo, Redo, New, Open, Save, Print, Quit). | திரையின் இடப்பக்கத்தில் அமைந்துள்ளது. வரைதல், திருத்துதல் மற்றும் கோப்புக் கட்டுப்பாட்டுக் கருவிகளைக் கொண்டுள்ளது (தூரிகை, முத்திரை, கோடுகள், வடிவங்கள், பனுவல், வித்தை, அழிப்பான், செயல் நீக்கம், மீளமைத்தல்). |
| Drawing Canvasபடம் வரையும் பகுதி | Occupies the LARGEST central region of the screen. The primary workspace where pictures are drawn, painted, and edited. | திரையின் நடுப்பகுதியில் அமைந்துள்ள மிகப்பெரிய பகுதியாகும். இது படங்கள் வரையப்படும் மற்றும் திருத்தப்படும் முதன்மை பணிப்பகுதியாகும். |
| Selector Panelபலவித கருவிகள் / தேர்வி | Situated on the RIGHT side of the screen. Displays sub-options, brush shapes, stamps, or magic effects corresponding to the tool currently selected on the left toolbar. | திரையின் வலப்பக்கத்தில் அமைந்துள்ளது. இடது கருவிப்பட்டையில் தேர்ந்தெடுக்கப்பட்ட கருவிக்கான துணைக் கருவிகள், தூரிகை வடிவங்கள், முத்திரைகள் அல்லது வித்தை விளைவுகளைக் காட்டுகிறது. |
| Color Paletteவண்ணத் தட்டு | Situated at the BOTTOM section above the help bar. Offers a row of selectable color swatches to apply to brushes, shapes, text, and fill tools. | திரையின் அடிப்பகுதியில் உதவிப்பட்டைக்கு மேலே அமைந்துள்ளது. தூரிகைகள், வடிவங்கள், பனுவல் மற்றும் நிரப்பும் கருவிகளுக்குப் பயன்படுத்தக்கூடிய வண்ணங்களின் வரிசையை வழங்குகிறது. |
| Help Areaஉதவிப்பகுதி | Situated at the VERY BOTTOM of the screen featuring Tux the Penguin mascot. Gives real-time tips, instructions, and guidance for selected tools. | திரையின் மிக அடியில் பெங்குவின் உருவத்துடன் அமைந்துள்ளது. தேர்ந்தெடுக்கப்பட்ட கருவிகளைப் பயன்படுத்துவதற்கான நேரடி ஆலோசனைகள் மற்றும் வழிகாட்டுதல்களை வழங்குகிறது. |

| 📌 NMMS High-Yield Key Mechanism: Title Screen Timeout / தலைப்புத் திரை நேரம்• Title Screen Inactivity Rule: When Tux Paint launches, a title screen with credits appears. If no key is pressed or mouse is not clicked within EXACTLY 30 SECONDS, the title screen automatically fades out and opens a blank drawing canvas.• தலைப்புத் திரை தானியங்கு நேரம்: Tux Paint துவங்கும் போது தலைப்புத் திரை தோன்றும். 30 வினாடிகளுக்குள் எந்த விசையையும் அழுத்தவில்லை அல்லது சுட்டியைச் சொடுக்கவில்லை என்றால், தலைப்புத் திரை தானாக மறைந்து வெற்றுக் கேன்வாஸ் திறக்கும். |
| :---- |

# **2\. Tux Paint Drawing Tools & Operations / வரைதல் கருவிகள் & செயல்பாடுகள்**

| Tool Name / கருவியின் பெயர் | English Function & Mechanism | தமிழ் செயல்பாடு & விளக்கம் |
| :---- | :---- | :---- |
| Paint Brushதூரிகை கருவி | Allows freehand drawing using various brush shapes and sizes available in the right selector panel. Supports smooth freehand lines and patterns. | வலப்பக்க தேர்வி பலகையில் உள்ள பல்வேறு வடிவங்கள் மற்றும் அளவுகளிலுள்ள தூரிகைகளைக் கொண்டு சுதந்திரமாக ஓவியம் வரைய உதவுகிறது. |
| Stamp Toolமுத்திரை கருவி | Embeds pre-drawn rubber stamps or clip-art stickers (animals, plants, objects). Use left/right page arrows in selector to browse stamp pages. | முன் வரையப்பட்ட முத்திரைகள் அல்லது ஸ்டிக்கர்களை (விலங்குகள், தாவரங்கள், பொருட்கள்) பதிக்கிறது. பக்கங்களை மாற்ற இடது/வலது அம்புக்குறிகளைப் பயன்படுத்தலாம். |
| Lines Toolகோடுகள் கருவி | Draws straight lines using selected brush shapes. Displays a rubber-band line preview while dragging before committing to canvas. | தேர்ந்தெடுக்கப்பட்ட தூரிகை வடிவங்களைக் கொண்டு நேர்கோடுகளை வரைகிறது. கோட்டை வரையும் போது இழுக்கும் வரிசையை ரப்பர் பேண்ட் போலக் காட்டுகிறது. |
| Shapes Toolவடிவங்கள் கருவி | Draws 1-filled or 2-unfilled (outline) geometric shapes (circle, square, triangle, rectangle). Allows rotation before releasing mouse button. | நிரப்பப்பட்ட (Filled) அல்லது நிரப்பப்படாத (Outline) வடிவங்களை (வட்டம், சதுரம், முக்கோணம்) வரைகிறது. சுட்டியை விடுவிக்கும் முன் சுழற்ற முடியும். |
| Text Toolபனுவல் கருவி | Enables typing words, numbers, and symbols directly on canvas using keyboard. Font styles and sizes can be adjusted from right selector. | விசைப்பலகையைப் பயன்படுத்தி சொற்கள், எண்கள் மற்றும் குறியீடுகளை நேரடியாக தட்டச்சு செய்ய உதவுகிறது. எழுத்துரு பாணிகளை வலப்பக்கம் மாற்றலாம். |
| Magic Toolவித்தை கருவி | Applies special visual effects to drawing (e.g., Brick wall, Chalk effect, Rainbow, Blur, Sparkles, Flower, Distortion). | வரைபடத்திற்கு சிறப்பு காட்சி விளைவுகளை (எ.கா. செங்கல் சுவர், சாக்பீஸ் விளைவு, வானவில், மங்கல், மலர்கள்) சேர்க்க உதவுகிறது. |
| Eraser Toolஅழிப்பான் கருவி | Erases drawn parts of the picture like a rubber eraser. Available in various square and round sizes in selector panel. | வரையப்பட்ட ஓவியத்தின் தேவையில்லாத பகுதிகளை ரப்பர் அழிப்பான் போல அழிக்கிறது. பல்வேறு அளவுகளில் வலப்பக்கம் கிடைக்கிறது. |
| Undo & Redoசெயல் நீக்கம் & மீளமைத்தல் | Undo cancels the last drawn action. Redo restores the action that was just undone. Helps correct mistakes easily. | செயல் நீக்கம் (Undo) கடைசிச் செயலை ரத்து செய்கிறது. மீளமைத்தல் (Redo) நீக்கப்பட்ட செயலை மீண்டும் கொண்டுவருகிறது. |

# **3\. Keyboard Shortcuts Reference Guide / குறுக்குவழி விசைகள் அட்டவணை**

| Action / செயல்ப்பாடு | Keyboard Shortcut / குறுக்குவழி | English & Tamil Description |
| :---- | :---- | :---- |
| New Drawingபுதிய பக்கம் | Ctrl \+ N | Opens a new blank or colored canvas page.புதிய வெற்றுக் கேன்வாஸ் பக்கத்தைத் திறக்கும். |
| Open Drawingகோப்பைத் திறத்தல் | Ctrl \+ O | Opens an existing previously saved drawing file.ஏற்கனவே சேமிக்கப்பட்ட ஓவியத் திறக்கும். |
| Save Drawingசேமித்தல் | Ctrl \+ S | Saves current drawing into memory without prompting file name.நடப்பு ஓவியத்தை நினைவகத்தில் சேமிக்கும். |
| Print Drawingஅச்சிடுதல் | Ctrl \+ P | Sends current picture to printer for physical printing.நடப்பு ஓவியத்தை அச்சுப்பொறிக்கு அனுப்பி அச்சிடும். |
| Quit / Exitவெளியேறுதல் | Esc  or  Ctrl \+ Q | Exits Tux Paint application safely.Tux Paint மென்பொருளிலிருந்து வெளியேறும். |
| Undo Actionசெயல் நீக்கம் | Ctrl \+ Z | Cancels the most recent drawing action.கடைசியாக செய்த வரைதல் செயலை ரத்து செய்யும். |
| Redo Actionமீளமைத்தல் | Ctrl \+ Y | Restores the action previously undone by Ctrl \+ Z.நீக்கப்பட்ட செயலை மீண்டும் மீட்டெடுக்கும். |

# **4\. Tux Math Educational Video Game / Tux Math கணித விளையாட்டு**

Tux Math (Tux, of Math Command) is an open-source arcade-style educational video game designed to help students master basic arithmetic operations (addition, subtraction, multiplication, division, negative numbers, and missing factors) through interactive gameplay.  
Tux Math என்பது பள்ளி மாணவர்கள் அடிப்படை கணிதச் செயல்பாடுகளை (கூட்டல், கழித்தல், பெருக்கல், வகுத்தல், குறை எண்கள்) விறுவிறுப்பான ஆர்கேட் விளையாட்டு வடிவில் கற்றுக்கொள்ள உதவும் திறந்த மூல மென்பொருளாகும்.

| Game Mode / விளையாட்டு முறை | English Description & Mechanics | தமிழ் விளக்கம் & சிறப்பம்சம் |
| :---- | :---- | :---- |
| Math Command Training Academyபயிற்சி மையம் | Features 50 structured lessons of increasing difficulty (Space Cadet to Ranger). Completing a lesson awards a Gold Star on the menu screen. | 50 கட்டமைப்புப் பயிற்சிகளைக் கொண்டது (எளிய நிலையிலிருந்து கடின நிலை வரை). ஒவ்வொரு பயிற்சியையும் நிறைவு செய்தால் தங்க நட்சத்திரம் (Gold Star) வழங்கப்படும். |
| Play Arcade Gameஆர்கேட் விளையாட்டு | Arcade-style game where math comets fall from space towards penguin igloos. Type correct answers and press Enter/Spacebar to destroy comets with laser beams. | விண்வெளியில் இருந்து கணித விண்கற்கள் விழும். சரியான விடையைத் தட்டச்சு செய்து Enter அழுத்தினால் லேசர் கதிர் மூலம் விண்கற்கள் அழிக்கப்பட்டு பெங்குவின் குடிசைகள் பாதுகாக்கப்படும். |
| Play Custom Gameவிருப்ப விளையாட்டு | Allows teachers and students to customize math operation parameters, comet fall speeds, number ranges, and problem types. | ஆசிரியர்களும் மாணவர்களும் தங்களுக்கு விருப்பமான கணிதச் செயல்பாடுகள், விண்கல் வேகம் மற்றும் எண்களின் எல்லைகளைத் தனிப்பயனாக்க அனுமதிக்கிறது. |
| Space Cadetஅடிப்படைப் பயிற்சி முறை | Beginner level mode focusing on simple single-digit addition and subtraction for introductory learners. | ஆரம்ப நிலை மாணவர்களுக்கான எளிய ஒற்றை இலக்க கூட்டல் மற்றும் கழித்தல் பயிற்சிகளை வழங்கும் முறை. |
| User Navigation Controlsகட்டுப்பாட்டு விசைகள் | Arrow Keys: Navigate menu items. Enter / Spacebar: Confirm selection / fire laser. Mouse: Direct selection. Escape key: Quit game mode / Return to main menu. | அம்புக்குறிகள்: மெனுவில் நகர. Enter/Spacebar: தேர்வை உறுதி செய்ய / லேசர் எய்ய. சுட்டி: நேரடியாகத் தேர்ந்தெடுக்க. Esc key: விளையாட்டிலிருந்து வெளியேற. |

# **5\. NMMS Numerical Concepts & Formula Guide / NMMS கணக்கீடுகள் & கோட்பாடுகள்**

| Concept / கோட்பாடு | Formula & Principle / சூத்திரம் | Sample NMMS Worked Problem / கணக்கீடு |
| :---- | :---- | :---- |
| Training Academy Completion %பயிற்சி நிறைவு சதவீதம் | Percentage (%) \= (Completed Lessons / Total Lessons 50\) x 100சதவீதம் \= (நிறைவு செய்தவை / 50\) x 100 | Q: A student completes 35 out of 50 lessons in Training Academy. What percentage is completed?Ans: Completion \= (35 / 50\) x 100 \= 70% completed.Remaining lessons \= 15 (30%). |
| Title Screen Timeoutதலைப்புத் திரை நேரம் | Automatic fade-out time \= 30 Seconds.Title screen fades automatically if no user interaction occurs for 30 s.தானியங்கு மறைவு நேரம் \= 30 வினாடிகள். | Q: If a student opens Tux Paint and leaves it untouched for 2 minutes (120 s), when did the canvas open?Ans: At 30 seconds mark (the title screen disappeared after 30 seconds). |
| Missing Factor Mental Mathவிடுபட்ட காரணி கணக்கீடு | Equation: Factor A x (?) \= Product BMissing Factor \= Product B / Factor A(Careful with negative signs\!)காரணி A x (?) \= பெருக்கற்பலன் B | Q: Destroy a comet with equation: \-17 x (?) \= 119\. What answer must be typed?Ans: Missing Factor \= 119 / (-17) \= \-7.Type \-7 and press Enter. |

| 📌 NMMS Exam Strategy & ICT Distractor Traps / NMMS தேர்வு உத்திகள்1\. UI Area Location Trap: Remember Toolbar is on the LEFT side, Selector Panel is on the RIGHT side, Color Palette is at the BOTTOM, and Drawing Canvas is the LARGEST central area.2\. Shapes Tool Duality: Shapes tool provides BOTH outlined (unfilled) and solid (filled) versions of shapes. Always check option text carefully\!3\. Shortcuts Traps: Ctrl+N is New, Ctrl+O is Open, Ctrl+S is Save, Ctrl+P is Print. Esc quits application. Ctrl+Z is Undo, Ctrl+Y is Redo.4\. Tux Math Comet Destruction: Answers must be typed using number keys and confirmed by pressing ENTER or SPACEBAR to fire laser beams.1\. திரைப்பகுதி அமைவிடம்: கருவிப்பட்டை இடப்பக்கத்திலும், தேர்வி பலகை வலப்பக்கத்திலும், வண்ணங்கள் அடியிலும், படம் வரையும் பகுதி நடுவில் மிகப்பெரியதாகவும் இருக்கும்.2\. வடிவங்கள் கருவி: நிரப்பப்பட்ட மற்றும் நிரப்பப்படாத வடிவங்கள் இரண்டையும் வழங்கும்.3\. குறுக்குவழி விசைகள்: Ctrl+N (புதிய), Ctrl+O (திறக்க), Ctrl+S (சேமிக்க), Ctrl+P (அச்சிட), Esc (வெளியேற), Ctrl+Z (செயல் நீக்கம்), Ctrl+Y (மீளமைத்தல்).4\. விண்கல் அழித்தல்: விடையைத் தட்டச்சு செய்து Enter அல்லது Spacebar அழுத்த வேண்டும். |
| :---- |

