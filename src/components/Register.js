import React, {useState} from 'react'
import Navbar from './Navbar'
import {Link} from 'react-router-dom'
import '../sass/login.scss'

const Register = (props) => {
    const initialFormState = {email:"", password:"", username:""};
    const [user, setUser] = useState(initialFormState)
    const [error, setError] = useState('')

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setUser({...user, [name]: value})
    }

    const register = user => {
        const url = `${process.env.REACT_APP_URL}users`
            fetch(url, {
                method: "POST",
                body:JSON.stringify(user),
                headers:{"Content-Type": "application/json"}
            })
                .then(response => {
                    return response.json()
                })
                .then(user => {
                    console.log(user)
                    if(user.token){
                        localStorage.setItem('username', user.user.username);
                        localStorage.setItem('token', user.token)
                        localStorage.setItem('id', user.user._id)
                        props.history.push('/destination')
                        return user
                    }
                    if(user.errors.password ){
                        setError(user.errors.password.message)
                        return localStorage.clear()
                    } 
                    else if(user.errors.username){
                        setError('Username is already taken')
                        return localStorage.clear()
                    }
                    else if(user.errors.email){
                        setError('Email is already taken')
                        return localStorage.clear()
                    }
                }).catch(error => console.log(error))    
    }

    return(
        <div className="login-page">
            <Navbar />
            <form 
                className="login" 
                onSubmit={event => {
                    event.preventDefault()
                    register(user)
                }}>
                <div className="flex-login">
                    <h1>Create an Account</h1>
                    <input 
                        type="email"
                        placeholder="Email"
                        value={user.email}
                        name="email"
                        onChange={handleInputChange}
                        className="email"
                    />
                    <input 
                        type="text"
                        placeholder="Username"
                        value={user.username}
                        name="username"
                        onChange={handleInputChange}
                        className="email"
                    />
                    <input 
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={user.password}
                        onChange={handleInputChange}
                        className="email"
                    />
                    <button 
                        className="submit"
                        type="submit"
                    >
                        Submit
                    </button>
                    <p>{error}</p>
                    <Link className='signup' to="/login">Login</Link>
                </div>
            </form>
        </div>
    )
}


export default Register

//make a state called username and password
//make a form
//on the form make a handleSubmit with e.preventDefault
//make inputs called username and password
//make a button at the end that submits the changes. Type Submit. Function login.
//make an onClick on button that is login
//make a fetch that logins to the user and if it is sucessful than make it a new component that says Sucess
//if not make it say not not successful