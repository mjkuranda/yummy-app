import React, { useState } from 'react';
import Ingredient from '../classes/Ingredient';

interface IngredientProps {
    ingredient: Ingredient;
    isChecked: boolean;
    key?: number;
}

export function IngredientComponent({ ingredient, isChecked }: IngredientProps) {
    const [checked, setChecked] = useState(isChecked);
    const handleCheck = (): void => { setChecked(!checked) };
    
    return (
        <li className="ingredient-component">
            <div className="flex">
                <span>
                    <input
                        type="checkbox"
                        id={ingredient.getIcon().getName()}
                        name="ings[]"
                        data-id={ingredient.getIcon().getName()}
                        value={ingredient.getIcon().getName()}
                        checked={checked}
                        onChange={handleCheck}
                    />
                </span>
                <span>
                    <label htmlFor={ingredient.getIcon().getName()} className="flex-center">
                        <img
                            className="icon"
                            src={ingredient.getIcon().getSourcePath()}
                            alt={`'${ingredient.getIcon().getName()}' ingredient icon`}
                            data-author={ingredient.getIcon().getLink()}
                        ></img>
                        <p>{ingredient.getName()}</p>
                    </label>
                </span>
            </div>
        </li>
    );    
} 