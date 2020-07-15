import React from 'react';
import './App.scss';

// Components
import JobsList from './components/JobsList';

function App() {
  return (
    <main className="main">
      <div className="container">
        <div className="job-container">
          <JobsList />
        </div>
      </div>
    </main>
  );
}

export default App;
