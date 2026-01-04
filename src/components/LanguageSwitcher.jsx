import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <div className="fixed top-4 left-4 z-50 flex gap-2 bg-white/80 p-1 rounded-lg shadow-sm backdrop-blur-sm no-print">
            <button
                onClick={() => toggleLanguage('en')}
                className={`p-1.5 rounded transition-all ${language === 'en' ? 'bg-blue-100 ring-2 ring-blue-400' : 'hover:bg-gray-100 opacity-70 hover:opacity-100'}`}
                title="Switch to English"
            >
                <div className="w-6 h-6 flex items-center justify-center text-xl" role="img" aria-label="USA Flag">
                    🇺🇸
                </div>
            </button>
            <button
                onClick={() => toggleLanguage('ko')}
                className={`p-1.5 rounded transition-all ${language === 'ko' ? 'bg-blue-100 ring-2 ring-blue-400' : 'hover:bg-gray-100 opacity-70 hover:opacity-100'}`}
                title="한국어로 변경"
            >
                <div className="w-6 h-6 flex items-center justify-center text-xl" role="img" aria-label="Korean Flag">
                    🇰🇷
                </div>
            </button>
        </div>
    );
};

export default LanguageSwitcher;
