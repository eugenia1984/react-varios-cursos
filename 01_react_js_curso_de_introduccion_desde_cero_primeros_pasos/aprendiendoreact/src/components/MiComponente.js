import React, {Component} from 'react';

class MiComponente extends Component {
  render() {
    let receta = {
      nombre: 'pizza',
      ingredientes: ['tomate', 'queso', 'jamon cocido'],
      calorias: 400
    };
    return (
      <React.Fragment>
        <h1>Hola, soy el componente llamado: MiComponente</h1>
        <h2>Estoy probando el componente con React.Fragment</h2>
        <hr/>
        <h2>Muestro mi objeto:</h2>
        <p>  {`Receta: ${receta.nombre}`} </p>
        <p> Ingredientes :</p>
        <ol> 
          {
            receta.ingredientes.map( (ingrediente, i) => {
              return (
                <li key={i}> {ingrediente}</li>
              )
            })
          }
        </ol>
        <p>{`calorias: ${receta.calorias}`} </p> 
      </React.Fragment>
      
    );
  }
}

export default MiComponente;