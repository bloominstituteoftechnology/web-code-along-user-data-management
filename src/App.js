import React, { useState } from "react";
import _uglyData from "./utils/uglify";
import {
  sortByKey,
  sortByEmail,
  sortByUsername,
  sortByLastName,
  sortByDOB,
  sortByState
} from "./utils/sorting";
import User from "./components/User";
import "./styles/App.css";

function App() {
  const [initialData] = useState(_uglyData);
  const [uglyData, setUglyData] = useState(initialData);

  const rtt = () => {
    document.documentElement.scrollTop = 0;
  };

  const resetData = () => {
    setUglyData(initialData);
  };

  const sortUsername = (arr) => {
    const newData = sortByUsername(arr);
    setUglyData(newData);
    return newData;
  };

  const sortLastName = (arr) => {
    const newData = sortByLastName(arr);
    setUglyData(newData);
    return newData;
  };

  const sortDOB = (arr) => {
    const newData = sortByDOB(arr);
    setUglyData(newData);
    return newData;
  };

  const sortState = (arr) => {
    const newData = sortByState(arr);
    setUglyData(newData);
    return newData;
  };
  
  const sortEmail = (arr) => {
    const newData = sortByEmail(arr);
    setUglyData(newData);
    return newData;
  };
    
  const sortGeneric = (arr, key) => {
    const newData = sortByKey(arr, key);
    setUglyData(newData);
    return newData;
  };

  return (
    <div className="container">
      <h1>List of Users</h1>

      <div className="button-container">
        <button onClick={() => resetData()}>Reset data</button>
      </div>

      <div className="button-container">
        <button onClick={() => sortEmail([...uglyData])}>
          Sort data by email
        </button>
        <button onClick={() => sortUsername([...uglyData])}>
          Sort data by username
        </button>
        <button onClick={() => sortLastName([...uglyData])}>
          Sort data by last name
        </button>
        <button onClick={() => sortDOB([...uglyData])}>
          Sort data by dob
        </button>
        <button onClick={() => sortState([...uglyData])}>
          Sort data by state
        </button>
      </div>

      <div className="users-container">
        {uglyData.map((user) => {
          return <User key={user.id} user={user} />;
        })}
      </div>

      <p className="rtt" onClick={rtt}>
        Return to Top
      </p>
    </div>
  );
}

export default App;
