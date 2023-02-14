import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../src/assets/styles/basic.css';

// import '../src/assets/styles/meals-add-new-error.css';
// import '../src/assets/styles/meals-add-new.css';
// import '../src/assets/styles/meals-add.css';
// import '../src/assets/styles/search-media.css';
// import '../src/assets/styles/search.css';

import Main from './pages/Main';
import Result from './pages/Result';
import Page404 from './pages/Page404';

export default function App() { 
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Main />} />
                    <Route path="/result" element={<Result />} />
                    <Route path="*" element={<Page404 />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
