import React from 'react'
import { Routes, Route} from "react-router-dom"
import CharacterList from '../Pages/CharacterList'
import Search from '../Pages/Search'
import SingleCharacter from '../Pages/SingleCharacter'
const RouteApp = () => {
  return (
    <>
     <Routes>
        <Route path='/' element={<CharacterList/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/:id' element={<SingleCharacter/>}/>

     </Routes>
    </>
  )
}

export default RouteApp