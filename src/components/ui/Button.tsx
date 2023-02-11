import React from 'react';
import { Link } from 'react-router-dom';

export type ButtonProps = {
    isDisabled?: boolean;
    pageUrl?: string;
    title: string;
};

export default function Button({ isDisabled, pageUrl, title }: ButtonProps) {
    if (pageUrl) {
        return (
            <div className="yummy-button">
                <Link to={pageUrl}>
                    <button disabled={isDisabled}>
                        {title}
                    </button>
                </Link>
            </div>
        );
    }
    
    return (
        <div className="yummy-button">
            <button disabled={isDisabled}>
                {title}
            </button>
        </div>
    );
}