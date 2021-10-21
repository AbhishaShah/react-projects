import React, { useState, useEffect } from 'react';
import Loading from "./Loading";
import CompanyList from "./CompanyList";
import Jobs from "./Jobs";


const url = 'https://course-api.com/react-tabs-project';
function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const[companyValue,setCompanyValue] = useState(0);

  const filterCompany = value => {
    setCompanyValue(value);
  }

  const fetchData = async () => {
    setLoading(true);
    try {
      const response =  await fetch(url);
      if(!response.ok){
        throw Error("Not able to fetch the data");
      }
      const data = await response.json();
      setJobs(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData()
  },[]);
 
  const jobWithSelectedCompany= jobs[companyValue];
  
  return ( 
      <main>
      {
       loading && !error ?  <Loading />
        : error ? <div>{error}</div> 
        : jobs.length > 0 && <section className="section">
          <div className="title">
            <h2>Experience</h2>
            <div className="underline"></div>
          </div>
          <div className="jobs-center">
            <CompanyList jobs={jobs} filterCompany={filterCompany} selectedCompany={companyValue}/>
            <Jobs job={jobWithSelectedCompany}/>
          </div>
        </section> 
      }
    </main>
  )
}

export default App
