import logo from "./logo.svg";
import "./App.css";
import MainPage from "./pages/mainPage";
import React,{useState} from "react";

import Login from "./pages/mainPage/login";




function App() {

  const adminUser={
    email:"farrukh@1798.com",
    password:"farrukh17"
  }

  const [user,setUser]=useState({name:"",email:""});
  const [error,setError]=useState("");

  const Logins=details=>{
    console.log(details);

    if (details.email==adminUser.email && details.password==adminUser.password){
    console.log("Logged in");
    setUser({
      name:details.name,
      emails:details.email
    });
  }else{
    console.log("details not match");
    setError("details did not match")
  }
  }
  const Logout=()=>{
    console.log("Logout");
    setUser({name:"",email:""})
  }
  
  return (
    <>
     {(user.email !="")?(
        <MainPage 
        
        />
     ):(
       <Login Logins={Logins}error={error}/>
     )}
      
    </>
  );
}

export default App;
