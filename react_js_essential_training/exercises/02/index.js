function Header(props) {
  //console.log(props);
  return (
    <header>
    <h1>{props.name}´s kittchen</h1>
  </header> 
  );  
}

function Main(props) {
  return (
    <section>
      <img 
        height={200} 
        src="./restaurant.jpeg"
        alt="A server presents two plates at a fancy restaurant"
      />
      <p>We serve the most {props.adjective} food around.</p>
      <h2>Our top 5 dishes:</h2>
      <ul>
        {props.dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section> 
  );  
}

function Footer(props) {
  return (
    <footer>
      <p>Copywright {props.year}</p>
    </footer>
  );
}

const dishes = [ 
  "Black Bean Soup",
  "Macaroni and Cheese",
  "Pizza",
  "Milanesa Napolitana",
  "Salmon and potatoes"
];

const dishObjects = dishes.map((dish, index) => ({
  id: index,
  title: dish
}));

function App() {
  return (
    <React.Fragment>
      <Header 
        name="Euge" 
      />
      <Main 
        adjective="delicious"
        dishes = {dishObjects} 
      />
      <Footer 
        year={new Date().getFullYear()}
      />
    </React.Fragment>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);