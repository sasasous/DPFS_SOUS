import { Link } from "react-router-dom";
import Logo from '/src/assets/logo.png'
import './SideBar.css'

export const SideBar = () => {
  return (
    <div className="sidebar">
      <Link to="/"> <img src={ Logo } alt="Logo"/> </Link>

      <ul className= "links">
        <li><Link to="/Catalog"> Catágolo </Link></li>
        <li><Link to="/LastProduct"> Último producto </Link></li>
        <li><Link to="/Counter"> Counter </Link></li>
      </ul>

    </div>
  );
}