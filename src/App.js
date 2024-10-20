import React, { useState, useEffect } from 'react';
import Main from './pages/main';
import Search from './pages/search';
import Consideration from './pages/consideration';
import Aboutus from './pages/aboutus';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    const [considerationList, setConsiderationList] = useState([]);

    useEffect(() => {
        const storedToList = JSON.parse(localStorage.getItem('considerationList'));
        if (storedToList) {
            setConsiderationList(storedToList);
        }
    }, 
    
[]);

    const addToConsideration = (item) => {
        const updatedToList = [...considerationList, item];
        setConsiderationList(updatedToList);
        localStorage.setItem('considerationList', JSON.stringify(updatedToList));
    };

    const removeFromConsideration = (itemToRemove) => {
        const updatedToList = considerationList.filter(item => item !== itemToRemove);
        setConsiderationList(updatedToList);
        localStorage.setItem('considerationList', JSON.stringify(updatedToList));
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/pages/search" element={<Search addToConsideration={addToConsideration} />} />
                <Route path="/pages/consideration" element={<Consideration considerationList={considerationList} removeFromConsideration={removeFromConsideration} />} />
                <Route path="/pages/aboutus" element={<Aboutus />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
