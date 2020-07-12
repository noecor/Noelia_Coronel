class App extends React.Component {
  state={
    hoteles: [],
  }

  addHotel = hotel =>{
    console.log("adding a hotel")
  };
  render() {
    return (
      <div>
        <Header addHotel={this.addHotel}/>
        <Filters addHotel={this.addHotel}/>
        <CardList addHotel={this.addHotel}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
