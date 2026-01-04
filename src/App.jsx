import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ResumeBuilder from './components/ResumeBuilder';
import ResumeGuide from './components/ResumeGuide';
import LanguageSwitcher from './components/LanguageSwitcher';

function App() {
    return (
        <>
            <LanguageSwitcher />
            <Routes>
                <Route path="/" element={<ResumeBuilder />} />
                <Route path="/guide" element={<ResumeGuide />} />
            </Routes>
        </>
    );
}

export default App;
