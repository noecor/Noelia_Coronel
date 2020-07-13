let country = "all";
let price = "all";
let size = "all";


class App extends React.Component {
  state = {
    hoteles: hotelsData,
    initialDate: "",
    endDate:"",
  };

  addInitialDate=(date)=>{
    this.setState({ initialDate: date }, () => this.filterHotel())
    console.log("esto es addInitialdate 1 "+date);
  }

  addEndDate=(date)=>{
    this.setState({ endDate: date }, () => this.filterHotel())
    console.log("esto es addEnddate1 "+date);
  }

  filterCountry = (hotel) => {
    country = hotel;
    console.log("country selected" + hotel);
    this.filterHotel();
  };

  filterPrice = (hotel) => {
    price = hotel;
    console.log("price selected " + hotel);
    this.filterHotel();
  };

  filterSize = hotel =>{
    size = hotel;
    console.log("size selected"+size)
    this.filterHotel();
  };


  filterHotel = () => {
    let arrayTemp = hotelsData;

    if(this.state.initialDate !== null && this.state.initialDate !== ""){
      arrayTemp = arrayTemp.filter(hotel => hotel.availabilityFrom >= new Date(this.state.initialDate).valueOf());
    }

    if(this.state.endDate !== null && this.state.endDate !== ""){
      arrayTemp = arrayTemp.filter(hotel => hotel.availabilityFrom >= new Date(this.state.endDate).valueOf());
    }

    if (country !== null && country !== "" && country !== "all") {
      arrayTemp = arrayTemp.filter((hotel) => country === hotel.country);
    }

    if (price !== null && price !== "" && price !== "all") {
      arrayTemp = arrayTemp.filter((hotel) => price === hotel.price.toString());
    };

    if(size === "little"){
      arrayTemp = arrayTemp.filter(hotel => hotel.rooms >=1 && hotel.rooms <= 10)
    }
    if(size ==="medium"){
      arrayTemp = arrayTemp.filter(hotel => hotel.rooms > 10 && hotel.rooms <= 20)
    }
    if(size ==="big"){
      arrayTemp = arrayTemp.filter(hotel => hotel.rooms > 20)
    }
    
    this.setState({ hoteles: arrayTemp });
  };

  render() {
    return (
      <div>
        <Header addInitialDateProp={this.state.initialDate} addEndDateProp={this.state.endDate}/>
        <Filters
          filterCountryProp={this.filterCountry}
          filterPriceProp={this.filterPrice}
          filterSizeProp={this.filterSize}
          addInitialDateProp={this.addInitialDate}
          addEndDateProp={this.addEndDate}
        />
        <CardList visibleHotels={this.state.hoteles} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

