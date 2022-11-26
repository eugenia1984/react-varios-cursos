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


---

## :star: 2 - Git avanzado

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

## :star: 3 - Git Flow

Gitflow **es un flujo de trabajo de Git heredado que fue en origen una estrategia innovadora y revolucionaria para gestionar ramas de Git** . Gitflow ha perdido popularidad en beneficio de los flujos de trabajo basados en troncos, que ahora se consideran prácticas recomendadas para el desarrollo continuo de software y las prácticas de DevOps. Además, puede ser difícil utilizar Gitflow con CI/CD. Esta entrada presenta el uso de Gitflow con fines de historial.

### ¿Qué es Gitflow?

Gitflow **es un modelo alternativo de creación de ramas en Git en el que se utilizan ramas de función y varias ramas principales**. Fue Vincent Driessen en nvie quien lo publicó por primera vez y quien lo popularizó. **En comparación con el desarrollo basado en troncos, Gitflow tiene diversas ramas de más duración y mayores confirmaciones**. Según este modelo, **los desarrolladores crean una rama de función y retrasan su fusión con la rama principal del tronco hasta que la función está completa**. Estas ramas de función de larga duración requieren más colaboración para la fusión y tienen mayor riesgo de desviarse de la rama troncal. También pueden introducir actualizaciones conflictivas.

Gitflow puede utilizarse en proyectos que tienen un ciclo de publicación programado, así como para la práctica recomendada de DevOps de entrega continua. Este flujo de trabajo no añade ningún concepto o comando nuevo, aparte de los que se necesitan para el flujo de trabajo de ramas de función. Lo que hace es asignar funciones muy específicas a las distintas ramas y definir cómo y cuándo deben estas interactuar. Además de las ramas de función, utiliza ramas individuales para preparar, mantener y registrar publicaciones. Por supuesto, también puedes aprovechar todas las ventajas que aporta el flujo de trabajo de ramas de función: solicitudes de incorporación de cambios, experimentos aislados y una colaboración más eficaz.

 

---
