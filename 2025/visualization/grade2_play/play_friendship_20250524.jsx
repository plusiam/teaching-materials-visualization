import React from 'react';

/**
 * 2학년 놀이 템플릿 - 친구와 함께 놀기
 * 학년 특성: 구체적 조작 단계, 직관적 학습 선호
 * 디자인 특징: 매우 밝고 화려한 색상, 큰 글씨, 동물 캐릭터, 활동적 요소
 * 색상 팔레트: #FF6B6B, #4ECDC4, #FFE66D, #A8E6CF
 */
const Grade2PlayTemplate = () => {
  const playRules = [
    {
      id: 1,
      title: '차례 지키기',
      description: '친구가 먼저 놀고 있으면 기다려요',
      icon: '🎯',
      color: '#FF6B6B',
      example: '그네에서 친구가 놀고 있어요. 차례를 기다려요!'
    },
    {
      id: 2,
      title: '함께 놀기',
      description: '혼자 놀지 말고 친구와 함께 놀아요',
      icon: '🤝',
      color: '#4ECDC4',
      example: '술래잡기를 혼자 할 수 없어요. 친구들과 함께 해요!'
    },
    {
      id: 3,
      title: '양보하기',
      description: '친구에게 먼저 하게 해주어요',
      icon: '💝',
      color: '#FFE66D',
      example: '친구가 좋아하는 장난감을 먼저 주어요!'
    },
    {
      id: 4,
      title: '도와주기',
      description: '어려워하는 친구를 도와주어요',
      icon: '🤗',
      color: '#A8E6CF',
      example: '친구가 블록 쌓기를 어려워해요. 도와주어요!'
    }
  ];

  const animals = [
    { emoji: '🐰', name: '토끼', x: 100, y: 150 },
    { emoji: '🐶', name: '강아지', x: 300, y: 200 },
    { emoji: '🐱', name: '고양이', x: 500, y: 180 },
    { emoji: '🐻', name: '곰', x: 700, y: 160 }
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-pink-100 via-yellow-100 to-blue-100 p-8">
      {/* 상단 제목 */}
      <div className="text-center mb-8">
        <div className="inline-block bg-white rounded-full p-4 shadow-lg mb-4">
          <span className="text-6xl">🎈</span>
        </div>
        <h1 className="text-5xl font-bold text-pink-600 mb-4 drop-shadow-lg">
          친구와 함께 놀아요!
        </h1>
        <p className="text-2xl text-blue-600 font-semibold">
          재미있게 놀려면 어떻게 해야 할까요? 🌈
        </p>
      </div>

      {/* 동물 친구들과 함께하는 놀이 규칙 */}
      <div className="relative mb-12">
        <svg viewBox="0 0 800 300" className="w-full h-64">
          {/* 배경 언덕 */}
          <path d="M0,250 Q200,200 400,220 T800,240 L800,300 L0,300 Z" fill="#A8E6CF" opacity="0.3" />
          <path d="M0,270 Q300,240 600,260 T800,250 L800,300 L0,300 Z" fill="#FFE66D" opacity="0.3" />
          
          {/* 태양 */}
          <circle cx="700" cy="80" r="40" fill="#FFE66D" stroke="#FFA726" strokeWidth="4" />
          <g transform="translate(700, 80)">
            {[...Array(8)].map((_, i) => (
              <line 
                key={i}
                x1="0" y1="-55" x2="0" y2="-65" 
                stroke="#FFA726" 
                strokeWidth="3"
                transform={`rotate(${i * 45})`}
              />
            ))}
          </g>
          
          {/* 구름들 */}
          <g fill="white" opacity="0.8">
            <ellipse cx="150" cy="60" rx="30" ry="20" />
            <ellipse cx="170" cy="50" rx="25" ry="18" />
            <ellipse cx="190" cy="60" rx="30" ry="20" />
            
            <ellipse cx="450" cy="70" rx="35" ry="22" />
            <ellipse cx="475" cy="60" rx="30" ry="20" />
            <ellipse cx="500" cy="70" rx="35" ry="22" />
          </g>

          {/* 동물 친구들 */}
          {animals.map((animal, index) => (
            <g key={index}>
              <circle 
                cx={animal.x} 
                cy={animal.y} 
                r="35" 
                fill="white" 
                stroke="#4ECDC4" 
                strokeWidth="3"
              />
              <text 
                x={animal.x} 
                y={animal.y + 10} 
                textAnchor="middle" 
                fontSize="24"
              >
                {animal.emoji}
              </text>
              <text 
                x={animal.x} 
                y={animal.y + 60} 
                textAnchor="middle" 
                fontSize="16" 
                fontWeight="bold"
                fill="#2D3436"
              >
                {animal.name}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* 놀이 규칙 카드들 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {playRules.map((rule, index) => (
          <div 
            key={rule.id}
            className="bg-white rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300"
            style={{ borderTop: `8px solid ${rule.color}` }}
          >
            <div className="text-center mb-6">
              <div 
                className="inline-block w-20 h-20 rounded-full flex items-center justify-center text-4xl mb-4 shadow-lg"
                style={{ backgroundColor: rule.color }}
              >
                {rule.icon}
              </div>
              <h3 
                className="text-3xl font-bold mb-4"
                style={{ color: rule.color }}
              >
                {rule.title}
              </h3>
            </div>
            
            <div className="text-center space-y-4">
              <p className="text-xl text-gray-700 leading-relaxed">
                {rule.description}
              </p>
              
              <div 
                className="bg-gray-50 rounded-2xl p-4 border-l-4"
                style={{ borderLeftColor: rule.color }}
              >
                <p className="text-lg font-medium text-gray-600">
                  예시: {rule.example}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 함께 놀기 약속 */}
      <div className="bg-white rounded-3xl p-8 shadow-2xl text-center">
        <div className="flex justify-center gap-4 mb-6">
          {['🌟', '🎈', '🎯', '🌈'].map((emoji, index) => (
            <span key={index} className="text-4xl animate-bounce" style={{ animationDelay: `${index * 0.2}s` }}>
              {emoji}
            </span>
          ))}
        </div>
        
        <h2 className="text-4xl font-bold text-purple-600 mb-6">
          우리의 놀이 약속! 🤙
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {playRules.map((rule, index) => (
            <div 
              key={index}
              className="p-4 rounded-2xl text-white font-bold text-lg"
              style={{ backgroundColor: rule.color }}
            >
              <div className="text-2xl mb-2">{rule.icon}</div>
              <div>{rule.title}</div>
            </div>
          ))}
        </div>
        
        <p className="text-2xl text-gray-600 mt-6 font-semibold">
          이 약속을 지키면 모두가 즐겁게 놀 수 있어요! 😊
        </p>
        
        {/* 체크박스 영역 */}
        <div className="bg-yellow-50 rounded-2xl p-6 mt-6">
          <h3 className="text-2xl font-bold text-orange-600 mb-4">오늘 내가 실천한 것은? ✅</h3>
          <div className="flex justify-center gap-8">
            {playRules.map((rule, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 border-4 border-gray-300 rounded-lg mb-2"></div>
                <p className="text-sm font-medium">{rule.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grade2PlayTemplate;