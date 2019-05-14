import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.scss';
import { Header, SearchBar, Cocktails } from './components/index';
import TitleDetails from './components/title-details/TitleDetails';
import AddCocktail from './components/add-cocktail/AddCocktail';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <ul className="nav-container">
            <li><Link to="/Alcoholic">Alcoholic</Link></li>
            <li><Link to="/Non_Alcoholic">Non Alcoholic</Link></li>
            <li><Link to="/Ordinary_Drink">Ordinary Drink</Link></li>
            <li><Link to="/Cocktail_glass">Cocktail glass</Link></li>
            <li><Link to="/Champagne_flute">Champagne flute</Link></li>
          </ul>
          <SearchBar />
          <Switch>
            <Route exact path={`/details/:id`} component={TitleDetails}></Route>
            <Route exact path={`/addCocktail/`} component={AddCocktail}></Route>
            <Route exact path="/:id" component={Cocktails}></Route>
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
