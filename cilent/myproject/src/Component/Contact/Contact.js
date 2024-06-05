import React,{useState} from 'react';
import './Contact.css';


const Contact = () => {
  const [msg, setMsg] = useState({
    firstname : "",
    lastname : "",
    email : "",
    message : ""
  });

  // Handle Inputs
  const handleChange = (event) =>{
    let name = event.target.name;
    let value = event.target.value;

    setMsg({...msg, [name]:value});
  }

  // Handle Submit
  const handleSubmit = async (event)=>{
    event.preventDefault();
    // Object DeStructuring
    // Store Object Data into Variables
    const {firstname,lastname, email, message} = msg;
    try {
      //It is Submitted on port 3000 by default
      // Which is Front End but we need to 
      // Submit it on Backend which is on 
      // Port 3001. So we need Proxy.
      const res = await fetch('/message', {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
         firstname,lastname, email, message
        })
      })
      console.log(res.status)
      if(res.status === 400 || !res){
        window.alert("Message Not Sent. Try Again Later")
      }else{
        // You need to Restart the Server for Proxy Works
        // Now Try Again
        window.alert("Message Sent");
        setMsg({
          firstname : "",
          lastname:"",
          email : "",
          message : ""
        })
        
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
        <header>
        <img className="cont-image" src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/stornowayj2oil/contacts_image-mp8BMaWzWefPzKav.png" alt=""></img>
        <h1 className="cont-head">CONTACT</h1>
        </header>
        <main>
                <div className="cont">
                         <div className="map">
                        <h1>We would love to hear from you!</h1>
                        <iframe className='maps' src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d47368.39682225005!2d-72.489385!3d42.09623!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1697790352573!5m2!1sen!2sus"allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                         </div>
                        <div className="visit">
                        <h1>Visit us:</h1>
                        <p>Muller Strasse 34, </p>
                        <p>74133 Hamburg, Germany</p>
                        <h1>Get in touch:</h1>
                        <p>Call us: +18187882178</p>
                        <p>Write to us: info@stornoway.com</p>
                        <p>Career inquiries: careers@stornoway.com</p>
                         </div>
                </div>
                <div className="form2">
                        <form onSubmit={handleSubmit} method="POST">
                              <label>Name*</label>
                                <br/>
                              <input id="name" type="text" placeholder="Your name" name="firstname" value={msg.firstname} onChange={handleChange}></input>
                              <br/>
                              <br/>
                              <label>Last name</label>
                                <br/>
                                <input id="lastname" type="text" placeholder="Your last name" name="lastname" value={msg.lastname} onChange={handleChange}></input>
                                <br/>
                               <br/>
                               <label >Your email*</label>
                                <br/>
                                <input id="email" type="text" placeholder="Your email address" name="email" value={msg.email} onChange={handleChange}></input>
                                <br/>
                               <br/>
                                <label >Message</label>
                                <br/>
                                <input id="message" type="text" placeholder="Enter your message" name="message" value={msg.message} onChange={handleChange}></input>
                                <br/>
                                <br/>
                                <br/>
                         </form>
                         <button className="click-cont" type='submit'><a href="">Submit</a></button>
                </div>
                
        </main>
       
    </div>
  );
};

export default Contact;