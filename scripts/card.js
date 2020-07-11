class Card extends React.Component {
    render(){
        return (
        <div>
            <div className="image">
                <img src={this.props.hotelImageUrl} alt="hotel" />
            </div>
            <div className="title">
                <p>{this.props.title}</p> 
            </div>
        </div>
        );
    }
}