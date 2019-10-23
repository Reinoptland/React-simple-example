import React from "react";
import "./App.css";
import User from "./components/User";

const users = [
  { id: 1, userName: "Rein" },
  { id: 2, userName: "David" },
  { id: 3, userName: "Kelley" },
  { id: 4, userName: "Wouter" }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Passing props */}
        <User userName="Rein" />
        {/* <User userName="David" />
        <User userName="Kelley" />
        <User userName="Wouter" /> */}
        {users.map(user => {
          return <User key={user.id} userName={user.userName} />;
        })}
      </header>
    </div>
  );
}

export default App;
