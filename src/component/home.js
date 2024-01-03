import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>TO-DO APP</h1>
      <Link to="/todos">
        <button>Let's Go</button>
      </Link>
    </div>
  );
}
export default Home;
