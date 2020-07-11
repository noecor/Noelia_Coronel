class Filters extends React.Component {
  state = {
    initialDate: '',
    endDate: '',
    pais: null,
    price: null,
    size: null,
  };

  handleOnClickDate = (event) => {
    this.setState({ initialDate: event.target.value });
  };
  handleOnClickDate2 = (event) => {
    this.setState({ endDate: event.target.value });
  };
  handleOnClick2 = (event) => {
    {
      /*this.setState({ endDate: this.set.endDate})*/
    }
  };

  render() {
    const paisOption = pais.map((e) => <option key={e}>{e}</option>);
    const priceOption = prices.map((e) => <option key={e}>{e}</option>);
    return (
      <div>
        <input
          type="date"
          value={ this.state.initialDate }
          onChange={this.handleOnClickDate}
        ></input>
        <input type="date" onChange={this.handleOnClickDate2}></input>
        <select>
          <option key="todos"> Todos los países</option>
          {paisOption}
        </select>
        <select>
          <option value="available"> Cualquier precio </option>
          {priceOption}
        </select>
        <select>
          <option value="available"> Cualquier tamaño </option>
          <option value="available"> Hotel pequeño </option>
          <option value="available"> Hotel mediano </option>
          <option value="available"> Hotel grande </option>
        </select>
      </div>
    );
  }
}
