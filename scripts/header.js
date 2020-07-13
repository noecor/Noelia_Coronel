class Header extends React.Component {
  selectedDate = (date) => {
    console.log("este param es"+date)
    if (date === "") {
      today;
    } else {
      date;
    }
  };

  render() {
    return (
      <div>
        <h1>Hoteles</h1>
        <p>
          desde el {this.selectedDate("banana")} hasta el {this.props.addEndDateProp}{" "}
        </p>
      </div>
    );
  }
}

{
  /*  today = new Date().toDateString(); */
}
