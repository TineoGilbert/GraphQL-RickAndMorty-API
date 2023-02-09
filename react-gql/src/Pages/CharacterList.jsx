import React from 'react'
import {Link} from "react-router-dom"
import useCharacter from '../Hooks/useCharacter';
import "./Character.css";
import Navbar from './Navbar';


const CharacterList = () => {

    const {error, loading, data} = useCharacter();

    

    if(loading) return "Loading......"
  return (
    <>
        <Navbar/>
        <div className='Character'>
        
        {
            data.characters.results.map((character) =>{
                return(
                    <Link to={`/${character.id}`} key={character.id}>
                        <img src={character.image} alt="image" />
                        <h2>{character.name}</h2>
                    </Link>
                )
            })
        }
    </div>
    </>
  )
}

export default CharacterList