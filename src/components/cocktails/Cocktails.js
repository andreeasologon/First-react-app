import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Cocktail from '../cocktail/Cocktail';
import './Cocktails.scss';

export default class Cocktails extends React.Component {


  componentDidMount() {
    this.requestData();
  }
  componentWillUpdate(prevProps, prevState) {

    if (prevProps.match.params.id !== prevState.category) {
      this.requestData();
    }

  }
  requestData() {
    if (this.props.match.params.id === 'Alcoholic' || this.props.match.params.id === 'Non_Alcoholic') {
      axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=' + this.props.match.params.id)
        .then(response => this.setState({
          cocktails: response.data,
          category: this.props.match.params.id
        })
        );
    }
    else if (this.props.match.params.id === 'Ordinary_Drink') {
      axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=' + this.props.match.params.id)
        .then(response => this.setState({
          cocktails: response.data,
          category: this.props.match.params.id
        })
        );
    } else if (this.props.match.params.id === 'Cocktail_glass' || this.props.match.params.id === 'Champagne_flute') {
      axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=' + this.props.match.params.id)
        .then(response => this.setState({
          cocktails: response.data,
          category: this.props.match.params.id
        })
        );
    }
  }

  render() {
    let cocktailTiles = null;

    if (this.state !== null) {
      cocktailTiles = this.state.cocktails.drinks.map(item => {
        return <Link key={item.idDrink} to={`/details/${item.idDrink}`}>
          <Cocktail key={item.idDrink} title={item.strDrink} imgUrl={item.strDrinkThumb} idDrink={item.idDrink} getDetails={this.getTitleDetails} nav={this.props} />
        </Link>
      });
    }

    return (
      <div>
        <div className="cocktails-details">
          <h4>{this.state !== null && this.state.category}</h4>
          <Link to={`/addCocktail/`}><button className="button-search">Add cocktail</button></Link>
        </div>

        <div className="tiles-container">
          {cocktailTiles}
        </div>
      </div>

    );
  }
}
