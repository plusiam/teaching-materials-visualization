import React from 'react';

/**
 * 6학년 도덕 템플릿 - 지구촌 시민의 책임
 * 학년 특성: 형식적 조작 단계, 추상적이고 철학적 사고 가능
 * 디자인 특징: 깨끗하고 성숙한 디자인, 미니멀한 스타일, 절제된 색상
 * 색상 팔레트: #2D3436, #636E72, #00B894, #74B9FF
 */
const Grade6MoralTemplate = () => {
  const globalIssues = [
    {
      id: 1,
      issue: '환경 보호',
      description: '지구 온난화와 환경 파괴',
      myAction: '일회용품 줄이기, 분리수거 실천',
      globalImpact: '지구 환경 보전에 기여',
      icon: '🌍',
      color: '#00B894'
    },
    {
      id: 2,
      issue: '빈곤과 불평등',
      description: '세계 곳곳의 기아와 교육 불평등',
      myAction: '기부 활동, 공정무역 제품 선택',
      globalImpact: '더 공정한 세상 만들기',
      icon: '🤝',
      color: '#74B9FF'
    },
    {
      id: 3,
      issue: '인권과 평화',
      description: '전쟁과 차별로 고통받는 사람들',
      myAction: '다문화 이해, 평화 교육 참여',
      globalImpact: '평화로운 지구촌 건설',
      icon: '🕊️',
      color: '#636E72'
    },
    {
      id: 4,
      issue: '기술과 윤리',
      description: '디지털 시대의 새로운 도전',
      myAction: '올바른 정보 활용, 사이버 윤리 실천',
      globalImpact: '건전한 디지털 문화 조성',
      icon: '💻',
      color: '#2D3436'
    }
  ];

  const principles = [
    { principle: '상호 의존성', description: '모든 것은 서로 연결되어 있다', symbol: '🔗' },
    { principle: '지속 가능성', description: '미래 세대를 위한 책임', symbol: '♾️' },
    { principle: '다양성 존중', description: '차이를 인정하고 포용한다', symbol: '🌈' },
    { principle: '글로벌 시민의식', description: '세계를 품는 마음', symbol: '🌐' }
  ];

  const actionLevels = [
    { level: '개인', actions: ['생활 습관 개선', '지식과 인식 확장'], color: '#74B9FF' },
    { level: '지역', actions: ['지역 사회 봉사', '환경 보호 활동'], color: '#00B894' },
    { level: '국가', actions: ['정책 관심', '민주적 참여'], color: '#636E72' },
    { level: '세계', actions: ['국제 협력 지지', '글로벌 이슈 관심'], color: '#2D3436' }
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-slate-100 p-8">
      {/* 상단 제목 */}
      <div className="text-center mb-16">
        <div className="inline-block bg-white rounded-xl p-6 shadow-lg mb-6 border border-gray-200">
          <span className="text-4xl">🌐</span>
        </div>
        <h1 className="text-3xl font-light text-gray-800 mb-4 tracking-wide">
          지구촌 시민의 책임
        </h1>
        <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
          하나의 지구, 하나의 인류 공동체에서 살아가는 우리의 역할을 생각해봅시다
        </p>
      </div>

      {/* 글로벌 원칙 */}
      <div className="mb-16">
        <h2 className="text-xl font-medium text-center text-gray-700 mb-10">
          지구촌 시민의 핵심 가치
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {principles.map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="text-2xl mb-4">{item.symbol}</div>
              <h3 className="text-sm font-semibold text-gray-800 mb-2 tracking-wide">
                {item.principle}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 글로벌 이슈와 대응 */}
      <div className="mb-16">
        <h2 className="text-xl font-medium text-center text-gray-700 mb-10">
          지구촌의 주요 과제와 나의 역할
        </h2>
        
        <div className="space-y-8">
          {globalIssues.map((issue, index) => (
            <div key={issue.id} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-start gap-6">
                {/* 이슈 아이콘 */}
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl text-white flex-shrink-0"
                  style={{ backgroundColor: issue.color }}
                >
                  {issue.icon}
                </div>
                
                {/* 이슈 내용 */}
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-800 mb-3">
                    {issue.issue}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {issue.description}
                  </p>
                  
                  {/* 행동과 영향 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
                      <h4 className="text-sm font-semibold text-blue-800 mb-2">
                        💡 내가 할 수 있는 일
                      </h4>
                      <p className="text-sm text-blue-700">
                        {issue.myAction}
                      </p>
                    </div>
                    
                    <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400">
                      <h4 className="text-sm font-semibold text-green-800 mb-2">
                        🌟 기대되는 변화
                      </h4>
                      <p className="text-sm text-green-700">
                        {issue.globalImpact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 행동 단계별 실천 방안 */}
      <div className="mb-16">
        <h2 className="text-xl font-medium text-center text-gray-700 mb-10">
          단계별 실천 계획
        </h2>
        
        <div className="relative">
          {/* 연결선 */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gray-200"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {actionLevels.map((level, index) => (
              <div key={index} className="text-center">
                <div 
                  className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-medium text-sm relative z-10"
                  style={{ backgroundColor: level.color }}
                >
                  {index + 1}
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <h3 className="font-medium text-gray-800 mb-4">
                    {level.level} 차원
                  </h3>
                  
                  <div className="space-y-3">
                    {level.actions.map((action, actionIndex) => (
                      <div key={actionIndex} className="text-sm text-gray-600 bg-gray-50 rounded p-3">
                        {action}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 성찰과 다짐 */}
      <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
        <h2 className="text-xl font-medium text-center text-gray-700 mb-8">
          나의 성찰과 다짐
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 성찰 질문 */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              🤔 깊이 생각해보기
            </h3>
            
            <div className="space-y-4">
              {[
                '지구촌의 문제가 나와 어떤 관련이 있을까?',
                '나의 작은 행동이 세상에 어떤 변화를 가져올 수 있을까?',
                '미래 세대를 위해 지금 우리가 해야 할 일은?',
                '다양한 문화와 가치를 어떻게 존중할 수 있을까?'
              ].map((question, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {question}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* 실천 다짐 */}
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              ✊ 나의 실천 다짐
            </h3>
            
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h4 className="text-sm font-semibold text-blue-800 mb-2">
                  이번 달 실천 목표
                </h4>
                <div className="bg-white rounded p-4 min-h-24 border border-blue-200">
                  <p className="text-sm text-gray-400 italic">
                    구체적인 실천 목표를 세워보세요
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <h4 className="text-sm font-semibold text-green-800 mb-2">
                  장기적 비전
                </h4>
                <div className="bg-white rounded p-4 min-h-24 border border-green-200">
                  <p className="text-sm text-gray-400 italic">
                    내가 꿈꾸는 지구촌의 모습을 그려보세요
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 마무리 메시지 */}
      <div className="text-center mt-12">
        <div className="inline-block bg-gradient-to-r from-gray-100 to-slate-200 rounded-lg p-6 shadow-sm">
          <p className="text-lg font-light text-gray-700 leading-relaxed">
            "지구는 우리가 조상으로부터 물려받은 것이 아니라<br />
            후손들로부터 빌린 것이다"
          </p>
          <p className="text-sm text-gray-500 mt-2">- 아메리카 원주민 속담</p>
        </div>
      </div>
    </div>
  );
};

export default Grade6MoralTemplate;