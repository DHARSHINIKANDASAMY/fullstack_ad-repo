import React from 'react';
import Home from './Home.jsx';
import ClassBasedComponents from './ClassBasedComponent.jsx';
import Nav from './Nav.jsx';
const App=()=>{
  return (
    <div>
       <Nav />
      <Home />
      <ClassBasedComponents />
     
    </div>
  );
}

export default App;