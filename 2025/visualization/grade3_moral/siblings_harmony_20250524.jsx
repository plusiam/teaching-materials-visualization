import React from 'react';

/**
 * 3학년 도덕 템플릿 - 우애를 지켜요 (기존 자료 정리)
 * 학년 특성: 스토리텔링 중심, 구체적 상황과 감정 표현 중시
 * 디자인 특징: 다양하고 밝은 색상, 캐릭터 중심, 이야기 요소
 * 색상 팔레트: #FF6B9D, #4ECDC4, #FFD93D, #A8E6CF
 */
const Grade3SiblingsTemplate = () => {
  const siblings = [
    {
      position: '첫째',
      color: '#FF6B9D',
      x: 200,
      y: 150,
      concerns: [
        '동생들 잘 보살피라고 하심',
        '모범을 보이라고 하심', 
        '부모님이 동생들을 더 예뻐하심',
        '스트레스를 받아요'
      ]
    },
    {
      position: '둘째', 
      color: '#4ECDC4',
      x: 600,
      y: 150,
      concerns: [
        '형 말은 잘 들으라고 하심',
        '동생에게는 늘 양보하라고 하심',
        '내가 피해를 제일 많이 봐요',
        '중간에서 항상 힘들어요'
      ]
    },
    {
      position: '셋째',
      color: '#45B7D1', 
      x: 400,
      y: 400,
      concerns: [
        '항상 형들 물건을 물려받아요',
        '심부름을 시킬 동생도 없어요',
        '어린아이로 취급받아서 화나요',
        '나도 이만하면 다 컸거든요'
      ]
    }
  ];

  return (
    <div className="w-full h-screen bg-gradient-to-br from-yellow-50 to-pink-50 p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          아기 돼지 삼형제의 고민
        </h1>
        <p className="text-lg text-gray-600">
          각자의 입장에서 바라본 형제자매 관계
        </p>
      </div>
      
      <svg viewBox="0 0 800 500" className="w-full h-96">
        {/* 연결선 */}
        <path 
          d="M 200 150 Q 400 100 600 150" 
          stroke="#E5E7EB" 
          strokeWidth="3" 
          fill="none"
          strokeDasharray="5,5"
        />
        <path 
          d="M 200 150 Q 300 275 400 400" 
          stroke="#E5E7EB" 
          strokeWidth="3" 
          fill="none"
          strokeDasharray="5,5"
        />
        <path 
          d="M 600 150 Q 500 275 400 400" 
          stroke="#E5E7EB" 
          strokeWidth="3" 
          fill="none"
          strokeDasharray="5,5"
        />
        
        {siblings.map((sibling, index) => (
          <g key={index}>
            {/* 돼지 얼굴 원 */}
            <circle
              cx={sibling.x}
              cy={sibling.y}
              r="40"
              fill={sibling.color}
              stroke="white"
              strokeWidth="3"
            />
            
            {/* 돼지 코 */}
            <ellipse
              cx={sibling.x}
              cy={sibling.y + 5}
              rx="12"
              ry="8"
              fill="white"
              opacity="0.8"
            />
            <circle cx={sibling.x - 4} cy={sibling.y + 5} r="2" fill={sibling.color} />
            <circle cx={sibling.x + 4} cy={sibling.y + 5} r="2" fill={sibling.color} />
            
            {/* 돼지 귀 */}
            <ellipse
              cx={sibling.x - 25}
              cy={sibling.y - 25}
              rx="8"
              ry="15"
              fill={sibling.color}
              transform={`rotate(-30 ${sibling.x - 25} ${sibling.y - 25})`}
            />
            <ellipse
              cx={sibling.x + 25}
              cy={sibling.y - 25}
              rx="8"
              ry="15"
              fill={sibling.color}
              transform={`rotate(30 ${sibling.x + 25} ${sibling.y - 25})`}
            />
            
            {/* 눈 */}
            <circle cx={sibling.x - 12} cy={sibling.y - 8} r="4" fill="white" />
            <circle cx={sibling.x + 12} cy={sibling.y - 8} r="4" fill="white" />
            <circle cx={sibling.x - 12} cy={sibling.y - 8} r="2" fill="black" />
            <circle cx={sibling.x + 12} cy={sibling.y - 8} r="2" fill="black" />
            
            {/* 위치 텍스트 */}
            <text
              x={sibling.x}
              y={sibling.y + 60}
              textAnchor="middle"
              className="font-bold text-lg"
              fill={sibling.color}
            >
              {sibling.position}
            </text>
          </g>
        ))}
      </svg>
      
      {/* 고민 내용 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {siblings.map((sibling, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg p-4 shadow-lg border-t-4"
            style={{ borderTopColor: sibling.color }}
          >
            <h3 className="font-bold text-xl mb-3 text-center" style={{ color: sibling.color }}>
              {sibling.position}의 고민
            </h3>
            <ul className="space-y-2">
              {sibling.concerns.map((concern, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-700 text-sm leading-relaxed">
                    {concern}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <div className="bg-white rounded-lg p-4 shadow-md inline-block">
          <p className="text-gray-700 font-medium">
            💭 모두가 각자의 어려움을 가지고 있어요. 
            <br />
            서로의 마음을 이해하고 배려하는 것이 중요해요!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Grade3SiblingsTemplate;