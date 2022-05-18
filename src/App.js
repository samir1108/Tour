import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";

function App() {
  const [users, getusers] = useState([]);
  const setusers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    getusers(users);
  };
  useEffect(() => {
    setusers();
  }, []);

  return (
    <>
      <section className='section'>
        <div className='title'>
          <h2>Our Tours</h2>
          <div className='underline'></div>
        </div>
        <div>
          {users.map((user) => {
            return <Tours key={user.id} user={user}></Tours>;
          })}
        </div>
      </section>
    </>
  );
}

export default App;
