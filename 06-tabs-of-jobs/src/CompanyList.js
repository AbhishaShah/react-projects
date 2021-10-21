import React from 'react';

const CompanyList = ({jobs,filterCompany,selectedCompany}) => {
  return (
    <div className="btn-container">
      {
        jobs.map((job,index)=> {
          return (
            <button 
                  type="button" 
                  className={`job-btn ${index === selectedCompany && 'active-btn'}`}
                  key={index}
                  onClick={() => filterCompany(index)}
            >
              {job.company}
            </button>
          )
        })
      }
    </div>
  );
};



export default CompanyList;
