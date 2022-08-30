const d = document;
let byId = d.getElementById("divs");
console.log(byId); // para ver el nodo
byId.style.background = 'yellow';
byId.style.color = 'rbg(255, 255, 255)';

let tag = d.getElementsByTagName('div');

for(let i = 1; i < tag.length; i++) {
  tag[i].innerHTML = `<p>Soy el link numero ${i}</p>`
}

let query = d.querySelector('b');
query.innerText = 'Soy el query';
console.log('Valores query', query);