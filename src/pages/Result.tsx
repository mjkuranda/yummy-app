import React from 'react';
import Footer from '../components/Footer';

import '../assets/styles/result-media.css';
import '../assets/styles/result.css';
import '../assets/styles/mobile/result.css';

// TODO: Fetch image from the database
import staticImage from '../src/assets/images/berries.jpg';

type Icon = {
    link: string;
    name: string;
    src: string;
};

type Ingredient = {
    icon: Icon;
    link: string;
    name: string;
    src: string;
};

type Meal = {
    description: string;
    image: string;
    ingredients: Ingredient[];
    title: string;
};

type ResultProps = Meal;

export default function Result() {
    // Fetched default meal
    const meal: ResultProps = {
        description: 'To jest przykładowy opis posiłku',
        image: 'berries.jpg',
        ingredients: [],
        title: 'Tytuł posiłku'
    };
    
    const renderIngredient = (ing: Ingredient, idx: number): React.ReactNode => {
        return (
            <li className="flex-center" key={idx}>
                <img
                    className="icon"
                    src={`${ing.icon.src}`}
                    alt={`"${ing.icon.name}" ingredient image`}
                    data-author={`${ing.icon.link}`}
                />
                <span>{ing.name}</span>
            </li>
        );
    };
    
    const renderIngredients = (): React.ReactNode => {
        return meal.ingredients.map(renderIngredient);
    };
    
    return (
        <>
            <main className="result">
                <div className="result-nav">
                    <a href="{{sourceUrl}}">
                        <i className="fa fa-chevron-circle-left"></i>Wróć do wyszukiwania
                    </a>
                </div>
                <div className="result-container">
                    <div className="result-image">
                        <img
                            src={(meal.image) ? `${meal.image}` : 'icons/no-image.png'}
                            alt={`Zdjęcie posiłku o nazwie ${meal.title}`}
                        />
                    </div>
                    <div className="result-details">
                        <ul>
                            <li><h3>{meal.title}</h3></li>
                            <li style={{opacity: .1}}><h4>Wyświetlono X razy</h4></li>
                            <li style={{opacity: .1}}><h4>Wybrano X razy</h4></li>
                        </ul>
                        <div>
                            <p>{meal.description}</p>
                        </div>
                    </div>
                    <div className="result-ingredients">
                        <h3>Składniki</h3>
                        {meal.ingredients.length
                        ?
                        <ul>
                            {renderIngredients()}
                        </ul>
                        :
                        <p><i>Brak składników...</i></p>
                        }
                    </div>
                </div>
            </main>
        
            <Footer />
        </>
    );
}