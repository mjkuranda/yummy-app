import React from 'react';
import { categorizedIngredients } from '../../constants/data';
import IngredientCategoryComponent from '../IngredientCategoryComponent';

export type IngredientCategoryContainerProps = {
    ings: string[]
}

export default function IngredientCategoryContainer({ ings }: IngredientCategoryContainerProps) {
    return (
        <div id="ingredients-container">
            <h2>Składniki</h2>
            <div className="category-container">
                {categorizedIngredients.map((categorized, idx) =>
                    <IngredientCategoryComponent
                        key={idx}
                        categorized={categorized}
                        ings={ings}
                    />
                )}
            </div>
        </div>  
    );
}