import React, { useState, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const PhotoUpload = () => {
    const [photo, setPhoto] = useState(null);
    const fileInputRef = useRef(null);
    const { t } = useLanguage();

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhoto(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div
            className="w-full h-full flex items-center justify-center cursor-pointer hover:bg-gray-100 overflow-hidden relative"
            onClick={handleClick}
            title={t.language === 'en' ? "Click to upload photo" : "사진을 업로드하려면 클릭하세요"}
        >
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
            />
            {photo ? (
                <img src={photo} alt="Resume Photo" className="w-full h-full object-cover" />
            ) : (
                <div className="text-center text-gray-400 text-sm">
                    <p>{t.resume.photoPlaceholder}</p>
                    <p>{t.resume.photoSize}</p>
                </div>
            )}
        </div>
    );
};

export default PhotoUpload;
