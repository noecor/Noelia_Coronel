
class Filters extends React.Component {
  state= {
    initialDate: null,
    endDate: null,
  }

  handleOnClick = (event) => {
    console.log(this.state);
    this.setState({ initialDate: this.set.initialDate})
  }
  handleOnClick2 = (event) => {
    {/*this.setState({ endDate: this.set.endDate})*/}
  }

  render(){
    return (
      <div>
        <input type="date" onChange={this.handleOnClick}></input>
        <input type="date" onChange={this.handleOnClick2}></input>
      </div>
    );
  }
}
