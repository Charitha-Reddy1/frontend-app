import "./Header.css";
import { Link } from "react-router-dom";
import { AppContext } from "../App";
import { useContext } from "react";
import logo from "./starlogo.png";
//import {AppContext} from '../App'


function Header() {
  const { user } = useContext(AppContext);
  return (
    <div className="App-Header">
      <h1>The StarBucks Store</h1>
      <img src={logo} className="logo" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        
        {user?.email ? (
          <>
            <li>
              <Link to="/orders">Orders</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </div>
  );
}
export default Header;