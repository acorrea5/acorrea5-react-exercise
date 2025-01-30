import React from 'react'
import { Link } from "react-router-dom";

function Home() {

  return (
      <div className="home-container">
        <h1>This is the Home page.</h1>
        <ol>
          <li><Link to='/exercise_01'>Exercise 1</Link></li>
          <ul>
            <li>Dynamic Routing</li>
            <li>Functional and Class Components</li>
          </ul>
          <li><Link to='/exercise_02'>Exercise 2</Link></li>
        </ol>
      </div>
  );
}

export default Home;
