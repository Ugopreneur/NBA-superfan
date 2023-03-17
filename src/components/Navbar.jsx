import {Link} from "react-router-dom";
// import {useState} from "react";

function Navbar() {
  // const [useState] = useState(true);
 

  return (
    <div>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/Teams">
          <li>Teams</li>
        </Link>
        <Link to="/AllStars">
          <li>AllStars</li>
        </Link>
      </ul>
      </div>

  );
}

export default Navbar;