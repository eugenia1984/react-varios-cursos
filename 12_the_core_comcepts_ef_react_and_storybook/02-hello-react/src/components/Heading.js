import React from "react";

export default function Heading(props) {
  return (
    <header>
      <h1>
        Hello{" "}
        {props.name === "React" ? (
          <i>{props.name}</i>
        ) : (
          props.name
        )}
        !!
      </h1>
    </header>
  );
}
