import React from 'react';
import Cocktail from '../cocktail/Cocktail';
import './Cocktails.scss';
import TitleDetails from '../title-details/TitleDetails';
import ImageDetails from '../image-details/ImageDetails';

export default class Cocktails extends React.Component {

  getTitleDetails = (params) => {
    return params.map(item => {
      this.setState({
        idDrink: item.idDrink,
        title: item.title,
        imgUrl: item.imgUrl,
        isBackTitle: false,
        isBackImg: false
      })
    })
  }

  refreshCocktails = (params) => {
    this.setState({
      isBackTitle: params,
      isBackImg: params,
    })
  }
  render() {
    let cocktailTiles = null;
    let titleDescription = null;
    let imgDescription = null;

    if (this.props.cocktails !== "") {
      cocktailTiles = this.props.cocktails.drinks.map(item => {
        return <Cocktail key={item.idDrink} title={item.strDrink} imgUrl={item.strDrinkThumb} idDrink={item.idDrink} getDetails={this.getTitleDetails} />
      });
    }

    if (this.state !== null && this.state.isBackTitle === false) {
      titleDescription = <TitleDetails key={this.state.idDrink} title={this.state.title} imgUrl={this.state.imgUrl} id={this.state.idDrink} fromTitletoCocktails={this.refreshCocktails} />
    }

    if (this.state !== null && this.state.isBackImg === false) {
      imgDescription = <ImageDetails key={this.state.idDrink} title={this.state.title} imgUrl={this.state.imgUrl} id={this.state.idDrink} fromImagetoCocktails={this.refreshCocktails} />
    }


    return (
      <div>
        <h4>{(console.log(this.state))}</h4>
        <div className="tiles-container">
          {this.state === null ? cocktailTiles : (this.state.isBackTitle ? imgDescription : titleDescription)}
          {this.state !== null && (this.state.isBackTitle || this.state.isBackImg)? cocktailTiles : ''}
        </div>
      </div >
    );
  }
}
