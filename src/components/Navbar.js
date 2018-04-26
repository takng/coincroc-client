import React from 'react'
import { Link } from 'react-router-dom'
import cookie from 'react-cookies' 

export function Navbar (props) {

  const accessToken = cookie.load('access_token')

	// render(){
		return (
      <div className="nav-wrapper">
        <nav className='greedy' id="page-top">
          <h1>
          <img src="http://res.cloudinary.com/dattofkud/image/upload/v1524096719/cryptocat/cryptocroc/coincroc-brand.png"
               alt="coincroc-brand" />
          </h1>
            <ul className='links'>
              <li><Link to="/">Cryptocurrencies</Link></li>
              <li><Link to="/industries">Industries</Link></li>
              <li><Link to="/about">About</Link></li>
              {
                (!!accessToken) ? 
                <li><Link to="/dashboard">Dashboard</Link></li> :
                <li><Link to="/login">Login</Link></li>
              } 
              {
                (!!accessToken) ? 
                <li><Link to="/logout">Logout</Link></li> :
                null
              }                              
            </ul>
          <button>MENU</button>
          <ul className='hidden-links hidden'></ul>
        </nav>
      </div>
		)
}




