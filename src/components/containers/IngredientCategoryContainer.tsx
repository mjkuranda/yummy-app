import React from 'react';
import { categorizedIngredients } from '../../constants/data';
import { QueryParamArray } from '../../utils/ButtonUtils';
import IngredientCategoryComponent from '../IngredientCategoryComponent';

export type IngredientCategoryContainerProps = {
    ings: QueryParamArray
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