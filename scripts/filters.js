
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
        <select>
          <option value="available"> Todos los países</option>
        </select>
        <select>
        <option value="available"> Cualquier precio </option>
        </select>
        <select>
        <option value="available"> Cualquier tamaño </option>
        </select>
      </div>
    );
  }
}
