import React from 'react';

import '../assets/styles/header.css';
import '../assets/styles/mobile/header.css';

export default function Header() {
    return (
        <header>
            <div className="flex-center">
                <div className="flex-left">
                    <div id="logo">
                        <img
                            src="favicon.ico"
                            width="64px"
                            height="64px"
                        />
                    </div>
                    <h1>Yummy</h1>
                </div>
                <nav className="flex-left">
                    <a href="/">Strona główna</a>
                    <a href="/#description">O stronie</a>
                </nav>
            </div>
        </header>
    );
}