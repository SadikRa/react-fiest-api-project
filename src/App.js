import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './conponent/Countries/Countries';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
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
    <div  className='divStyle'> 
   {countries.map(country => <Country name={country.name.common} population={country.population} flags={country.flags.png}></Country> )}
   </div>
   </div>
  )
}

function Country(props) {
  return(
    <div className='styleBox'>

    <h1>Name: {props.name}</h1>
    <h4>population: {props.population}</h4>
    <img src={props.flags} alt="" />
    
    </div>
  )
}
export default App;
