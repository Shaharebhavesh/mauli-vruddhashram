              /* =========================================
                          MOBILE MENU
              ========================================= */

              function toggleMenu() {

                  document
                      .getElementById("navMenu")
                      .classList
                      .toggle("active");
              }

              /* =========================================
                          GOOGLE TRANSLATE
              ========================================= */

              function googleTranslateElementInit() {

                  new google.translate.TranslateElement({

                      pageLanguage: 'en',

                      includedLanguages: 'en,hi,mr',

                      autoDisplay: false

                  }, 'google_translate_element');
              }

              /* =========================================
                          LANGUAGE DROPDOWN
              ========================================= */

              function toggleDropdown() {

                  document
                      .getElementById("languageDropdown")
                      .classList
                      .toggle("show");
              }

              /* =========================================
                          CHANGE LANGUAGE
              ========================================= */

              function changeLanguage(lang, text) {

                  const select =
                      document.querySelector(".goog-te-combo");

                  if(select) {

                      select.value = lang;

                      select.dispatchEvent(
                          new Event("change")
                      );
                  }

                  /* update navbar selected language */
                  document.getElementById(
                      "current-language"
                  ).innerText = text;

                  /* save selected language */
                  localStorage.setItem(
                      "selectedLanguage",
                      JSON.stringify({
                          lang: lang,
                          text: text
                      })
                  );

                  /* close dropdown */
                  document
                      .getElementById("languageDropdown")
                      .classList
                      .remove("show");
              }

              /* =========================================
                      RESTORE LANGUAGE AFTER REFRESH
              ========================================= */

              window.addEventListener("load", () => {

                  const saved =
                      JSON.parse(
                          localStorage.getItem("selectedLanguage")
                      );

                  if(saved) {

                      document.getElementById(
                          "current-language"
                      ).innerText = saved.text;

                      setTimeout(() => {

                          const select =
                              document.querySelector(".goog-te-combo");

                          if(select) {

                              select.value = saved.lang;

                              select.dispatchEvent(
                                  new Event("change")
                              );
                          }

                      }, 1500);
                  }
              });

              /* =========================================
                      CLOSE DROPDOWN OUTSIDE CLICK
              ========================================= */

              document.addEventListener("click", (e) => {

                  const selector =
                      document.querySelector(".language-selector");

                  if(!selector.contains(e.target)) {

                      document
                          .getElementById("languageDropdown")
                          .classList
                          .remove("show");
                  }
              });

              /* =========================================
                          SCROLL NAVBAR
              ========================================= */

              window.addEventListener("scroll", () => {

                  const navbar =
                      document.querySelector(".navbar");

                  navbar.classList.toggle(
                      "scrolled",
                      window.scrollY > 20
                  );
              });

              /* =========================================
                      PREMIUM SCROLL ANIMATION
              ========================================= */

              document.addEventListener("DOMContentLoaded", () => {

                  document.body.classList.add("js-enabled");

                  const reveals =
                      document.querySelectorAll(
                          ".reveal"
                      );

                  const observer =
                      new IntersectionObserver((entries) => {

                          entries.forEach(entry => {

                              if(entry.isIntersecting) {

                                  entry.target
                                      .classList
                                      .add("active");
                              }
                          });

                      }, {
                          threshold: 0.15
                      });

                  reveals.forEach(el => {

                      observer.observe(el);
                  });
              });

              /* =========================================
                      REMOVE GOOGLE TRANSLATE HIGHLIGHT
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