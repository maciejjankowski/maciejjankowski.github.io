// options.js

document.addEventListener("DOMContentLoaded", function () {
  const githubTokenInput = document.getElementById("githubToken");
  const saveButton = document.getElementById("saveButton");

  // Wczytaj zapisany token GitHub z localStorage
  chrome.storage.local.get(["githubToken"], function (result) {
    if (result.githubToken) {
      githubTokenInput.value = result.githubToken;
    }
  });

  // Obsługa zapisywania tokena GitHub
  saveButton.addEventListener("click", function () {
    const githubToken = githubTokenInput.value;

    // Zapisz token GitHub w localStorage
    chrome.storage.local.set({ githubToken: githubToken }, function () {
      // Wyświetl komunikat o sukcesie
      const statusDiv = document.getElementById("status");
      statusDiv.textContent = "Token GitHub zapisany pomyślnie!";
    });
  });
});
