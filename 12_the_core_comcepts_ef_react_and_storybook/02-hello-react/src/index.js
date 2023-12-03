import React from "react";
import { render } from "react-dom";
import Heading from "./components/Heading";
import Form from "./components/Form"

function App() {
    return (
        <div>
            <Heading name="React" />
            <Form />
        </div>
    )
}
render(<App />, document.querySelector("#root"));
