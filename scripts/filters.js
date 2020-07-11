
class Filters extends React.Component {
  state= {
    initialDate: null,
    endDate: null,
  }

  handleOnClick = (event) => {
    this.setState({ initialDate: this.set.initialDate})
  }
  handleOnClick2 = (event) => {
    {/*this.setState({ endDate: this.set.endDate})*/}
  }


  render(){
      const paisOption = pais.map(e => 
        <option key={e}>{e}</option>);
      const priceOption = prices.map(e =>
        <option key={e}>{e}</option>);
    return (
      <div>
        <input type="date" value={'DD/MM/YYYY'} onChange={this.handleOnClick}></input>
        <input type="date" onChange={this.handleOnClick2}></input>
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
