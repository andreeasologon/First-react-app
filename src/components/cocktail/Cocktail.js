import React from 'react';
import './Cocktail.scss';
export default class Cocktail extends React.Component {

  render() {
    return (
        <div className="tile-container">
          <p>{this.props.title}</p>
         <img src={this.props.imgUrl} alt={this.props.title}></img>
        </div>
    );
  }
}