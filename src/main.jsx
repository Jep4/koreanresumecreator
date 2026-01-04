import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, useLocation } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

import { LanguageProvider } from './contexts/LanguageContext.jsx'

// Scroll to top on route change component
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <LanguageProvider>
            <BrowserRouter>
                <ScrollToTop />
                <App />
            </BrowserRouter>
        </LanguageProvider>
    </React.StrictMode>,
)
