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
  const [  error, setError ] = useState(null);
  const [  loading, setLoading ] = useState(false);

  useEffect(() => {
    setLoading(true);
      fetch(`https://api.github.com/users/eugenia1984`
    )
      .then( response => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);
  
  if(loading) return <h1>Loading...</h1>;
  if(error) return <pre>{JSON.strintgify(error)}</pre>;
  if(!data) return null;
  
  return (
    <GitHubUser 
      name={data.name}
      location={data.location}
      avatar={data.avatar_url}
    />
  );
}

export default App;
