
const selectedDate = (date) =>{ 
  var options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
  if (date === "") {
    return today.toLocaleDateString("es-AR", options);
  } else {
    return new Date(date).toLocaleDateString("es-AR", options);
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Hoteles</h1>
        <p>
          desde el {selectedDate(this.props.addInitialDateProp)}, hasta el {selectedDate(this.props.addEndDateProp)}
        </p>
      </div>
    );
  }
}

