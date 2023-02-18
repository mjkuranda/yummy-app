import React from 'react';

import '../assets/styles/search-media.css';
import '../assets/styles/search.css';
import Ingredient from '../classes/Ingredient';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { categorizedIngredients, ICategorizedIngredients } from '../constants/data';

export default function Search() {
    // TODO: Create components
    const renderIngredient = (ingredient: Ingredient): React.ReactNode => {
        return (
            <li>
                <input
                    type="checkbox"
                    id={ingredient.getIcon().getName()}
                    name="ings[]"
                    data-id={ingredient.getIcon().getName()}
                    value={ingredient.getIcon().getName()}
                    {{ tryToCheck ing.icon.name}}
                />
                <label htmlFor="{{ing.icon.name}}" className="flex-center">
                    <img
                        className="icon"
                        src="{{ing.icon.src}}"
                        alt="'{{ing.icon.name}}' ingredient image"
                        author="{{ing.icon.link}}"
                    ></img>
                    <p>{ingredient.getName()}</p>
                </label>
            </li>
        );
    };
    
    const renderCategory = (categorized: ICategorizedIngredients): React.ReactNode => {
        return (
            <div className="category">
                <h3>{categorized.category}</h3>
                <ul>
                    {categorized.ingredients.map(ingredient => renderIngredient(ingredient))}
                </ul>
            </div>
        );
    };
    
    return (
        <>
            <Header />
            <section id="filters">
                <form action="" method="get">
                    <div id="ingredients-container">
                        <h2>Składniki</h2>
                        <div className="category-container">
                            {categorizedIngredients.map(categorized => renderCategory(categorized))}
                        </div>
                    </div>
                    <div>
                        <h2>Typy</h2>
                        <div className="meal-types-container">
                            <ul>
                                {{#each mealTypes as |type|}}
                                <li><input type="checkbox" id="{{type.k}}" name="types[]" data-type-k="{{type.k}}" data-type-v="{{type.v}}" value="{{type.k}}" {{ tryToCheckType type.k }} /><label for="{{type.k}}"><p>{{type.v}}</p></label></li>
                                {{/each}}
                            </ul>
                        </div>
                    </div>
                    <div class="flex-center">
                        <button type="submit" onClick="setHash('results')">Wyszukaj</button>
                    </div>
                    <input id="page" name="page" value="{{page}}" hidden />
                </form>
            </section>

            <main id="results">
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
            </main>
            <Footer />
        </>
    );
}