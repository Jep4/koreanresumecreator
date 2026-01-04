import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const translations = {
    ko: {
        title: "무료 온라인 이력서 생성기",
        subtitle: "이력서 템플릿입니다 - 로그인 없이 바로 PDF로 저장하세요",
        downloadPdf: "PDF 다운로드",
        aboutUsTitle: "서비스 소개 (About Us)",
        aboutUsText1: "본 '무료 온라인 이력서 생성기'는 구직자와 학생, 전문가들이 복잡한 절차 없이 브라우저에서 즉시 깔끔하고 전문적인 이력서를 작성할 수 있도록 돕는 웹 도구입니다. 별도의 회원가입이나 로그인이 필요하지 않으며, 작성된 모든 데이터는 사용자의 로컬 브라우저에서만 처리되어 개인정보 유출 걱정 없이 안전하게 이용할 수 있습니다.",
        keyFeaturesTitle: "주요 기능 (Key Features)",
        keyFeaturesList: [
            "직관적인 실시간 편집 인터페이스",
            "A4 용지 규격에 최적화된 레이아웃",
            "고품질 PDF 다운로드 기능",
            "불필요한 워터마크 없음",
            "모바일 및 데스크탑 반응형 디자인"
        ],
        howToUseTitle: "사용 방법 (How to Use)",
        howToUseText1: "1. <strong>기본 정보 입력:</strong> 이름, 연락처, 이메일 등 필수 인적 사항을 상단 필드에 입력합니다. 사진 업로드 기능을 통해 증명사진을 추가할 수 있습니다.",
        howToUseText2: "2. <strong>섹션 작성:</strong> 학력, 경력, 자격증, 자기소개서 등 각 항목에 맞춰 내용을 작성합니다. '항목 추가' 버튼을 눌러 경력 사항을 늘리거나, 불필요한 항목은 삭제할 수 있습니다.",
        howToUseText3: "3. <strong>미리보기 및수정:</strong> 작성된 내용은 화면에 보이는 그대로 출력됩니다. 오타나 레이아웃을 확인하세요.",
        howToUseText4: "4. <strong>PDF 저장:</strong> 우측 상단의 'PDF 다운로드' 버튼을 클릭하면 작성한 이력서가 즉시 PDF 파일로 변환되어 기기에 저장됩니다.",
        copyright: "© 2024 Free Online Resume Builder. All rights reserved. 본 서비스는 개인적인 용도로 완전히 무료로 제공됩니다. 상업적 재배포는 금지됩니다.",
        guideLink: "이력서 잘 쓰는 방법 알아보기",
        resume: {
            title: "이 력 서",
            name: "성 명",
            birthDateLabel: "생년월일",
            phone: "연락처",
            email: "이메일",
            address: "주소",
            introduction: "자기소개서",
            education: "학력사항",
            experience: "경력사항",
            certificates: "자격증 및 어학",
            photoPlaceholder: "사진",
            photoSize: "(3x4)",
            certify: "위 기재 사항은 사실과 틀림없습니다.",
            author: "작성자 :",
            signature: "(인)"
        },
        placeholders: {
            name: "홍길동",
            birthDate: "1990년 1월 1일",
            email: "example@email.com",
            phone: "010-1234-5678",
            address: "서울시 강남구...",
            introduction: "자유롭게 본인을 소개해주세요."
        },
        headers: {
            education: ['재학기간', '학교명', '전공', '구분'],
            experience: ['근무기간', '회사명', '직위', '담당업무'],
            certificates: ['취득일', '자격증/어학명', '발행처']
        }
    },
    en: {
        title: "Free Online Resume Builder",
        subtitle: "Professional Resume Template - Instant PDF Download",
        downloadPdf: "Download PDF",
        aboutUsTitle: "About Us",
        aboutUsText1: "This 'Free Online Resume Builder' is a web tool designed to help job seekers create professional resumes instantly. No login required, ensuring complete privacy.",
        keyFeaturesTitle: "Key Features",
        keyFeaturesList: [
            "Intuitive real-time editing",
            "A4 optimized layout",
            "High-quality PDF download",
            "No watermarks",
            "Responsive design"
        ],
        howToUseTitle: "How to Use",
        howToUseText1: "1. <strong>Basic Info:</strong> Fill in your details and upload a photo.",
        howToUseText2: "2. <strong>Sections:</strong> Complete Education, Experience, etc.",
        howToUseText3: "3. <strong>Review:</strong> Check for any errors.",
        howToUseText4: "4. <strong>Download:</strong> Click 'Download PDF' to save.",
        copyright: "© 2024 Free Online Resume Builder. All rights reserved.",
        guideLink: "Resume Writing Guide",
        resume: {
            title: "RESUME",
            name: "Name",
            birthDateLabel: "Date of Birth",
            phone: "Phone",
            email: "Email",
            address: "Address",
            introduction: "Summary",
            education: "Education",
            experience: "Experience",
            certificates: "Certificates / Skills",
            photoPlaceholder: "Photo",
            photoSize: "(Optional)",
            certify: "I certify that the information contained in this resume is true and accurate.",
            author: "Applicant :",
            signature: "(Signature)"
        },
        placeholders: {
            name: "John Doe",
            birthDate: "Jan 01, 1990",
            email: "john.doe@example.com",
            phone: "123-456-7890",
            address: "New York, NY",
            introduction: "Briefly introduce your professional background and goals."
        },
        headers: {
            education: ['Period', 'School', 'Major', 'Description'],
            experience: ['Period', 'Company', 'Role', 'Description'],
            certificates: ['Date', 'Certificate / Skill', 'Issuer']
        }
    }
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('ko');

    const toggleLanguage = (lang) => {
        setLanguage(lang);
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
