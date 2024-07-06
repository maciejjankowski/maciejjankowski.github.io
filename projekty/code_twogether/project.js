// project.js

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Project() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    // Pobierz dane projektu z serwera na podstawie projectId
    fetch(`/api/projects/${projectId}`)
      .then((response) => response.json())
      .then((data) => setProject(data))
      .catch((error) =>
        console.error("Błąd pobierania danych projektu:", error)
      );

    // Sprawdź, czy użytkownik dołączył do projektu
    // (przykładowa logika, dostosuj do swojego backendu)
    fetch(`/api/projects/${projectId}/members`)
      .then((response) => response.json())
      .then((members) => setJoined(members.includes(userId))) // userId to ID zalogowanego użytkownika
      .catch((error) => console.error("Błąd sprawdzania członkostwa:", error));
  }, [projectId]);

  const handleJoinProject = () => {
    // Wyślij żądanie dołączenia do projektu
    fetch(`/api/projects/${projectId}/join`, { method: "POST" })
      .then((response) => {
        if (response.ok) {
          setJoined(true);
        } else {
          console.error("Błąd dołączania do projektu:", response.status);
        }
      })
      .catch((error) => console.error("Błąd dołączania do projektu:", error));
  };

  const handleLeaveProject = () => {
    // Wyślij żądanie opuszczenia projektu
    fetch(`/api/projects/${projectId}/leave`, { method: "POST" })
      .then((response) => {
        if (response.ok) {
          setJoined(false);
        } else {
          console.error("Błąd opuszczania projektu:", response.status);
        }
      })
      .catch((error) => console.error("Błąd opuszczania projektu:", error));
  };

  if (!project) {
    return <div>Ładowanie...</div>;
  }

  return (
    <div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>

      <h3>Technologie:</h3>
      <ul>
        {project.technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <h3>Opiekun:</h3>
      <p>{project.owner.name}</p>

      <h3>Członkowie:</h3>
      <ul>
        {project.members.map((member) => (
          <li key={member.id}>{member.name}</li>
        ))}
      </ul>

      {joined ? (
        <button onClick={handleLeaveProject}>Opuść projekt</button>
      ) : (
        <button onClick={handleJoinProject}>Dołącz do projektu</button>
      )}

      {/* Tutaj możesz dodać sekcję z linkami do Visual Studio Live Share, Glitch.com, repozytorium GitHub lub zaproszenia Discord */}
    </div>
  );
}

export default Project;
