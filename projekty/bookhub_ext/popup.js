// popup.js

document.addEventListener("DOMContentLoaded", function () {
  const saveButton = document.getElementById("saveButton");
  const statusDiv = document.getElementById("status");

  saveButton.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const currentTab = tabs[0];

      // Pobierz tytuł i adres URL bieżącej karty
      const pageTitle = currentTab.title;
      const pageUrl = currentTab.url;

      // Pobierz token GitHub z localStorage
      chrome.storage.local.get(["githubToken"], function (result) {
        const githubToken = result.githubToken;

        // Sprawdź, czy token jest dostępny
        if (!githubToken) {
          statusDiv.textContent =
            "Błąd: Brak tokena GitHub. Ustaw token w opcjach rozszerzenia.";
          return;
        }

        // Pobierz nazwę użytkownika i repozytorium z localStorage
        chrome.storage.local.get(
          ["githubUsername", "githubRepo"],
          function (result) {
            const githubUsername = result.githubUsername;
            const githubRepo = result.githubRepo;

            // Sprawdź, czy nazwa użytkownika i repozytorium są dostępne
            if (!githubUsername || !githubRepo) {
              statusDiv.textContent =
                "Błąd: Brak nazwy użytkownika lub repozytorium GitHub. Ustaw je w opcjach rozszerzenia.";
              return;
            }

            // Pobierz zawartość pliku README.md z repozytorium Wiki
            fetch(
              `https://api.github.com/repos/${githubUsername}/${githubRepo}/contents/Home.md`,
              {
                headers: {
                  Authorization: `token ${githubToken}`,
                },
              }
            )
              .then((response) => {
                if (!response.ok) {
                  throw new Error(
                    `Błąd pobierania pliku README.md: ${response.status}`
                  );
                }
                return response.json();
              })
              .then((data) => {
                // Dekoduj zawartość pliku README.md
                const readmeContent = atob(data.content);

                // Dodaj nowy podpunkt do listy
                const newReadmeContent =
                  readmeContent + `\n- [${pageTitle}](${pageUrl})`;

                // Zakoduj nową zawartość pliku README.md w base64
                const base64Content = btoa(newReadmeContent);

                // Zaktualizuj plik README.md w repozytorium Wiki
                fetch(
                  `https://api.github.com/repos/${githubUsername}/${githubRepo}/contents/Home.md`,
                  {
                    method: "PUT",
                    headers: {
                      Authorization: `token ${githubToken}`,
                    },
                    body: JSON.stringify({
                      message: "Dodano nową stronę z Bookhub",
                      content: base64Content,
                      sha: data.sha,
                    }),
                  }
                )
                  .then((response) => {
                    if (!response.ok) {
                      throw new Error(
                        `Błąd aktualizacji pliku README.md: ${response.status}`
                      );
                    }
                    statusDiv.textContent = "Strona zapisana pomyślnie!";
                  })
                  .catch((error) => {
                    statusDiv.textContent = `Błąd: ${error.message}`;
                  });
              })
              .catch((error) => {
                statusDiv.textContent = `Błąd: ${error.message}`;
              });
          }
        );
      });
    });
  });

  function getAllOpenTabs() {
    return new Promise((resolve, reject) => {
      chrome.tabs.query({}, function (tabs) {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        } else {
          resolve(tabs);
        }
      });
    });
  }

  // Przykład użycia funkcji getAllOpenTabs()
  getAllOpenTabs()
    .then((tabs) => {
      console.log("Wszystkie otwarte karty:", tabs);
      // Tutaj możesz wykonać dalsze operacje na tablicach
    })
    .catch((error) => {
      console.error("Błąd podczas pobierania kart:", error);
    });

  // Funkcja pobierająca tytuł bieżącej karty lub pierwszy dostępny nagłówek H1/H2
  function getPageTitle() {
    return new Promise((resolve) => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const currentTab = tabs[0];

        // Najpierw spróbuj pobrać tytuł strony
        let pageTitle = currentTab.title;

        // Jeśli tytuł jest pusty, wyszukaj pierwszego nagłówka H1 lub H2
        if (!pageTitle.trim()) {
          chrome.scripting.executeScript(
            {
              target: { tabId: currentTab.id },
              function: () => {
                const h1 = document.querySelector("h1");
                const h2 = document.querySelector("h2");
                return h1 ? h1.textContent : h2 ? h2.textContent : "";
              },
            },
            (results) => {
              pageTitle = results[0].result;
              resolve(pageTitle);
            }
          );
        } else {
          resolve(pageTitle);
        }
      });
    });
  }

  // Przykład użycia funkcji getPageTitle()
  getPageTitle()
    .then((pageTitle) => {
      console.log("Tytuł strony:", pageTitle);
      // Tutaj możesz użyć zmiennej pageTitle do zapisania linku
    })
    .catch((error) => {
      console.error("Błąd podczas pobierania tytułu strony:", error);
    });

  async function getPageTitles() {
    const tabs = await getAllOpenTabs();
    const pageTitles = [];

    for (const tab of tabs) {
      let pageTitle = tab.title;

      if (!pageTitle.trim()) {
        const results = await chrome.scripting.executeScript({
          target: { tabId: tab.id },
          function: () => {
            const h1 = document.querySelector("h1");
            const h2 = document.querySelector("h2");
            return h1 ? h1.textContent : h2 ? h2.textContent : "";
          },
        });
        pageTitle = results[0].result;
      }

      pageTitles.push({
        tabId: tab.id,
        pageTitle: pageTitle,
      });
    }

    return pageTitles;
  }

  // Przykład użycia funkcji getPageTitles()
  getPageTitles()
    .then((pageTitles) => {
      console.log("Tytuły stron:", pageTitles);
      // Tutaj możesz użyć tablicy pageTitles do zapisania linków
    })
    .catch((error) => {
      console.error("Błąd podczas pobierania tytułów stron:", error);
    });
});
