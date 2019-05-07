import React from 'react';
import './ImageDetails.scss';
export default class ImageDetails extends React.Component {

    goBack = () => {
       this.props.fromImagetoCocktails(true);
    }

    render() {
        return (
            <div className="img-details">
                <p>{this.props.title}</p>
                <img src= {this.props.imgUrl} alt={this.props.title}></img>
                <button className="button-search" onClick ={this.goBack}>Go back</button>
            </div>
        );
    }
}
