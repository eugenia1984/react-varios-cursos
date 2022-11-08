import React from "react";
import "./mainstyle.css";
import Title from "./Title.jsx";
import List from "./List";

function Main() {
  return (
    <main>
      <Title 
        name="Fun facts about React!" 
      />
      <List />
    </main>
  );
}

export default Main;