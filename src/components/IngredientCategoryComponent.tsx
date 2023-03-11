import React from 'react';
import { ICategorizedIngredients } from '../constants/data';
import IngredientComponent from './IngredientComponent';

export type IngredientCategoryComponentProps = {
    categorized: ICategorizedIngredients,
    ings: string[],
    key?: number;
};

export default function IngredientCategoryComponent({ categorized, ings }: IngredientCategoryComponentProps) {
    return (
        <div className="category">
            <h3>{categorized.category}</h3>
            <ul>
                {categorized.ingredients.map((ingredient, idx) =>
                    <IngredientComponent
                        key={idx}
                        ingredient={ingredient}
                        isChecked={ings.includes(ingredient.getIcon().getName())}
                    />
                )}
            </ul>
        </div>
    );
}