class CardList extends React.Component {
  state= {
    hoteles: [],
  }
  render() {
    const cardComponents = hotelsData.map( h => (
      <Card
        hotelImageUrl={h.photo}
        title={h.name}
        description={h.description}
        location={h.city, h.country}
        rooms={h.rooms}
        price={h.price}
        key={h.name}
        id={h.name}          
      />
    ));
    return (<div className="ui unstackable items">{cardComponents}</div>);
}
}