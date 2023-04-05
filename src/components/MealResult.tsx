import React from 'react';
import Button from './ui/Button';
import { Link } from 'react-router-dom';

export type MealResultProps = {
    description: string,
    id: string,
    image?: string,
    title: string
};

export default function MealResult({ description, id, image, title }: MealResultProps) {
    const pageUrl = `/result/${id}?utm_source=${encodeURIComponent(location.search)}`;
    
    return (
        <div className="result-container flex-center">
            <div className="result-image">
                <Link to={pageUrl} target="_blank" rel="noopener noreferrer">
                    {image
                        ? <img src="uploads/{{meal.image}}" alt={`Zdjęcie posiłku o nazwie ${title}`} />
                        : <img src="icons/no-image.png" alt={`Brak zdjęcia posiłku o nazwie ${title}`} />                   
                    }
                </Link>
            </div>
            <div className="result-label">
                <div className="result-description">
                    <div className="result-title">{title}</div>
                    <div className="result-text">{description}</div>
                </div>
                <div className="result-button flex-center">
                    <Button title="Zobacz" pageUrl={pageUrl} />
                </div>
            </div>
        </div>
    );
}