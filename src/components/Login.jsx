import {Link} from 'react-router-dom'
import {useState} from 'react'

function Login(){
    const [user,setUser]=useState({})
    return (
    <div>
        <h1>Login Page</h1>
        <p><input type="text" placeholder="Email"></input></p>
        <p><input type="password" placeholder="Password"></input></p>
        <p><button>Login</button></p>
        <p><Link to='/register'>New User?Click to Register Here</Link></p>
    
    </div>
    );
}

export default Login