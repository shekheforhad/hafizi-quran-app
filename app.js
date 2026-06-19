let currentPage = 1;

// টাচ সোয়াইপ ট্র্যাক করার ভেরিয়েবল
let touchStartX = 0;
let touchEndX = 0;

// ১ থেকে ১১৪ সূরা এবং ১ থেকে ৩০ পারার ডাটাবেজ সরাসরি কোডের ভেতরে (CORS সমস্যা হবে না)
const quranMetaData = {
  "surahs": [
{"name": "الفاتحة", "bangla_name": "ফাতিহা", "page": 2}, 
{"name": "البقرة", "bangla_name": "বাকারাহ", "page": 3}, 
{"name": "آل عمران", "bangla_name": "আলে ইমরান", "page": 51}, 
{"name": "النساء", "bangla_name": "নিসা", "page": 78}, 
{"name": "المائدة", "bangla_name": "মায়িদাহ", "page": 107}, 
{"name": "الأنعام", "bangla_name": "আন আম", "page": 129}, 
{"name": "الأعراف", "bangla_name": "আরাফ", "page": 152}, 
{"name": "الأنفال", "bangla_name": "আনফাল", "page": 178}, 
{"name": "التوبة", "bangla_name": "তাওবাহ", "page": 188}, 
{"name": "يونس", "bangla_name": "ইউনূস", "page": 209}, 
{"name": "هود", "bangla_name": "হূদ", "page": 222}, {"name": "يوسف", "bangla_name": "ইউসুফ", "page": 236}, 
{"name": "الرعد", "bangla_name": "রাদ", "page": 250}, 
{"name": "إبراهيم", "bangla_name": "ইব্রাহীম", "page": 256}, 
{"name": "الحجر", "bangla_name": "হিজর", "page": 262}, 
{"name": "النحل", "bangla_name": "নাহল", "page": 268}, 
{"name": "بني إسرائيل", "bangla_name": "বানী ইসরাইল", "page": 283}, 
{"name": "الكهف", "bangla_name": "কাহফ", "page": 294}, 
{"name": "مريم", "bangla_name": "মারইয়াম", "page": 306}, 
{"name": "طه", "bangla_name": "ত্বহা", "page": 312}, {"name": "الأنبياء", "bangla_name": "আম্বিয়া", "page": 323}, 
{"name": "الحج", "bangla_name": "হজ", "page": 332}, 
{"name": "المؤمنون", "bangla_name": "মুমিনূন", "page": 343}, 
{"name": "النور", "bangla_name": "নূর", "page": 351}, {"name": "الفرقان", "bangla_name": "ফুরকান", "page": 360}, 
{"name": "الشعراء", "bangla_name": "শুআরা", "page": 367}, 
{"name": "النمل", "bangla_name": "নামল", "page": 377}, 
{"name": "القصص", "bangla_name": "কাসাস", "page": 386}, 
{"name": "العنكبوت", "bangla_name": "আনকাবূত", "page": 397}, 
{"name": "الروم", "bangla_name": "রূম", "page": 405}, 
{"name": "لقمان", "bangla_name": "লুকমান", "page": 412}, 
{"name": "السجدة", "bangla_name": "সাজদাহ", "page": 416}, 
{"name": "الأحزاب", "bangla_name": "আহজাব", "page": 419}, 
{"name": "سبأ", "bangla_name": "সাবা", "page": 429}, {"name": "فاطر", "bangla_name":  "ফাত্বির", "page": 435}, 
{"name": "يس", "bangla_name": "ইয়াসীন", "page": 441}, 
{"name": "الصافات", "bangla_name": "ছাফফাত", "page": 446}, 
{"name": "ص", "bangla_name": "সোয়াদ", "page": 453}, 
{"name": "الزمر", "bangla_name": "যুমার", "page": 459}, 
{"name": "المؤمن", "bangla_name": "আল মুমিন", "page": 468}, 
{"name": "حم السجدة", "bangla_name": "হামীম সাজদাহ", "page": 478}, 
{"name": "الشورى", "bangla_name": "শূরা", "page": 484}, 
{"name": "الزخرف", "bangla_name": "যুখরুফ", "page": 490}, 
{"name": "الدخان", "bangla_name": "দুখান", "page": 496}, 
{"name": "الجاثية", "bangla_name": "জাসিয়াহ", "page": 499}, 
{"name": "الأحقاف", "bangla_name": "আহ্ক্বাফ", "page": 503}, 
{"name": "محمد", "bangla_name": "মুহাম্মদ", "page": 507}, 
{"name": "الفتح", "bangla_name": "ফাত্হ", "page": 512}, 
{"name": "الحجرات", "bangla_name": "হুজুরাত", "page": 516}, 
{"name": "ق", "bangla_name": "ক্বাফ", "page": 519}, {"name": "الذاريات", "bangla_name": "যারিয়াত", "page": 521}, 
{"name": "الطور", "bangla_name": "তূর", "page": 524}, 
{"name": "النجم", "bangla_name": "নাজম", "page": 527}, 
{"name": "القمر", "bangla_name": "ক্বামার", "page": 529}, 
{"name": "الرحمن", "bangla_name": "রাহমান", "page": 532}, 
{"name": "الواقعة", "bangla_name": "ওয়াকিয়াহ", "page": 535}, 
{"name": "الحديد", "bangla_name": "হাদীদ", "page": 538}, 
{"name": "المجادلة", "bangla_name": "মুজাদালাহ", "page": 543}, 
{"name": "الحشر", "bangla_name": "হাশর", "page": 546}, 
{"name": "الممتحنة", "bangla_name": "মুমতাহিনাহ", "page": 550}, 
{"name": "الصف", "bangla_name": "ছাফ্ফি", "page": 552}, 
{"name": "الجمعة", "bangla_name": "জুমুআহ", "page": 554}, 
{"name": "المنافقون", "bangla_name": "মুনাফিকূন", "page": 555}, 
{"name": "التغابن", "bangla_name": "তাগাবুন", "page": 557}, 
{"name": "الطلاق", "bangla_name": "ত্বলাক", "page": 559}, 
{"name": "التحريم", "bangla_name": "তাহরীম", "page": 561}, 
{"name": "الملك", "bangla_name": "মুলক", "page": 563}, 
{"name": "القلم", "bangla_name": "ক্বলম", "page": 565}, 
{"name": "الحاقة", "bangla_name": "হাক্কাহ", "page": 568}, 
{"name": "المعارج", "bangla_name": "মাআরিজ", "page": 570}, 
{"name": "نوح", "bangla_name": "নূহ", "page": 572}, {"name": "الجن", "bangla_name": "জীন", "page": 574}, 
{"name": "المزمل", "bangla_name": "মুযাম্মিল", "page": 577}, 
{"name": "المدثر", "bangla_name": "মুদ্দাসসির", "page": 579}, 
{"name": "القيامة", "bangla_name": "কিয়ামাহ", "page": 581}, 
{"name": "الإنسان", "bangla_name": "ইনসান", "page": 583}, 
{"name": "المرسلات", "bangla_name": "মুরসালাত", "page": 585}, 
{"name": "النبأ", "bangla_name": "নাবা", "page": 587}, {"name": "النازعات", "bangla_name": "নাযিয়াত", "page": 588}, 
{"name": "عبس", "bangla_name": "আবাসা", "page": 590}, 
{"name": "التكوير", "bangla_name": "তাকবীর", "page": 591}, 
{"name": "الانفطار", "bangla_name": "ইনফিতার", "page": 592}, 
{"name": "المطففين", "bangla_name": "মুত্বাফফিফীন", "page": 593}, 
{"name": "الانشقاق", "bangla_name": "ইনশিকাক", "page": 595}, 
{"name": "البروج", "bangla_name": "বুরূজ", "page": 596}, 
{"name": "الطارق", "bangla_name": "ত্বারিক্ব", "page": 597}, 
{"name": "الأعلى", "bangla_name": "আলা", "page": 598}, 
{"name": "الغاشية", "bangla_name": "গাশিয়াহ", "page": 598}, 
{"name": "الفجر", "bangla_name": "ফজর", "page": 599}, 
{"name": "البلد", "bangla_name": "বালাদ", "page": 601}, 
{"name": "الشمس", "bangla_name": "শামস", "page": 601}, 
{"name": "الليل", "bangla_name": "লাইল", "page": 602}, 
{"name": "الضحى", "bangla_name": "দুহা", "page": 603}, 
{"name": "الشرح", "bangla_name": "ইনশিরাহ", "page": 603}, 
{"name": "التين", "bangla_name": "তীন", "page": 604}, 
{"name": "العلق", "bangla_name": "আলাক্ব", "page": 604}, 
{"name": "القدر", "bangla_name": "ক্বদর", "page": 605}, 
{"name": "البينة", "bangla_name": "বাইয়্যিনাহ", "page": 605}, 
{"name": "الزلزلة", "bangla_name": "যিলযাল", "page": 606}, 
{"name": "العاديات", "bangla_name": "আদিয়াত", "page": 606}, 
{"name": "القارعة", "bangla_name": "ক্বারিআহ", "page": 607}, 
{"name": "التكاثر", "bangla_name": "তাকাসুর", "page": 607}, 
{"name": "العصر", "bangla_name": "আছর", "page": 608}, 
{"name": "الهمزة", "bangla_name": "হুমাযাহ", "page": 608}, 
{"name": "الفيل", "bangla_name": "ফীল", "page": 608}, 
{"name": "قريش", "bangla_name": "কুরাইশ", "page": 609}, 
{"name": "الماعون", "bangla_name": "মাঊন", "page": 609}, 
{"name": "الكوثر", "bangla_name": "কাওসার", "page": 609}, 
{"name": "الكافرون", "bangla_name": "কাফিরূন", "page": 609}, 
{"name": "النصر", "bangla_name": "নাছর", "page": 610}, 
{"name": "المسد", "bangla_name": "লাহাব", "page": 610}, 
{"name": "الإخلاص", "bangla_name": "ইখলাছ", "page": 610}, 
{"name": "الفلق", "bangla_name": "ফালাক্ব", "page": 611}, 
{"name": "الناس", "bangla_name": "নাস", "page": 611} ],
  "paras": [
    {"number": 1, "name": "১", "page": 1},
    {"number": 2, "name": "২", "page": 23},
    {"number": 3, "name": "৩", "page": 43},
    {"number": 4, "name": "৪", "page": 63},
    {"number": 5, "name": "৫", "page": 83},
    {"number": 6, "name": "৬", "page": 103},
    {"number": 7, "name": "৭", "page": 123},
    {"number": 8, "name": "৮", "page": 143},
    {"number": 9, "name": "৯", "page": 163},
    {"number": 10, "name": "১০", "page": 183},
    {"number": 11, "name": "১১", "page": 203},
    {"number": 12, "name": "১২", "page": 223},
    {"number": 13, "name": "১৩", "page": 243},
    {"number": 14, "name": "১৪", "page": 263},
    {"number": 15, "name": "১৫", "page": 283},
    {"number": 16, "name": "১৬", "page": 303},
    {"number": 17, "name": "১৭", "page": 323},
    {"number": 18, "name": "১৮", "page": 343},
    {"number": 19, "name": "১৯", "page": 363},
    {"number": 20, "name": "২০", "page": 383},
    {"number": 21, "name": "২১", "page": 403},
    {"number": 22, "name": "২২", "page": 423},
    {"number": 23, "name": "২৩", "page": 443},
    {"number": 24, "name": "২৪", "page": 463},
    {"number": 25, "name": "২৫", "page": 483},
    {"number": 26, "name": "২৬", "page": 503},
    {"number": 27, "name": "২৭", "page": 523},
    {"number": 28, "name": "২৮", "page": 543},
    {"number": 29, "name": "২৯", "page": 563},
    {"number": 30, "name": "৩০", "page": 587}
  ]
};


