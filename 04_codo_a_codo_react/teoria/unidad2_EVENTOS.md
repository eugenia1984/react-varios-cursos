# :star2: EVENTOS * Unidad 2

---

 ## :book: Temas:

```
- 1 - principios de diseño en react
- 2- renderizado condicional
- 3 - deploy en netlify
```

---

### :star: 1 - Principios de diseño en react

Los principios de diseño son las reglas que un equipo sigue para crear sus aplicaciones o proyectos, y el equipo de Facebook encargado de mantener y crear nuevas APIs para React no es la excepción, ellos también cuentan con ciertos principios a la hora de escribir su código. Los más importantes son:

### Abstracciones comunes

En el core de React no se van a incluir APIs para resolver problemas demasiado específicos, a menos de que muchas personas estén resolviendo dicho problema de una manera muy mala y poco funcional.

### Interoperabilidad

React **debe ser capaz de convivir con otras herramientas sin causar ningún problema**, por lo tanto **podemos tener proyectos que usan diferentes herramientas y funcional igualmente**, o también **podemos migrar proyectos que están construidos con otra herramienta y lentamente incluir React sin que la app se rompa**.

### Estabilidad

**React no va a lanzar nuevas versiones de su core si estas rompen el código que ya existe**, por lo tanto **el código que escribimos hace varios meses o años todavía va a funcionar a día de hoy**. En caso de que el equipo de React saque alguna funcionalidad que cause conflictos con APIs anteriores, entonces le avisaran a la comunidad para así poder implementar una solución diferente a tiempo.

### Experiencia de desarrollo

React no solo busca que podamos implementar soluciones a nuestros problemas con sus APIs, sino que también busca que estas soluciones sean disfrutables, y que brinden una buena experiencia a la hora de ser implementadas.

### Implementación

El código 'aburrido' siempre se va a preferir sobre el código elegante, ya que este último puede llegar a ser difícil de mover o eliminar en caso de que se deseen hacer modificaciones a la app.

### Optimizado para la instrumentación

**Los nombres de las APIs de react siempre tratarán de ser autodescriptivos, detallados y distintivos**, aunque esto no significa que se vayan a colocar nombres muy largos.

### Dogfooding

Debemos recordar que React es un proyecto creado por y para Facebook, por lo tanto el equipo encargado de crear nuevas funcionalidades siempre priorizará lo que necesita Facebook y no lo que quiere o necesita la comunidad. Aunque esto parece malo a primera vista, es todo lo contrario, ya que React cuenta con el apoyo y mantenimiento de una empresa enorme, lo cual lo convierte en una herramienta muy confiable.

### Planificación

Antes de empezar cualquier proyecto debemos definir qué responsabilidades le vamos a delegar a React y cuales dependen de nosotros.

### Configuración

Nosotros no podemos, o mejor, no deberíamos modificar directamente el código de React, ya que esto podría causar conflictos a la hora de añadir nuevas herramientas al entorno de nuestro proyecto.

### Depuración

**React siempre nos va a dejar pequeñas pistas cada vez que ocurra un error dentro de nuestra aplicación**, para así poder encontrar cuál es el foco del problema y saber que deberíamos cambiar.

---

### :star: 2- Renderizado condicional

---

### :star: 3 - Deploy en netlify

---
