# :star2: ARQUITECTURA: Unidad 2  

---

## :book: Temas:

```
- 1 - Flujo de trabajo
- 2 - Git avanzado
- 3 - Git Flow
```

---

## :star:  1 - Flujo de trabajo

### Ramas

La creación de ramas es una función disponible en la mayoría de los **sistemas de control de versiones** actuales. La creación de ramas en otros sistemas de control de versiones puede tanto llevar mucho tiempo como ocupar mucho espacio de almacenamiento. **En Git, las ramas son parte del proceso de desarrollo del dia a dia**. Las ramas de Git **son un puntero eficaz para las instantáneas de tus cambios**. Cuando quieres añadir una nueva función o solucionar un error, independientemente de su tamaño, generas una nueva rama para alojar estos cambios. Esto **hace que resulte más complicado que el código inestable se fusione con el código base principal, y te da la oportunidad de limpiar tu historial futuro antes de fusionarlo con la rama principal**. Con git, la gestión de ramas se hace a través del comando ```git branch```, las ramas de Git son una parte integral del flujo de trabajo diario.

![image](https://user-images.githubusercontent.com/72580574/204103890-3efadf29-cedd-49e3-85bb-bce8d0418d36.png)


### Funcionamiento

Una rama representa una línea independiente de desarrollo. 

Las ramas sirven como una abstracción de los procesos de cambio, preparación y confirmación.

Pueden generarse como una forma de solicitar un nuevo directorio de trabajo o un nuevo historial de proyecto. 

Las nuevas confirmaciones se registran en el historial de la rama actual, lo que crea una bifurcación en el historial del proyecto.

El comando ```git branch``` te permite crear, enumerar, cambiar el nombre y eliminar ramas. No te permite cambiar entre ramas o volver a unir un historial bifurcado. Por este motivo, git branch está estrechamente relacionado con los comandos ```git checkout``` y ```git merge```.

### Opciones comunes

- El comando principal, sin parámetros, permite listar todas las ramas del repositorio ->  ```git branch```

- Para crear una rama nueva se usa el comando como se muestra a continuación: ```git branch nombreRama```

- Para eliminar una rama, es necesario agregar la opcion **-d** -> ```git branch -d nombreRama```

- Si se desea cambiar el nombre de una rama, se puede utilizar la opción **-m**, es importante mencionar que cambia el nombre de la rama sobre la cual se está trabajando -> ```git branch -m nombreRama```

- Para listar todas las ramas en el repositorio remoto se puede utilizar el comando -> ```git branch -a```

---

## :star: 2 - Git avanzado

---

## :star: 3 - Git Flow

---
