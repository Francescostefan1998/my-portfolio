import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./components/MyNavBar/MyNavBar";
import MyHome from "./components/MyHome/MyHome";
import PinkCircle from "./components/PinkCircle/PinkCircle";
import CodingGuy from "./components/CodingGuy/CodingGuy";
function App() {
  return (
    <div className="App">
      <MyNavBar />
      <MyHome />
      <CodingGuy />
      hello
      <br />
      hello
      <PinkCircle top="10%" left="15%" size="400px" />
      <PinkCircle top="50%" left="60%" size="350px" />
      <PinkCircle top="80%" left="30%" size="200px" />
    </div>
  );
}

export default App;
