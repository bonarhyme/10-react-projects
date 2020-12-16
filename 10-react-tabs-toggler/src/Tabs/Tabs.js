import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import "./Tabs.css";

const url = "https://course-api.com/react-tabs-project";

const Tabs = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setJobs(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <h1>Loading.....</h1>;
  }

  const { company, dates, duties, id, order, title } = jobs[value];

  return (
    <section>
      <div className="container">
        <div className="header">
          <h1>Experience</h1>
          <div className="underline" />
        </div>
        <article key={id}>
          <div className="buttons">
            {jobs.map((job, i) => {
              return (
                <button
                  key={id + 7}
                  onClick={() => setValue(i)}
                  className={i === value && "active"}
                >
                  {job.company}
                </button>
              );
            })}
          </div>
          <div className="content">
            <h2>{title}</h2>
            <h3>{company}</h3>
            <div className="duties-container">
              {duties.map((duty, index) => {
                return (
                  <div key={index + 30} className="duties">
                    <FaAngleDoubleRight />
                    <p>{duty} </p>
                  </div>
                );
              })}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Tabs;
