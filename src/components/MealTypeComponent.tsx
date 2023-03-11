import React, { useState } from 'react';
import { MealType } from './containers/MealTypeContainer';

export type MealTypeProps = {
    mealType: MealType,
    isChecked: boolean,
    key?: number
};

export default function MealTypeComponent({ mealType, isChecked }: MealTypeProps) {
    const [checked, setChecked] = useState(isChecked);
    const handleCheck = (): void => { setChecked(!checked) };
    
    return (
        <li className="meal-type-component">
            <div className="flex">
                <span>
                    <input
                        type="checkbox"
                        id={mealType.k}
                        name="types[]"
                        data-type-k={mealType.k}
                        data-type-v={mealType.v}
                        value={mealType.k}
                        checked={checked}
                        onChange={handleCheck}
                    />                    
                </span>
                <span>
                    <label htmlFor={mealType.k}>
                        <p>{mealType.v}</p>
                    </label>  
                </span>
            </div>
        </li>
    );
}