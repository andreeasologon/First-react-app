import React, {useState} from 'react';
import './AddCocktail.scss';

const AddCocktail = (match) =>{
    const [form, setForm] = useState({
        cocktailName: '',
        ingredient1: '',
        ingredient2: '',
        quantity: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const  handleChangeData = e => {
        setForm({...form, [e.target.name]: e.target.value });
    }
    const submitForm = () => {
       setIsSubmitted(true);
     }

     const goBack = () => {
        match.history.goBack();
    }

    return(
        <div className="add-form-container">
        <form className="add-form">
            <label>Cocktail name</label>
            <input className="input-container" type="text" name="cocktailName" value={form.cocktailName} onChange={handleChangeData}></input>
            <label>Ingredient 1</label>
            <input className="input-container" type="text" name="ingredient1" value={form.ingredient1} onChange={handleChangeData}></input>
            <label>Ingredient 2</label>
            <input className="input-container" type="text" name="ingredient2" value={form.ingredient2} onChange={handleChangeData}></input>
            <label>Quantity</label>
            <input className="input-container" type="text" name="quantity" value={form.quantity} onChange={handleChangeData}></input>
        </form>
        <button className="button-search" onClick={submitForm}>Create cocktail</button>

        <div>
            {isSubmitted &&  <div>
                <p>{form.cocktailName}</p>
                <p>{form.ingredient1}</p>
                <p>{form.ingredient2}</p>
                <p>{form.quantity}</p>
                <button className="button-search" onClick={goBack}>Hide details</button>
            </div>}
        </div>
    </div>
    )
}

export default AddCocktail;