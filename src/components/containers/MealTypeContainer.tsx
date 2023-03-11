import React from 'react';
import MealTypeComponent from '../MealTypeComponent';

export type MealType = Record<string, string>;

export type MealTypeContainerProps = {
    mealTypes: MealType[]
};

export default function MealTypeContainer({ mealTypes }: MealTypeContainerProps) {
    return (
        <div>
            <h2>Typy</h2>
            <div className="meal-types-container">
                <ul>
                    {mealTypes.map((type, idx) => 
                        <MealTypeComponent
                            key={idx}
                            mealType={type}
                            isChecked={Object.keys(mealTypes).includes(type.k)}
                        />
                    )}
                </ul>
            </div>
        </div>
    );
}