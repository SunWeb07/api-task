import React, { useState,useEffect } from 'react';
import './App.css';


const Spinner = () => (
  <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
);

const App=()=>{
  
  
  const [user,setUser] = useState({});
  
  const [isClick, setClick] = useState(false);  

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const loadUsers = async()=>{
    const res  = await fetch("https://reqres.in/api/users?page=1")
    const jsres = await res.json();
    console.log(jsres)
    setUser(jsres);
    setClick(true)

  }
  
  return(
    <div className="App">
      <h1>Api data fetch Task</h1>
      <button onClick={loadUsers}>Get Data</button>
<div>

  <h2> Fetch data from an api in react </h2>  
               { loading && isClick?  <Spinner/> :(
               
               user['data'] && user['data'].map((value) => (
                
                <li item key={value.id}>
                       <img src={value.avatar} alt=""/>
                 <h3>Name: {value.first_name + " " + value.last_name}</h3>
                 <p>Email: {value.email}</p>
            
                </li> 
                  
            )))}
            
 
</div>


    </div>
  )
}
export default App;