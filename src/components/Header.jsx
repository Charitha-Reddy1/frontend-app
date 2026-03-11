import './Header.css'
import {Link} from  "react-router-dom"

function Header(){
    return (
    <div class='App-Header'>
                <h1>My React Application</h1>
                <ol>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/orders">Order</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                </ol>
            </div>
    )
}

export default Header