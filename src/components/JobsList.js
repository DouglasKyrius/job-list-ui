import React from 'react'

// Components
import Job from './Job';
// Data
import { jobsAvailable } from '../data/data';

const JobsList = () => {
  return(
    jobsAvailable.map(job => (
      <Job 
        key={job.id} 
        Company={job.company} 
        Position={job.title} 
        DatePosted={job.datePosted} 
        Location={job.location}
      />
    ))
  );
}

export default JobsList;
