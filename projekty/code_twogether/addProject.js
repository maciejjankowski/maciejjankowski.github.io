import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProject() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [language, setLanguage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newProject = {
      title,
      description,
      technologies,
      difficulty,
      language,
    };

    try {
      const response = await fetch("/projects/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProject),
      });

      if (response.ok) {
        navigate("/");
      } else {
        console.error("Błąd dodawania projektu:", response.status);
      }
    } catch (error) {
      console.error("Błąd dodawania projektu:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* ... (pola formularza) */}
      <button type="submit">Dodaj projekt</button>
    </form>
  );
}

export default AddProject;
