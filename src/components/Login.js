import React, {useState} from 'react'
import Navbar from './Navbar'
import {Link} from 'react-router-dom'
import '../sass/variable.scss'
import '../sass/login.scss'


const Login = (props) => {
    const initialFormState = {"email":"", "password":""}
    const [user, setUser] = useState(initialFormState)
    const [error, setError] = useState('')
    
    const handleInputChange = (event) => {
        const {name, value} = event.target
        setUser({...user, [name]:value})
    }

    const login = user => {
    const url = `${process.env.REACT_APP_URL}users/login`
        fetch(url, {
            method: "POST",
            body:JSON.stringify(user),
            headers:{"Content-Type": "application/json"}
        })
            .then(response => {
                return response.json()
            })
            .then(user => {
                localStorage.setItem('username', user.user.username);
                localStorage.setItem('token', user.token)
                localStorage.setItem('id', user.user._id)
                console.log(user)
                props.history.push('/destination')
                return user
            
            }).catch(error => setError('Your login information is incorrect'))    
    }
    console.log(error)

    return(
        <div className="login-page">
            <Navbar />
            <form 
                className="login" 
                onSubmit={event => {
                    event.preventDefault();
                    login(user)
                }}>
                <div className="flex-login">
                    <h1>Login</h1>
                    <input 
                        type="email"
                        placeholder="Email"
                        value={user.email}
                        name="email"
                        onChange={handleInputChange}
                        className="email"
                    />
                    <input 
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={user.password}
                        onChange={handleInputChange}
                        className="email"
                    />
                    <p>{error}</p>
                    <button 
                        className="submit"
                        type="submit"
                    >
                        Submit
                    </button>
                    <Link className='signup' to="/register">Register</Link>
                </div>
            </form>
        </div>
    )
}


export default Login

//make a state called username and password
//make a form
//on the form make a handleSubmit with e.preventDefault
//make inputs called username and password
//make a button at the end that submits the changes. Type Submit. Function login.
//make an onClick on button that is login
//make a fetch that logins to the user and if it is sucessful than make it a new component that says Sucess
//if not make it say not not successful