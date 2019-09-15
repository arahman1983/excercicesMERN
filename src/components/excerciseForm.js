import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ExcerciseForm = ({ users }) => {
  const [ExcerciseName, setExcerciseName] = useState("");
  const [ExcerciseUser, setExcerciseUser] = useState("");
  const [ExcerciseDate, setExcerciseDate] = useState("");
  const [ExcerciseDur, setExcerciseDur] = useState(0);

  return (
    <form>
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
            onChange={e => setExcerciseDur(e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 form-group">
          <input
            type="date"
            className="form-control"
            value={ExcerciseDate}
            onChange={e => setExcerciseDate(Number(e.target.value))}
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
  );
};

export default ExcerciseForm;