window.onload = async function() {
    await loadMetaData();
    
    // লোকাল স্টোরেজ থেকে শেষ পড়া পৃষ্ঠা চেক করা
    const savedPage = localStorage.getItem('lastReadPage');
    if (savedPage) {
        currentPage = parseInt(savedPage);
        showResumeButton(savedPage);
    }
    
    renderPage(currentPage);
    setupTouchControls(); // টাচ সোয়াইপ সিস্টেম চালু করা
};

// ১. সার্চের জন্য মেটাডাটা (JSON) লোড করা
async function loadMetaData() {
    try {
        const response = await fetch('quran_data.json');
        quranMetaData = await response.json();
    } catch (error) {
        console.error("সার্চ ডাটাবেজ ফাইলটি পাওয়া যায়নি, তবে সাধারণ নেভিগেশন কাজ করবে।", error);
    }
}

// ২. স্ক্রিনে ছবি প্রদর্শন করার মূল ফাংশন
function renderPage(page) {
    if (page < 1 || page > 611) return;
    
    currentPage = page;
    document.getElementById('pageNumber').innerText = `পৃষ্ঠা: ${page}`;
    
    // লাস্ট রিড সেভ করা
    localStorage.setItem('lastReadPage', page);
    hideResumeButton();

    const pageDiv = document.getElementById('quranPage');
    
    // ছবিতে অলস লোড (Lazy loading) ব্যবহার করা হয়েছে পারফরম্যান্সের জন্য
    pageDiv.innerHTML = `
        <img src="images/${page}.jpg" 
             alt="Page ${page}" 
             style="width: 100%; height: 100%; object-fit: contain;"
             onerror="this.onerror=null; this.parentNode.innerHTML='<p style=padding-top:100px;color:gray;>images/ ফোল্ডারে ${page}.jpg ছবিটি পাওয়া যায়নি।</p>';"
             loading="lazy">
    `;
}

