import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect, useContext, createContext } from "react";
import { Searchbar } from './components/searchbar'
//import TextField from "@mui/material/TextField";

/*const movies = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'}
] */
export const MovieApiContext = createContext({});

export const MovieProvider = (props) => {
  const [movieData, setMovieData] = useState(null);
  useEffect(() => {
    async function fetchAPI() {
      const res = await fetch('http://localhost:8083/');
      const posts = await res.json();
    }
    fetchAPI();
  }, [])
  return <MovieApiContext.Provider value={movieData}></MovieApiContext.Provider>
};

export default function App() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8083/')
        .then(res => res.json())
        .then(data =>
            setMovieData(data)
            )  
  }, []);

  return (
    /*
    <> 
    <h1> Movies </h1>
    <div> 
      {movieData.length > 0 && (
        <ul>
          {movieData.map(movies => (
            <li key={movies.title}>{movies.title}</li>
          ))}
        </ul>
      )}
    </div>
    </> */

    <>
    <Router>
        <Routes>
          <Route exact path="/" element={<Searchbar />} />
        </Routes>
    </Router>
    </> 
  );
}

//export default App;
