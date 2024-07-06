import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { io } from "socket.io-client";

function App() {
  const [onlineProjects, setOnlineProjects] = useState([]);

  useEffect(() => {
    const socket = io();

    socket.on("connect", () => {
      console.log("Połączono z serwerem Socket.IO");
    });

    socket.on("online_projects", (projects) => {
      setOnlineProjects(projects);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/projects">Znajdź projekt</Link>
          </li>
          <li>
            <Link to="/projects/add">Dodaj projekt</Link>
          </li>
        </ul>
      </nav>

      <h2>Dostępne projekty (opiekun online)</h2>
      <ul>
        {onlineProjects.map((project) => (
          <li key={project.id}>
            <Link to={`/projects/${project.id}`}>{project.title}</Link>
          </li>
        ))}
      </ul>

      <Outlet />
    </div>
  );
}

export default App;
