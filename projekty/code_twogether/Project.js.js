import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Project() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [joined, setJoined] = useState(false);
  const [joinRequestSent, setJoinRequestSent] = useState(false);
  const [ownerOnline, setOwnerOnline] = useState(false);
  const [linksVisible, setLinksVisible] = useState(false);

  useEffect(() => {
    // Pobierz dane projektu z serwera
    fetch(`/projects/${projectId}`)
      .then((response) => response.json())
      .then((data) => setProject(data))
      .catch((error) =>
        console.error("Błąd pobierania danych projektu:", error)
      );

    // Sprawdź, czy użytkownik dołączył do projektu
    fetch(`/projects/${projectId}/members`)
      .then((response) => response.json())
      .then((members) => setJoined(members.includes(userId))) // userId to ID zalogowanego użytkownika
      .catch((error) => console.error("Błąd sprawdzania członkostwa:", error));

    // Nasłuchuj na powiadomienia SocketIO
    const socket = io();
    socket.on("connect", () => {
      socket.emit("join_project_room", projectId);
    });
    socket.on("owner_online", () => setOwnerOnline(true));
    socket.on("owner_offline", () => setOwnerOnline(false));
    socket.on("join_request_approved", () => {
      setJoined(true);
      setLinksVisible(true);
    });

    return () => {
      socket.emit("leave_project_room", projectId);
      socket.disconnect();
    };
  }, [projectId]);

  const handleJoinRequest = () => {
    fetch(`/projects/${projectId}/join`, { method: "POST" })
      .then((response) => {
        if (response.ok) {
          setJoinRequestSent(true);
        } else {
          console.error("Błąd wysyłania prośby o dołączenie:", response.status);
        }
      })
      .catch((error) =>
        console.error("Błąd wysyłania prośby o dołączenie:", error)
      );
  };

  const handleLeaveProject = () => {
    // ... (kod opuszczania projektu - bez zmian)
  };

  if (!project) {
    return <div>Ładowanie...</div>;
  }

  return (
    <div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>

      {/* ... (pozostałe dane projektu) */}

      {joined ? (
        <button onClick={handleLeaveProject}>Opuść projekt</button>
      ) : (
        <>
          {ownerOnline ? (
            <button onClick={handleJoinRequest} disabled={joinRequestSent}>
              {joinRequestSent ? "Prośba wysłana" : "Dołącz do projektu"}
            </button>
          ) : (
            <p>Opiekun projektu jest offline. Nie można dołączyć.</p>
          )}
        </>
      )}

      {linksVisible && (
        <div>
          <h3>Linki do projektu:</h3>
          {/* ... (wyświetl linki do Visual Studio Live Share, Glitch.com, GitHub, Discord) */}
        </div>
      )}
    </div>
  );
}

export default Project;
