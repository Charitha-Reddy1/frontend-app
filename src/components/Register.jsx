import {Link} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Register(){
    const [user,setUser]=useState({})
    const API_URL=import.meta.env.VITE_API_URL
    const Navigate=useNavigate()
    const handleSubmit=async ()=>{
        const url=API_URL+"/auth/signup"
        const res= await axios.post(url,user)
        Navigate("/login")
    };
    return (
    <div>
    <h1>Registration Page</h1>
    <p><input type="text" onChange={(e)=>setUser({...user,name:e.target.value})} placeholder="Name"></input></p>
    <p><input type="text" onChange={(e)=>setUser({...user,email:e.target.value})} placeholder="Email"></input></p>
    <p><input type="password" onChange={(e)=>setUser({...user,password:e.target.value})} placeholder="Password"></input></p>
    <p><button onClick={handleSubmit}>Submit</button></p>
    <p><Link to='/login'>Already a User?Click to Login Here</Link></p>
    </div>
)
}

export default Register