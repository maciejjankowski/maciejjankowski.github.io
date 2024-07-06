import React, { useState, useEffect } from "react";

function Search() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [technologyFilter, setTechnologyFilter] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("");
  const [languageFilter, setLanguageFilter] = useState("");

  useEffect(() => {
    // Pobierz dane projektów z serwera
    fetch("/projects")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setFilteredProjects(data);
      })
      .catch((error) => console.error("Błąd pobierania danych:", error));
  }, []);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;

    if (name === "technology") {
      setTechnologyFilter(value);
    } else if (name === "difficulty") {
      setDifficultyFilter(value);
    } else if (name === "language") {
      setLanguageFilter(value);
    }

    filterProjects();
  };

  const filterProjects = () => {
    const filtered = projects.filter((project) => {
      const matchesTechnology =
        !technologyFilter || project.technology === technologyFilter;
      const matchesDifficulty =
        !difficultyFilter || project.difficulty === difficultyFilter;
      const matchesLanguage =
        !languageFilter || project.language === languageFilter;

      return matchesTechnology && matchesDifficulty && matchesLanguage;
    });

    setFilteredProjects(filtered);
  };

  return (
    <div>
      <h2>Znajdź projekt</h2>

      <div className="filters">
        <h3>Filtry</h3>
        <label htmlFor="technology">Technologia:</label>
        <select
          id="technology"
          name="technology"
          value={technologyFilter}
          onChange={handleFilterChange}
        >
          <option value="">Wszystkie</option>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
        </select>

        <label htmlFor="difficulty">Poziom trudności:</label>
        <select
          id="difficulty"
          name="difficulty"
          value={difficultyFilter}
          onChange={handleFilterChange}
        >
          <option value="">Wszystkie</option>
          <option value="beginner">Początkujący</option>
          <option value="intermediate">Średniozaawansowany</option>
          <option value="advanced">Zaawansowany</option>
        </select>

        <label htmlFor="language">Język programowania:</label>
        <select
          id="language"
          name="language"
          value={languageFilter}
          onChange={handleFilterChange}
        >
          <option value="">Wszystkie</option>
          <option value="pl">Polski</option>
          <option value="en">Angielski</option>
        </select>
      </div>

      <div className="projects">
        <h3>Dostępne projekty</h3>
        <ul id="projectList">
          {filteredProjects.map((project) => (
            <li key={project.id}>
              <h3>
                <a href={`/projects/${project.id}`}>{project.title}</a>
              </h3>
              <p>{project.description}</p>
              <ul className="project-details">
                <li>
                  <strong>Technologia:</strong> {project.technology}
                </li>
                <li>
                  <strong>Poziom trudności:</strong> {project.difficulty}
                </li>
                <li>
                  <strong>Język:</strong> {project.language}
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Search;
