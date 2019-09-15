import React,{useState,useEffect} from 'react';
import { Link } from "react-router-dom";

const ExcersisesDetails = (props) => {
    const [excercise,setExcercise] = useState({})
    const excerciseId = props.match.params.id
    useEffect(() => {
        
        fetch(`http://localhost:5000/excercises/${excerciseId}`,{method:'get'})
        .then(res=>res.json())
        .then(data=>{
          setExcercise(data)
        })
    }, [excerciseId])
    
    const deleteExcercise = () => {
      fetch(`http://localhost:5000/excercises/${excerciseId}`,{method:'delete'})
        .then(res=>res.json())
        .then(data=>{
          setExcercise(data)
        })
        window.location.href="/"
    }

  return (
    <div className="card col-md-6 mx-auto my-4">
      <div className="card-body">
        <p>
          <b>Excercise: </b>{excercise.description} <br/>
          <b>user : </b>{excercise.username} <br/>
          <b>Duration: </b>{excercise.duration} <br/>
          <b>Date: </b>{excercise.date} <br/>
        </p>
      </div>
      <div className="card-footer row">
        <Link to={`/edit/${excerciseId}`} className="btn btn-info mx-auto w-25">Edit</Link>
        <button className="btn btn-danger mx-auto w-25" onClick={deleteExcercise}>Delete</button>
      </div>
    </div>
  );
};

export default ExcersisesDetails;
