import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const Jobs = ({job}) => {
  const {id, title, dates, duties, company} = job;
  return (
          <article className="job-info" key={id}>
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date">{dates}</p>
            {
              duties.map((duty,index) => {
                return (
                  <div key={index} className="job-desc">
                    <FaAngleDoubleRight className="job-icon"/>
                    <p>{duty}</p>
                  </div>
                )
              } 
              )
            }

          </article>
  );
};



export default Jobs;
