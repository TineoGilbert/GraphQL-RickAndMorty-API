import React from 'react'
import {useState} from "react"
import {gql, useLazyQuery} from "@apollo/client"


const GET_CHARACTERS_BY_SEARCH = gql`
 query GetCharacterBySearch($name: String!){
    characters(filter: {
        name: $name
    }){
        results{
            location{
                name
            }
        }
    }
 }
`;

const Search = () => {

    const [name, setName] = useState("");

    const [getCharacters, {error, loading, data, called}] = useLazyQuery(GET_CHARACTERS_BY_SEARCH, {
        variables: {
            name
        }
    })

    console.log({error, loading, data, called})

  return (
    <div>
        <input type="text" placeholder='Search a character - Ej: Morty Smith' value={name} onChange={(e)=> setName(e.target.value)} class="form-control me-2" required/>
        <button onClick={() => getCharacters()} class="btn btn-outline-success" style={{marginTop: "5px"}}>Search</button>
        {loading && <div>Loading....</div>}
        {data && (
            <ul style={{marginTop: "15px", marginLeft: "140px"}}>
                {data.characters.results.map((character) => {
                    return <div class="card w-75">
                    <div class="card-body">
                      <h5 class="card-title">{character.location.name}</h5>
                     
                    </div>
                  </div>
                  
                })}
            </ul>
        )}

    </div>
  )

}






export default Search