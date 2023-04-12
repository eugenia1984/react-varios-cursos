# :star: CLASE 12 - 10 Abril

---

## Para el trabajo integrador

Para temas de app Streaming estilo Netflix, o algo de servicio o producto (estilo Humaya). Es muy amplio elegir un tema. Hay que prestar foco en incorporar todo lo que pide el PDF.

### LINKS:

Prototipo: [https://quiqueqal.es/prototipo-diseno-web-y-porque-hacerlo/](https://quiqueqal.es/prototipo-diseno-web-y-porque-hacerlo/)

Recursos para organizar un proyecto: [https://www.atlassian.com/es/software/confluence/templates/collections/project-management](https://www.atlassian.com/es/software/confluence/templates/collections/project-management)

Diagramación: [https://www.uifrommars.com/diagrama-flujo-que-es-diseno-ux/](https://www.uifrommars.com/diagrama-flujo-que-es-diseno-ux/)

Ejemplo de integrador: [https://22802-grupo4-streamingapp.vercel.app/](https://22802-grupo4-streamingapp.vercel.app/)

## :stars: Algunas cosas que si debemos implementar:

- [**SLICK**](https://kenwheeler.github.io/slick/) para los sliders

![image](https://user-images.githubusercontent.com/72580574/231538180-90327815-5924-443f-8cf4-a69034b22616.png)

-> Lo malo, sigue usando jQuery.


- [**Sweet Alert 2**](https://sweetalert2.github.io/), para las alertas

![image](https://user-images.githubusercontent.com/72580574/231537425-6d6a7ca1-1f99-4abc-a72e-8647a5258c1c.png)

"A BEAUTIFUL, RESPONSIVE, CUSTOMIZABLE, ACCESSIBLE (WAI-ARIA) REPLACEMENT FOR JAVASCRIPT'S POPUP BOXES"

Para los alertas, cuando el usuario va a borrar algo y se se pregunta si esta seguro de borrarlo.

![image](https://user-images.githubusercontent.com/72580574/231537844-8d9f8046-6109-4809-89a1-7636c3933c5f.png)



- [**HTML2Canvas**](https://html2canvas.hertzen.com/)

![image](https://user-images.githubusercontent.com/72580574/231536524-6573b858-6866-4c74-9fd3-3069736291c2.png)


-> Se instala...

... con **npm**: `npm install --save html2canvas`

... con **yarn**: `yarn add html2canvas`


Y ahi [documentación]([)](https://html2canvas.hertzen.com/documentation), es un recurso, puede ser que necesite agregar funcionalidades extras. Lo que permite es exportar un archivo JPG o PNG de la propia aplicación. Como los editores de las tarjetas perzonalizados que uno se descarga la tarjeta. La vamos a probar en el **proyecto de creador de Memes**.


---

## :star: PROYECTO MEMES

- El usuario va a ir eligiendo el color, la imagen, el texto.

- Para tener los datos del meme, vamos a  tener que trabajar con `<Form>` con un `<input />` para introducir un texto, un `<select />` para que elija las imagenes. Vamos a tener **eventos**, que me van a ir seteando los **states**, asi vamos viendo los cambios del usuario, por ejemplo que me cambia el texto, o la imagen. Todo esto para recolectar información del usuario y poder armar el meme.

##:star: HOOK USESTATE

La **Estructura** es: `const [ variable, setVariable] = useState(estadoInicial)`

Todo lo que **sea modificable** tendrá su **state**.

- Dentro de `<App />` vamos a ir llamando a nuestros **componentes** que van a estar dentro de la carpeta **components** que van a tener el nombre del archivo con UpperCamelCase y con la extension **.jsx**, el nombre del archivo debe coincidir con el nombre del componente.


- Atajo para crear el componente con el VSC:

![image](https://user-images.githubusercontent.com/72580574/231541733-f3e49f69-bbcf-435c-927f-b50120c8c3be.png)


Se puede crear como una función explicita:

```JSX
export function ImgMeme({props}) {
  return (
    <h1>{props}</h1>
  )
}
```

O como arrow function:

```JSX
const ImgMeme = ({props}) => {
  return (
    <h1>{props}</h1>
  )
}

export default ImgMeme
```

- Como queda el codigo:

**src**/ **App.js**:

```JSX
import Imgmeme from './componentes/Imgmeme';

function App() {
  return (
    <div className="">
      <Imgmeme/>
    </div>
  );
}

export default App;
```

**src** / **componentes** / **Imgmeme.js**:

```JSX
import html2canvas from 'html2canvas';
import React, {useState} from 'react';

const Imgmeme = ()=>{

    const [imgmeme, setImgmeme] = useState();
    const [textmeme, setTextmeme] = useState();

    const seleccionarImg = (e) => {
        setImgmeme(e.target.value);
        console.log(e.target.value);
    }

    const textomeme = (e) => {
        setTextmeme(e.target.value);
        console.log(e.target.value);
    }

    const Descargar = (e) => {
        html2canvas(document.querySelector("#exportar")).then(function(canvas) {
            {/*document.body.appendChild(canvas);*/}
            let img = canvas.toDataURL("memes/jpg");
            let link = document.createElement("a");
            link.download = "memepropio.jpg";
            link.href = img;
            link.click();
        });
    }

    return(
        <div className='text-center'>
            <h1 className='mt-3 mb-3 text-center'>Editá tu propio meme</h1>
            <h3 className='mt-3 mb-3 text-center'>Ingrese el texto del meme</h3>
            <input onChange={textomeme} className='form-control w-50 m-50 m-auto d-block' type="text" placeholder="Pone tu frase" name="meme" arial-label="default input example" ></input>
        
            <h3 className='mt-3 mb-3 text-center'>Elegí tu img</h3>
            <select onChange={seleccionarImg} className='form-select form-select-lg mb-3 w-50 m-auto' arial-label=".form-select-lg example" >
                <option value={1}>Futurama</option>
                <option value={2}>Bob esponja</option>
                <option value={3}>Señora</option>
                <option value={4}>Calamardo</option>
            </select>
            <figure className="text-center" id="exportar">
                <p className="w-100 px-30 position-absolute top-50 start-30  h1 text-center ">{textmeme} </p>
                <img src={`./memes/${imgmeme}.jpg`} className="figure-img mt-3 d-block m-auto" alt="meme" />
            </figure>     
            <button onClick={Descargar} type="button" className='btn btn-primary mt-4 mb-4'>Descargar meme</button>
        </div>
    );

}

export default Imgmeme;
```

- Dependencias que necesitamos:
 
```
"bootstrap": "^5.1.3",
"html2canvas": "^1.4.1",
"react-bootstrap": "^2.5.0",
```

Y dentro de **public** / **index.html** debo agregar para poder usar las clases de Bootstrap:

- En el `<head>` agrego le CSS de Bootrstrap (antes de mi CSS para pisarlo si lo necesito): ` <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">`

- Antes de cerrar el `</body>` le agrego le JavaScript: `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>`


- Tengo las memes en: **public** / **memes** :

[1.jpg](https://github.com/GiselaFlores/editormemes/blob/master/public/memes/1.jpg)

[2.jpg](https://github.com/GiselaFlores/editormemes/blob/master/public/memes/2.jpg)

[3.jpg](https://github.com/GiselaFlores/editormemes/blob/master/public/memes/3.jpg)

[4.jpg](https://github.com/GiselaFlores/editormemes/blob/master/public/memes/4.jpg)

---


- Para llegar al dato del input:  `event.target.value` o más simplificado `e.target.value`

---
