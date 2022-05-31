import React from 'react';
import { Link } from "react-router-dom";

export default function App() {
  return (
      <div>
          <h1>Welcome to Geopardy</h1>
          <nav 
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
        >
          <Link to="/game">Game</Link> |{" "}
          <Link to="/userpage">User Page</Link> |{" "}
          <Link to="/about">About</Link>
        </nav>
      </div>
  );
}