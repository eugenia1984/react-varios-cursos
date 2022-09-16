let robot = "🤖";
let cowboy = "🤠";
let smile = "🌝";
let name= "React";

ReactDOM.render(
  <ul>
    <li>{robot}</li>
    <li>{cowboy}</li>
    <li>{smile}</li>
    <li>{name.toUpperCase()}</li>
  </ul>,
  document.getElementById("root")
);