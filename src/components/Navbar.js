import React from 'react'
import Logo from '../images/cover.png'
import '../sass/navbar.scss'
import {Link} from 'react-router-dom'


const Navbar = () => {

  const auth = localStorage.getItem('token')
  const logout = () => localStorage.clear()
  let navigation
  
  
  const notLoggedIn = 
  <nav className="navbar navbar-expand-lg nav-background-color navbar-dark">
    <Link className="navbar-brand" to="/">
      <img src={Logo} alt="logo" className="logo"
      />
    </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto large">
        <li className="nav-item">
          <Link className="nav-link nav-text-color" to="/destination">Destinations</Link>
        </li>
        <li className="nav-item nav-text-color">
          <Link className="nav-link nav-text-color" to="/login">Login <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link nav-text-color" to="/register">Register</Link>
        </li>
      </ul>
    </div>
  </nav>

  const loggedIn = 
  <nav className="navbar navbar-expand-lg nav-background-color navbar-dark">
    <Link className="navbar-brand" to="/">
      <img src={Logo} alt="logo" className="logo"
      />
    </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto large">
        <li className="nav-item">
          <Link className="nav-link nav-text-color" to="/createblog">Create Blog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link nav-text-color" to="/destination">Destinations</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link nav-text-color" to="/destination" onClick={logout}>Log Out</Link>
        </li>
      </ul>
    </div>
  </nav>

if(auth === null){
     navigation = notLoggedIn
} else{
  navigation = loggedIn
}

    return (
      <div>
       {navigation}
      </div>
    )
}




export default Navbar
