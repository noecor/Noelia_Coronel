
const App = () => {
  return (
    <div>
      <h1></h1>
        <Header/>
        <Filters/>
        <CardList/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"))

