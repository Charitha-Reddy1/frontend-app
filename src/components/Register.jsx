import {Link} from 'react-router-dom'

function Register(){
    return (
    <div>
    <h1>Registration Page</h1>
    <p><input type="text" placeholder="Name"></input></p>
    <p><input type="text" placeholder="Email"></input></p>
    <p><input type="password" placeholder="Password"></input></p>
    <p><button>Submit</button></p>
    <p><Link to='/login'>Already a User?Click to Login Here</Link></p>
    </div>
)
}

export default Register