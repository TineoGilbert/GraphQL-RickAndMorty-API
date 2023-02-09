import React from 'react'
import {useParams} from "react-router-dom"
import { useSingleCharacter } from '../Hooks/useSingleCharacter'
import "./Single.css";

const SingleCharacter = () => {
    const {id} = useParams()

    const {error, loading, data} = useSingleCharacter(id);


    if(loading) return "Loading...."
    
  return (
    <div className='Character'>
        <img src={data.character.image} width={600} height={600} />
        <div className='Character-content'>
            <h1>{data.character.name}</h1>
            <p>{data.character.gender}</p>
            <div className='Character-episode'>
              {data.character.episode.map((episode) => {
                return <div>
                    {episode.name} - <b>{episode.episode}</b>
                </div>
              })}
            </div>
        </div>
    </div>
  )
}

export default SingleCharacter