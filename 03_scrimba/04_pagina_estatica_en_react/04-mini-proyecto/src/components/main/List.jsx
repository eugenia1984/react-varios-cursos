import React from "react";

function List() {
  const funFacts = [  
    "Was first release in 2013",
    "Was originally created by Jordan Walker",
    "Has well over 100K stars on GitHub",
    "Is mainteined by Facebook",
    "Powers thousands of enterprise apps, including mobile apps"
  ]

  return (
    <ul className="main-facts">
      {funFacts.map((item, index) => 
        <li key={index}>{item}</li>)}
    </ul>
  )
}

export default List;