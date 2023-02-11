import React from 'react';
import { buildPathWithQuery, buildQuery } from '../utils/ButtonUtils';
import Button from './ui/Button';

export type MealCategoryProps = {
    description: string;
    ingredients?: string[];
    key?: number;
};

export default function MealCategory({ description, ingredients, key }: MealCategoryProps) {
    const pageUrl = buildPathWithQuery('search', buildQuery(ingredients));
    
    return (
        <div className="category" key={key}>
            <div>
                <div className="cloth flex-center">
                    <div className="category-container">
                        <p>{description}</p>
                        <div className="flex-center">
                            <Button title="Szukaj" pageUrl={pageUrl} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}