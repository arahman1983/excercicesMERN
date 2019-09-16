import React,{useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ExcersisesCreate = (props)=>{
    const [users,setUsers] = useState([]);
    const [ExcerciseName, setExcerciseName] = useState("");
    const [ExcerciseUser, setExcerciseUser] = useState("");
    const [ExcerciseDate, setExcerciseDate] = useState(new Date());
    const [ExcerciseDur, setExcerciseDur] = useState(0);
    
    useEffect(() => {
        fetch("http://localhost:5000/users/")
        .then(res=>res.json())
        .then(data => setUsers(data))
    }, [])
    
    const onFormSubmit = (e)=>{
        e.preventDefault()
        const newExcercise = {
            username:ExcerciseUser,
            description:ExcerciseName,
            duration:ExcerciseDur,
            date:ExcerciseDate
        }
        fetch("http://localhost:5000/excercises/add",
        {
            method:'post', 
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newExcercise)
        })
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
        props.history.push('/')
    }

    return(
        <div className="container p-3">
           <h4 className="my-3">Add new excercise</h4>
           <form onSubmit={onFormSubmit}>
      <div className="row">
        <div className="col-md-6 form-group">
          <input
            className="form-control"
            placeholder="Add Excercise"
            value={ExcerciseName}
            onChange={e => setExcerciseName(e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 form-group">
          <select
            className="form-control"
            defaultValue={ExcerciseUser}
            onChange={e => {
              setExcerciseUser(e.target.value);
            }}>
            <option value="">Select User</option>
            {users.map(user => {
              return (
                <option key={user._id} value={user.username}>
                  {user.username}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 form-group">
          <input
            type="number"
            className="form-control"
            placeholder="Add Duration"
            min="0"
            value={ExcerciseDur}
            onChange={e => setExcerciseDur(Number(e.target.value))}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 form-group">
        <DatePicker className="form-control"
        selected={ExcerciseDate}
        onChange={(date)=>setExcerciseDate(date)}
      />
        </div>
      </div>    
      <div className="row">
        <div className="col-md-6 row">
          <button className="btn btn-info mx-auto w-25">Add </button>
          <Link className="btn btn-light mx-auto w-25" to="/">
            cancel
          </Link>
        </div>
      </div>
    </form>
        </div>

    )
}

export default ExcersisesCreate