/** @format */

import React, { useState, useEffect } from "react";
import HOC from "./HOC";

const UsersList = ({ data }) => {
  //   const [Input, setInput] = useState("");
  //   const [UserData, setUserData] = useState([]);

  //   useEffect(() => {
  //     let FetchUserData = async () => {
  //       let User = await fetch(`https://jsonplaceholder.typicode.com/users`);
  //       let data = await User.json();
  //       console.log(data);
  //       setUserData(data);
  //     };
  //     FetchUserData();
  //   }, []);

  //   let FilterUserData = UserData.filter(({name}) => {
  //     return name.indexOf(Input) >= 0;
  //   }).slice(0,10)
  //   .map((user, index) => {
  //     return (
  //       <div key={user.id}>
  //         <strong>{user.name}</strong>
  //       </div>
  //     );
  //   });
  return (
    <>
      {/* <h1>User List</h1>
      <input
        type="text"
        value={Input}
        onChange={(e) => setInput(e.target.value)}
      /> */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "column",
        }}
      >
        {data.map((user, index) => {
          return (
            <div key={user.id}>
              <strong>{user.name}</strong>
            </div>
          );
        })}
      </div>
    </>
  );
};

const User = HOC(UsersList, "users");

export default User;
