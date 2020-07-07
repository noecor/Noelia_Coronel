//import today from './data.js'



function Header() {
  const today = new Date().toDateString();
    return (
      <div>
        <h1>Hoteles</h1>
        <p> desde el { today } hasta el { today } </p>
      </div>
    );
  }

console.log(today)