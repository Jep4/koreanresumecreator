import React, { useState, useEffect } from 'react';
import EditableField from './EditableField';
import PhotoUpload from './PhotoUpload';

const Resume = ({ resumeRef, isPrinting }) => {
    const [data, setData] = useState({
        name: '',
        birthDate: '',
        email: '',
        phone: '',
        address: '',
        education: Array(4).fill({ period: '', school: '', major: '', status: '' }),
        experience: Array(4).fill({ period: '', company: '', role: '', task: '' }),
        license: Array(4).fill({ date: '', name: '', issuer: '' }),
        introduction: ''
    });

    const updateField = (field, value) => {
        setData({ ...data, [field]: value });
    };

    const updateArrayField = (category, index, field, value) => {
        const newArray = [...data[category]];
        newArray[index] = { ...newArray[index], [field]: value };
        setData({ ...data, [category]: newArray });
    };

    const isEmpty = (obj) => {
        return Object.values(obj).every(x => x === '' || x === null || x === undefined);
    };

    const hasContent = (category) => {
        if (category === 'introduction') return data.introduction.trim() !== '';
        return data[category].some(item => !isEmpty(item));
    };

    const renderSection = (title, category, headers, fields, colWidths) => {
        if (isPrinting && !hasContent(category)) return null;

        const itemsToRender = isPrinting
            ? data[category].filter(item => !isEmpty(item))
            : data[category];

        if (isPrinting && itemsToRender.length === 0) return null;

        return (
            <>
                <h2 className="text-lg font-bold mb-2 mt-6 border-b-2 border-black pb-1">{title}</h2>
                <table className="resume-table">
                    <colgroup>
                        {colWidths.map((w, i) => <col key={i} style={{ width: w }} />)}
                    </colgroup>
                    <thead>
                        <tr>
                            {headers.map((h, i) => (
                                <th key={i}>{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {itemsToRender.map((item, index) => (
                            <tr key={index}>
                                {fields.map((field, fIndex) => (
                                    <td key={fIndex}>
                                        <EditableField
                                            value={item[field]}
                                            onSave={(val) => {
                                                const originalIndex = data[category].indexOf(item);
                                                updateArrayField(category, originalIndex !== -1 ? originalIndex : index, field, val)
                                            }}
                                            placeholder=""
                                            className="text-center h-full"
                                            isPrinting={isPrinting}
                                        />
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        );
    };

    return (
        <div className="resume-container" ref={resumeRef}>
            <h1 className="resume-title"><span>이 력 서</span></h1>

            <table className="resume-table">
                <colgroup>
                    <col style={{ width: '15%' }} />
                    <col style={{ width: '10%' }} />
                    <col style={{ width: '25%' }} />
                    <col style={{ width: '10%' }} />
                    <col style={{ width: '40%' }} />
                </colgroup>
                <tbody>
                    <tr>
                        <td rowSpan="4" className="p-0 h-32">
                            <PhotoUpload />
                        </td>
                        <th>성 명</th>
                        <td colSpan="3">
                            <EditableField
                                value={data.name}
                                onSave={(val) => updateField('name', val)}
                                placeholder="홍길동"
                                className="text-center text-lg font-bold h-full mb-1"
                                isPrinting={isPrinting}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>생년월일</th>
                        <td colSpan="3">
                            <EditableField
                                value={data.birthDate}
                                onSave={(val) => updateField('birthDate', val)}
                                placeholder="1990년 1월 1일"
                                className="text-center h-full mb-1"
                                isPrinting={isPrinting}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>이메일</th>
                        <td colSpan="3">
                            <EditableField
                                value={data.email}
                                onSave={(val) => updateField('email', val)}
                                placeholder="example@email.com"
                                className="text-center h-full mb-1"
                                isPrinting={isPrinting}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>연락처</th>
                        <td>
                            <EditableField
                                value={data.phone}
                                onSave={(val) => updateField('phone', val)}
                                placeholder="010-1234-5678"
                                className="text-center h-full mb-1"
                                isPrinting={isPrinting}
                            />
                        </td>
                        <th>주소</th>
                        <td>
                            <EditableField
                                value={data.address}
                                onSave={(val) => updateField('address', val)}
                                placeholder="서울시 강남구..."
                                className="text-left h-full mb-1"
                                isPrinting={isPrinting}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>

            {renderSection(
                '학력사항',
                'education',
                ['재학기간', '학교명', '전공', '구분'],
                ['period', 'school', 'major', 'status'],
                ['25%', '30%', '30%', '15%']
            )}

            {renderSection(
                '경력사항',
                'experience',
                ['근무기간', '회사명', '직위', '담당업무'],
                ['period', 'company', 'role', 'task'],
                ['25%', '25%', '15%', '35%']
            )}

            {renderSection(
                '자격증 및 어학',
                'license',
                ['취득일', '자격증/어학명', '발행처'],
                ['date', 'name', 'issuer'],
                ['25%', '40%', '35%']
            )}

            {(!isPrinting || hasContent('introduction')) && (
                <>
                    <h2 className="text-lg font-bold mb-2 mt-6 border-b-2 border-black pb-1">자기소개서</h2>
                    <div className="border-2 border-black p-4 min-h-[200px]">
                        <EditableField
                            value={data.introduction}
                            onSave={(val) => updateField('introduction', val)}
                            type="textarea"
                            placeholder="자유롭게 본인을 소개해주세요."
                            className="w-full h-full min-h-[200px] resize-none"
                            isPrinting={isPrinting}
                        />
                    </div>
                </>
            )}

            <div className="mt-10 text-center">
                <p className="mb-4">위 기재 사항은 사실과 틀림없습니다.</p>
                <p className="font-bold text-lg">{new Date().getFullYear()}년 {new Date().getMonth() + 1}월 {new Date().getDate()}일</p>
                <div className="mt-4 flex justify-center items-end gap-2">
                    <span className="font-bold text-xl pb-1">작성자 : </span>
                    <div className="w-32 border-b border-black">
                        <EditableField
                            value={data.name}
                            onSave={(val) => updateField('name', val)}
                            placeholder="홍길동"
                            className="text-center font-bold text-xl mb-2"
                            isPrinting={isPrinting}
                        />
                    </div>
                    <span className="font-bold text-xl pb-1">(인)</span>
                </div>
            </div>
        </div>
    );
};

export default Resume;
