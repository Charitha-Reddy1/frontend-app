import {Link} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Register(){
    const [user,setUser]=useState({})
    const API_URL=import.meta.env.VITE_API_URL
    const Navigate=useNavigate()
    const handleSubmit=async (e)=>{
        e.preventDefault()

    try {

        const url=API_URL+"/auth/signup"
        const res= await axios.post(url,user)

        if (response.data.error) {
            alert(response.data.error)
            return
        }

        Navigate("/login")

    }
    catch (error) {
    console.log(error)
    alert("Registration failed")
    }
}
    return (
    <form  onSubmit={handleSubmit}>
    <div>
    <h1>Registration Page</h1>
    <p><input type="text" onChange={(e)=>setUser({...user,name:e.target.value})} placeholder="Name"></input></p>
    <p><input type="text" onChange={(e)=>setUser({...user,email:e.target.value})} placeholder="Email"></input></p>
    <p><input type="password" onChange={(e)=>setUser({...user,password:e.target.value})} placeholder="Password"></input></p>
    <p><button type="submit">Submit</button></p>
    <p>Already a User?👇🏻</p>
    <p><Link to='/login'>Click to Login Here</Link></p>
    </div>
    </form>
)
}

export default Register