import React from 'react';

import '../assets/styles/header.css';
import '../assets/styles/index-media.css';
import '../assets/styles/index.css';

export default function Main() {
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
                                <button onClick={() => move('/search#ingredients-container')}>Wyszukaj po produktach</button>
                                <button disabled>Propozycja na dziś</button>
                                <button onClick={() => move('/search')}>Wyszukaj z bazy</button>
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
                                    samej górze strony lub kliknij
                                    <a href="#top">tutaj</a></p>
                            </section>
                        </div>
                    </div>
                </div>

                <div id="categories">
                    <div className="category">
                        <div>
                            <div className="cloth flex-center">
                                <div className="category-container">
                                    <p>Idealne jedzenie dla tych, którzy chcą się zdrowo
                                        odżywiać.</p>
                                    <div className="flex-center">
                                        <button onClick={() => move(
                                            `/search?ings%5B%5D=blueberry&amp;
                                            ings%5B%5D=cherry&amp;
                                            ings%5B%5D=grapes&amp;
                                            ings%5B%5D=raspberry&amp;
                                            ings%5B%5D=strawberry&amp;
                                            ings%5B%5D=citrus&amp;
                                            ings%5B%5D=orange&amp;
                                            ings%5B%5D=whole-apple&amp;
                                            ings%5B%5D=broccoli&amp;
                                            ings%5B%5D=carrot&amp;
                                            ings%5B%5D=cauliflower&amp;
                                            ings%5B%5D=celery&amp;
                                            ings%5B%5D=kohlrabi&amp;
                                            ings%5B%5D=leek&amp;
                                            ings%5B%5D=pumpkin&amp;
                                            ings%5B%5D=tomato&amp;
                                            ings%5B%5D=white-beans&amp;
                                            ings%5B%5D=zucchini`
                                        )}>Szukaj</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="category">
                        <div>
                            <div className="cloth flex-center">
                                <div className="category-container">
                                    <p>Coś mniej skromnego, bogatszego w tłuszcz.</p>
                                    <div className="flex-center"><button onClick={() => move('/search?')}>Szukaj</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="category">
                        <div>
                            <div className="cloth flex-center">
                                <div className="category-container">
                                    <p>Maniacy owoców błyskawicznie rozpoczą serfing tej
                                        kategorii.</p>
                                    <div className="flex-center"><button onClick={() => move(
                                        `/search?ings%5B%5D=blueberry&amp;
                                        ings%5B%5D=cherry&amp;
                                        ings%5B%5D=grapes&amp;
                                        ings%5B%5D=raspberry&amp;
                                        ings%5B%5D=strawberry`
                                    )}>Szukaj</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            
            <footer>
                <div>
                    <p>Wszelkie prawa zastrzeżone</p>
                    <br />
                    <h3>Marek Kurańda</h3>
                    <h4>Yummy &copy; 2023</h4>
                    <br />
                    <h5><a target="_blank" rel="noreferrer" href="https://icons8.com/icon/RxvLC54xtSnZ/yummy">Yummy</a>
                        icon by
                        <a target="_blank" rel="noreferrer" href="https://icons8.com">Icons8</a>
                    </h5>
                </div>
            </footer>
        </>
    );
}

function move(url: string): void {
    console.info(`Redirect to ${url}`);
    return;
}