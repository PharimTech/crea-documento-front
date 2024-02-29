import GridComponent from "./components/grilla";
import Navbar from "./components/navbar";
import VariableList from "./view/VariablesCreate/viewVariablesCreate";
import React, { useState } from 'react';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <VariableList></VariableList>
      <GridComponent></GridComponent>
    </div>
  );
}

export default App;



