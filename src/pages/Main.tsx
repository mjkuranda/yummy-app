import React from 'react';
import MealCategory, { MealCategoryProps } from '../components/MealCategory';
import Button from '../components/ui/Button';

import '../assets/styles/header.css';
import '../assets/styles/index-media.css';
import '../assets/styles/index.css';

export default function Main() {
    const categories: MealCategoryProps[] = [
        {
            description: 'Idealne jedzenie dla tych, którzy chcą się zdrowo odżywiać.',
            ingredients: [ 'blueberry', 'cherry', 'grapes', 'raspberry', 'strawberry', 'citrus', 
            'orange', 'whole-apple', 'broccoli', 'carrot', 'cauliflower', 'celery', 'kohlrabi',
            'leek', 'pumpkin', 'tomato', 'white-beans', 'zucchini' ]
        },
        {
            description: 'Coś mniej skromnego, bogatszego w tłuszcz.'
        },
        {
            description: 'Maniacy owoców błyskawicznie rozpoczą serfing tej kategorii.',
            ingredients: [ 'cherry', 'grapes', 'raspberry', 'strawberry' ]
        }
    ];
    
    return (
        <>
            <header>
                <div id="header-cloth" className="center">
                    <div></div>
                </div>
                <div className="center">
                    <div className="flex-center">
                        <div id="header-container">
                            <h1 className="flex-center">Yummy!</h1>
                            <div className="flex-center">
                                <Button title="Wyszukaj po produktach" pageUrl="/search#ingredients-container" />
                                <Button title="Propozycja na dziś" isDisabled={true} />
                                <Button title="Wyszukaj z bazy" pageUrl="/search" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            
            <main>
                <div id="description">
                    <div id="description-wrapper" className="center">
                        <div>
                            <section>
                                <h3>Do czego służy?</h3>
                                <p>Kiedy nie wiesz, co dzisiaj przyrządzić na obiad, bądź
                                    chcesz wykorzystać pewne produkty, Yummy wybierze dla
                                    ciebie najlepszą opcję.</p>
                            </section>
                        </div>
                        <div></div>
                        <div></div>
                        <div>
                            <section>
                                <h3>Jak obsługiwać Yummy?</h3>
                                <p>To nadzwyczaj proste - wybierz jedną z trzech opcji na
                                    samej górze strony lub kliknij&nbsp;
                                    <a href="#top">tutaj</a>
                                </p>
                            </section>
                        </div>
                    </div>
                </div>

                <div id="categories">
                    {categories.map((category, idx) => <MealCategory key={idx} {...category} />)}
                </div>
            </main>
            
            <footer>
                <div>
                    <p>Wszelkie prawa zastrzeżone</p>
                    <br />
                    <h3>Marek Kurańda</h3>
                    <h4>Yummy &copy; 2023</h4>
                    <br />
                    <h5>
                        <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/RxvLC54xtSnZ/yummy">Yummy</a>
                        &nbsp;icon by&nbsp;
                        <a target="_blank" rel="noreferrer" href="https://icons8.com">Icons8</a>
                    </h5>
                </div>
            </footer>
        </>
    );
}
