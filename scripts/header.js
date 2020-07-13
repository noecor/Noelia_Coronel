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
    const InDate = this.props.addInitialDateProp;
    console.log("esto es indate"+InDate)
    return (
      <div>
        <h1>Hoteles</h1>
        <p>
          desde el {this.props.addInitialDateProp} hasta el {this.props.addEndDateProp}
        </p>
      </div>
    );
  }
}

{
  /*  today = new Date().toDateString(); */
}
