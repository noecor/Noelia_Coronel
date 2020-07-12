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
        city={h.city}
        country={h.country}
        rooms={h.rooms}
        price={h.price}
        key={h.name}
        id={h.name}   
        addHotel={this.props.addHotel}       
      />
    ));
    return (
      <div className="ui unstackable items">{cardComponents}</div>
    );
  }
}