# :star: 8vo mini proyecto: Diario de viaje

---

### Este es el modelo a seguir:

![image](https://user-images.githubusercontent.com/72580574/204061746-fcd1577e-0487-418b-a53d-69455ba0d13d.png)

---

### Requerimientos:

- Como no se llama a una API, hay que crear un array separado, en un archivo .js que sea un array de objetos, cada objeto tendra los datos para mostrar un viaje.

- Los datos que deberá tener ese objeto viaje son:

```
-title
-location
-GoogleMaps link
-start date
-end date
-description
-imageURL
```

- Como ayuda, nos da un data.js como ejemplo:

```JavaScript
const data = [
  {
    title: "Mount Fuji",
    location: "Japan·,
    googleMapsUrl: "https://www.google.com/maps/place/Mount+Fuji/@35.3606237,138.7098109,14z/data=!3m1!4b1!4m5!3m4!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634",
    startDate:"12 Jan, 2021",
    endDate: "24 Jan, 2021",
    description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters. Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreing tourists.",
    imageUrl: "https://source.unsplash.com/WlxQvbMyfas"
  }
]
export default data;
```

- usar .map() y props

- estilarlo y emprolizarlo

---
