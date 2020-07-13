const selectedDate = (date) =>{ 
  console.log ("este es el parámetro"+date);
  if (date === "") {
    return today.toDateString();
  } else {
    return new Date(date).toDateString();
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Hoteles</h1>
        <p>
          desde el {selectedDate(this.props.addInitialDateProp)} hasta el {selectedDate(this.props.addEndDateProp)}
        </p>
      </div>
    );
  }
}

