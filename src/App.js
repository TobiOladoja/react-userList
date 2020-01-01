import React from 'react';
import './App.css';

const App = () => (
  // App Component
  // In this app function we're going to render the PersonList
  <PersonList />
);

const PersonList = () => {
  // PersonList Component
  // Not passing props here, only to person component.
  // Gonna render the Person  component
  return <Person> </Person>;
};

const Person = () => {
  // Person Component
  // Most of our work will be done here in the Person
  const url = 'https://randomuser.me/api/portraits/thumb/men/75.jpg';

  return (
    <div className='person'>
      <img src={url} alt='' />
      <div>
        <h4>Name</h4>
        <h4>Job</h4>
      </div>
    </div>
  );
};

export default App;
