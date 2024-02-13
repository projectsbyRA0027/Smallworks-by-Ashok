import { useEffect } from "react";
import { useState } from "react";
import User from './user';
import './styles.css';

export default function GithubProfileFinder(){
    const [userName,setUserName] = useState("sangammukherjee");
    const [userData,setUserData] = useState(null);
    const [loading,setLoading] = useState(true)


async function fetchGithunuserData(){
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = await res.json();
    if(data){
        setUserData(data);
        setLoading(false);
        setUserName('')
    }
}

function handlesubmit(){
    fetchGithunuserData()
}

useEffect(()=>{
    fetchGithunuserData();
},[]);

if(loading){
    return <h1>Loading data ! Please wait</h1>
}

return(
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input type="text"
        name="serch-by-username"
        placeholder="--serch profile--" 
        value={userName}
        onChange={(Event)=>setUserName(Event.target.value)}
        />
        <button onClick={handlesubmit}>Search</button>

      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
);

}

