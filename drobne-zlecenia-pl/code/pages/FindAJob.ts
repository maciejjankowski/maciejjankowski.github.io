import { useEffect, useState } from "react";

const FindAJob = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("/api/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Find a Job</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <h2>{job.title}</h2>
            <p>{job.description}</p>
            <p>{job.location}</p>
            <p>{job.salary}</p>
            <p>{job.benefits}</p>
            <p>{job.contact}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FindAJob;
