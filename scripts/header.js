class Header extends React.Component {
  state = {
    date: today,
  }
  render() {
    return (
      <div>
        <h1>Hoteles</h1>
        <p> desde el { today.toDateString() } hasta el { today.toDateString() } </p>
      </div>
    );
  }
}

{/*  today = new Date().toDateString(); */}