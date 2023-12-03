import React from "react"

export default function Form() {

    const handleSubmit =(e) => {
        e.preventDefault()
        console.log(e.target['name'].value)
        e.target['name'].focus()
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" id="name" />
            <input type="text" id="age"/>
            <button type="submit">Submit</button>
        </form>
    )
}