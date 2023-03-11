import React from 'react';
import { useSearchParams } from 'react-router-dom';

import '../assets/styles/mobile/search.css';
import '../assets/styles/search.css';
import { Type } from '../classes/Meal';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { IngredientComponent } from '../components/IngredientComponent';
import { categorizedIngredients, ICategorizedIngredients } from '../constants/data';

export default function Search() {
    const [searchParams] = useSearchParams();
    const ings = searchParams.getAll('ings');
    const mealTypes = Object.entries(Type).map(([k, v]) => { return { k, v } });
    
    // TODO: styles/components, styles/pages, styles/pages/mobile
    
    // TODO: More components
    
    // TODO: Create components
    const renderMealType = (mealType: Record<string, string>): React.ReactNode => {
        return (
            <li>
                <input
                    type="checkbox"
                    id={mealType.k}
                    name="types[]"
                    data-type-k={mealType.k}
                    data-type-v={mealType.v}
                    value={mealType.k}
                    checked={Object.keys(mealTypes).includes(mealType.k)}
                />
                <label htmlFor={mealType.k}>
                    <p>{mealType.v}</p>
                </label>
            </li>
        );
    };
    
    const renderCategory = (categorized: ICategorizedIngredients): React.ReactNode => {
        return (
            <div className="category">
                <h3>{categorized.category}</h3>
                <ul>
                    {categorized.ingredients.map(
                        (ingredient, idx) => <IngredientComponent 
                            key={idx}
                            ingredient={ingredient}
                            isChecked={ings.includes(ingredient.getIcon().getName())}
                        />
                    )}
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
                            <ul>{mealTypes.map(type => renderMealType(type))}</ul>
                        </div>
                    </div>
                    {/* <div class="flex-center">
                        <button type="submit" onClick="setHash('results')">Wyszukaj</button>
                    </div> */}
                    <input id="page" name="page" value="{{page}}" hidden />
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