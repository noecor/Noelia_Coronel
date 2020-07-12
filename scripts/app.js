let country;

class App extends React.Component {
  state={
    hoteles: hotelsData,
  }

  filterCountry = (hotel) =>{
    country = hotel;
    console.log("adding a hotel"+hotel);
    this.filterHotel();
  };
  
  filterHotel = () =>{
    let arrayTemp = hotelsData;
    arrayTemp = arrayTemp.filter(h=> country === h.country);
    this.setState({ hoteles: arrayTemp });
  }
  render() {
    return (
      <div>
        <Header addHotel={this.addHotel}/>
        <Filters filterCountryProp={this.filterCountry}/>
        <CardList addHotel={this.addHotel} visibleHotels={this.state.hoteles}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
    //copio el estado
   {/* const hotels = {...this.state.hoteles}
    //agrego el hotel a el estado de App

    //actualizo el estado
  this.setState({ hoteles: hotels})*/}