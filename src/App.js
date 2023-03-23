import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadCountrys></LoadCountrys>
      
    </div>
  );
}


function LoadCountrys(){
  const [countries, setcountries] = useState([])

  useEffect(() =>{
    fetch(`https://restcountries.com/v3.1/all`)
    .then(res => res.json())
    .then(data => setcountries(data))
  },[])

  return (

    <div>
      <h1>availeable country;{countries.length}</h1>
    </div>
  )
}
export default App;
