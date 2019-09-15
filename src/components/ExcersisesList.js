import React,{useState,useEffect} from 'react';
import { Link } from "react-router-dom";

const ExcersisesList = ()=>{
   const [excercises,setExcercises] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:5000/excercises/")
        .then(res=>res.json())
        .then(data => setExcercises(data))
    }, [])
    
    return(
        <div className="container p-3">
            <ul className="list-group">
               {excercises.map(({_id,description})=>{
                   return(
                    <li key={_id} className="list-group-item"><Link className="btn btn-default" to={`excersices/${_id}`}>{description}</Link></li>
                   )
               })}
            </ul>
        </div>

    )
}

export default ExcersisesList