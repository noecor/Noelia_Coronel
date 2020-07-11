class Card extends React.Component {
    render(){
        return (
        <div>
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
                <p>{this.props.price}</p>
            </div>
            <button>Reservar</button>
        </div>
        );
    }
}