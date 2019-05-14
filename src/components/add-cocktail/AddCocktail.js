import React from 'react';
import './AddCocktail.scss';

export default class AddCocktail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cocktailName: '',
            ingredient1: '',
            ingredient2: '',
            quantity: '',
            isSubmitted: false
        }
    }
    submitForm() {
        this.setState({
            isSubmitted: true
        })
    }

    handleChangeData(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }

    goBack(){
        this.props.history.goBack();
    }
    render() {
        let cocktail = null;
        if (this.state.isSubmitted) {
            cocktail = <div>
                <p>{this.state.cocktailName}</p>
                <p>{this.state.ingredient1}</p>
                <p>{this.state.ingredient2}</p>
                <p>{this.state.quantity}</p>
                <button className="button-search" onClick={this.goBack.bind(this)}>Hide details</button>
            </div>
        }
        return (
            <div className="add-form-container">
                <form className="add-form">
                    <label>Cocktail name</label>
                    <input className="input-container" type="text" name="cocktailName" value={this.state.cocktailName} onChange={(e) => this.handleChangeData(e)}></input>
                    <label>Ingredient 1</label>
                    <input className="input-container" type="text" name="ingredient1" value={this.state.ingredient1} onChange={(e) => this.handleChangeData(e)}></input>
                    <label>Ingredient 2</label>
                    <input className="input-container" type="text" name="ingredient2" value={this.state.ingredient2} onChange={(e) => this.handleChangeData(e)}></input>
                    <label>Quantity</label>
                    <input className="input-container" type="text" name="quantity" value={this.state.quantity} onChange={(e) => this.handleChangeData(e)}></input>
                </form>
                <button className="button-search" onClick={this.submitForm.bind(this)}>Create cocktail</button>

                <div>
                    {this.state.isSubmitted && cocktail}
                </div>
            </div>

        );
    }

}
