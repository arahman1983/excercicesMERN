import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

const UsersAdd = () => {
  const [users, setUsers] = useState([]);
  const [username, setNewUser] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/users/")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);


  const onFormSubmit = e => {
    e.preventDefault();
    
    const userValid = users.filter((user)=>{
      if(user.username === username){
        return user
      }
    })

    if(userValid.length > 0 || username === ""){
      document.getElementById("errorMes").style.display = "block";
      return false
    }else{
      const newUser = {
        username : username
      };
      console.log(newUser)
      fetch("http://localhost:5000/users/add", {
        method: "post",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
      })
        .then(res => console.log(res))
        .catch(err => console.log(err));
      window.location.href = "/";

    }
    
  };

  return (
    <div className="container p-3">
      <h4 className="my-3">Add new User</h4>
      <form onSubmit={onFormSubmit}>
        <div className="row">
          <div className="col-md-6 form-group">
            <input
              className="form-control"
              placeholder="Add Excercise"
              value={username}
              onChange={e => {
                document.getElementById("errorMes").style.display = "none";
                  setNewUser(e.target.value)}}
            />
          </div>
          
        </div>
        <div className="row" id="errorMes" style={{display:"none"}} >
          <div className="col-md-6">
            <div className="alert alert-danger" role="alert">
            This is a danger alert—check it out!
          </div>
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
  );
};

export default UsersAdd;
