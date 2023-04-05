import '../assets/styles/mobile/search.css';
import '../assets/styles/search.css';
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Type } from '../classes/Meal';
import IngredientCategoryContainer, { IngredientCategoryContainerProps } from '../components/containers/IngredientCategoryContainer';
import MealTypeContainer, { MealType, MealTypeContainerProps } from '../components/containers/MealTypeContainer';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Button, { ButtonType } from '../components/ui/Button';
import { buildQuery } from '../utils/ButtonUtils';
import MealResultContainer from '../components/containers/MealResultContainer';
import { MealResultProps } from '../components/MealResult';

const staticMeals: MealResultProps[] = [
    { description: 'Simple description', id: '123', title: 'Simple meal', image: 'xxx.png' },
    { description: 'Another description', id: '456', title: 'Second meal' }
];
const staticPages = [1, 2, 3];

export default function Search() {
    const [searchParams, setSearchParams] = useSearchParams();
    const ings = searchParams.getAll('ings');
    const types = searchParams.getAll('types');
    const mealTypes: MealType[] = Object.entries(Type).map(([k, v]) => { return { k, v } });

    const ingredientCategoryContainerProps: IngredientCategoryContainerProps = { ings };
    const mealTypeContainerProps: MealTypeContainerProps = { mealTypes, types };
    const buttonSearchProps = {
        classes: ['flex-center'],
        title: 'Wyszukaj',
        type: ButtonType.SUBMIT
    };
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const form = e.target as HTMLFormElement;
        const ingsInputs = form.querySelectorAll('#ingredients-container input') as NodeListOf<HTMLInputElement>;
        const typesInputs = form.querySelectorAll('#types-container input') as NodeListOf<HTMLInputElement>;
        const ingredients = Array.from(ingsInputs).filter(i => i.checked).map(i => i.value);
        const types = Array.from(typesInputs).filter(i => i.checked).map(i => i.value)
        
        setSearchParams(buildQuery({ ingredients, types }));
    };
    
    const [currentPage, setCurrentPage] = useState(1);
    
    return (
        <>
            <Header />
            <section id="filters">
                <form action="" method="get" onSubmit={handleSubmit}>
                    {
                        //TODO: Ingredients and Types in one line and hover gives brown background, rounded, transition ;)
                    } 
                    <IngredientCategoryContainer {...ingredientCategoryContainerProps} />
                    <MealTypeContainer {...mealTypeContainerProps} />
                    <Button {...buttonSearchProps} />
                </form>
            </section>

            <main>
                {
                    // TODO: Styling the other part: meals and buttons
                }
                <MealResultContainer meals={staticMeals} />
                {mealTypes.length && (
                    <section id="pages" className="flex-center">
                        <p><strong>Strony:</strong></p>
                        {staticPages.map((page, idx) => {
                            if (currentPage === page) {
                                return <p key={idx}>{currentPage}</p>;
                            }
                            
                            // FIXME: Change href
                            // TODO: React clicable JSX element that handles changing this state
                            return <a href="{{setPage p}}#results" key={idx}>{page}</a>;
                        })}
                    </section>
                )
                }
                <section id="adder">
                    <div className="flex-center"><p>Brakuje szukanego posiłku? Dodaj go!</p></div>
                    <div className="flex-center"><Button pageUrl="/meals/add" title="Dodaj" /></div>
                </section>
            </main>
            
            <Footer />
        </>
    );
}