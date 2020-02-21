import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { SmurfContext } from "../context/SmurfContext";
import SmurfForm from "./SmurfForm";
import SmurfList from "./SmurfList";

const App = () => {
  const [smurfs, setSmurfs] = useState();

  useEffect(() => {
    axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      console.log(response);
      setSmurfs(response.data);
      
    });
  }, []);

  const Add = smurf => {
    axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(response => {
      setSmurfs(response.data);
    });
  };

  return (
    <SmurfContext.Provider value={{ smurfs, setSmurfs, Add}}>
      <div className='App'>
        <h1>Village of the Smurfs</h1>
        <SmurfList />
        <SmurfForm />
      </div>
    </SmurfContext.Provider>
  );
};
export default App;