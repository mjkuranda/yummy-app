import React from 'react';
import { useSearchParams } from 'react-router-dom';

import '../assets/styles/mobile/search.css';
import '../assets/styles/search.css';
import { Type } from '../classes/Meal';
import IngredientCategoryContainer, { IngredientCategoryContainerProps } from '../components/containers/IngredientCategoryContainer';
import MealTypeContainer, { MealType, MealTypeContainerProps } from '../components/containers/MealTypeContainer';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Button, { ButtonType } from '../components/ui/Button';

export default function Search() {
    const [searchParams] = useSearchParams();
    const ings = searchParams.getAll('ings');
    const types = searchParams.getAll('types');
    const mealTypes: MealType[] = Object.entries(Type).map(([k, v]) => { return { k, v } });
    
    // TODO: styles/components, styles/pages, styles/pages/mobile
    
    const ingredientCategoryContainerProps: IngredientCategoryContainerProps = { ings };
    const mealTypeContainerProps: MealTypeContainerProps = { mealTypes, types };
    
    const buttonSearchProps = {
        classes: ['flex-center'],
        pageUrl: '/search',
        title: 'Wyszukaj',
        type: 'submit' as ButtonType
    };
    
    return (
        <>
            <Header />
            <section id="filters">
                <form action="" method="get">
                    <IngredientCategoryContainer {...ingredientCategoryContainerProps} />
                    <MealTypeContainer {...mealTypeContainerProps} />
                    <Button {...buttonSearchProps} />
                </form>
            </section>

            {/* <main id="results">
                <section class="result-box">
                    {{#each meals as |meal| }}
                    <div class="result-container flex-center">
                        <div class="result-image">
                            <a class="img-link" href="/result/{{meal._id}}?{{sourceUrl}}" target="_blank">
                                {{#if meal.image}}
                                <img src="uploads/{{meal.image}}" alt="Zdjęcie posiłku o nazwie {{meal.title}}" />
                                {{else}}
                                <img src="icons/no-image.png" alt="Brak zdjęcia posiłku o nazwie {{meal.title}}" />
                                {{/if}}
                            </a>
                        </div>
                        <div class="result-label">
                            <div class="result-description">
                                <div class="result-title">{{meal.title}}</div>
                                <div class="result-text">{{meal.description}}</div>
                            </div>
                            <div class="result-button flex-center">
                                <button onClick="move('/result/{{meal._id}}?{{sourceUrl}}')">Zobacz</button>
                            </div>
                        </div>
                    </div>
                    {{/each}}
                </section>
                {{#if meals.length}}
                <section id="pages" class="flex-center">
                    <p><strong>Strony:</strong></p>
                    {{#each pages as |p|}}
                        {{#if (isCurrentPage p)}}
                        <p>{{p}}</p>
                        {{else}}
                        <a href="{{setPage p}}#results">{{p}}</a>
                        {{/if}}
                    {{/each}}
                </section>
                {{/if}}
                <section id="adder">
                    <div class="flex-center"><p>Brakuje szukanego posiłku? Dodaj go!</p></div>
                    <div class="flex-center"><button onClick="move('/meals/add')">Dodaj</button></div>
                </section>
            </main> */}
            <Footer />
        </>
    );
}