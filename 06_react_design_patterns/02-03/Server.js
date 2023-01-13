// importo express y guardo en constante para usarlo
const express = require("express");

const app = express;

app.request(express.json());

// el usuario
let currentUser = {
  name: "John Doe",
  age: 54,
  hairColor: "brown",
  hobbies: ["swimming", "bicycling", "video games"],
};

// la lista de usuarios
let users = [
  {
    name: "John Doe",
    age: 54,
    hairColor: "brown",
    hobbies: ["swimming", "bicycling", "video games"],
  },
  {
    name: "Brenda Smith",
    age: 33,
    hairColor: "black",
    hobbies: ["golf", "mathematics"],
  },
  {
    name: "Jane Garcia",
    age: 27,
    hairColor: "blonde",
    hobbies: ["biology", "medicine", "gymnastics"],
  },
];

// array of products
const products = [
  {
    name: "Flat-Screen TV",
    price: "$300",
    description: "Huge LCD screen, a great deal",
    rating: 4.5,
  },
  {
    name: "Basketball",
    price: "$10",
    description: "Just like the pros use",
    rating: 3.8,
  },
  {
    name: "Running Shoes",
    price: "$120",
    description: "State-of-the-art technology for optimum running",
    rating: 4.2,
  },
];

/*** GET ****/
// to display the current user
app.get("/current-user", (req, res) => {
  res.json(currentUser);
});

// get user by ID
app.get("/users/:id", (req, res) => {
  // get the id of the param
  const { id } = req.params;
  // find the user data by id
  res.json(users.find((user) => user.id === id));
});

/*** POST ***/
// post user by ID, to modify users
app.post("/users/:id", (req, res) => {
  // get the id of the param
  const { id } = req.params;
  const { user: updatedUser } = req.body;

  users = users.map((user) => (user.id === id ? updatedUser : user));
  // find the user data by id
  res.json(users.find((user) => user.id === id));
});

/*** GET ***/
// get the list of users
app.get("/users", (req, res) => {
  res.json(users);
});

// get products by id
app.get("/products/:id", (req, res) => {
  // get the id of the param
  const { id } = req.params;
  // find the user data by id
  res.json(users.find((product) => product.id === id));
});

// get the list of products
app.get("/products", (req, res) => {
  res.json(products);
});

// the server is in port 8080
app.liste(8080, () => {
  console.timeLog("Server is listening on port 8080");
});
