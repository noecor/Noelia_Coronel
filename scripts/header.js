//Esta función toma la fecha seleccionada y la convierte a un formato legible. Cuando no hay ninguna seleccionada muestra la fecha del día actual.
//Debajo el componente Header
const selectedDate = (date) => {
  //especifico las opciones de localDateString
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC"
  };
  if (date === "") {
    return today.toLocaleDateString("es-AR", options);
  } else {
    return new Date(date).toLocaleDateString("es-AR", options);
  }
};

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1 className="header-title">Hoteles</h1>
        <p>
          desde el {selectedDate(this.props.addInitialDateProp)}, hasta el{" "}
          {selectedDate(this.props.addEndDateProp)}
        </p>
      </div>
    );
  }
}
