import React, { Fragment } from 'react';
import axios from 'axios';

export default class TitleDetails extends React.Component {
    componentDidMount() {
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + this.props.match.params.id)
            .then(response => this.setState({
                drink: response.data.drinks,
                category: this.props.match.params.id
            })
            );
    }
    goBack() {
        this.props.history.goBack();
      }
    render() {

        let cocktail = null;
        if (this.state !== null) {
            cocktail = this.state.drink.map(item => {
                return (<div className="title-details" key={item.idDrink}>
                    <p>{item.strDrink}</p>
                    <img src={item.strDrinkThumb} alt={item.strDrink}></img>
                    <button className="button-search" onClick={this.goBack.bind(this)}>Go back</button>
                </div>)
            });
        }

        return (
            <Fragment>
                {this.state != null && cocktail}
            </Fragment>
        );
    }
}