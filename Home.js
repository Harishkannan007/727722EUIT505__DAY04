import React from 'react'
import './Home.css';
import Navbar from './Navbar';
function Home() {
  return (
    <div>
      {/* <Navbar/> */}
  <header class="header">
    <a href="#" class="logo">HomeGarden</a>
    <nav class="nav-items">
      <a href="#">Garden Planning</a>
      <a href="#">Season</a>
      <a href="#">Remainder</a>
      <a href="#">Garden Journal</a>
      <a href="#">About</a>
      <a href="#">Contact</a> 
      <a href="Login">Login</a>
      <a href="Reg">Register</a>
    </nav>
  </header>
  <main>
    <div class="intro">
      <h1>Welcome</h1>
      <p></p>
      <button>Explore</button>
    </div>
    <div class="about-me">
    </div>
    </main>
  
  </div>
)
}

export default Home



