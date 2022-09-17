import './App.css';
import { useState, useEffect} from "react";

function GitHubUser({name, location, avatar}) {
  return(
    <>
      <h1>{name}</h1>
      <p>{location}</p>
      <img src={avatar} alt="{name}" height={200}  />
    </>
  )
}

function App() {
  const [ data, setData ] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/eugenia1984`
  ).then( response => response.json())
  .then(setData)
  }, []);
  if(data) 
    return (
      <GitHubUser 
        name={data.name}
        location={data.location}
        avatar={data.avatar_url}
      />
    )

  return (
    <h1>Data</h1>
  );
}

export default App;
