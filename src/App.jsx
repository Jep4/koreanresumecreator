import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Resume from './components/Resume';

function App() {
    const resumeRef = useRef(null);
    const [isPrinting, setIsPrinting] = useState(false);

    const handleDownloadPDF = async () => {
        const element = resumeRef.current;
        if (!element) return;

        setIsPrinting(true);

        // Wait for state update and re-render
        setTimeout(async () => {
            try {
                // Add printing class for clean export
                element.classList.add('printing');

                const canvas = await html2canvas(element, {
                    scale: 2, // Higher scale for better quality
                    useCORS: true, // Enable CORS for images
                    logging: false,
                    windowWidth: element.scrollWidth,
                    windowHeight: element.scrollHeight,
                    backgroundColor: '#ffffff' // Ensure white background
                });

                // Remove printing class
                element.classList.remove('printing');

                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'mm', 'a4');

                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = pdf.internal.pageSize.getHeight();
                const imgWidth = canvas.width;
                const imgHeight = canvas.height;

                // Calculate scale to fit BOTH width and height
                const widthRatio = pdfWidth / imgWidth;
                const heightRatio = pdfHeight / imgHeight;
                const ratio = Math.min(widthRatio, heightRatio);

                const finalWidth = imgWidth * ratio;
                const finalHeight = imgHeight * ratio;

                // Center horizontally
                const x = (pdfWidth - finalWidth) / 2;
                // Align top (or center vertically if preferred, but top is standard for documents)
                const y = 0;

                pdf.addImage(imgData, 'PNG', x, y, finalWidth, finalHeight);
                pdf.save('resume.pdf');
            } catch (error) {
                console.error('Error generating PDF:', error);
                alert('PDF 생성 중 오류가 발생했습니다.');
                if (element) element.classList.remove('printing');
            } finally {
                setIsPrinting(false);
            }
        }, 100); // Short delay to allow React to render changes
    };

    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="fixed top-4 right-4 z-50 no-print flex gap-2">
                <div className="relative group">
                    <button
                        onClick={handleDownloadPDF}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg flex items-center gap-2 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        PDF 다운로드
                    </button>
                    <div className="absolute top-full right-0 mt-2 w-48 p-2 bg-gray-800 text-white text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                        <div className="absolute -top-1 right-4 w-2 h-2 bg-gray-800 transform rotate-45"></div>
                    </div>
                </div>
            </div>

            <main className="container mx-auto">
                <div className="text-center mb-8 no-print">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">무료 온라인 이력서 생성기</h1>
                    <p className="text-gray-600">이력서 템플릿입니다 - 로그인 없이 바로 PDF로 저장하세요</p>
                </div>

                <Resume resumeRef={resumeRef} isPrinting={isPrinting} />
            </main>
        </div>
    );
}

export default App;
