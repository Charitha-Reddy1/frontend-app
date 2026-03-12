import {Link} from 'react-router-dom'
import axios from 'axios'
import {useContext} from 'react'
import {AppContext} from '../App'
import {useNavigate} from 'react-router-dom'

function Login(){
    const {user,setUser}=useContext(AppContext)
    const API_URL=import.meta.env.VITE_API_URL
    const Navigate=useNavigate()
    const handleLogin=async ()=>{
        const url=API_URL+"/auth/signin"
        const response= await axios.post(url,user)
        setUser(response)
        Navigate("/")
    };
    return (
    <div>
        <h1>Login Page</h1>
        <p><input type="text" placeholder="Email"></input></p>
        <p><input type="password" placeholder="Password"></input></p>
        <p><button onClick={handleLogin}>Login</button></p>
        <p><Link to='/register'>New User?Click to Register Here</Link></p>
    
    </div>
    );
}

export default Login