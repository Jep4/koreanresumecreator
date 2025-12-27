import React, { useState, useEffect, useRef } from 'react';

const EditableField = ({ value, onSave, type = 'text', className = '', placeholder = '', isPrinting = false }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentValue, setCurrentValue] = useState(value);
  const inputRef = useRef(null);

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleBlur = () => {
    setIsEditing(false);
    onSave(currentValue);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && type !== 'textarea') {
      handleBlur();
    }
  };

  // Force view mode if printing, even if currently editing
  if (isEditing && !isPrinting) {
    if (type === 'textarea') {
      return (
        <textarea
          ref={inputRef}
          className={`w-full p-1 border border-blue-500 outline-none bg-white ${className}`}
          value={currentValue}
          onChange={(e) => setCurrentValue(e.target.value)}
          onBlur={handleBlur}
          placeholder={placeholder}
        />
      );
    }
    return (
      <input
        ref={inputRef}
        type="text"
        className={`w-full p-1 border border-blue-500 outline-none bg-white ${className}`}
        value={currentValue}
        onChange={(e) => setCurrentValue(e.target.value)}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
      />
    );
  }

  // Determine alignment classes based on className prop
  const isCenter = className.includes('text-center');
  const isRight = className.includes('text-right');
  const justifyClass = isCenter ? 'justify-center' : isRight ? 'justify-end' : 'justify-start';

  // For textarea (multi-line), we generally want top alignment, but for single line inputs we want center.
  // However, the user specifically asked for vertical centering for fields like "Name", "Period".
  // We'll apply flex centering for non-textarea fields.
  const flexClasses = type !== 'textarea'
    ? `flex items-center ${justifyClass} w-full h-full`
    : '';

  return (
    <div
      className={`cursor-pointer hover:bg-gray-100 ${className} ${!currentValue ? 'text-gray-400' : ''} ${flexClasses}`}
      onClick={() => !isPrinting && setIsEditing(true)}
    >
      {currentValue || (isPrinting ? '' : placeholder)}
    </div>
  );
};

export default EditableField;
