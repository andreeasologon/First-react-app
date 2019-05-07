import React from 'react';
import './Cocktail.scss';
export default class Cocktail extends React.Component {

  handleClick = () => {
   
    var data = [{
      idDrink: this.props.idDrink,
      title: this.props.title,
      imgUrl: this.props.imgUrl
    }]
    this.props.getDetails(data);
  }

  render() {
    return (
      <div className="tile-container">
        <p onClick={this.handleClick}>{this.props.title}</p>
          <img onClick={this.handleClick} src= {this.props.imgUrl} alt={this.props.title}></img>
      </div>
    );
  }
}
