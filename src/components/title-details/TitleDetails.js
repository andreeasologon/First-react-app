import React from 'react';
import './TitleDetails.scss';
export default class TitleDetails extends React.Component {

    goBack = () => {
       this.props.fromTitletoCocktails(true);
    }

    render() {
        return (
            <div className="tile-details">
                <p>{this.props.title}</p>
                <img src= {this.props.imgUrl} alt={this.props.title}></img>
                <button className="button-search" onClick ={this.goBack}>Go back</button>
            </div>
        );
    }
}
