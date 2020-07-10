
/*const InitDate = () => {

    return (
      <div>
        <input type="date"></input>
        <input type="date"></input>
      </div>
    );
  }*/


class InitDate extends React.Component {
  state= {
    initialDate: null,
    endDate: null,
  }
  render(){
    return (
      <div>
        <input type="date"></input>
        <input type="date"></input>
      </div>
    );
  }
}
