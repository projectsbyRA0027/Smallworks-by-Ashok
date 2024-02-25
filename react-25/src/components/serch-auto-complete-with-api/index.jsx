import { useEffect } from "react";
import { useState } from "react"; //geting hooks from react
import Suggestions from "./suggesstions";

export default function SerchAutocomplete(){
    const [loading,setLoading] = useState(false);
    const [users,setUsers] = useState([]);
    const [error,setError] = useState(null);
    const [serachParam,setSearchParam] = useState(null);
    const [showDropDown,setShowDropdown] = useState(false);
    const [fillterUsers,setFilterusers] = useState([]);

    function handleChange(event){
        const query = event.target.value.toLowerCase();
        setSearchParam(query);
        if(query.length > 1){
            const filterData = users && users.length ? users.filter((item)=>item.toLowerCase().indexOf(query) > -1)
            : [];
            setFilterusers(filterData);
            setShowDropdown(true);
        }else{
            setShowDropdown(false);
        }
    }

    function handleClick(event){
        setShowDropdown(false)
        setSearchParam(event.target.innerText)
        setFilterusers([])
    }

    async function fetchListOfUsers(){
        try{
            setLoading(true);
            const responce = await fetch("https://dummyjson.com/users");
            const data = await responce.json();

            if(data && data.users && data.users.length){
                setUsers(data.users.map((userItem) => userItem.firstName));
                setLoading(false);
                setError(null);
            }
        }catch(error){
            setLoading(false);
            console.log(error);
            setError(error);
        }
    }

    useEffect(()=>{
        fetchListOfUsers();
    },[]);

    console.log(users,fillterUsers);

    return(
        <div className="search-autocomplete-container" >
            {loading ? (
                <h1>Loading Data ! Please wait</h1>
            ):(
              <input 
              type="text"
              value={serachParam}
              name="search-users"
              placeholder="search users here..."
              onChange={handleChange}
               />   
            )}
            {showDropDown && <Suggestions handleClick={handleClick} data={fillterUsers}/>}
        </div>
    );
}
