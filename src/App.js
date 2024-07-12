import React from 'react';
import './App.css';


import Jobs from './jobs';
import job from './job';

const mockjobsjobs = [
  {title: 'SWE 1', company:'Google'}
]

function App() {
  return (
    <div className="App">
      <Jobs jobs = {mockjobsjobs} />
    </div>
  );
}

export default App;
