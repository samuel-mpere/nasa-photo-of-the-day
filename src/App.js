import React, {useState, useEffect} from "react";
import axios from 'axios';
// import Cart from './Cart';
// import Fruits from './Fruits';
import './App.css';

const placeHolderApi = 'https://lambda-github-api-server.herokuapp.com/';


function App() {

  const [photo, setPhoto] = useState([]);

  //const method to render child components

  useEffect(() => {
    console.log('faut que ca marche!')
  });

  useEffect (() => {
    axios.get(placeHolderApi)
    .then(response => {
      //method to render child components.response.data
    })
    .catch(error => {
      'Error!', error
    });
  }, []);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
