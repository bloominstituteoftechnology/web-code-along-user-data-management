import React, { useState } from "react";

import _uglyData from "./utils/uglify";
import { cleanupUndefinedKeys, cleanDates } from "./utils/data-clean";
import { sortByKey } from "./utils/sorting";
import { filterByNameEmail } from "./utils/filtering";

import User from "./components/User";

import "./styles/App.css";

function App() {
  const [initialData] = useState(_uglyData);
  const [uglyData, setUglyData] = useState(initialData);
  const [optionsState, setOptionsState] = useState("");

  const rtt = () => {
    document.documentElement.scrollTop = 0;
  };

  const resetData = () => {
    setUglyData(initialData);
  };

  const keyCleaner = async (arr) => {
    const newData = await cleanupUndefinedKeys(arr);
    setUglyData(newData);
    return newData;
  };

  const dateCleaner = async (arr) => {
    const newData = await cleanDates(arr);
    setUglyData(newData);
    return newData;
  };

  const sortGeneric = (arr, key) => {
    const newData = sortByKey(arr, key);
    setUglyData(newData);
    return newData;
  };

  const filterGeneric = () => {
    const newData = filterByNameEmail(uglyData, optionsState);
    setUglyData(newData);
    return newData;
  };

  const handleChange = (e) => {
    e.preventDefault();
    setOptionsState(e.target.value);
    return e.target.value;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newData = filterGeneric();
    return newData;
  };

  return (
    <div className="container">
      <h1 id="main-header">List of Users</h1>

      <div className="button-container nav-bar">
        <button
          className="button-key-cleaner"
          onClick={() => keyCleaner([...uglyData])}
        >
          Clean unformatted string values
        </button>

        <button
          className="button-date-cleaner"
          onClick={() => dateCleaner([...uglyData])}
        >
          Fix date values
        </button>

        <form onSubmit={onSubmit}>
          <input onChange={handleChange} placeholder="type here!" />
          <button className="button-submit" type="submit">
            Search
          </button>
        </form>

        <button className="button-reset" onClick={() => resetData()}>
          Reset data
        </button>
      </div>

      <div className="button-container nav-bar">
        <button onClick={() => sortGeneric([...uglyData], "email")}>
          Sort data by email
        </button>
        <button onClick={() => sortGeneric([...uglyData], "username")}>
          Sort data by username
        </button>
        <button onClick={() => sortGeneric([...uglyData], "lastName")}>
          Sort data by last name
        </button>
        <button onClick={() => sortGeneric([...uglyData], "dob")}>
          Sort data by dob
        </button>
        <button onClick={() => sortGeneric([...uglyData], "state")}>
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
