# :computer: Clase 26: 12 de Junio - FireBase

---

## FireBase

Autentificaón: login usando las cuentas de gmail, facebook, etc

Base de datos: Almacenamiento en cloud, la base de datos en documentos

Storage: cargar una base de datos, pero en modo archivos multimedia (audio, video, imagen)

---

## :computer: Editor de tareas

- Volvemos al proyecto de editor de tarear (ToDO List) para transformarlo en un CRUD con el back en FireBase

#### Cloud Firestore 

![image](https://github.com/eugenia1984/react-varios-cursos/assets/72580574/ff50d51b-939d-46df-a579-78a6da4e605b)

En vez de **tablas** maneja **colecciones** que adentro tienen los **documentos**. 

Para cada campo le tengo que pponer: **nombre**, el **tipo de dato** que almacenara, y el **valor** del campo.

Puedo tener **Documentos** con **distinta cantidad de campos** o inclusive con **distintos campos**. Si por ejemplo llamo al valor **precio** y no esta declarado en todos, solo me trae los que los tienen, no me va a dar errores.

-> Para agregar una **colección**, hay que ponerle un nombre. Loego agregamos el **docuemnto** y adentro ya puedo ingresar los datos.


---
