import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TitleDetails = (match) => {
    const [drinks, setDrinks] = useState();

    const goBack = () => {
        match.history.goBack();
    }
    useEffect(() => {
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + match.match.params.id)
            .then(response =>
                setDrinks(response.data.drinks)
            );
    }, [setDrinks]);

    return (
        <div>
            {
                drinks !== undefined && drinks.map(item => {
                    return (<div className="title-details" key={item.idDrink}>
                        <p>{item.strDrink}</p>
                        <img src={item.strDrinkThumb} alt={item.strDrink}></img>
                        <button className="button-search" onClick={goBack}>Go back</button>
                    </div>)
                })
            }
        </div>
    )
}
export default TitleDetails;