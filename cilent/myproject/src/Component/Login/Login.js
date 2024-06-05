import React,{useState} from 'react';
import './Login.css';
import {useHistory} from 'react-router';

const Login = () => {
  const history = useHistory()
  const [user,setUser] = useState({
    email : "",
    password : "",
  });

  //handleinput
  const handleChange = (event) => {
    let name = event.target.name
    let value = event.target.value
    setUser({...user,[name] : value})
  }

  //handle login
  const handleSubmit = async (event) => {
    event.preventDefault();
    const {email,password} = user;
    try {
      const res = await fetch('/login',{
        method : 'POST',
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
          email,password
        })
      });
      if(res.status === 400 || !res){
        window.alert('Invalid credentials')
      }
      else{
        history.push('/');
        window.alert('Login Successfull');
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
        <header> 
        <img className="log-image" src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/stornowayj2oil/contacts_image-mp8BMaWzWefPzKav.png" alt=""></img>/
        <h1 className="log-head">CONTACT</h1>
        </header>
        <main>
                <div className="coform1">
                        <h1>Welcome</h1>
                        <h4>Log in to My Company to continue to My Website</h4>
                        <div className="form1">
                        <form onSubmit={handleSubmit} method='POST'>
                                <label>Email*</label>
                                  <br/>
                                <input id="email-login" type="text" placeholder="Your username" name="email" value={user.email} onChange={handleChange}></input>
                                <br/>
                                <br/>
                                <label>Password </label>
                                  <br/>
                                  <input type="password" placeholder="Enter your password" id="password-login" name='password' value={user.password} onChange={handleChange}></input>
                                  <br/>
                                 <br/>
                        </form>
                </div>
                           <a href="">Forgot password?</a>
                           <button className="click-log" type="submit">Login</button>
                           
                           <p>Don't have an accout?</p>
                           <a href="sign.html">Sign up</a> 
                </div>
        </main>
    </div>
  )
}

export default Login;