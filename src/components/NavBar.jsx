import { Link } from "react-router-dom";


const NavBar = () => {
return (
  <nav>
    <ul className="nav-bar">
      <li>
        <Link to='/home'>Home</Link>
      </li>
      <li>
        <Link to='/About'>About</Link>
      </li>
      <li>
        <Link to='/WeaponsVault'>Weapons</Link>
      </li>
      <li>
        <Link to='/inventory'>Your Inventory</Link>
      </li>
    </ul>
  </nav>
);

};

export default NavBar;