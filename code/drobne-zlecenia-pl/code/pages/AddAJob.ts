import { useState } from "react";
import { useRouter } from "next/router";

const AddAJob = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [benefits, setBenefits] = useState("");
  const [contact, setContact] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title,
      description,
      location,
      salary,
      benefits,
      contact,
    };

    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.status === 201) {
      router.push("/");
    } else {
      alert("Error adding job");
    }
  };

  return (
    <div>
      <h1>Add a Job</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <br />
        <label htmlFor="salary">Salary:</label>
        <input
          type="text"
          id="salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <br />
        <label htmlFor="benefits">Benefits:</label>
        <input
          type="text"
          id="benefits"
          value={benefits}
          onChange={(e) => setBenefits(e.target.value)}
        />
        <br />
        <label htmlFor="contact">Contact:</label>
        <input
          type="text"
          id="contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <br />
        <button type="submit">Add Job</button>
      </form>
    </div>
  );
};

export default AddAJob;
