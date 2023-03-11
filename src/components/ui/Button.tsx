import React from 'react';
import { Link } from 'react-router-dom';

export enum ButtonType {
    BUTTON = 'button',
    SUBMIT = 'submit',
    RESET = 'reset'
}

export type ButtonProps = {
    title: string;
    classes?: string[];
    isDisabled?: boolean;
    pageUrl?: string;
    type?: ButtonType;
};

export default function Button({ classes, isDisabled, pageUrl, title, type }: ButtonProps) {
    const classNames = ['yummy-button', ...(classes ?? [])].join(' ');
    
    if (pageUrl) {
        return (
            <div className={classNames}>
                <Link to={pageUrl}>
                    <button type={type} disabled={isDisabled}>
                        {title}
                    </button>
                </Link>
            </div>
        );
    }
    
    return (
        <div className={classNames}>
            <button type={type} disabled={isDisabled}>
                {title}
            </button>
        </div>
    );
}