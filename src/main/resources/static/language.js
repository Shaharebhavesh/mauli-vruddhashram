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

/*function changeLanguage(lang) {

    const select =
        document.querySelector(".goog-te-combo");

    if(select) {

        select.value = lang;

        select.dispatchEvent(
            new Event('change')
        );*/

function changeLanguage(lang) {

    /* update navbar text instantly */
    updateSelectedLanguage(lang);

    /* save language */
    localStorage.setItem(
        "selectedLanguage",
        lang
    );

    const applyTranslation = () => {

        const select =
            document.querySelector(".goog-te-combo");

        if (!select) return false;

        /* reset first */
        select.value = "en";

        select.dispatchEvent(
            new Event("change")
        );

        /* apply selected language */
        setTimeout(() => {

            select.value = lang;

            select.dispatchEvent(
                new Event("change")
            );

        }, 300);

        return true;
    };

    /* try immediately */
    if (!applyTranslation()) {

        const interval = setInterval(() => {

            if (applyTranslation()) {

                clearInterval(interval);
            }

        }, 300);
    }
}

        /* save selected language */
        localStorage.setItem(
            "selectedLanguage",
            lang
        );

        /* update navbar text */
        updateSelectedLanguage(lang);
    }
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
                new Event('change')
            );

            clearInterval(interval);
        }

    }, 500);
}
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

