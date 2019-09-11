import React, {useState, useEffect} from "react";
import axios from 'axios';
import Table from './Table';
import './App.css';

const placeHolderApi = 'https://api.nasa.gov/api.html#apod';


function App() {

  const [photo, setPhoto] = useState();
  // const [title, seTitle] = useState([]);
  // const [date, setDate] = useState([]);
  // const [description, setDescription] = useState([]);

  const [table, setTable] = useState();

  const fillUpTable = (item) => {
    setTable(table.concat(item));
  }
  
  useEffect(() => {
    console.log('test message!')
  });

  useEffect (() => {
    axios.get(placeHolderApi)
    .then(response => {
      setPhoto(response.data.url)
    })
    // .catch(error => {
    //   'Error!', error
    // });
  }, []);

  return (
    <div className="App">
      <Table items={table}/>

      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}
    </div>
  );
}

export default App;
