const selectedPrice = (price) =>{ 
    console.log ("este es el parámetro price"+price);
    switch (price) {
        case 1:
        return "$"
        break;
        case 2:
        return "$$"
        break;
        case 3:
        return "$$$"
        break;
        case 4:
        return "$$$$"
        break;
        default:
            console.log("no se imprimio")
    }
  }
class Card extends React.Component {
    render(){
        return (
        <div className="wrapper">
            <div className="image">
                <img src={this.props.hotelImageUrl} alt="hotel" width="300"/>
            </div>
            <div className="title">
                <p>{this.props.title}</p> 
            </div>
            <div>
                <p>{this.props.description}</p>
            </div>
            <div>
                <p>{this.props.city}, {this.props.country}</p>
            </div>
            <div>
                <p>{this.props.rooms} Habitaciones</p>
            </div>
            <div>
                <p>{selectedPrice(this.props.price)}</p>
            </div>
            <button>Reservar</button>
        </div>
        );
    }
}