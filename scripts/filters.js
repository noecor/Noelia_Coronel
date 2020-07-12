class Filters extends React.Component {
  state = {
    initialDate: "",
    endDate: "",
    country: null,
    price: null,
    size: null,
  };

  handleOnClickDate = (event) => {
    this.setState({ initialDate: event.target.value });
  };
  handleOnClickDate2 = (event) => {
    this.setState({ endDate: event.target.value });
  };
  handleOnClickcountry = (event) => {
    this.setState({ country: event.target.value });
  }
  handleOnClickPrice = (event) =>{
    this.setState({ price: event.target.value });
  };
  handleOnClickSize = (event) =>{
    this.setState({ size: event.target.value });
  };

  render() {
    const countryOption = countries.map((e) => <option key={e}>{e}</option>);
    const priceOption = prices.map((e) => <option key={e}>${e}</option>);
    return (
      <div>
        <input type="date" value={ this.state.initialDate } onChange={this.handleOnClickDate}></input>
        <input type="date" value={ this.state.endDate } onChange={this.handleOnClickDate2}></input>
        <select onChange={this.handleOnClickcountry}>
          <option key="all"> Todos los países</option>
          {countryOption}
        </select>
        <select onChange={this.handleOnClickPrice}>
          <option value="available"> Cualquier precio </option>
          {priceOption}
        </select>
        <select onChange={this.handleOnClickSize}>
          <option value="all"> Cualquier tamaño </option>
          <option value="little"> Hotel pequeño </option>
          <option value="medium"> Hotel mediano </option>
          <option value="big"> Hotel grande </option>
        </select>
      </div>
    );
  }
}
