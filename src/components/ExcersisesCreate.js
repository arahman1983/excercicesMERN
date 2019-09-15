import React,{useState,useEffect} from 'react';
import ExcerciseForm from "./excerciseForm"


const ExcersisesCreate = ()=>{
   const [users,setUsers] = useState([]);
   
    
    useEffect(() => {
        fetch("http://localhost:5000/users/")
        .then(res=>res.json())
        .then(data => setUsers(data))
    }, [])
    
    return(
        <div className="container p-3">
           <h4 className="my-3">Add new excercise</h4>
           <ExcerciseForm users={users}/>
        </div>

    )
}

export default ExcersisesCreate