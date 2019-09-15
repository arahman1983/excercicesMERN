import React,{useState,useEffect} from 'react';

const ExcersisesDetails = (props) => {
    const [excercise,setExcercise] = useState({})
    
    useEffect(() => {
        const excerciseId = props.match.params.id
        fetch(`http://localhost:5000/excercises/${excerciseId}`,{type:'get'})
        .then(res=>res.json())
        .then(data=>{
          setExcercise(data)
        })
    }, [props.match.params.id])
    
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
        <button className="btn btn-info mx-auto w-25">Edit</button>
        <button className="btn btn-danger mx-auto w-25">Delete</button>
      </div>
    </div>
  );
};

export default ExcersisesDetails;
