/* ========= EDIT THIS FILE to make the app yours ========= */
window.LOVE = {
  // The day your love story began, format YYYY-MM-DD
  startDate: "2025-01-01",

  ui: {
    en: {
      brand: "Ahadu",
      lang: "አማርኛ",
      title: "For Ahadu Berihun",
      subtitle: "From my heart to yours",
      verseTitle: "Word for today",
      nextVerse: "Another verse",
      daysTitle: "Days of us",
      daysUnit: "days together",
      lettersTitle: "Open when...",
      reasonsTitle: "Why I love you",
      nextReason: "Tell me one more",
      reasonStart: "Tap the button",
      prayerTitle: "A prayer for us",
      storyTitle: "Our story",
      footer: "Made with love by Deacon",
      year: ["year", "years"], month: ["month", "months"], day: ["day", "days"]
    },
    am: {
      brand: "አሃዱ",
      lang: "English",
      title: "ለአሃዱ በሪሁን",
      subtitle: "ከልቤ ለአንቺ",
      verseTitle: "የዛሬው ቃል",
      nextVerse: "ሌላ ጥቅስ",
      daysTitle: "የእኛ ቀናት",
      daysUnit: "ቀናት አብረን",
      lettersTitle: "ይህን ክፈቺ...",
      reasonsTitle: "የምወድሽ ምክንያቶች",
      nextReason: "ሌላ ንገረኝ",
      reasonStart: "ቁልፉን ንኪ",
      prayerTitle: "ጸሎት ለእኛ",
      storyTitle: "ታሪካችን",
      footer: "በፍቅር የተሠራ፣ ከዲቁና",
      year: ["ዓመት", "ዓመት"], month: ["ወር", "ወር"], day: ["ቀን", "ቀን"]
    }
  },

  // English: World English Bible (public domain), lightly adapted.
  // Amharic wording: please check against your Amharic Bible before giving this.
  verses: [
    { ref: { en: "1 Corinthians 13:4-7", am: "1ኛ ቆሮንቶስ 13:4-7" },
      en: "Love is patient and is kind; love doesn't envy. Love doesn't brag, is not proud, doesn't seek its own way, is not provoked, takes no account of evil. It bears all things, believes all things, hopes all things, endures all things.",
      am: "ፍቅር ይታገሣል፥ ቸርነትንም ያደርጋል፤ ፍቅር አይቀናም፤ ፍቅር አይመካም፥ አይታበይም፥ የራሱንም አይፈልግም፥ አይበሳጭም፥ በደልንም አይቆጥርም። ሁሉን ይታገሣል፥ ሁሉን ያምናል፥ ሁሉን ተስፋ ያደርጋል፥ በሁሉ ይጸናል።" },
    { ref: { en: "1 Corinthians 13:13", am: "1ኛ ቆሮንቶስ 13:13" },
      en: "But now faith, hope, and love remain, these three. The greatest of these is love.",
      am: "አሁንም እነዚህ ሦስቱ እምነት ተስፋ ፍቅር ይኖራሉ፤ ከእነዚህም የሚበልጠው ፍቅር ነው።" },
    { ref: { en: "Song of Songs 8:6", am: "መኃልየ መኃልይ 8:6" },
      en: "Set me as a seal on your heart, as a seal on your arm; for love is strong as death.",
      am: "እንደ ማኅተም በልብሽ፥ እንደ ማኅተምም በክንድሽ አኑሪኝ፤ ፍቅር እንደ ሞት የበረታች ናትና።" },
    { ref: { en: "Song of Songs 8:7", am: "መኃልየ መኃልይ 8:7" },
      en: "Many waters can't quench love, neither can floods drown it.",
      am: "ብዙ ውኃ ፍቅርን ሊያጠፋ አይችልም፤ ጎርፍም አያሰጥማትም።" },
    { ref: { en: "Song of Songs 6:3", am: "መኃልየ መኃልይ 6:3" },
      en: "I am my beloved's, and my beloved is mine.",
      am: "እኔ ለውዴ ውዴም ለእኔ ነው።" },
    { ref: { en: "Genesis 2:24", am: "ኦሪት ዘፍጥረት 2:24" },
      en: "Therefore a man will leave his father and his mother, and will join with his wife, and they will become one flesh.",
      am: "ስለዚህ ሰው አባቱንና እናቱን ይተዋል፥ ከሚስቱም ጋር ይተባበራል፥ ሁለቱም አንድ ሥጋ ይሆናሉ።" },
    { ref: { en: "Ruth 1:16", am: "ሩት 1:16" },
      en: "Where you go, I will go; and where you stay, I will stay. Your people will be my people, and your God my God.",
      am: "ወደምትሄጂበት እሄዳለሁ፥ በምታድሪበትም አድራለሁ፤ ወገንሽ ወገኔ፥ አምላክሽም አምላኬ ይሆናል።" },
    { ref: { en: "Ecclesiastes 4:9, 12", am: "መጽሐፈ መክብብ 4:9, 12" },
      en: "Two are better than one, because they have a good reward for their labor. A cord of three strands is not quickly broken.",
      am: "ከአንድ ይልቅ ሁለት ይሻላሉ፥ ለድካማቸው መልካም ዋጋ አላቸውና። ሦስት ድርብ የሆነ ገመድ ፈጥኖ አይበጠስም።" },
    { ref: { en: "1 John 4:19", am: "1ኛ ዮሐንስ 4:19" },
      en: "We love, because he first loved us.",
      am: "እርሱ አስቀድሞ ስለ ወደደን እኛ እንወዳለን።" },
    // Sirach is part of the Ethiopian Orthodox canon. The wording below is a plain
    // rendering of Sirach 6:14, so please check it against your own copy.
    { ref: { en: "Sirach 6:14 (Ethiopian Orthodox canon)", am: "ሲራክ 6:14" },
      en: "A faithful friend is a strong shelter; whoever finds one has found a treasure.",
      am: "ታማኝ ወዳጅ ጽኑ መጠጊያ ነው፤ እርሱን ያገኘ መዝገብ አገኘ።" }
  ],

  // Edit these so they sound like YOU.
  letters: [
    { title: { en: "you miss me", am: "ስትናፍቂኝ" },
      en: "Close your eyes and breathe slowly. Wherever I am, my heart is walking next to yours. Distance is only space; it has never been a wall. I will see you soon, and until then, remember how much I love you.",
      am: "ዓይንሽን ጨፍኚና በቀስታ ተነፍሺ። የትም ብሆን ልቤ ከልብሽ ጋር ይሄዳል። ርቀት ቦታ ብቻ ነው፤ ግድግዳ አልሆነም። በቅርቡ እንገናኛለን፤ እስከዚያ ድረስ ምን ያህል እንደምወድሽ አስታውሺ።" },
    { title: { en: "you are sad", am: "ስትከፋሽ" },
      en: "This day is heavy, but you are not alone in it. You are stronger than you feel right now, and you are loved more than you know. Take a breath, say a short prayer, and let me carry some of this with you.",
      am: "ዛሬ ከብዶሻል፤ ግን ብቻሽን አይደለሽም። አሁን ከሚሰማሽ በላይ ጠንካራ ነሽ፤ ከምታውቂውም በላይ ተወደሻል። ትንሽ ተነፍሺ፣ አጭር ጸሎት አድርሺ፤ ከዚህ ሸክም የተወሰነውን እኔም ልሸከመው።" },
    { title: { en: "you are happy", am: "ስትደሰቺ" },
      en: "You are smiling, and that is my favorite thing in the world. Thank you for being exactly who you are. Let's thank God for this day together.",
      am: "ፈገግ ብለሻል፤ በዓለም ላይ በጣም የምወደው ነገር ይህ ነው። እንዳንቺ ስለሆንሽ አመሰግንሻለሁ። ለዚህ ቀን አብረን እግዚአብሔርን እናመስግን።" }
  ],

  reasons: [
    { en: "Your kindness makes people feel safe.", am: "ደግነትሽ ሰዎችን ያሳርፋል።" },
    { en: "Your smile turns my bad days around.", am: "ፈገግታሽ መጥፎ ቀኖቼን ይለውጣል።" },
    { en: "You pray, and you make me want to be better.", am: "ትጸልያለሽ፤ የተሻለ ሰው እንድሆንም ታነሳሳኛለሽ።" },
    { en: "You are beautiful inside and outside.", am: "በውስጥም በውጭም ውብ ነሽ።" },
    { en: "With you, even silence feels like home.", am: "ከአንቺ ጋር ዝምታም እንደ ቤት ይሰማኛል።" },
    { en: "You are patient with me.", am: "ትታገሺኛለሽ።" },
    { en: "You make ordinary days feel like holidays.", am: "ተራ ቀኖችን እንደ በዓል ታደርጊያለሽ።" },
    { en: "I can see my future with you.", am: "ከአንቺ ጋር የወደፊት ሕይወቴን አያለሁ።" }
  ],

  prayer: {
    en: "Lord, bless Ahadu. Keep her heart in peace and her steps in Your light. Teach us to love each other with patience and honesty, to forgive quickly, and to keep You at the center of our story. Guide us together and keep us in Your mercy. Amen.",
    am: "እግዚአብሔር ሆይ፥ አሃዱን ባርክ። ልቧን በሰላም፥ እርምጃዋንም በብርሃንህ ጠብቅ። እርስ በርሳችን በትዕግሥትና በእውነት እንድንዋደድ፣ ቶሎ ይቅር እንድንባባል፣ አንተንም በታሪካችን መካከል እንድናኖር አስተምረን። በአንድነት ምራን፤ በምሕረትህም ጠብቀን። አሜን።"
  },

  // Replace with your real moments (date: YYYY-MM-DD)
  timeline: [
    { date: "2025-01-01", en: "The day we met", am: "የተገናኘንበት ቀን" },
    { date: "2025-03-01", en: "Our first long talk", am: "የመጀመሪያው ረጅም ጨዋታችን" },
    { date: "2025-06-01", en: "The day I knew it was love", am: "ፍቅር መሆኑን ያወቅኩበት ቀን" }
  ]
};