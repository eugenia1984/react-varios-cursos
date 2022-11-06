## :star: Tercer mini proyecto
---

### Componentes

Vamos a comenzar a ver el concepto de **componente**.

En **index.js** voy a crearlo:

```JavaScript
//Me guardo en esta funcion NAVBAR (el mismo nombre de mi COMPONENTE) una navbar de bootstrap
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

// Aca voy a renderizar mi componente Navbar en el div con id root
ReactDOM.render(
  <div>
    <Navbar />
  </div>,
  document.getElementById("root")
)
```

-> *Nota* veamos que en vez de **class** usamos **className** (esto es propio de **JSX**).

---

### Desafio

- Crear tu propio componente de React que se llame **MainContent**, y que retorne un simple **h1** que diga **Hola, estoy aprendiendo React!**

- Luego de crearlo renderizalo debajo de la Navbar.

1. Creo el componente funcional:
```JSX
function MainContent() {
  return (
    <h1>Hola, estoy aprendiendo React!</h1>
  )
}
```

2. Lo renderizo:
```JSX
ReactDOM.render(
  <div>
    <Navbar />
    <MainContent />
  </div>,
  document.getElementById("root")
)
```

---

- En mis componentes funcionales siempre voy a teneer:

...La funcion que tendra como nombre el de mi componente

...el return que me va a dar que se va a renderizar. Si tengo más de una etiqueta que renderizar, debo recordar que cuento siempre con una etiqueta padre (o fragmento) que engloba a todas, porque siempre debo retornar un solo div, adentro puedo tener muchos divs hijos, nietos, etc, pero siempre un solo div padre.