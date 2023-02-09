import React from 'react' 
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    
     <nav class="navbar navbar-expand-lg navbar-light bg-light mb-10" >
  <div class="container-fluid">
    <a class="navbar-brand" href="#"> <b>GraphQL</b> Rick and Morty</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"> <Link to="/search">Search Character</Link></a>
        </li>
      
      </ul>
      <span class="navbar-text">
       API Rick and Morty
      </span>
    </div>
  </div>
</nav>
   
  )
}

export default Navbar