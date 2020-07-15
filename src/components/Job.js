import React from 'react';

const Job = ({Company, Position, DatePosted, Location}) => {
  return (
    <div className="job-row">
      <div className="job-inner">
        <div className="company-logo">
          <img src={require(`../assets/${Company}.png`)} alt={`${Company} Logo`} />
        </div>
        <div className="job-description">
          <h3 className="company-name">{Company}</h3>
          <h5 className="position">{Position}</h5>
        </div>
        <div className="job-misc">
          <span className="date">{DatePosted}</span>
          <span className="location">{Location}</span>
        </div>
      </div>
    </div>
  );
}

export default Job;
