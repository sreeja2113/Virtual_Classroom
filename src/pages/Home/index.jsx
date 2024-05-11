import React,{useState,useCallback } from 'react';
import {useNavigate} from 'react-router-dom'; 
import './index.css'
const HomePage = () =>{
    const [value,setValue]=useState();
    const navigate=useNavigate();
    const handleJoinRoom=useCallback(()=>{
        navigate(`/room/${value}`);
    },[navigate,value]);
   
return( <div className="home">
        <div className='head'><h1>KESHAV MEMORIAL MEDICAL COLLEGE</h1></div>
        <h1>VIRTUAL CLASSROOMS FOR MEDICAL STUDENTS</h1>
        <div className="no">
            <br/>
        </div>
        <div className="form">
        <input className="code" value={value}
         onChange={(e)=> setValue(e.target.value)} 
         type="text"
         placeholder="Enter room code"
        />
        <button className="button" onClick={handleJoinRoom} >Join</button>
        </div>
    </div>
    )
};
    export default HomePage;