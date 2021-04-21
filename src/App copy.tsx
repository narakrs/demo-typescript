import React from 'react';
import logo from './logo.svg';
import './App.css';
import Opp from './component/Opp';
function App() {
  const tablelog= (title:string)=>{
    console.log(title);
  }
  return (
    <div className="App">
      Thanh Se
      <Opp title="jjj" onLoggg={(title)=>tablelog(title)}></Opp>
    </div >
  );
}

export default App;
