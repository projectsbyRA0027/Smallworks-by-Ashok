import { useState } from "react";

import React from 'react';


function Main() {
const [username,setusername] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [confirmpassword,setConfirmpassword] = useState("");

const [errorusername,setErrorusername] = useState("");
const [erroremail,setErrorEmail] = useState("");
const [errorpassword,setErrorPassword] = useState("");
const [errorcofirmpassword,setErrorConfirmpassword] = useState("");

const [userColor,setUserColor] = useState("");
const [emailColor,setEmailColor] = useState("");
const [passwordColor,setPasswordColor] = useState("");
const [confirmpasswordColor,setConfirmpasswordColor] = useState("");

function validate(e){
    e.preventDefault();

    if(username.length > 8){
        setErrorusername("");
        setUserColor("green");
    }else{
        setErrorusername("username must be 8 letters long")
        setUserColor("red");
    }

    if(email.includes("@gmail")){
        setErrorEmail("");
        setEmailColor("green");
    }else{
        setEmailColor("red")
        setErrorEmail("Email should have @gmail")
    }
    if(password.length > 8){
        setErrorPassword("");
        setPasswordColor("green")
    }else{
        setErrorPassword("password should be 8 letters long");
        setPasswordColor("red");
    }
    if(password != "" && password == confirmpassword){
        setErrorConfirmpassword("");
        setConfirmpasswordColor("green")
    }else{
        setErrorConfirmpassword("passwords you've not matched.");
        setConfirmpasswordColor("red");
    }
}


  return (
    <>
    <div className="card">
    <form action="#">
        <input type="text" placeholder="Name" style={{borderColor:userColor}} 
        value={username} 
        onChange={(e)=>setusername(e.target.value)}
        />
        <p className="error">{errorusername}</p>
        <input type="text"
        placeholder="Email"
        style={{borderColor:emailColor}}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
         />
         <p className="error">{erroremail}</p>
         <input type="password" 
         placeholder="password"
         style={{borderColor:passwordColor}}
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         />
         <p className="error">{errorpassword}</p>

         <input type="password" 
         placeholder="Confirm Password"
         style={{borderColor:confirmpasswordColor}}
         value={confirmpassword}
         onChange={(e) => setConfirmpassword(e.target.value)}
         />
         <p className="error">{errorcofirmpassword}</p>
         
         <button className="submit-btn" onClick={validate}>
            Submit
         </button>
    </form>
    </div>
    </>
  );
}

export default Main;