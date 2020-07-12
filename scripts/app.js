class App extends React.Component {
  state={
    hoteles: [],
  }

  addHotel = hotel =>{
    console.log("adding a hotel")
    const hotels = {...this.state.hoteles}
    this.setState()
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
