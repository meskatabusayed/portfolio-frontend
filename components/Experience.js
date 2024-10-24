// components/Experience.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/experience`);
      setExperiences(response.data);
    };
    fetchExperiences();
  }, []);

  return (
    <div>
      <h2>Experience</h2>
      <ul>
        {experiences.map((exp) => (
          <li key={exp._id}>
            <h3>{exp.title} at {exp.company}</h3>
            <p>{exp.duration}</p>
            <p>{exp.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
