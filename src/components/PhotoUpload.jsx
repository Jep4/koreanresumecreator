import React, { useState, useRef } from 'react';

const PhotoUpload = () => {
    const [photo, setPhoto] = useState(null);
    const fileInputRef = useRef(null);

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
            title="Click to upload photo"
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
                    <p>사진</p>
                    <p>(3x4)</p>
                </div>
            )}
        </div>
    );
};

export default PhotoUpload;
