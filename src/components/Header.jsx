import './Header.css'
import {Link} from  "react-router-dom"

function Header(){
    return (
    <div className='App-Header'>
                <h1>My React Application</h1>
                <ol>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/orders">Orders</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ol>
            </div>
    )
}

export default Header