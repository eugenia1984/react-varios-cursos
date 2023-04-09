# :star: Componentes - Unidad 2

---

## :book: Temas:

- 1 - Childrens

- 2 - Introducción hooks

- 3 - Ciclo de vida

- 4 - userEffect

---

## :star: 1 - Childrens


### ¿QUÉ SON LAS CHILDREN EN REACT?

Las Children son **una forma de composición de componentes**, donde, valga la redundancia, **podemos pasar componentes a través de propiedades**.

```JSX
<Component>
   <ChildComponent/>
</Component>
```

### ¿CÓMO PODEMOS AGREGAR CHILDREN A UN COMPONENTE?

Esto se lleva acabo cuando escribimos un componente mediante el marcado de doble etiqueta, y entre su etiqueta de apertura y cierre, escribimos un componente hijo valido, por ejemplo:

```JSX
<Padre>
   <Hijo1/>
   <Hijo2/>
</Padre>
```

Al hacer lo anterior, en las propiedades del componente `<Padre />` aparece el atributo **Children**, el cual, contiene un array con la información de los dos componentes `<Hijo1/>` e `<Hijo2 />`.

Por lo tanto, en el componente `<Padre />` podemos recuperar los hijos y montarlos directamente en la DOM.


```JSX
class Padre extends React.Component{
  render() {
    const {children} = this.props;
    return (
      <div className="padre">
          <h1>{"Propiedades Children"}</h1>
          <div className="hijos">
          {
            children
          }
          </div>
        </div>
      )
   }
}
```


En código anterior:

- Por destructuración obtenemos la propiedad children.

- Y en el return del componente agregamos una llave y escribimos las children.

- Al hacer esto, React montara dicha propiedad como componentes en nuestra DOM.

- Así de sencillo podemos utilizar este tipo de propiedades.

 

### TIPOS DE COMPONENTES VALIDOS EN LAS CHILDREN

En esencia podemos pasar tipos como:

- Componentes

- Elementos como párrafos, div, headers (H2,H3,etc).

- Textos

- Expresiones de JavaScript como Templete Strings

- Operaciones

- Funciones

```JSX
<Padre>
    <Hijo1/>
    <p>Párrafo</p>
    Texto...<br/>
    {`Template String ${'Hola'}`}
    {()=>{}}
</Padre>
```

**Nota**: A pesar de que podemos pasar funciones en las Children, en React no se puede renderizar una función, por lo tanto, en la consola del navegador verás un error. Para solucionar esto, deberás interceptar antes del render las propiedades Children y aplicar un filtro, ya se para separar dicha función, o eliminarla del render.


### ¿CÓMO MANIPULAR Y FILTRAR CHILDREN?

Podemos realizar algunas acciones antes de montar las props Children en la DOM, a esto se le llama filtro, ya que eliminas aquellos componentes no validos y/o separas funciones que necesitas pero que no quieres que se monten en la DOM.


### PROPS: RELACIÓN DE CHILDREN Y PROPS

React inyecta automáticamente children en las props, sólo si encuentra alguno.

---

## :star: 2 - Introducción hooks


Hooks son una nueva característica en React 16.8. Estos te permiten usar el estado y otras características de React sin escribir una clase.

```JSX
import React, { useState } from 'react';
 
function Example() {
   // Declara una nueva variable de estado, la cual llamaremos “count”
   const [count, setCount] = useState(0);

   return (
     <div>
       <p>You clicked {count} times</p>
       <button onClick={() => setCount(count + 1)}>
          Click me
       </button>
     </div>
    );
}
```

Esta nueva función useState es el primer “Hook” que vamos a aprender, pero este ejemplo es solo una introducción.

Puedes empezar a aprender Hooks en la siguiente página. En esta página, continuaremos explicando por qué estamos agregando Hooks a React y cómo estos pueden ayudarte a escribir aplicaciones grandiosas.


*Nota*: React 16.8.0 es la primera versión que es compatible con Hooks. Al actualizar, no olvides actualizar todos los paquetes, incluyendo React DOM. React Native es compatible con Hooks desde la versión 0.59 de React Native.


Antes de continuar, debes notar que los Hooks son:


- Completamente opcionales. Puedes probar Hooks en unos pocos componentes sin reescribir ningún código existente.


- 100% compatibles con versiones anteriores. Los Hooks no tienen cambios con rupturas con respecto a versiones existentes.


- Disponibles de inmediato. Los Hooks ya están disponibles con el lanzamiento de la versión v16.8.0.


- No hay planes para remover el modelo de clases de React. Puedes leer más sobre la estrategia de adopción gradual de Hooks en la sección inferior de esta página.


- Los Hooks no reemplazan tu conocimiento de los conceptos de React. Por el contrario, los Hooks proporcionan una API más directa a los conceptos que ya conoces de React: props, estado, contexto, referencias, y ciclo de vida. Como veremos más adelante, los hooks también ofrecen una nueva y poderosa forma de combinarlos.


