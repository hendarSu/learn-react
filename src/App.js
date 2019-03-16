import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const App = props => {

  const [personsState, setPersionsState ] = useState({
      persons: [
        { name:'Maz', age:28 },
        { name:'Maz 2', age:24 },
        { name:'Maz 3', age:25 }
      ]
  });

  const [otherState, setOtherState ] = useState('some other value')

  console.log(personsState, otherState);
  
  const switchNameHandler = (newName) => {
      // console.log('was clicked!!');
      setPersionsState({
        persons: [
          { name:newName, age:28 },
          { name:'Maz 2', age:24 },
          { name:'Maz 3', age:50 }
      ],
      otherState: personsState.otherState
      
    }); // untuk merubah nilai setPersionsState jangan personsState
  }

  const nameChangeHandler = (event) => {
    setPersionsState({
      persons: [
        { name: 'Hendar', age:28 },
        { name: event.target.value, age:24 },
        { name:'Maz 3', age:50 }
    ]});
  }

  const style = {
    backgroundColor : 'white',
    font : 'inherit',
    border : '1px solid blue',
    padding:'8px',
    cursor: 'pointer'
  }

  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hi, I'am a React App</h1>  
        <p>This is Realy working!!</p>  
        <button
          style={style}  
          onClick={() => switchNameHandler('Hendar')}>Swicth Name</button> 
        <Person 
          name={personsState.persons[0].name} 
          age={personsState.persons[0].age} />
        <Person 
          name={personsState.persons[1].name} 
          age={personsState.persons[1].age} 
          click={switchNameHandler.bind(this, 'Kamu')}
          changed={nameChangeHandler}>My Hobby Run</Person>   
        <Person 
          name={personsState.persons[2].name} 
          age={personsState.persons[2].age} />
    </div>
  );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', '',"Hi, I'am a React App"));
}

export default App;
