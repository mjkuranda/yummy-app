import React from 'react';
import { QueryParamArray } from '../../utils/ButtonUtils';
import MealTypeComponent from '../MealTypeComponent';

export type MealType = Record<string, string>;

export type MealTypeContainerProps = {
    mealTypes: MealType[],
    types: QueryParamArray
};

export default function MealTypeContainer({ mealTypes, types }: MealTypeContainerProps) {
    return (
        <div>
            <h2>Typy</h2>
            <div className="meal-types-container">
                <ul>
                    {mealTypes.map((type, idx) => 
                        <MealTypeComponent
                            key={idx}
                            mealType={type}
                            isChecked={types.includes(type.k)}
                        />
                    )}
                </ul>
            </div>
        </div>
    );
}