- Los Hooks resuelven una amplia variedad de problemas aparentemente desconectados en React que hemos encontrado durante más de cinco años de escribir y mantener decenas de miles de componentes.


- Es difícil reutilizar la lógica de estado entre componentes


- React no ofrece una forma de “acoplar” comportamientos re-utilizables a un componente (Por ejemplo, al conectarse a un store). Si llevas un tiempo trabajando con React, puedes estar familiarizado con patrones como render props y componentes de orden superior que tratan resolver esto. Pero estos patrones requieren que reestructures tus componentes al usarlos, lo cual puede ser complicado y hacen que tu código sea más difícil de seguir. Si observas una aplicación típica de React usando React DevTools, Lo más probable es que encuentres un “wrapper hell” de componentes envueltos en capas de providers, consumers, componentes de orden superior, render props, y otras abstracciones. Aunque podemos filtrarlos usando las DevTools, esto apunta a un problema aún más profundo: React necesita una mejor primitiva para compartir lógica de estado.


- Con Hooks, puedes extraer lógica de estado de un componente de tal forma que este pueda ser probado y re-usado independientemente. Los Hooks te permiten reutilizar lógica de estado sin cambiar la jerarquía de tu componente. Esto facilita el compartir Hooks entre muchos componentes o incluso con la comunidad.


- Los componentes complejos se vuelven difíciles de entender


- A menudo tenemos que mantener componentes que empiezan simples pero con el pasar del tiempo crecen y se convierten en un lío inmanejable de multiples lógicas de estado y efectos secundarios. Cada método del ciclo de vida a menudo contiene una mezcla de lógica no relacionada entre sí. Por ejemplo, los componentes pueden realizar alguna consulta de datos en el componentDidMount y componentDidUpdate. Sin embargo, el mismo método componentDidMount también puede contener lógica no relacionada que cree escuchadores de eventos, y los limpie en el componentWillUnmount. El código relacionado entre sí y que cambia a la vez es separado, pero el código que no tiene nada que ver termina combinado en un solo método. Esto hace que sea demasiado fácil introducir errores e inconsistencias.

 

En muchos casos no es posible dividir estos componentes en otros más pequeños porque la lógica de estado está por todas partes. También es difícil probarlos. Esta es una de las razones por las que muchas personas prefieren combinar React con una librería de administración de estado separada. Sin embargo, esto a menudo introduce demasiada abstracción, requiere que saltes entre diferentes archivos, y hace que la reutilización de componentes sea más difícil.


Para resolver esto, Hooks te permite dividir un componente en funciones más pequeñas basadas en las piezas relacionadas (como la configuración de una suscripción o la consulta de datos), en lugar de forzar una división basada en los métodos del ciclo de vida. También puedes optar por administrar el estado local del componente con un reducer para hacerlo más predecible.


Las clases confunden tanto a las personas como a las máquinas


Además de dificultar la reutilización y organización del código, hemos descubierto que las clases pueden ser una gran barrera para el aprendizaje de React. Tienes que entender cómo funciona this en JavaScript, que es muy diferente a cómo funciona en la mayoría de los lenguajes. Tienes que recordar agregar bind a tus manejadores de eventos. Sin inestables propuestas de sintaxis, el código es muy verboso. Las personas pueden entender props, el estado, y el flujo de datos de arriba hacia abajo perfectamente, pero todavía tiene dificultades con las clases. La distinción entre componentes de función y de clase en React y cuándo usar cada uno de ellos lleva a desacuerdos incluso entre los desarrolladores experimentados de React.


Además, React ha estado en el mercado durante unos cinco años, y queremos asegurarnos de que siga siendo relevante en los próximos cinco años. Como muestran Svelte, Angular, Glimmer, y otros, la compilación anticipada de componentes tiene mucho potencial a futuro. Especialmente si no se limita a las plantillas. Recientemente, hemos estado experimentando con el encarpetado de componentes usando Prepack, y hemos visto resultados preliminares prometedores. Sin embargo, encontramos que los componentes de clase pueden fomentar patrones involuntarios que hacen que estas optimizaciones nos lleven a un camino más lento. Las clases también presentan problemas para las herramientas de hoy en día. Por ejemplo, las clases no minifican muy bien, y hacen que la recarga en caliente sea confusa y poco fiable. Queremos presentar una API que hace más probable que el código se mantenga en la ruta optimizable.


Para resolver estos problemas, Hooks te permiten usar más de las funciones de React sin clases. Conceptualmente, los componentes de React siempre han estado más cerca de las funciones. Los Hooks abarcan funciones, pero sin sacrificar el espíritu práctico de React. Los Hooks proporcionan acceso a vías de escape imprescindibles y no requieren que aprendas técnicas complejas de programación funcional o reactiva.



---

## :star: 3 - Ciclo de vida

---

## :star: 4 - useEffect

--+
