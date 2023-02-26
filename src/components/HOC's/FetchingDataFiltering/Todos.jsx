/** @format */

import React, { useState, useEffect } from "react";
import HOC from "./HOC";

const Todo = ({ data }) => {
  //   const [Input, setInput] = useState("");
  //   const [TodoData, setTodoData] = useState([]);

  //   useEffect(() => {
  //     let FetchTodoData = async () => {
  //       let Todo = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  //       let data = await Todo.json();
  //       console.log(data);
  //       setTodoData(data);
  //     };
  //     FetchTodoData();
  //   }, []);

  //   let FilterTodoData = Data.filter(({ title }) => {
  //     return title.indexOf(Input) >= 0;
  //   }).slice(0, 20).map((todo, index) => {
  //       return (
  //         <div key={todo.id}>
  //           <strong>{todo.title}</strong>
  //         </div>
  //       );
  //     });
  return (
    <>
      {/* <h1>Todo List</h1>
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
        {data.map((todo, index) => {
          return (
            <div key={todo.id}>
              <strong>{todo.title}</strong>
            </div>
          );
        })}
        {/* {FilterTodoData} */}
      </div>
    </>
  );
};
const Todos = HOC(Todo, "todos");

export default Todos;
// // let EnhanceTodoComponent=HOC(Todos,'Todo');
// export default HOC(Todos, "Todo");
