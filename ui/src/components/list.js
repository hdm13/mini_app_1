import { React, useContext } from 'react'
import { MovieApiContext } from '../App'
import { MovieProvider } from '../App';
//import data from "./ListData.json"





export function List(props) {
    const MovieList = () => {
    const { movieData } = useContext(MovieApiContext);
    }    
    //create a new array by filtering the original array
    const filteredData = MovieList.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.text.toLowerCase().includes(props.input)
        }
    })
    return (
        <ul>
            {filteredData.map((movies) => (
                <li key={movies.id}>{movies.title}</li>
            ))}
        </ul>
    )
}

