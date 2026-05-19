

/* ===== GOOGLE TRANSLATE ===== */

function googleTranslateElementInit() {

    new google.translate.TranslateElement({

        pageLanguage: 'en',

        includedLanguages: 'en,hi,mr',

        autoDisplay: false

    }, 'google_translate_element');
}

/* change language */
/* =========================================
   CHANGE LANGUAGE
========================================= */

function changeLanguage(lang) {

    const interval = setInterval(() => {

        const select =
            document.querySelector(".goog-te-combo");

        if(select) {

            /* change translate language */
            select.value = lang;

            select.dispatchEvent(
                new Event('change')
            );

            clearInterval(interval);

            /* save language */
            localStorage.setItem(
                "selectedLanguage",
                lang
            );

            /* update navbar text */
            updateSelectedLanguage(lang);
        }

    }, 500);
}

/* =========================================
   UPDATE NAVBAR LANGUAGE TEXT
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
   LOAD SAVED LANGUAGE AFTER RELOAD
========================================= */

window.addEventListener("load", () => {

    const savedLang =
        localStorage.getItem(
            "selectedLanguage"
        ) || "en";

    updateSelectedLanguage(savedLang);
});

    /* remove google translate highlight continuously */

setInterval(() => {

    document
        .querySelectorAll(".goog-text-highlight")
        .forEach(el => {

            el.style.background = "transparent";
            el.style.boxShadow = "none";
        });

}, 100);

/* =========================================
   CLEAN GOOGLE TRANSLATE STYLES
========================================= */

/* remove google translate highlight */

/* =========================================
   CLEAN GOOGLE TRANSLATE EFFECT
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

