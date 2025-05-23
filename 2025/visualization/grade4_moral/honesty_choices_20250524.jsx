import React from 'react';

/**
 * 4학년 도덕 템플릿 - 정직한 생활
 * 학년 특성: 논리적 사고 발달, 체계적 정보 처리 선호
 * 디자인 특징: 차분한 색상 톤, 구조화된 정보 배치, 단계별 사고 과정
 * 색상 팔레트: #6C5CE7, #A29BFE, #FDCB6E, #81ECEC
 */
const Grade4MoralTemplate = () => {
  const honestySituations = [
    {
      id: 1,
      category: '실수했을 때',
      situation: '숙제를 깜빡 잊고 안 했어요',
      wrongChoice: '거짓말하기',
      wrongResult: '선생님이 나중에 알게 되면 더 큰 문제가 됩니다',
      rightChoice: '솔직하게 말하기',
      rightResult: '선생님이 이해해주시고 기회를 주십니다',
      color: '#6C5CE7',
      icon: '📝'
    },
    {
      id: 2,
      category: '친구와의 관계',
      situation: '친구의 물건을 실수로 망가뜨렸어요',
      wrongChoice: '모른 척하기',
      wrongResult: '친구가 상처받고 신뢰가 깨집니다',
      rightChoice: '사과하고 책임지기',
      rightResult: '친구가 용서하고 관계가 더 돈독해집니다',
      color: '#A29BFE',
      icon: '🤝'
    },
    {
      id: 3,
      category: '시험이나 과제',
      situation: '어려운 문제를 혼자 풀 수 없어요',
      wrongChoice: '친구 답안 몰래 보기',
      wrongResult: '진짜 실력을 기를 수 없고 습관이 됩니다',
      rightChoice: '도움 요청하기',
      rightResult: '정말로 이해하게 되고 실력이 늘어납니다',
      color: '#FDCB6E',
      icon: '📊'
    },
    {
      id: 4,
      category: '가정에서',
      situation: '용돈을 다른 곳에 썼어요',
      wrongChoice: '잃어버렸다고 말하기',
      wrongResult: '부모님의 신뢰를 잃고 더 큰 거짓말을 하게 됩니다',
      rightChoice: '사실대로 말하기',
      rightResult: '부모님이 이해해주시고 올바른 용돈 사용법을 배웁니다',
      color: '#81ECEC',
      icon: '💰'
    }
  ];

  const virtuesOfHonesty = [
    { virtue: '신뢰', description: '사람들이 나를 믿게 됩니다', icon: '🤝' },
    { virtue: '성장', description: '실수를 통해 더 나은 사람이 됩니다', icon: '📈' },
    { virtue: '평화', description: '마음이 편안하고 떳떳합니다', icon: '🕊️' },
    { virtue: '관계', description: '진실한 관계를 맺을 수 있습니다', icon: '💝' }
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 p-8">
      {/* 상단 제목 */}
      <div className="text-center mb-12">
        <div className="inline-block bg-white rounded-2xl p-6 shadow-lg mb-6">
          <span className="text-5xl">⚖️</span>
        </div>
        <h1 className="text-4xl font-bold text-purple-700 mb-4">
          정직한 생활
        </h1>
        <p className="text-xl text-gray-600 font-medium">
          정직한 선택이 만드는 아름다운 삶
        </p>
      </div>

      {/* 정직함의 가치 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center text-purple-600 mb-8">
          🌟 정직함이 주는 선물
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {virtuesOfHonesty.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-bold text-purple-600 mb-2">{item.virtue}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 선택의 결과 비교 */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-center text-purple-600 mb-8">
          📋 상황별 선택과 결과
        </h2>
        
        {honestySituations.map((situation, index) => (
          <div key={situation.id} className="bg-white rounded-2xl p-8 shadow-lg">
            {/* 상황 제목 */}
            <div className="text-center mb-8">
              <div 
                className="inline-block w-16 h-16 rounded-full flex items-center justify-center text-2xl text-white mb-4"
                style={{ backgroundColor: situation.color }}
              >
                {situation.icon}
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: situation.color }}>
                {situation.category}
              </h3>
              <p className="text-lg text-gray-700 bg-gray-50 rounded-lg p-4">
                {situation.situation}
              </p>
            </div>

            {/* 선택과 결과 비교 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 잘못된 선택 */}
              <div className="border-2 border-red-200 rounded-xl p-6 bg-red-50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">✗</span>
                  </div>
                  <h4 className="text-lg font-bold text-red-600">잘못된 선택</h4>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-red-700 mb-2">선택:</p>
                    <p className="text-red-600 bg-white rounded-lg p-3">
                      {situation.wrongChoice}
                    </p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-red-700 mb-2">결과:</p>
                    <p className="text-red-600 bg-white rounded-lg p-3">
                      {situation.wrongResult}
                    </p>
                  </div>
                </div>
              </div>

              {/* 올바른 선택 */}
              <div className="border-2 border-green-200 rounded-xl p-6 bg-green-50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <h4 className="text-lg font-bold text-green-600">올바른 선택</h4>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-green-700 mb-2">선택:</p>
                    <p className="text-green-600 bg-white rounded-lg p-3">
                      {situation.rightChoice}
                    </p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-green-700 mb-2">결과:</p>
                    <p className="text-green-600 bg-white rounded-lg p-3">
                      {situation.rightResult}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 화살표와 선택 안내 */}
            <div className="text-center mt-6">
              <div className="inline-flex items-center gap-4 bg-blue-50 rounded-lg p-4">
                <span className="text-2xl">🤔</span>
                <span className="font-medium text-blue-700">
                  어떤 선택이 더 좋을까요?
                </span>
                <span className="text-2xl">→</span>
                <span className="text-2xl">✅</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 정직함 실천 다짐 */}
      <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg text-center">
        <h2 className="text-2xl font-bold text-purple-600 mb-6">
          💪 나의 정직함 실천 계획
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-purple-50 rounded-xl p-6">
            <h3 className="text-lg font-bold text-purple-600 mb-4">
              🎯 이번 주 목표
            </h3>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3 text-left">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>실수했을 때 솔직하게 말하기</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-3 text-left">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>모르는 것을 모른다고 말하기</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-3 text-left">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>친구에게 진실한 마음 표현하기</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-xl p-6">
            <h3 className="text-lg font-bold text-blue-600 mb-4">
              📝 나만의 다짐
            </h3>
            <div className="bg-white rounded-lg p-4 min-h-32 border-2 border-dashed border-blue-300">
              <p className="text-gray-400 text-sm">
                정직한 사람이 되기 위한 나만의 다짐을 써보세요!
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl p-6">
          <p className="text-lg font-medium text-gray-700">
            "진실은 때로 어려울 수 있지만, 언제나 가장 아름다운 길입니다." ✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default Grade4MoralTemplate;