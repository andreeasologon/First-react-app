import React from 'react';
import './Cocktail.scss';
export default class Cocktail extends React.Component {

  handleClick = (param) => {
 
    var data = [{
      idDrink: this.props.idDrink,
      title: this.props.title,
      imgUrl: this.props.imgUrl,
      go: param
    }]
    this.props.getDetails(data);
  }

  render() {
 
    return (
      <div className="tile-container">
        <p onClick={this.handleClick.bind(this, 'title')}>{this.props.title}</p>
          <img onClick={this.handleClick.bind(this,'img')} src= {this.props.imgUrl} alt={this.props.title}></img>
      </div>
    );
  }
}
