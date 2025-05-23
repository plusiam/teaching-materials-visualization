import React from 'react';

/**
 * 형제자매 갈등 상황 해결 플로우차트
 * 초등 3학년 도덕 3단원 "우애를 지켜요" 시각화 자료
 * 4가지 갈등 상황과 각각의 해결 방법을 제시
 */
const ConflictResolutionFlowchart = () => {
  const conflictSituations = [
    {
      id: 1,
      title: "물건 망가뜨림",
      description: "형이 가장 아끼는 물건을 동생이 망가뜨린 상황",
      color: "#FF6B6B",
      x: 150,
      y: 120,
      solutions: [
        "진심으로 사과하기",
        "새 것으로 바꿔주겠다고 약속하기",
        "앞으로 조심하겠다고 다짐하기"
      ]
    },
    {
      id: 2,
      title: "컴퓨터 차지 다툼",
      description: "누나와 동생이 서로 컴퓨터를 차지하겠다고 다투는 상황",
      color: "#4ECDC4",
      x: 550,
      y: 120,
      solutions: [
        "시간을 정해서 번갈아 사용하기",
        "가위바위보로 순서 정하기",
        "함께 할 수 있는 게임 찾기"
      ]
    },
    {
      id: 3,
      title: "심부름 미루기",
      description: "언니와 동생이 서로 심부름을 미루는 상황",
      color: "#45B7D1",
      x: 150,
      y: 420,
      solutions: [
        "가위바위보로 정하기",
        "번갈아 가며 하기",
        "함께 심부름 다녀오기"
      ]
    },
    {
      id: 4,
      title: "나만의 갈등",
      description: "내가 겪은 갈등 상황을 생각해보고 해결책 찾기",
      color: "#96CEB4",
      x: 550,
      y: 420,
      solutions: [
        "서로의 마음 이야기하기",
        "부모님께 도움 요청하기",
        "양보하고 배려하기"
      ]
    }
  ];

  const centralTheme = {
    x: 350,
    y: 270,
    title: "우애 있는\n해결 방법"
  };

  return (
    <div className="w-full h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          형제자매 갈등 상황과 해결 방법
        </h1>
        <p className="text-lg text-gray-600">
          다양한 갈등 상황에서 우애 있게 지내는 방법을 알아봐요
        </p>
      </div>

      <svg viewBox="0 0 700 540" className="w-full h-96">
        {/* 중앙 원 */}
        <circle
          cx={centralTheme.x}
          cy={centralTheme.y}
          r="60"
          fill="#8B5CF6"
          stroke="white"
          strokeWidth="4"
        />
        <text
          x={centralTheme.x}
          y={centralTheme.y - 5}
          textAnchor="middle"
          fill="white"
          fontSize="14"
          fontWeight="bold"
        >
          우애 있는
        </text>
        <text
          x={centralTheme.x}
          y={centralTheme.y + 10}
          textAnchor="middle"
          fill="white"
          fontSize="14"
          fontWeight="bold"
        >
          해결 방법
        </text>

        {/* 연결선과 상황 원들 */}
        {conflictSituations.map((situation, index) => (
          <g key={situation.id}>
            {/* 중앙에서 각 상황으로 향하는 화살표 */}
            <defs>
              <marker
                id={`arrowhead-${situation.id}`}
                markerWidth="10"
                markerHeight="7"
                refX="0"
                refY="3.5"
                orient="auto"
              >
                <polygon
                  points="0 0, 10 3.5, 0 7"
                  fill={situation.color}
                />
              </marker>
            </defs>
            
            <line
              x1={centralTheme.x + (situation.x < centralTheme.x ? -45 : 45)}
              y1={centralTheme.y + (situation.y < centralTheme.y ? -45 : 45)}
              x2={situation.x + (situation.x < centralTheme.x ? 45 : -45)}
              y2={situation.y + (situation.y < centralTheme.y ? 45 : -45)}
              stroke={situation.color}
              strokeWidth="3"
              markerEnd={`url(#arrowhead-${situation.id})`}
            />

            {/* 상황 원 */}
            <circle
              cx={situation.x}
              cy={situation.y}
              r="45"
              fill={situation.color}
              stroke="white"
              strokeWidth="3"
            />
            
            {/* 상황 번호 */}
            <circle
              cx={situation.x}
              cy={situation.y - 25}
              r="15"
              fill="white"
              stroke={situation.color}
              strokeWidth="2"
            />
            <text
              x={situation.x}
              y={situation.y - 20}
              textAnchor="middle"
              fill={situation.color}
              fontSize="12"
              fontWeight="bold"
            >
              {situation.id}
            </text>

            {/* 상황 제목 */}
            <text
              x={situation.x}
              y={situation.y + 5}
              textAnchor="middle"
              fill="white"
              fontSize="12"
              fontWeight="bold"
            >
              {situation.title}
            </text>
          </g>
        ))}
      </svg>

      {/* 상황별 해결책 카드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {conflictSituations.map((situation, index) => (
          <div 
            key={situation.id}
            className="bg-white rounded-lg p-4 shadow-lg border-l-4"
            style={{ borderLeftColor: situation.color }}
          >
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                style={{ backgroundColor: situation.color }}
              >
                {situation.id}
              </div>
              <h3 className="font-bold text-lg" style={{ color: situation.color }}>
                {situation.title}
              </h3>
            </div>
            
            <p className="text-gray-600 text-sm mb-3 leading-relaxed">
              {situation.description}
            </p>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-700 text-sm">해결 방법:</h4>
              <ul className="space-y-1">
                {situation.solutions.map((solution, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-gray-400 text-xs mt-1">✓</span>
                    <span className="text-gray-700 text-xs leading-relaxed">
                      {solution}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* 실천 포인트 */}
      <div className="text-center mt-8">
        <div className="bg-white rounded-lg p-6 shadow-md inline-block max-w-2xl">
          <h3 className="text-xl font-bold text-purple-600 mb-3">
            🌟 우애 있게 지내는 핵심 포인트
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-purple-50 p-3 rounded-lg">
              <span className="font-bold text-purple-700">💭 이해하기</span>
              <p className="text-gray-700 mt-1">상대방의 마음과 입장을 생각해보기</p>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg">
              <span className="font-bold text-purple-700">🤝 대화하기</span>
              <p className="text-gray-700 mt-1">서로의 생각을 차근차근 나누기</p>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg">
              <span className="font-bold text-purple-700">❤️ 배려하기</span>
              <p className="text-gray-700 mt-1">양보하고 도움을 주고받기</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConflictResolutionFlowchart;