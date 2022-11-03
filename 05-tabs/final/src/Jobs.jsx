import React, { useState } from "react";
import JobInfo from "./JobInfo";

const Jobs = ({ jobs }) => {
  const [jobIndex, setJobIndex] = useState(0);

  return (
    <div className="jobs-center">
      {/* btn container */}
      <div className="btn-container">
        {jobs.map((item, index) => {
          return (
            <button
              key={item.id}
              className={`job-btn ${index === jobIndex && 'active-btn'}`}
              onClick={() => setJobIndex(index)}
            >
              {item.company}
            </button>
          );
        })}
      </div>

      {/* Job Info */}
      <JobInfo job={jobs[jobIndex]} />
    </div>
  );
};

export default Jobs;
