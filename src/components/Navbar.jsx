import React from 'react';
import { Link } from 'react-router-dom';


// define the navbar
const Navbar = () => {

  // return the jsx for the component
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        backgroundColor: '#262626'
      }}
    >
      {/*create a link to the home page */} 
      <div>
        <Link
          to="/" 
          style={{
            marginLeft:"4rem",
            textDecoration: 'none',
            color: 'white',
            fontSize:"28px"
          }}
        >
          Home
        </Link>
      </div>
      <ul
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          listStyleType: 'none',
          padding: 0,
          margin: 0,
        }}
      >
        {/* <li style={{ marginRight: '10rem', fontSize:"25px" }}>
          <Link
            to="/teams"
            style={{
              textDecoration: 'none',
              color: 'white',
            }}
          >
            Teams
          </Link>
        </li> */}
        {/* <li style={{ marginRight: '8rem', fontSize:"25px" }}>
          <Link
            to="/all-stars"
            style={{
              textDecoration: 'none',
              color: 'white'
            }}
          >
            All Stars
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
