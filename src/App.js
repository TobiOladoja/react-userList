import React from 'react';
import './App.css';

// App Component, the app is here just to be rendered. In this app function we're going to render the PersonList
const App = () => (
  // Blank
  <PersonList />
);

// PersonList Component Not passing props here, only to person component. Gonna render the Person  component
const PersonList = () => {
  // Created an array where we will place people, and within the array there will be an object
  const people = [
    {
      img: 22,
      name: 'john',
      job: 'developer'
    },
    {
      img: 34,
      name: 'sam',
      job: 'footballer'
    },
    {
      img: 56,
      name: 'tony',
      job: 'customer service assistant'
    }
  ];

  return (
    <section>
      {/* Essentially just duplicated person component three times*/}
      <Person />
      <Person />
      <Person />
    </section>
  );
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
