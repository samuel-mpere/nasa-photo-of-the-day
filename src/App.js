import React, {useState, useEffect} from "react"
import axios from 'axios';
import styled from 'styled-components';
import {Details, Photo} from './Components';
// import './App.css';

const nasaApi = 'https://api.nasa.gov/planetary/apod?api_key=S2uKImruqWbDh0npoFiO4tmQ3y8WaPlTRymhMSnG';

function App() {
 
  const [components, setComponents] = useState({});

  useEffect (() => {
    axios.get(nasaApi)
    .then(response => {
      setComponents(response.data)
    })
    .catch(error => {
      console.log (error);
    });
  }, []);

  const{title, url, date,  explanation} = components;

  
    
  const ContainerStyle = styled.div`

  display: flex;
  padding: 80px;
  background-image: linear-gradient(#141E30, #243B55);
  vertical-align: baseline;
  `


  return (
    <div className="App">
      <ContainerStyle>
        <div>
          <Photo image={url}/>
        </div>
        <div>
          <Details title={title} date={date} explanation={explanation}/>
        </div>
      </ContainerStyle>

      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}
    </div>
  );
}

export default App;