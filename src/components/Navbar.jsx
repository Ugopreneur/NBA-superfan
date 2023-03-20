import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        backgroundColor: 'black'
      }}
    >
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
        <li style={{ marginRight: '10rem', fontSize:"28px" }}>
          <Link
            to="/teams"
            style={{
              textDecoration: 'none',
              color: 'white',
            }}
          >
            Teams
          </Link>
        </li>
        <li style={{ marginRight: '10rem', fontSize:"28px" }}>
          <Link
            to="/all-stars"
            style={{
              textDecoration: 'none',
              color: 'white',
            }}
          >
            All Stars
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
