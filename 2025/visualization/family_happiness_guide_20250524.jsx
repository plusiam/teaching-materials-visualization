import React from 'react';

/**
 * 가족 행복 비법서 - 우애를 가꾸는 방법
 * 초등 3학년 도덕 3단원 "우애를 지켜요" 시각화 자료
 * 신체 부위별로 우애 실천 방법을 구체적으로 제시
 */
const FamilyHappinessGuide = () => {
  const bodyParts = [
    {
      id: 'head',
      name: '머리',
      color: '#FFD93D',
      x: 400,
      y: 120,
      width: 140,
      height: 100,
      actions: [
        '형제자매의 입장 생각하기',
        '갈등의 원인 파악하기',
        '해결책 함께 고민하기'
      ],
      shape: 'ellipse'
    },
    {
      id: 'mouth',
      name: '입',
      color: '#FF6B9D',
      x: 420,
      y: 180,
      width: 100,
      height: 60,
      actions: [
        '고운 말로 이야기하기',
        '진심 어린 사과하기',
        '고마운 마음 표현하기'
      ],
      shape: 'ellipse'
    },
    {
      id: 'leftHand',
      name: '손',
      color: '#4ECDC4',
      x: 200,
      y: 300,
      width: 120,
      height: 80,
      actions: [
        '도움이 필요할 때 돕기',
        '함께 일하기',
        '다정하게 손잡기'
      ],
      shape: 'ellipse'
    },
    {
      id: 'rightHand',
      name: '손',
      color: '#4ECDC4',
      x: 520,
      y: 300,
      width: 120,
      height: 80,
      actions: [
        '물건 아껴서 쓰기',
        '정리정돈 함께하기',
        '서로 격려해주기'
      ],
      shape: 'ellipse'
    },
    {
      id: 'heart',
      name: '마음',
      color: '#FF4757',
      x: 350,
      y: 280,
      width: 140,
      height: 120,
      actions: [
        '서로를 사랑하는 마음',
        '이해하고 배려하는 마음',
        '용서하고 양보하는 마음'
      ],
      shape: 'heart'
    },
    {
      id: 'feet',
      name: '발',
      color: '#45B7D1',
      x: 350,
      y: 480,
      width: 140,
      height: 80,
      actions: [
        '먼저 다가가기',
        '화해하러 가기',
        '함께 놀러 가기'
      ],
      shape: 'ellipse'
    }
  ];

  const renderShape = (part) => {
    if (part.shape === 'heart') {
      const heartPath = `M${part.x + part.width/2},${part.y + 20} 
        C${part.x + part.width/2},${part.y + 5} ${part.x + part.width/4},${part.y} ${part.x + part.width/4},${part.y + 15}
        C${part.x + part.width/4},${part.y + 5} ${part.x},${part.y + 5} ${part.x},${part.y + 25}
        C${part.x},${part.y + 45} ${part.x + part.width/2},${part.y + part.height} ${part.x + part.width/2},${part.y + part.height}
        C${part.x + part.width/2},${part.y + part.height} ${part.x + part.width},${part.y + 45} ${part.x + part.width},${part.y + 25}
        C${part.x + part.width},${part.y + 5} ${part.x + 3*part.width/4},${part.y + 5} ${part.x + 3*part.width/4},${part.y + 15}
        C${part.x + 3*part.width/4},${part.y} ${part.x + part.width/2},${part.y + 5} ${part.x + part.width/2},${part.y + 20}Z`;
      
      return (
        <path
          d={heartPath}
          fill={part.color}
          stroke="white"
          strokeWidth="3"
          opacity="0.9"
        />
      );
    } else {
      return (
        <ellipse
          cx={part.x + part.width/2}
          cy={part.y + part.height/2}
          rx={part.width/2}
          ry={part.height/2}
          fill={part.color}
          stroke="white"
          strokeWidth="3"
          opacity="0.9"
        />
      );
    }
  };

  return (
    <div className="w-full h-screen bg-gradient-to-br from-yellow-50 to-orange-50 p-6">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          가족 행복 비법서 3장
        </h1>
        <h2 className="text-2xl font-semibold text-orange-600 mb-2">
          우애를 가꾸는 방법
        </h2>
        <p className="text-lg text-gray-600">
          온몸으로 실천하는 형제자매 사랑
        </p>
      </div>

      <div className="flex justify-center">
        <div className="relative">
          <svg viewBox="0 0 800 600" className="w-full max-w-4xl h-96">
            {/* 몸통 연결선 */}
            <line x1="400" y1="220" x2="400" y2="280" stroke="#E5E7EB" strokeWidth="4" />
            <line x1="260" y1="340" x2="350" y2="320" stroke="#E5E7EB" strokeWidth="4" />
            <line x1="540" y1="340" x2="450" y2="320" stroke="#E5E7EB" strokeWidth="4" />
            <line x1="420" y1="400" x2="420" y2="480" stroke="#E5E7EB" strokeWidth="4" />

            {/* 각 신체 부위 */}
            {bodyParts.map((part) => (
              <g key={part.id}>
                {renderShape(part)}
                
                {/* 라벨 */}
                <text
                  x={part.x + part.width/2}
                  y={part.y + part.height/2 + 5}
                  textAnchor="middle"
                  fill="white"
                  fontSize="16"
                  fontWeight="bold"
                  className="pointer-events-none"
                >
                  {part.name}
                </text>
              </g>
            ))}

            {/* 중앙 제목 */}
            <rect x="300" y="50" width="200" height="40" fill="white" stroke="#F59E0B" strokeWidth="3" rx="20" />
            <text x="400" y="75" textAnchor="middle" fill="#F59E0B" fontSize="18" fontWeight="bold">
              우애 실천하기
            </text>
          </svg>
        </div>
      </div>

      {/* 실천 방법 카드들 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 max-w-6xl mx-auto">
        {bodyParts.map((part) => (
          <div 
            key={part.id}
            className="bg-white rounded-lg p-4 shadow-lg border-t-4"
            style={{ borderTopColor: part.color }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                style={{ backgroundColor: part.color }}
              >
                {part.name === '손' ? '✋' : part.name === '머리' ? '🧠' : part.name === '입' ? '👄' : part.name === '마음' ? '💖' : '👣'}
              </div>
              <h3 className="font-bold text-xl" style={{ color: part.color }}>
                {part.name}으로 실천하기
              </h3>
            </div>
            
            <ul className="space-y-2">
              {part.actions.map((action, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-gray-400 text-sm mt-1">💫</span>
                  <span className="text-gray-700 text-sm leading-relaxed">
                    {action}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* 다짐 섹션 */}
      <div className="text-center mt-8">
        <div className="bg-white rounded-lg p-6 shadow-md inline-block max-w-2xl">
          <h3 className="text-xl font-bold text-orange-600 mb-4">
            ✨ 나의 우애 실천 다짐
          </h3>
          <div className="bg-orange-50 p-4 rounded-lg">
            <p className="text-gray-700 text-sm mb-3">
              형제자매와 사이좋게 지내기 위해 내가 실천할 수 있는 일:
            </p>
            <div className="border-2 border-dashed border-orange-300 p-4 rounded-lg bg-white min-h-20">
              <p className="text-gray-400 text-sm italic">
                여기에 나만의 실천 다짐을 써보세요! 📝
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-4">
            <div className="text-center">
              <p className="text-sm text-gray-600">실천 정도</p>
              <div className="flex gap-1 mt-1">
                <span className="text-2xl">😊</span>
                <span className="text-2xl">😐</span>
                <span className="text-2xl">😢</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyHappinessGuide;