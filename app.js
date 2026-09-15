/* =========================================================
   BOOKWISE MYANMAR
   app.js
   V1 — Demo / Firebase Ready Architecture
========================================================= */
"use strict";
/* =========================================================
   1. CATEGORY DATA
========================================================= */
const categories = [
  {
    id: "money",
    name: "Money & Finance",
    icon: "💰"
  },
  {
    id: "business",
    name: "Business",
    icon: "💼"
  },
  {
    id: "sales",
    name: "Sales & Marketing",
    icon: "📈"
  },
  {
    id: "leadership",
    name: "Leadership & Management",
    icon: "👥"
  },
  {
    id: "psychology",
    name: "Psychology",
    icon: "🧠"
  },
  {
    id: "self",
    name: "Self Development",
    icon: "🚀"
  },
  {
    id: "productivity",
    name: "Productivity",
    icon: "⚡"
  },
  {
    id: "strategy",
    name: "Strategy",
    icon: "🎯"
  },
  {
    id: "relationship",
    name: "Relationships",
    icon: "❤️"
  },
  {
    id: "biography",
    name: "Biography",
    icon: "👤"
  },
  {
    id: "science",
    name: "Science & Technology",
    icon: "🔬"
  },
  {
    id: "history",
    name: "History",
    icon: "🏛️"
  },
  {
    id: "mindfulness",
    name: "Mindfulness",
    icon: "🧘"
  },
  {
    id: "other",
    name: "Other",
    icon: "📚"
  }
];
/* =========================================================
   2. DEMO BOOK DATABASE
   ---------------------------------------------------------
   IMPORTANT:
   This is temporary in-memory data.
   No Local Storage is used.
   Later this object can be replaced by Firestore.
========================================================= */
let books = [
  {
    id: "book-001",
    title: "Atomic Habits",
    author: "James Clear",
    category: "self",
    categoryName: "Self Development",
    coverUrl: "",
    readingTime: "20 min",
    access: "free",
    published: true,
    description:
      "သေးငယ်သော အလေ့အကျင့်များကို စနစ်တကျတည်ဆောက်ပြီး ရေရှည်အောင်မြင်မှုရရှိအောင် လုပ်ဆောင်နည်းကို ရှင်းပြထားသော စာအုပ်။",
    summary:
`Atomic Habits ရဲ့ အဓိကအယူအဆက ကြီးမားတဲ့ပြောင်းလဲမှုတွေကို တစ်ခါတည်းလုပ်ဖို့ထက် နေ့စဉ်လုပ်ဆောင်နေတဲ့ အလေ့အကျင့်အသေးစားတွေကို ပြောင်းလဲခြင်းက ရေရှည်မှာ ပိုမိုကြီးမားတဲ့ရလဒ်ကို ဖန်တီးပေးနိုင်တယ်ဆိုတာ ဖြစ်ပါတယ်။
လူတစ်ယောက်ရဲ့ ရလဒ်ဟာ သူ့ရဲ့ ရည်မှန်းချက်တစ်ခုတည်းကြောင့် မဟုတ်ပါဘူး။ နေ့စဉ်ဘဝမှာ ဘယ်လိုစနစ်နဲ့ လုပ်ဆောင်နေသလဲဆိုတာက ပိုအရေးကြီးပါတယ်။
ဥပမာ Sales Manager တစ်ယောက်က တစ်လအတွင်း Sales တိုးချင်တယ်ဆိုရင် "Sales တိုးရမယ်" လို့ ပြောနေရုံနဲ့ မလုံလောက်ပါဘူး။ နေ့တိုင်း Customer Visit, Pipeline Review, Team Coaching, Distributor Stock Check စတဲ့ လုပ်ငန်းစဉ်တွေကို စနစ်တကျလုပ်ဆောင်ရပါမယ်။
Atomic Habits ရဲ့ အဓိက lesson တစ်ခုက identity-based habit ဖြစ်ပါတယ်။ "ငါ စာဖတ်ချင်တယ်" လို့ တွေးတာထက် "ငါက စာဖတ်တဲ့လူတစ်ယောက်" လို့ ကိုယ့်ကိုယ်ကို သတ်မှတ်ပြီး အဲဒီ identity နဲ့ကိုက်ညီတဲ့ လုပ်ဆောင်ချက်တွေကို နေ့စဉ်လုပ်သင့်ပါတယ်။
အလေ့အကျင့်တစ်ခုကို တည်ဆောက်ရာမှာ Cue → Craving → Response → Reward ဆိုတဲ့ loop ကို နားလည်ဖို့လိုပါတယ်။
ပထမဆုံး Cue ဆိုတာ အလေ့အကျင့်ကို စတင်စေတဲ့ signal ဖြစ်ပါတယ်။ Craving က လုပ်ချင်စိတ်ဖြစ်ပါတယ်။ Response က လုပ်ဆောင်ချက်ဖြစ်ပြီး Reward က ရရှိတဲ့ အကျိုးကျေးဇူးဖြစ်ပါတယ်။
အလေ့အကျင့်ကောင်းတစ်ခုကို တည်ဆောက်ချင်ရင် မြင်သာအောင်လုပ်ပါ၊ ဆွဲဆောင်မှုရှိအောင်လုပ်ပါ၊ လွယ်ကူအောင်လုပ်ပါ၊ ကျေနပ်စရာဖြစ်အောင်လုပ်ပါ။
ဥပမာ စာဖတ်ချင်ရင် စာအုပ်ကို အမြဲမြင်ရတဲ့နေရာမှာထားပါ။ တစ်နေ့ 30 မိနစ်ကနေ စမယ့်အစား 5 မိနစ်သာ စဖတ်ပါ။ စတင်ဖို့လွယ်အောင်လုပ်ပါ။
Business မှာလည်း ဒီ principle ကို အသုံးချနိုင်ပါတယ်။ Sales Team ကို "Target ပြည့်အောင်လုပ်" လို့ ပြောရုံထက် နေ့စဉ်လုပ်ရမယ့် action တွေကို system တစ်ခုအဖြစ် တည်ဆောက်ထားတာ ပိုထိရောက်ပါတယ်။`,
    lessons:
`1. သေးငယ်တဲ့အလေ့အကျင့်တွေက ရေရှည်မှာ ကြီးမားတဲ့ရလဒ်တွေ ဖန်တီးနိုင်တယ်။
2. Goal ထက် System က ပိုအရေးကြီးတယ်။
3. ကိုယ့်ကိုယ်ကို ဘယ်လိုလူဖြစ်ချင်သလဲဆိုတာ သတ်မှတ်ပါ။
4. Habit ကို မြင်သာအောင်လုပ်ပါ။
5. Habit ကို လွယ်ကူအောင်လုပ်ပါ။
6. အလေ့အကျင့်ကောင်းကို Reward ပေးပါ။
7. တစ်နေ့တည်းမှာ အရာအားလုံးပြောင်းဖို့ မကြိုးစားပါနဲ့။
8. Consistency က Motivation ထက် ပိုအရေးကြီးတယ်။
9. Business မှာ System က လူတစ်ယောက်ထက် ပိုတည်ငြိမ်တဲ့ရလဒ်ပေးနိုင်တယ်။
10. နေ့စဉ် 1% တိုးတက်ဖို့ အာရုံစိုက်ပါ။`,
    actionPlan:
`Day 1 — ပြောင်းလဲချင်တဲ့ Habit တစ်ခုရွေးပါ။
Day 2 — အဲဒီ Habit ကို ဖြစ်စေတဲ့ Cue ကို ရှာပါ။
Day 3 — Habit ကို 2 မိနစ်အတွင်း စနိုင်အောင် လျှော့ချပါ။
Day 4 — မလုပ်သင့်တဲ့ Habit ရဲ့ Trigger ကို ဖယ်ရှားပါ။
Day 5 — Habit Tracker စတင်ပါ။
Day 6 — မိမိရဲ့ Progress ကို Review လုပ်ပါ။
Day 7 — နောက်တစ်ပတ်အတွက် System အသစ်တစ်ခု တည်ဆောက်ပါ။`
  },
  {
    id: "book-002",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    category: "money",
    categoryName: "Money & Finance",
    coverUrl: "",
    readingTime: "22 min",
    access: "free",
    published: true,
    description:
      "ငွေကြေးနဲ့ပတ်သက်တဲ့ လူတွေရဲ့ အပြုအမူ၊ ဆုံးဖြတ်ချက်နဲ့ Wealth တည်ဆောက်ပုံကို နားလည်စေတဲ့ စာအုပ်။",
    summary:
`The Psychology of Money က ငွေကြေးအောင်မြင်မှုဟာ သင်္ချာနဲ့ပဲ မသတ်မှတ်ဘဲ လူတစ်ယောက်ရဲ့ စိတ်နေစိတ်ထား၊ အတွေ့အကြုံနဲ့ ဆုံးဖြတ်ချက်တွေက အရေးကြီးကြောင်း ရှင်းပြထားပါတယ်။
လူတိုင်းက ငွေကြေးအကြောင်းကို ကိုယ့်ဘဝအတွေ့အကြုံအရ သဘောထားကွဲပြားကြပါတယ်။ တစ်ယောက်အတွက် Risk လို့ထင်ရတဲ့အရာက တစ်ခြားတစ်ယောက်အတွက် Opportunity ဖြစ်နိုင်ပါတယ်။
Wealth ဆိုတာ သင်ဘယ်လောက်ဝင်ငွေရသလဲဆိုတာတင် မဟုတ်ပါဘူး။ သင်ရတဲ့ငွေထဲက ဘယ်လောက်ကို ထိန်းသိမ်းထားနိုင်သလဲဆိုတာလည်း အရေးကြီးပါတယ်။
ငွေကြေးစီမံခန့်ခွဲရာမှာ Compounding ရဲ့ အရေးပါမှုကိုလည်း နားလည်ရပါမယ်။ အချိန်က Wealth တည်ဆောက်ရာမှာ အလွန်အရေးကြီးတဲ့ အားသာချက်တစ်ခု ဖြစ်ပါတယ်။
Business Owner တစ်ယောက်အနေနဲ့ Revenue တိုးတာတင်မဟုတ်ဘဲ Cash Flow, Profit, Reserve နဲ့ Risk Management ကိုလည်း စီမံရပါမယ်။
အရေးကြီးဆုံး lesson က ကိုယ့်ဘဝအတွက် လုံလောက်မှုဆိုတဲ့ အဓိပ္ပါယ်ကို သိထားဖို့ပါ။ အမြဲတမ်း ပိုရဖို့ ကြိုးစားနေရင် မလိုအပ်တဲ့ Risk တွေကို ယူမိနိုင်ပါတယ်။`,
    lessons:
`1. ငွေကြေးဆုံးဖြတ်ချက်တွေမှာ စိတ်ပညာက အရေးကြီးတယ်။
2. ဝင်ငွေနဲ့ Wealth မတူဘူး။
3. Saving က Financial Security အတွက် အရေးကြီးတယ်။
4. Compounding ကို အချိန်ပေးပါ။
5. Risk ကို နားလည်ပြီးမှ ယူပါ။
6. Cash Reserve ထားပါ။
7. ကိုယ့်အတွက် "Enough" ကို သတ်မှတ်ပါ။
8. အခြားသူတွေနဲ့ ငွေကြေးအောင်မြင်မှုကို မနှိုင်းယှဉ်ပါနဲ့။
9. Long-term thinking လုပ်ပါ။
10. Financial freedom ကို ရည်မှန်းပါ။`,
    actionPlan:
`Day 1 — လစဉ်ဝင်ငွေ/အသုံးစရိတ်စာရင်းရေးပါ။
Day 2 — မလိုအပ်တဲ့အသုံးစရိတ် 3 ခုရှာပါ။
Day 3 — Emergency Reserve ရည်မှန်းချက်သတ်မှတ်ပါ။
Day 4 — Debt ရှိပါက ပြန်လည်စီမံပါ။
Day 5 — Saving ရာခိုင်နှုန်းသတ်မှတ်ပါ။
Day 6 — Long-term Financial Goal တစ်ခုရေးပါ။
Day 7 — လစဉ် Money Review System တည်ဆောက်ပါ။`
  },
  {
    id: "book-003",
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    category: "leadership",
    categoryName: "Leadership & Management",
    coverUrl: "",
    readingTime: "25 min",
    access: "premium",
    published: true,
    description:
      "ထိရောက်တဲ့ လူတစ်ယောက်၊ Leader တစ်ယောက် ဖြစ်လာဖို့ လိုအပ်တဲ့ Principle တွေကို လေ့လာနိုင်တဲ့ Classic Business Book။",
    summary:
`Highly Effective People တွေရဲ့ အပြုအမူနဲ့ စဉ်းစားပုံကို Principle အခြေခံနဲ့ ရှင်းပြထားပါတယ်။
ပထမဆုံး အရေးကြီးတာက Proactive ဖြစ်ဖို့ပါ။ ကိုယ့်ဘဝမှာ ဖြစ်လာသမျှကို အခြားသူတွေအပေါ် အပြစ်တင်နေရုံနဲ့ မရပါဘူး။ ကိုယ်ထိန်းချုပ်နိုင်တဲ့အရာတွေကို အာရုံစိုက်ပြီး တာဝန်ယူဖို့လိုပါတယ်။
ဒုတိယအချက်က Begin With the End in Mind ဖြစ်ပါတယ်။ ကိုယ်ဘယ်ကိုသွားချင်သလဲဆိုတာ ရှင်းလင်းရင် နေ့စဉ်ဆုံးဖြတ်ချက်တွေက ပိုလွယ်လာပါတယ်။
တတိယအချက်က Put First Things First ဖြစ်ပါတယ်။ အရေးကြီးတဲ့အရာနဲ့ အရေးပေါ်အရာကို ခွဲခြားတတ်ဖို့လိုပါတယ်။
Leader တစ်ယောက်အတွက် Communication က အရေးကြီးပါတယ်။ အရင်ဆုံး နားလည်အောင် နားထောင်ပြီးမှ ကိုယ့်အမြင်ကို ပြောရပါမယ်။
Win-Win Thinking ကလည်း Team Management နဲ့ Customer Relationship မှာ အရေးကြီးပါတယ်။ ကိုယ်အနိုင်ရပြီး တစ်ဖက်ရှုံးတဲ့ပုံစံထက် နှစ်ဖက်စလုံးအတွက် အကျိုးရှိတဲ့ ဖြေရှင်းချက်ကို ရှာသင့်ပါတယ်။`,
    lessons:
`1. Proactive ဖြစ်ပါ။
2. ကိုယ့်လုပ်ရပ်အတွက် တာဝန်ယူပါ။
3. ရည်မှန်းချက်ကို ရှင်းလင်းထားပါ။
4. အရေးကြီးတာကို ဦးစားပေးပါ။
5. Win-Win စဉ်းစားပါ။
6. အရင်ဆုံး နားထောင်ပြီး နားလည်ပါ။
7. Team Synergy တည်ဆောက်ပါ။
8. ကိုယ့်ကိုယ်ကို အမြဲတိုးတက်အောင်လုပ်ပါ။
9. Leadership မှာ Trust တည်ဆောက်ပါ။
10. Principle-based decision making လုပ်ပါ။`,
    actionPlan:
`Day 1 — ကိုယ့်ရဲ့ 1-year Goal ရေးပါ။
Day 2 — အရေးကြီးဆုံး Priority 3 ခု သတ်မှတ်ပါ။
Day 3 — မိမိထိန်းချုပ်နိုင်တဲ့အရာတွေကို စာရင်းပြုစုပါ။
Day 4 — Team Member တစ်ယောက်ကို Active Listening လုပ်ပါ။
Day 5 — Win-Win Solution တစ်ခု စဉ်းစားပါ။
Day 6 — Weekly Planning ပြုလုပ်ပါ။
Day 7 — မိမိရဲ့ Leadership Habit တွေကို Review လုပ်ပါ။`
  },
  {
    id: "book-004",
    title: "The Lean Startup",
    author: "Eric Ries",
    category: "business",
    categoryName: "Business",
    coverUrl: "",
    readingTime: "20 min",
    access: "premium",
    published: true,
    description:
      "Business Idea တစ်ခုကို အရင်းအနှီးအများကြီး မသုံးခင် စမ်းသပ်ပြီး Market Feedback နဲ့ တိုးတက်အောင်လုပ်တဲ့နည်းလမ်း။",
    summary:
`The Lean Startup ရဲ့ အဓိကအယူအဆက Product တစ်ခုကို ပြီးပြည့်စုံအောင် တည်ဆောက်ပြီးမှ Customer ကို ပြသတာထက် အနည်းဆုံးအလုပ်လုပ်နိုင်တဲ့ Version တစ်ခုကို အမြန်စမ်းသပ်ပြီး Customer Feedback ရယူဖို့ ဖြစ်ပါတယ်။
ဒီနည်းလမ်းကို Build → Measure → Learn Loop လို့ နားလည်နိုင်ပါတယ်။
Business တစ်ခုစတင်တဲ့အခါ ကိုယ့်အမြင်ကိုပဲ မှန်တယ်လို့ ယူဆထားရင် အန္တရာယ်ရှိပါတယ်။ Customer တကယ်လိုချင်တာ ဘာလဲဆိုတာကို စမ်းသပ်ပြီး Data နဲ့ ဆုံးဖြတ်သင့်ပါတယ်။
ဥပမာ Myanmar မှာ Business App တစ်ခုလုပ်ချင်တယ်ဆိုရင် Feature 50 ခု တစ်ခါတည်း ထည့်တာထက် အဓိက Feature 3–5 ခုနဲ့ MVP တစ်ခုကို အရင်ထုတ်ပြီး User Feedback ရယူတာ ပိုကောင်းနိုင်ပါတယ်။
Pivot ဆိုတာလည်း အရေးကြီးပါတယ်။ မူလ Idea က Market နဲ့ မကိုက်ရင် အချက်အလက်အပေါ်မူတည်ပြီး Direction ပြောင်းနိုင်ရပါမယ်။`,
    lessons:
`1. Customer ကို အရင်နားလည်ပါ။
2. MVP နဲ့ စမ်းသပ်ပါ။
3. Build → Measure → Learn လုပ်ပါ။
4. Data နဲ့ ဆုံးဖြတ်ပါ။
5. Feedback ကို အလေးထားပါ။
6. မအောင်မြင်တဲ့ Idea ကို အမြန်သိပါ။
7. လိုအပ်ရင် Pivot လုပ်ပါ။
8. Feature အများကြီးထည့်တာထက် Value ကို ဦးစားပေးပါ။
9. Experiment လုပ်ပါ။
10. Continuous Improvement လုပ်ပါ။`,
    actionPlan:
`Day 1 — ကိုယ့် Business Idea ရေးပါ။
Day 2 — Customer Problem သတ်မှတ်ပါ။
Day 3 — MVP Feature 3 ခုရွေးပါ။
Day 4 — Customer 5 ယောက်ထံ Feedback တောင်းပါ။
Day 5 — Feedback ကို ခွဲခြမ်းပါ။
Day 6 — Product ပြင်ဆင်ပါ။
Day 7 — နောက်ထပ် Experiment တစ်ခု စတင်ပါ။`
  }
];
/* =========================================================
   3. APP STATE
   ---------------------------------------------------------
   This state is intentionally in memory only.
   Firebase can replace this later.
========================================================= */
let currentUser = null;
let currentCategory = "all";
let currentBookId = null;
let favoriteBookIds = [];
let readingProgress = {};
let currentCoverData = "";
/* =========================================================
   4. DOM READY
========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  initializeApp();
});
/* =========================================================
   5. INITIALIZE
========================================================= */
function initializeApp() {
  renderHome();
  renderCategories();
  populateCategorySelect();
  updateStats();
  setupEvents();
}
/* =========================================================
   6. EVENT SETUP
========================================================= */
function setupEvents() {
  const searchButton =
    document.getElementById("searchButton");
  const closeSearch =
    document.getElementById("closeSearch");
  const searchInput =
    document.getElementById("searchInput");
  const profileButton =
    document.getElementById("profileButton");
  const loginForm =
    document.getElementById("loginForm");
  const signupForm =
    document.getElementById("signupForm");
  const adminLoginForm =
    document.getElementById("adminLoginForm");
  const bookForm =
    document.getElementById("bookForm");
  const bookCover =
    document.getElementById("bookCover");
  if (searchButton) {
    searchButton.addEventListener(
      "click",
      () => {
        document
          .getElementById("searchPanel")
          .classList.toggle("show");
        setTimeout(() => {
          if (searchInput) {
            searchInput.focus();
          }
        }, 100);
      }
    );
  }
  if (closeSearch) {
    closeSearch.addEventListener(
      "click",
      () => {
        document
          .getElementById("searchPanel")
          .classList.remove("show");
        if (searchInput) {
          searchInput.value = "";
        }
        renderBooks();
      }
    );
  }
  if (searchInput) {
    searchInput.addEventListener(
      "input",
      () => {
        renderBooks(
          searchInput.value.trim()
        );
        showPage("booksPage");
      }
    );
  }
  if (profileButton) {
    profileButton.addEventListener(
      "click",
      (event) => {
        event.stopPropagation();
        document
          .getElementById("profileMenu")
          .classList.toggle("show");
      }
    );
  }
  document.addEventListener(
    "click",
    (event) => {
      const menu =
        document.getElementById("profileMenu");
      const button =
        document.getElementById("profileButton");
      if (
        menu &&
        !menu.contains(event.target) &&
        button &&
        !button.contains(event.target)
      ) {
        menu.classList.remove("show");
      }
    }
  );
  if (loginForm) {
    loginForm.addEventListener(
      "submit",
      handleLogin
    );
  }
  if (signupForm) {
    signupForm.addEventListener(
      "submit",
      handleSignup
    );
  }
  if (adminLoginForm) {
    adminLoginForm.addEventListener(
      "submit",
      handleAdminLogin
    );
  }
  if (bookForm) {
    bookForm.addEventListener(
      "submit",
      handleBookSubmit
    );
  }
  if (bookCover) {
    bookCover.addEventListener(
      "change",
      handleCoverPreview
    );
  }
}
/* =========================================================
   7. PAGE NAVIGATION
========================================================= */
function showPage(pageId) {
  document
    .querySelectorAll(".page")
    .forEach(page => {
      page.classList.remove("active");
    });
  const target =
    document.getElementById(pageId);
  if (target) {
    target.classList.add("active");
  }
  document
    .querySelectorAll(".nav-item")
    .forEach(item => {
      item.classList.remove("active");
      if (
        item.dataset.page === pageId
      ) {
        item.classList.add("active");
      }
    });
  const profileMenu =
    document.getElementById("profileMenu");
  if (profileMenu) {
    profileMenu.classList.remove("show");
  }
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
  if (pageId === "booksPage") {
    renderBooks();
  }
  if (pageId === "categoriesPage") {
    renderCategories();
  }
  if (pageId === "favoritesPage") {
    renderFavorites();
  }
  if (pageId === "progressPage") {
    renderProgress();
  }
  if (pageId === "adminPage") {
    renderAdmin();
  }
}
/* =========================================================
   8. HOME
========================================================= */
function renderHome() {
  const featured =
    document.getElementById("featuredBooks");
  if (!featured) return;
  const publishedBooks =
    books.filter(book => book.published);
  featured.innerHTML =
    publishedBooks
      .slice(0, 4)
      .map(book => createBookCard(book))
      .join("");
  renderHomeCategories();
}
/* =========================================================
   9. BOOK CARD
========================================================= */
function createBookCard(book) {
  const isFavorite =
    favoriteBookIds.includes(book.id);
  const cover =
    book.coverUrl
      ? `<img src="${book.coverUrl}" alt="${escapeHtml(book.title)}">`
      : `<div class="book-cover-placeholder">📖</div>`;
  const accessClass =
    book.access === "premium"
      ? "premium"
      : "free";
  const accessText =
    book.access === "premium"
      ? "⭐ Premium"
      : "🆓 Free";
  return `
    <article
      class="book-card"
      onclick="openBook('${book.id}')"
    >
      <div class="book-cover">
        ${cover}
        <span class="book-access ${accessClass}">
          ${accessText}
        </span>
      </div>
      <div class="book-info">
        <div class="book-category">
          ${escapeHtml(book.categoryName)}
        </div>
        <div class="book-title">
          ${escapeHtml(book.title)}
        </div>
        <div class="book-author">
          ${escapeHtml(book.author)}
        </div>
        <div class="book-meta">
          <span>
            ⏱️ ${escapeHtml(book.readingTime)}
          </span>
          <button
            class="favorite-btn"
            onclick="toggleFavorite(event, '${book.id}')"
            aria-label="Favorite"
          >
            ${isFavorite ? "❤️" : "♡"}
          </button>
        </div>
      </div>
    </article>
  `;
}
/* =========================================================
   10. ALL BOOKS
========================================================= */
function renderBooks(searchTerm = "") {
  const container =
    document.getElementById("allBooks");
  if (!container) return;
  let filtered =
    books.filter(book => book.published);
  if (currentCategory !== "all") {
    filtered =
      filtered.filter(
        book =>
          book.category === currentCategory
      );
  }
  if (searchTerm) {
    const term =
      searchTerm.toLowerCase();
    filtered =
      filtered.filter(book =>
        book.title
          .toLowerCase()
          .includes(term)
        ||
        book.author
          .toLowerCase()
          .includes(term)
        ||
        book.categoryName
          .toLowerCase()
          .includes(term)
      );
  }
  renderCategoryFilters();
  if (filtered.length === 0) {
    container.innerHTML =
      createEmptyState(
        "🔎",
        "စာအုပ်မတွေ့ပါ",
        "Search စာလုံး သို့မဟုတ် Category ကို ပြောင်းပြီး ထပ်ရှာပါ။"
      );
    return;
  }
  container.innerHTML =
    filtered
      .map(book => createBookCard(book))
      .join("");
}
/* =========================================================
   11. CATEGORY FILTERS
========================================================= */
function renderCategoryFilters() {
  const container =
    document.getElementById(
      "categoryFilters"
    );
  if (!container) return;
  const buttons = [
    `
      <button
        class="filter-btn ${
          currentCategory === "all"
            ? "active"
            : ""
        }"
        onclick="filterCategory('all')"
      >
        📚 All
      </button>
    `,
    ...categories.map(category => `
      <button
        class="filter-btn ${
          currentCategory === category.id
            ? "active"
            : ""
        }"
        onclick="filterCategory('${category.id}')"
      >
        ${category.icon}
        ${escapeHtml(category.name)}
      </button>
    `)
  ];
  container.innerHTML =
    buttons.join("");
}
/* =========================================================
   12. FILTER CATEGORY
========================================================= */
function filterCategory(categoryId) {
  currentCategory = categoryId;
  renderBooks();
  showPage("booksPage");
}
/* =========================================================
   13. HOME CATEGORIES
========================================================= */
function renderHomeCategories() {
  const container =
    document.getElementById(
      "homeCategories"
    );
  if (!container) return;
  container.innerHTML =
    categories
      .slice(0, 8)
      .map(category => {
        const count =
          books.filter(
            book =>
              book.category === category.id &&
              book.published
          ).length;
        return createCategoryCard(
          category,
          count
        );
      })
      .join("");
}
/* =========================================================
   14. ALL CATEGORIES
========================================================= */
function renderCategories() {
  const container =
    document.getElementById(
      "allCategories"
    );
  if (!container) return;
  container.innerHTML =
    categories
      .map(category => {
        const count =
          books.filter(
            book =>
              book.category === category.id &&
              book.published
          ).length;
        return createCategoryCard(
          category,
          count
        );
      })
      .join("");
  renderHomeCategories();
}
/* =========================================================
   15. CATEGORY CARD
========================================================= */
function createCategoryCard(
  category,
  count
) {
  return `
    <div
      class="category-card"
      onclick="filterCategory('${category.id}')"
    >
      <div class="category-icon">
        ${category.icon}
      </div>
      <div class="category-name">
        ${escapeHtml(category.name)}
      </div>
      <div class="category-count">
        ${count} books
      </div>
    </div>
  `;
}
/* =========================================================
   16. CATEGORY SELECT
========================================================= */
function populateCategorySelect() {
  const select =
    document.getElementById(
      "bookCategory"
    );
  if (!select) return;
  select.innerHTML = `
    <option value="">
      Select Category
    </option>
    ${categories.map(category => `
      <option value="${category.id}">
        ${category.icon}
        ${escapeHtml(category.name)}
      </option>
    `).join("")}
  `;
}
/* =========================================================
   17. OPEN BOOK
========================================================= */
function openBook(bookId) {
  const book =
    books.find(
      item => item.id === bookId
    );
  if (!book) return;
  currentBookId = bookId;
  const container =
    document.getElementById(
      "readerContent"
    );
  if (!container) return;
  const progress =
    readingProgress[bookId] || 0;
  const cover =
    book.coverUrl
      ? `<img src="${book.coverUrl}" alt="${escapeHtml(book.title)}">`
      : `📖`;
  const lessons =
    book.lessons
      ? book.lessons
          .split("\n")
          .filter(Boolean)
          .map(
            item =>
              `<li>${escapeHtml(item)}</li>`
          )
          .join("")
      : "";
  container.innerHTML = `
    <div class="reader-header">
      <button
        class="reader-back"
        onclick="showPage('booksPage')"
      >
        ← စာအုပ်များသို့ ပြန်သွားမယ်
      </button>
      <div class="reader-layout">
        <div class="reader-cover">
          ${cover}
        </div>
        <div>
          <div class="book-category">
            ${escapeHtml(book.categoryName)}
          </div>
          <h1 class="reader-title">
            ${escapeHtml(book.title)}
          </h1>
          <div class="reader-author">
            By ${escapeHtml(book.author)}
          </div>
          <div class="reader-meta">
            <span class="reader-badge">
              ⏱️ ${escapeHtml(book.readingTime)}
            </span>
            <span class="reader-badge">
              ${
                book.access === "premium"
                  ? "⭐ Premium"
                  : "🆓 Free"
              }
            </span>
          </div>
          <p>
            ${escapeHtml(book.description)}
          </p>
          <div style="margin-top:18px">
            <div class="progress-top">
              <span class="progress-title">
                Reading Progress
              </span>
              <span class="progress-percent">
                ${progress}%
              </span>
            </div>
            <div class="progress-bar">
              <div
                class="progress-fill"
                style="width:${progress}%"
              ></div>
            </div>
          </div>
          <button
            class="primary-btn"
            style="margin-top:18px"
            onclick="completeBook('${book.id}')"
          >
            ${
              progress >= 100
                ? "✓ Completed"
                : "✓ Mark as Completed"
            }
          </button>
        </div>
      </div>
    </div>
    <article class="reader-body">
      <h3>
        📖 Book Overview
      </h3>
      <p>
        ${escapeHtml(book.description)}
      </p>
      <h3>
        💡 Detailed Summary
      </h3>
      <p>
        ${escapeHtml(book.summary)}
      </p>
      <h3>
        🎯 Key Lessons
      </h3>
      <ol class="lesson-list">
        ${lessons}
      </ol>
      <h3>
        🚀 Action Plan
      </h3>
      <div class="action-plan">
        ${escapeHtml(book.actionPlan || "")}
      </div>
      <h3>
        📝 Final Takeaway
      </h3>
      <p>
        စာအုပ်တစ်အုပ်ကို ဖတ်ပြီး အဓိကအချက်တွေကို
        သိရုံနဲ့ မလုံလောက်ပါဘူး။ လက်တွေ့ဘဝမှာ
        အသုံးချပြီး ရလဒ်ပြောင်းလဲနိုင်မှသာ
        စာဖတ်ခြင်းရဲ့ တန်ဖိုးကို အပြည့်အဝရရှိနိုင်မှာ ဖြစ်ပါတယ်။
      </p>
    </article>
  `;
  showPage("readerPage");
  setTimeout(() => {
    updateReadingProgress(
      bookId,
      Math.max(progress, 25)
    );
  }, 500);
}
/* =========================================================
   18. COMPLETE BOOK
========================================================= */
function completeBook(bookId) {
  readingProgress[bookId] = 100;
  showToast(
    "စာအုပ်ကို Completed အဖြစ် မှတ်သားပြီးပါပြီ ✓"
  );
  openBook(bookId);
}
/* =========================================================
   19. UPDATE PROGRESS
========================================================= */
function updateReadingProgress(
  bookId,
  value
) {
  const safeValue =
    Math.min(
      100,
      Math.max(0, value)
    );
  readingProgress[bookId] =
    safeValue;
}
/* =========================================================
   20. FAVORITES
========================================================= */
function toggleFavorite(
  event,
  bookId
) {
  if (event) {
    event.stopPropagation();
  }
  const index =
    favoriteBookIds.indexOf(bookId);
  if (index >= 0) {
    favoriteBookIds.splice(
      index,
      1
    );
    showToast(
      "Favorites မှ ဖယ်ရှားပြီးပါပြီ"
    );
  } else {
    favoriteBookIds.push(bookId);
    showToast(
      "Favorites ထဲ ထည့်ပြီးပါပြီ ❤️"
    );
  }
  renderHome();
  renderBooks();
  renderFavorites();
}
/* =========================================================
   21. FAVORITE PAGE
========================================================= */
function renderFavorites() {
  const container =
    document.getElementById(
      "favoriteBooks"
    );
  if (!container) return;
  const favoriteBooks =
    books.filter(
      book =>
        favoriteBookIds.includes(
          book.id
        ) &&
        book.published
    );
  if (favoriteBooks.length === 0) {
    container.innerHTML =
      createEmptyState(
        "❤️",
        "Favorite စာအုပ် မရှိသေးပါ",
        "ကြိုက်နှစ်သက်တဲ့ စာအုပ်တွေကို ❤️ နှိပ်ပြီး သိမ်းထားနိုင်ပါတယ်။"
      );
    return;
  }
  container.innerHTML =
    favoriteBooks
      .map(book => createBookCard(book))
      .join("");
}
/* =========================================================
   22. PROGRESS PAGE
========================================================= */
function renderProgress() {
  const container =
    document.getElementById(
      "progressList"
    );
  if (!container) return;
  const items =
    books.filter(
      book =>
        readingProgress[book.id] !== undefined
    );
  if (items.length === 0) {
    container.innerHTML =
      createEmptyState(
        "📊",
        "Reading Progress မရှိသေးပါ",
        "စာအုပ်တစ်အုပ်ကို စဖတ်လိုက်တာနဲ့ Progress ဒီနေရာမှာ ပေါ်လာပါမယ်။"
      );
    return;
  }
  container.innerHTML =
    items.map(book => {
      const progress =
        readingProgress[book.id] || 0;
      return `
        <div class="progress-card">
          <div class="progress-top">
            <span class="progress-title">
              ${escapeHtml(book.title)}
            </span>
            <span class="progress-percent">
              ${progress}%
            </span>
          </div>
          <div class="progress-bar">
            <div
              class="progress-fill"
              style="width:${progress}%"
            ></div>
          </div>
        </div>
      `;
    }).join("");
}
/* =========================================================
   23. EMPTY STATE
========================================================= */
function createEmptyState(
  icon,
  title,
  message
) {
  return `
    <div class="empty-state">
      <div class="empty-icon">
        ${icon}
      </div>
      <h3>
        ${escapeHtml(title)}
      </h3>
      <p>
        ${escapeHtml(message)}
      </p>
    </div>
  `;
}
/* =========================================================
   24. DEMO LOGIN
========================================================= */
function handleLogin(event) {
  event.preventDefault();
  const email =
    document
      .getElementById("loginEmail")
      .value
      .trim();
  if (!email) return;
  currentUser = {
    name:
      email
        .split("@")[0]
        .replace(
          /^./,
          letter => letter.toUpperCase()
        ),
    email: email,
    role: "user"
  };
  updateProfileUI();
  showToast(
    "Login အောင်မြင်ပါပြီ ✓"
  );
  showPage("homePage");
}
/* =========================================================
   25. DEMO SIGNUP
========================================================= */
function handleSignup(event) {
  event.preventDefault();
  const name =
    document
      .getElementById("signupName")
      .value
      .trim();
  const email =
    document
      .getElementById("signupEmail")
      .value
      .trim();
  if (!name || !email) return;
  currentUser = {
    name: name,
    email: email,
    role: "user"
  };
  updateProfileUI();
  showToast(
    "Account ဖန်တီးပြီးပါပြီ ✓"
  );
  showPage("homePage");
}
/* =========================================================
   26. PROFILE UI
========================================================= */
function updateProfileUI() {
  const name =
    document.getElementById(
      "profileName"
    );
  const email =
    document.getElementById(
      "profileEmail"
    );
  const button =
    document.getElementById(
      "profileLoginButton"
    );
  if (!name || !email || !button) {
    return;
  }
  if (currentUser) {
    name.textContent =
      currentUser.name;
    email.textContent =
      currentUser.email;
    button.textContent =
      "🚪 Logout";
    button.onclick =
      logoutUser;
  } else {
    name.textContent =
      "Guest User";
    email.textContent =
      "Login to continue";
    button.textContent =
      "🔐 Login";
    button.onclick =
      () => showPage("loginPage");
  }
}
/* =========================================================
   27. LOGOUT
========================================================= */
function logoutUser() {
  currentUser = null;
  updateProfileUI();
  showToast(
    "Logout လုပ်ပြီးပါပြီ"
  );
  showPage("homePage");
}
/* =========================================================
   28. PROFILE ACTION
========================================================= */
function handleProfileAction() {
  if (currentUser) {
    logoutUser();
  } else {
    showPage("loginPage");
  }
}
/* =========================================================
   29. DEMO ADMIN LOGIN
   ---------------------------------------------------------
   Demo only.
   NOT a real secure authentication system.
========================================================= */
function handleAdminLogin(event) {
  event.preventDefault();
  const email =
    document
      .getElementById("adminEmail")
      .value
      .trim();
  const password =
    document
      .getElementById("adminPassword")
      .value;
  /*
    Demo credentials only.
    Later:
    Firebase Authentication
    +
    Firestore role check
  */
  if (
    email === "admin@bookwise.com" &&
    password === "admin123"
  ) {
    currentUser = {
      name: "BookWise Admin",
      email: email,
      role: "admin"
    };
    updateProfileUI();
    showToast(
      "Admin Login အောင်မြင်ပါပြီ ✓"
    );
    showPage("adminPage");
  } else {
    showToast(
      "Admin Email / Password မှားနေပါတယ်"
    );
  }
}
/* =========================================================
   30. ADMIN LOGOUT
========================================================= */
function adminLogout() {
  currentUser = null;
  updateProfileUI();
  showToast(
    "Admin Logout လုပ်ပြီးပါပြီ"
  );
  showPage("homePage");
}
/* =========================================================
   31. ADMIN PAGE
========================================================= */
function renderAdmin() {
  if (
    !currentUser ||
    currentUser.role !== "admin"
  ) {
    showPage("adminLoginPage");
    return;
  }
  updateAdminStats();
  renderAdminBookList();
}
/* =========================================================
   32. ADMIN STATS
========================================================= */
function updateAdminStats() {
  const total =
    books.length;
  const free =
    books.filter(
      book => book.access === "free"
    ).length;
  const premium =
    books.filter(
      book => book.access === "premium"
    ).length;
  const setText = (
    id,
    value
  ) => {
    const element =
      document.getElementById(id);
    if (element) {
      element.textContent = value;
    }
  };
  setText(
    "adminBookCount",
    total
  );
  setText(
    "adminFreeCount",
    free
  );
  setText(
    "adminPremiumCount",
    premium
  );
  setText(
    "adminCategoryCount",
    categories.length
  );
}
/* =========================================================
   33. ADMIN BOOK LIST
========================================================= */
function renderAdminBookList() {
  const container =
    document.getElementById(
      "adminBookList"
    );
  if (!container) return;
  if (books.length === 0) {
    container.innerHTML =
      createEmptyState(
        "📚",
        "စာအုပ်မရှိသေးပါ",
        "Add New Book မှ စာအုပ်ထည့်ပါ။"
      );
    return;
  }
  container.innerHTML =
    books.map(book => {
      const cover =
        book.coverUrl
          ? `<img src="${book.coverUrl}" alt="">`
          : `📖`;
      return `
        <div class="admin-book-item">
          <div class="admin-mini-cover">
            ${cover}
          </div>
          <div class="admin-book-info">
            <strong>
              ${escapeHtml(book.title)}
            </strong>
            <span>
              ${escapeHtml(book.author)}
              •
              ${escapeHtml(book.categoryName)}
              •
              ${
                book.access === "premium"
                  ? "⭐ Premium"
                  : "🆓 Free"
              }
            </span>
          </div>
          <div class="admin-actions">
            <button
              class="small-btn edit"
              onclick="editBook('${book.id}')"
            >
              ✏️ Edit
            </button>
            <button
              class="small-btn delete"
              onclick="deleteBook('${book.id}')"
            >
              🗑️ Delete
            </button>
          </div>
        </div>
      `;
    }).join("");
}
/* =========================================================
   34. COVER PREVIEW
========================================================= */
function handleCoverPreview(event) {
  const file =
    event.target.files[0];
  if (!file) {
    currentCoverData = "";
    return;
  }
  if (
    !file.type.startsWith("image/")
  ) {
    showToast(
      "Image file ကိုသာ ရွေးပါ"
    );
    event.target.value = "";
    return;
  }
  const reader =
    new FileReader();
  reader.onload =
    function(loadEvent) {
      currentCoverData =
        loadEvent.target.result;
      const preview =
        document.getElementById(
          "coverPreview"
        );
      if (preview) {
        preview.innerHTML = `
          <img
            src="${currentCoverData}"
            alt="Book Cover Preview"
          >
        `;
      }
    };
  reader.readAsDataURL(file);
}
/* =========================================================
   35. ADD / EDIT BOOK
========================================================= */
function handleBookSubmit(event) {
  event.preventDefault();
  if (
    !currentUser ||
    currentUser.role !== "admin"
  ) {
    showToast(
      "Admin Login လိုအပ်ပါတယ်"
    );
    showPage("adminLoginPage");
    return;
  }
  const editingId =
    document
      .getElementById("editingBookId")
      .value;
  const title =
    document
      .getElementById("bookTitle")
      .value
      .trim();
  const author =
    document
      .getElementById("bookAuthor")
      .value
      .trim();
  const category =
    document
      .getElementById("bookCategory")
      .value;
  const readingTime =
    document
      .getElementById("bookReadingTime")
      .value;
  const description =
    document
      .getElementById("bookDescription")
      .value
      .trim();
  const summary =
    document
      .getElementById("bookSummary")
      .value
      .trim();
  const lessons =
    document
      .getElementById("bookLessons")
      .value
      .trim();
  const actionPlan =
    document
      .getElementById("bookActionPlan")
      .value
      .trim();
  const access =
    document
      .getElementById("bookAccess")
      .value;
  const published =
    document
      .getElementById("bookPublished")
      .value === "true";
  const categoryObject =
    categories.find(
      item => item.id === category
    );
  if (
    !title ||
    !author ||
    !category ||
    !summary
  ) {
    showToast(
      "လိုအပ်တဲ့အချက်အလက်တွေ ဖြည့်ပါ"
    );
    return;
  }
  if (editingId) {
    const book =
      books.find(
        item =>
          item.id === editingId
      );
    if (book) {
      book.title =
        title;
      book.author =
        author;
      book.category =
        category;
      book.categoryName =
        categoryObject
          ? categoryObject.name
          : category;
      book.readingTime =
        readingTime;
      book.description =
        description;
      book.summary =
        summary;
      book.lessons =
        lessons;
      book.actionPlan =
        actionPlan;
      book.access =
        access;
      book.published =
        published;
      if (currentCoverData) {
        book.coverUrl =
          currentCoverData;
      }
      showToast(
        "စာအုပ်ကို Update လုပ်ပြီးပါပြီ ✓"
      );
    }
  } else {
    const newBook = {
      id:
        "book-" +
        Date.now(),
      title:
        title,
      author:
        author,
      category:
        category,
      categoryName:
        categoryObject
          ? categoryObject.name
          : category,
      coverUrl:
        currentCoverData,
      readingTime:
        readingTime,
      access:
        access,
      published:
        published,
      description:
        description,
      summary:
        summary,
      lessons:
        lessons,
      actionPlan:
        actionPlan
    };
    books.unshift(
      newBook
    );
    showToast(
      "စာအုပ်အသစ် ထည့်ပြီးပါပြီ ✓"
    );
  }
  resetBookForm();
  renderAdmin();
  renderHome();
  updateStats();
}
/* =========================================================
   36. EDIT BOOK
========================================================= */
function editBook(bookId) {
  const book =
    books.find(
      item => item.id === bookId
    );
  if (!book) return;
  document
    .getElementById("editingBookId")
    .value =
    book.id;
  document
    .getElementById("bookTitle")
    .value =
    book.title;
  document
    .getElementById("bookAuthor")
    .value =
    book.author;
  document
    .getElementById("bookCategory")
    .value =
    book.category;
  document
    .getElementById("bookReadingTime")
    .value =
    book.readingTime;
  document
    .getElementById("bookDescription")
    .value =
    book.description;
  document
    .getElementById("bookSummary")
    .value =
    book.summary;
  document
    .getElementById("bookLessons")
    .value =
    book.lessons;
  document
    .getElementById("bookActionPlan")
    .value =
    book.actionPlan;
  document
    .getElementById("bookAccess")
    .value =
    book.access;
  document
    .getElementById("bookPublished")
    .value =
    book.published
      ? "true"
      : "false";
  currentCoverData =
    book.coverUrl || "";
  const preview =
    document.getElementById(
      "coverPreview"
    );
  if (
    preview &&
    book.coverUrl
  ) {
    preview.innerHTML = `
      <img
        src="${book.coverUrl}"
        alt="Cover"
      >
    `;
  } else if (preview) {
    preview.innerHTML =
      "<span>🖼️ Cover Preview</span>";
  }
  const form =
    document.getElementById(
      "bookForm"
    );
  if (form) {
    form.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
  showToast(
    "Edit Mode ဖွင့်ထားပါပြီ"
  );
}
/* =========================================================
   37. DELETE BOOK
========================================================= */
function deleteBook(bookId) {
  const book =
    books.find(
      item => item.id === bookId
    );
  if (!book) return;
  const confirmed =
    confirm(
      `"${book.title}" ကို ဖျက်မှာ သေချာပါသလား?`
    );
  if (!confirmed) return;
  books =
    books.filter(
      item =>
        item.id !== bookId
    );
  favoriteBookIds =
    favoriteBookIds.filter(
      id =>
        id !== bookId
    );
  delete readingProgress[
    bookId
  ];
  showToast(
    "စာအုပ်ကို ဖျက်ပြီးပါပြီ"
  );
  resetBookForm();
  renderAdmin();
  renderHome();
  renderBooks();
  updateStats();
}
/* =========================================================
   38. RESET BOOK FORM
========================================================= */
function resetBookForm() {
  const form =
    document.getElementById(
      "bookForm"
    );
  if (form) {
    form.reset();
  }
  const editing =
    document.getElementById(
      "editingBookId"
    );
  if (editing) {
    editing.value = "";
  }
  currentCoverData = "";
  const preview =
    document.getElementById(
      "coverPreview"
    );
  if (preview) {
    preview.innerHTML =
      "<span>🖼️ Cover Preview</span>";
  }
}
/* =========================================================
   39. UPDATE GENERAL STATS
========================================================= */
function updateStats() {
  const publishedBooks =
    books.filter(
      book => book.published
    );
  const usedCategories =
    new Set(
      publishedBooks.map(
        book => book.category
      )
    );
  const setText = (
    id,
    value
  ) => {
    const element =
      document.getElementById(id);
    if (element) {
      element.textContent =
        value;
    }
  };
  setText(
    "bookCount",
    publishedBooks.length
  );
  setText(
    "categoryCount",
    usedCategories.size
  );
  updateAdminStats();
}
/* =========================================================
   40. TOAST
========================================================= */
let toastTimer = null;
function showToast(message) {
  const toast =
    document.getElementById(
      "toast"
    );
  if (!toast) return;
  toast.textContent =
    message;
  toast.classList.add(
    "show"
  );
  clearTimeout(
    toastTimer
  );
  toastTimer =
    setTimeout(
      () => {
        toast.classList.remove(
          "show"
        );
      },
      2500
    );
}
/* =========================================================
   41. HTML ESCAPE
   ---------------------------------------------------------
   Prevents user-entered text from becoming HTML.
========================================================= */
function escapeHtml(value) {
  if (
    value === null ||
    value === undefined
  ) {
    return "";
  }
  return String(value)
    .replace(
      /&/g,
      "&amp;"
    )
    .replace(
      /</g,
      "&lt;"
    )
    .replace(
      />/g,
      "&gt;"
    )
    .replace(
      /"/g,
      "&quot;"
    )
    .replace(
      /'/g,
      "&#039;"
    );
}
/* =========================================================
   42. GLOBAL API
   ---------------------------------------------------------
   These functions are intentionally exposed because
   index.html uses onclick="..." for navigation/actions.
========================================================= */
window.showPage =
  showPage;
window.openBook =
  openBook;
window.filterCategory =
  filterCategory;
window.toggleFavorite =
  toggleFavorite;
window.completeBook =
  completeBook;
window.editBook =
  editBook;
window.deleteBook =
  deleteBook;
window.resetBookForm =
  resetBookForm;
window.adminLogout =
  adminLogout;
window.handleProfileAction =
  handleProfileAction;
/* =========================================================
   43. INITIAL PROFILE
========================================================= */
updateProfileUI();
/* =========================================================
   END OF BOOKWISE MYANMAR APP.JS
========================================================= */
