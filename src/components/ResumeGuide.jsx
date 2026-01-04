import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ResumeGuide = () => {
    useEffect(() => {
        document.title = "이력서 잘 쓰는 방법 & 무료 템플릿 가이드 | Free Online Resume Builder";
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', "이력서 작성 팁, 합격하는 자소서 작성법, 무료 이력서 템플릿 활용 가이드를 확인하세요. 인사담당자의 눈길을 끄는 이력서 작성 노하우를 공개합니다.");
        }
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
                <div className="mb-8">
                    <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                        이력서 생성기로 돌아가기 (Back to Builder)
                    </Link>
                </div>

                <article className="prose lg:prose-xl max-w-none text-gray-800">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
                        이력서 잘 쓰는 방법: 합격을 부르는 작성 가이드 (Resume Writing Guide)
                    </h1>

                    <p className="lead text-xl text-gray-600 mb-8">
                        이력서는 당신의 첫인상을 결정짓는 가장 중요한 문서입니다. 인사담당자는 수많은 이력서 중에서 단 몇 초 만에 당신을 파악합니다. 어떻게 하면 눈에 띄는 이력서를 작성할 수 있을까요?
                    </p>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-blue-700 mb-4">1. 핵심 역량을 상단에 배치하세요 (Highlight Core Competencies)</h2>
                        <p className="mb-4">
                            가장 중요한 정보는 첫 페이지 상단에 위치해야 합니다. 지원하는 직무와 직접적으로 관련된 기술(Skill), 경험(Experience), 자격증(Certificate)을 요약하여 보여주세요. 'Summary' 섹션을 활용해 자신의 강점을 3~4줄로 요약하는 것도 좋은 전략입니다. 인사담당자가 스크롤을 내리기 전에 당신이 적임자임을 확신하게 만드세요.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-blue-700 mb-4">2. 성과는 수치로 증명하세요 (Quantify Your Achievements)</h2>
                        <p className="mb-4">
                            단순히 "열심히 일했습니다"나 "프로젝트에 참여했습니다"라는 표현은 피하세요. 대신 "매출을 20% 증대시켰습니다", "처리 속도를 30% 개선했습니다"와 같이 구체적인 수치(Numbers)와 결과(Results)를 제시해야 합니다. 수치는 당신의 능력을 객관적으로 증명하는 가장 강력한 무기입니다.
                        </p>
                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 my-4">
                            <p className="font-semibold">Bad Example: "마케팅 업무 수행"</p>
                            <p className="font-semibold text-blue-700">Good Example: "SNS 마케팅 전략 수립으로 3개월 만에 팔로워 5,000명 증가 및 전환율 15% 달성"</p>
                        </div>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-blue-700 mb-4">3. 직무 적합성을 강조하세요 (Tailor to the Job Description)</h2>
                        <p className="mb-4">
                            모든 회사에 똑같은 이력서를 보내는 것은 좋지 않습니다. 채용 공고(Job Description)를 꼼꼼히 분석하고, 그 회사에서 필요로 하는 키워드를 이력서 곳곳에 배치하세요. 지원하는 직무와 관련 없는 아르바이트나 자격증은 과감히 삭제하거나 간략하게 줄이는 선택과 집중이 필요합니다.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-blue-700 mb-4">4. 가독성을 높이세요 (Improve Readability)</h2>
                        <p className="mb-4">
                            아무리 좋은 내용이라도 읽기 어렵다면 소용없습니다. 긴 문단보다는 불렛(Bullet points)을 사용하여 내용을 구조화하세요. 적절한 여백과 명확한 헤드라인을 사용하여 시각적으로 편안한 문서를 만드세요. 본 서비스의 '무료 온라인 이력서 생성기'는 A4 규격에 최적화된 깔끔한 레이아웃을 제공하여 가독성 높은 PDF를 자동으로 생성해 줍니다.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-blue-700 mb-4">5. 오타와 문법 오류를 점검하세요 (Proofread)</h2>
                        <p className="mb-4">
                            사소한 오타 하나가 당신의 전문성을 의심하게 만들 수 있습니다. 작성 후에는 반드시 여러 번 정독하고, 맞춤법 검사기를 활용하세요. 또한, 가능하다면 주변 지인에게 피드백을 요청하여 객관적인 시선에서 점검받는 것이 좋습니다.
                        </p>
                    </section>

                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <p className="text-gray-600 mb-6">
                            이력서는 당신의 커리어 여정을 보여주는 지도와 같습니다. 위의 팁들을 활용하여 당신만의 매력적인 이력서를 완성해 보세요. 지금 바로 무료 이력서 생성기로 시작할 수 있습니다.
                        </p>
                        <Link to="/" className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1">
                            지금 바로 이력서 작성하기 (Start Building Your Resume Now)
                        </Link>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default ResumeGuide;
