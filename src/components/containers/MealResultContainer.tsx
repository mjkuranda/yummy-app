import React from 'react';
import { MealResultProps } from '../MealResult';
import MealResult from '../MealResult';

export type MealResultContainerProps = {
    meals: MealResultProps[]
};

export default function MealResultContainer({ meals }: MealResultContainerProps) {
    return (
        <section className="result-box">
            {meals?.map((meal, idx) => <MealResult key={idx} {...meal} />)}
        </section>
    );
}