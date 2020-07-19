//Variables que inicializan los valores de los filtros.
let country = "all";
let price = "all";
let size = "all";

//Componente App
class App extends React.Component {
  state = {
    hoteles: hotelsData,
    initialDate: "",
    endDate: ""
  };

  // Recibe valores de filters y los guarda en el state de App, inmediatamente luego aplica filtros.
  addInitialDate = (date) => {
    this.setState({ initialDate: date }, () => this.filterHotel());
  };

  addEndDate = (date) => {
    this.setState({ endDate: date }, () => this.filterHotel());
  };

  filterCountry = (hotel) => {
    country = hotel;
    this.filterHotel();
  };

  filterPrice = (hotel) => {
    price = hotel;
    this.filterHotel();
  };

  filterSize = (hotel) => {
    size = hotel;
    this.filterHotel();
  };

  //Filtra el Array segun los valores guardados en el state.
  // Si el array no tiene contenido (ningún hotel cumple con elfiltro),
  //devuelve alerta de aviso. Sino, guarda en el state los hoteles que cumplen con los filtros,
  //para luego pasarselo a CardList por Props.
  filterHotel = () => {
    let arrayTemp = hotelsData;

    if (this.state.initialDate !== null && this.state.initialDate !== "") {
      arrayTemp = arrayTemp.filter(
        (hotel) =>
          hotel.availabilityFrom >= new Date(this.state.initialDate).valueOf()
      );
    }

    if (this.state.endDate !== null && this.state.endDate !== "") {
      arrayTemp = arrayTemp.filter(
        (hotel) =>
          hotel.availabilityTo >= new Date(this.state.endDate).valueOf()
      );
    }

    if (country !== null && country !== "" && country !== "all") {
      arrayTemp = arrayTemp.filter((hotel) => country === hotel.country);
    }

    if (price !== null && price !== "" && price !== "all") {
      arrayTemp = arrayTemp.filter((hotel) => price === hotel.price.toString());
    }

    if (size === "little") {
      arrayTemp = arrayTemp.filter(
        (hotel) => hotel.rooms >= 1 && hotel.rooms <= 10
      );
    }
    if (size === "medium") {
      arrayTemp = arrayTemp.filter(
        (hotel) => hotel.rooms > 10 && hotel.rooms <= 20
      );
    }
    if (size === "big") {
      arrayTemp = arrayTemp.filter((hotel) => hotel.rooms > 20);
    }

    if (arrayTemp.length === 0) {
      alert("Lo sentimos, no hay resultados coincidentes con tu solicitud.");
    }

    this.setState({ hoteles: arrayTemp });
  };

  render() {
    return (
      <div>
        <Header
          addInitialDateProp={this.state.initialDate}
          addEndDateProp={this.state.endDate}
        />
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
