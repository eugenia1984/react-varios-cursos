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

- Para tener los datos del meme, vamos a  tener que trabajar con `<Form>` con un `<input />` para introducir un texto, un `<select />` para que elija las imagenes. Vamos a tener **eventos**, que me van a ir seteando los **States**, asi vamos viendo los cambios del usuario, por ejemplo que me cambia el texto, o la imagen. Todo esto para recolectar información del usuario y poder armar el meme.



---
