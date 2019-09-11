import React, {useState, useEffect} from "react"
import axios from 'axios';
import './App.css';
import Photo from './Components/Photo';
import Details from './Components/Details';


const nasaApi = 'https://api.nasa.gov/planetary/apod?api_key=S2uKImruqWbDh0npoFiO4tmQ3y8WaPlTRymhMSnG';

function App() {
 
  const [components, setComponents] = useState({});

  useEffect (() => {
    axios.get(nasaApi)
    .then(response => {
      setComponents(response.data)
    })
    .catch(error => {
      console.log('error');
    });
  }, []);

  const{title, url, date,  explanation} = components;

  return (
    <div className="App">
      <Photo image={url}/>
      <div>
        <Details title={title} date={date} explanation={explanation}/>
      </div>

      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}
    </div>
  );
}

export default App;
