// scripts/search.js

document.addEventListener("DOMContentLoaded", function () {
  const projectList = document.getElementById("projectList");
  const technologyFilter = document.getElementById("technology");
  const difficultyFilter = document.getElementById("difficulty");
  const languageFilter = document.getElementById("language");
  const applyFiltersButton = document.getElementById("applyFilters");

  let projects = []; // Tablica przechowująca wszystkie projekty

  // Pobierz dane projektów z serwera (przykładowe dane)
  fetch("projects.json") // Zastąp 'projects.json' adresem URL swojego API
    .then((response) => response.json())
    .then((data) => {
      projects = data;
      displayProjects(projects);
    })
    .catch((error) => console.error("Błąd pobierania danych:", error));

  // Funkcja wyświetlająca projekty na stronie
  function displayProjects(projectsToDisplay) {
    projectList.innerHTML = ""; // Wyczyść listę projektów

    projectsToDisplay.forEach((project) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <h3><a href="/project/${project.id}">${project.title}</a></h3>
        <p>${project.description}</p>
        <ul class="project-details">
          <li><strong>Technologia:</strong> ${project.technology}</li>
          <li><strong>Poziom trudności:</strong> ${project.difficulty}</li>
          <li><strong>Język:</strong> ${project.language}</li>
        </ul>
      `;
      projectList.appendChild(listItem);
    });
  }

  // Funkcja filtrująca projekty
  function filterProjects() {
    const selectedTechnology = technologyFilter.value;
    const selectedDifficulty = difficultyFilter.value;
    const selectedLanguage = languageFilter.value;

    const filteredProjects = projects.filter((project) => {
      const matchesTechnology =
        !selectedTechnology || project.technology === selectedTechnology;
      const matchesDifficulty =
        !selectedDifficulty || project.difficulty === selectedDifficulty;
      const matchesLanguage =
        !selectedLanguage || project.language === selectedLanguage;

      return matchesTechnology && matchesDifficulty && matchesLanguage;
    });

    displayProjects(filteredProjects);
  }

  // Obsługa kliknięcia przycisku "Zastosuj filtry"
  applyFiltersButton.addEventListener("click", filterProjects);
});
