/*
Main/outer container to inject all other application components.
Provided by React
*/
//Import statements to reuse already developed React JS functionalities
import React from 'react';
//Import statement to get the ChartSelector component into App.js
import ChartSelector from './components/ChartSelector';


//Predefined app container where ChartSelector component can be injected
function App() {
  return (
    <div className="App">
      {/* Inject our ChartSelector component here in div */}
      <ChartSelector />
    </div>
  );
}

export default App;
