/* =========================================
   GOOGLE TRANSLATE INIT
========================================= */

function googleTranslateElementInit() {

    new google.translate.TranslateElement({

        pageLanguage: 'en',

        includedLanguages: 'en,hi,mr',

        autoDisplay: false

    }, 'google_translate_element');

    loadSavedLanguage();
}

/* =========================================
   CHANGE LANGUAGE
========================================= */

function changeLanguage(lang) {

    /* update navbar text */
    updateSelectedLanguage(lang);

    /* save language */
    localStorage.setItem(
        "selectedLanguage",
        lang
    );

    const interval = setInterval(() => {

        const select =
            document.querySelector(".goog-te-combo");

        if(select) {

            select.value = lang;

            select.dispatchEvent(
                new Event("change", {
                    bubbles: true
                })
            );

            clearInterval(interval);
        }

    }, 300);
}

/* =========================================
   UPDATE NAVBAR TEXT
========================================= */

function updateSelectedLanguage(lang) {

    const selected =
        document.querySelector(".selected-language");

    if(!selected) return;

    if(lang === "en") {

        selected.innerHTML =
            "🌐 English ▼";
    }

    else if(lang === "hi") {

        selected.innerHTML =
            "🌐 हिंदी ▼";
    }

    else if(lang === "mr") {

        selected.innerHTML =
            "🌐 मराठी ▼";
    }
}

/* =========================================
   LOAD SAVED LANGUAGE
========================================= */

function loadSavedLanguage() {

    const savedLang =
        localStorage.getItem(
            "selectedLanguage"
        ) || "en";

    updateSelectedLanguage(savedLang);

    const interval = setInterval(() => {

        const select =
            document.querySelector(".goog-te-combo");

        if(select) {

            select.value = savedLang;

            select.dispatchEvent(
                new Event("change", {
                    bubbles: true
                })
            );

            clearInterval(interval);
        }

    }, 500);
}

/* =========================================
   REMOVE GOOGLE HIGHLIGHT
========================================= */

setInterval(() => {

    document
        .querySelectorAll(".goog-text-highlight")
        .forEach(el => {

            el.style.background = "transparent";

            el.style.boxShadow = "none";

            el.style.border = "none";
        });

}, 100);