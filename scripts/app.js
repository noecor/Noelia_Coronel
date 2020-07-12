class App extends React.Component {
  state={
    hoteles: [],
  }
  render() {
    return (
      <div>
        <Header />
        <Filters />
        <CardList />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
