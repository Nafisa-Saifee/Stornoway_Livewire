import React, { useState } from 'react';
import './Sign.css';
import { NavLink } from 'react-router-dom';
import {useHistory} from 'react-router';

const Sign = () => {
  const history =useHistory()
  
  const[user,setUser] =useState({
    username : "",
    email : "",
    password : "",
  });
  //handleinput
  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setUser({...user,[name] : value});
  }

  //handlesubmit
  const handleSubmit = async (event) => {
    event.preventDefault();
    //object destructuring
    //strore object data into variables
    const {username,email,password} = user;
    try {
      const res = await fetch('/register',{
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
          username,email,password
        })
      })
      
      console.log(res.status)
      if(res.status === 400 || !res){
        window.alert('Already used Deatails')
      }
      else{
        window.alert('Registered succesfully');
        history.push('/login')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
        <header>
        <img className="sign-image" src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/stornowayj2oil/contacts_image-mp8BMaWzWefPzKav.png" alt=""></img>
        <h1 className="sign-head">CONTACT</h1>
        </header>
        <main>
                <div className="form">
                        <h1>Sign Up</h1>
                        <form onSubmit={handleSubmit} method='POST'>
                              <label>Username*</label>
                                <br/>
                              <input id="user-sign" type="text" placeholder="Your name" name='name' onChange={handleInput} value={user.username}/>
                              <br/>
                              <br/>
                               <label>Your email*</label>
                                <br/>
                                <input id="email-sign" name='email' type="email"onChange={handleInput} value={user.email}placeholder="Your email address"/>
                                <br/>
                               <br/>
                                <label>Password</label>
                                <br/>
                                <input id="password" name='password' type="password" placeholder="Enter your message" value={user.password} onChange={handleInput}/>
                                <br/>
                                <br/>
                                <br/>
                         </form>
                         <button className="click-sign" type='submit'><a href="">Sign Up</a></button>
                </div>
                
        </main>      
    </div>
  )
}

export default Sign;