// ৩. নেভিগেশন কন্ট্রোল
function nextPage() { if (currentPage < 611) renderPage(currentPage + 1); }
function prevPage() { if (currentPage > 1) renderPage(currentPage - 1); }

// ৪. মোবাইল টাচ সোয়াইপ (Swipe) লজিক
function setupTouchControls() {
    const pageContainer = document.getElementById('quranPage');
    
    pageContainer.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });

    pageContainer.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipeGesture();
    });
}

function handleSwipeGesture() {
    const swipeDistance = 100; // সর্বনিম্ন কতটুকু টানলে পৃষ্ঠা পরিবর্তন হবে
    
    // আরবি ডিরেকশন (RTL) অনুযায়ী: বাম থেকে ডানে টানলে পরের পৃষ্ঠা, ডান থেকে বামে টানলে আগের পৃষ্ঠা
    if (touchEndX - touchStartX > swipeDistance) {
        nextPage(); // পরের পৃষ্ঠায় যান
    } else if (touchStartX - touchEndX > swipeDistance) {
        prevPage(); // আগের পৃষ্ঠায় যান
    }
}

// ৫. পৃষ্ঠা, সূরা বা পারা দিয়ে সার্চ করার মাস্টার ফাংশন
function searchQuran() {
    const pageInput = document.getElementById('searchPage').value;
    if (pageInput !== "") {
        const pageNum = parseInt(pageInput);
        if (pageNum >= 1 && pageNum <= 611) {
            renderPage(pageNum);
            document.getElementById('searchPage').value = "";
            return;
        }
    }

    const textInput = document.getElementById('searchSurah').value.trim();
    if (textInput !== "" && quranMetaData) {
        // সূরা সার্চ
        const foundSurah = quranMetaData.surahs.find(s => 
            s.bangla_name.includes(textInput) || s.name.includes(textInput)
        );
        if (foundSurah) {
            renderPage(foundSurah.page);
            document.getElementById('searchSurah').value = "";
            return;
        }

        // পারা সার্চ
        const foundPara = quranMetaData.paras.find(p => 
            p.number == textInput || p.name.includes(textInput)
        );
        if (foundPara) {
            renderPage(foundPara.page);
            document.getElementById('searchSurah').value = "";
            return;
        }

        alert("দুঃখিত! এই নামে কোনো সূরা বা পারা খুঁজে পাওয়া যায়নি।");
    }
}

// ৬. লাস্ট রিড / রেজুম বাটন হ্যান্ডলিং
function showResumeButton(savedPage) {
    const resumeBtn = document.getElementById('resumeBtn');
    if (resumeBtn) {
        resumeBtn.classList.remove('hidden');
        resumeBtn.innerText = "শেষ পড়া পৃষ্ঠা (" + savedPage + ") থেকে শুরু করুন";
    }
}


function hideResumeButton() {
    const resumeBtn = document.getElementById('resumeBtn');
    if (resumeBtn) resumeBtn.classList.add('hidden');
}

function loadLastRead() {
    const savedPage = localStorage.getItem('lastReadPage');
    if (savedPage) renderPage(parseInt(savedPage));
}
