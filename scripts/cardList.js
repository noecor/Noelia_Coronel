class CardList extends React.Component {
  render() {
    const cardComponents = this.props.visibleHotels.map( h => (
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
      />
    ));
    return (
      <div className="Wrapper-CardList">{cardComponents}</div>
    );
  }
}