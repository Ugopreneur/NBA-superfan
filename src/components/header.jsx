import {Link} from "react-router-dom";
import {useState} from "react";

export default function Header() {
  const [click] = useState(true);
 

  return (
    <div>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/exercises">
          <li>Exercises</li>
        </Link>
       
      </ul>
      </div>

  );
}