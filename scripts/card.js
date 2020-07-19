//Esta función maneja la información a mostrar en el select de precios, para que se muestren sólo signos $, en vez de los valores del array.
//Debajo el componente Card
const selectedPrice = (price) => {
  switch (price) {
    case 1:
      return "$";
      break;
    case 2:
      return "$$";
      break;
    case 3:
      return "$$$";
      break;
    case 4:
      return "$$$$";
      break;
    default:
      console.log("no se imprimió selectedPrice");
  }
};
class Card extends React.Component {
  render() {
    const {
      hotelImageUrl,
      title,
      description,
      city,
      country,
      rooms,
      price
    } = this.props;
    return (
      <div className="wrapper-Card">
        <div className="image">
          <img src={hotelImageUrl} alt="hotel" width="310" />
        </div>
        <div className="title">
          <p>{title}</p>
        </div>
        <div>
          <p className="description">{description}</p>
        </div>
        <div className="button">
          <i className="material-icons icon">room</i>
          <p className="city">
            {city}, {country}
          </p>
        </div>
        <div className="button position-abs">
          <i className="material-icons icon">hotel</i>
          <p className="city ">{rooms} Habitaciones</p>
        </div>
        <div>
          <p className="price">{selectedPrice(price)}</p>
        </div>
        <button className="btn">Reservar</button>
      </div>
    );
  }
}
