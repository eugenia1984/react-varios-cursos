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

---

## :star: 3 - Ciclo de vida

---

## :star: 4 - useEffect

--+
