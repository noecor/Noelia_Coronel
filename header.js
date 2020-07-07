//import today from './data.js'



function Header() {
  const today = new Date();
    return (
      <div>
        <h1>Hoteles</h1>
        <p> `desde el ${ today } hasta el miércoles, ${ today}`</p>
      </div>
    );
  }

console.log(today)