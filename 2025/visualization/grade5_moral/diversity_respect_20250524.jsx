import React, { useState, useEffect } from 'react';

const DiversityRespect = () => {
  const [activeElement, setActiveElement] = useState(null);
  const [showMessage, setShowMessage] = useState(false);

  // 다양성을 나타내는 요소들
  const diversityElements = [
    { id: 1, shape: 'circle', color: '#2E86AB', size: 80, x: 150, y: 180, trait: '창의적 사고', name: '지민' },
    { id: 2, shape: 'triangle', color: '#A23B72', size: 70, x: 280, y: 120, trait: '논리적 분석', name: '수현' },
    { id: 3, shape: 'square', color: '#F18F01', size: 75, x: 410, y: 200, trait: '따뜻한 마음', name: '민준' },
    { id: 4, shape: 'diamond', color: '#C73E1D', size: 65, x: 320, y: 280, trait: '리더십', name: '서연' },
    { id: 5, shape: 'hexagon', color: '#1B998B', size: 85, x: 180, y: 320, trait: '예술적 감각', name: '도윤' },
    { id: 6, shape: 'star', color: '#4C956C', size: 70, x: 450, y: 120, trait: '운동능력', name: '하은' }
  ];

  const renderShape = (element) => {
    const { shape, color, size, x, y } = element;
    const isActive = activeElement === element.id;
    const scale = isActive ? 1.2 : 1;
    
    switch (shape) {
      case 'circle':
        return (
          <circle
            cx={x}
            cy={y}
            r={size / 2}
            fill={color}
            transform={`scale(${scale})`}
            transformOrigin={`${x} ${y}`}
            style={{ transition: 'all 0.3s ease' }}
          />
        );
      case 'triangle':
        const points = `${x},${y - size/2} ${x - size/2},${y + size/2} ${x + size/2},${y + size/2}`;
        return (
          <polygon
            points={points}
            fill={color}
            transform={`scale(${scale})`}
            transformOrigin={`${x} ${y}`}
            style={{ transition: 'all 0.3s ease' }}
          />
        );
      case 'square':
        return (
          <rect
            x={x - size/2}
            y={y - size/2}
            width={size}
            height={size}
            fill={color}
            transform={`scale(${scale})`}
            transformOrigin={`${x} ${y}`}
            style={{ transition: 'all 0.3s ease' }}
          />
        );
      case 'diamond':
        const diamondPoints = `${x},${y - size/2} ${x + size/2},${y} ${x},${y + size/2} ${x - size/2},${y}`;
        return (
          <polygon
            points={diamondPoints}
            fill={color}
            transform={`scale(${scale})`}
            transformOrigin={`${x} ${y}`}
            style={{ transition: 'all 0.3s ease' }}
          />
        );
      case 'hexagon':
        const hexPoints = [];
        for (let i = 0; i < 6; i++) {
          const angle = (Math.PI / 3) * i;
          const hexX = x + (size/2) * Math.cos(angle);
          const hexY = y + (size/2) * Math.sin(angle);
          hexPoints.push(`${hexX},${hexY}`);
        }
        return (
          <polygon
            points={hexPoints.join(' ')}
            fill={color}
            transform={`scale(${scale})`}
            transformOrigin={`${x} ${y}`}
            style={{ transition: 'all 0.3s ease' }}
          />
        );
      case 'star':
        const starPoints = [];
        for (let i = 0; i < 10; i++) {
          const radius = i % 2 === 0 ? size/2 : size/4;
          const angle = (Math.PI / 5) * i;
          const starX = x + radius * Math.cos(angle - Math.PI/2);
          const starY = y + radius * Math.sin(angle - Math.PI/2);
          starPoints.push(`${starX},${starY}`);
        }
        return (
          <polygon
            points={starPoints.join(' ')}
            fill={color}
            transform={`scale(${scale})`}
            transformOrigin={`${x} ${y}`}
            style={{ transition: 'all 0.3s ease' }}
          />
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg">
      {/* 제목 */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">다양성 존중</h1>
        <p className="text-lg text-slate-600">차이를 인정하고 받아들이기</p>
        <div className="flex justify-center items-center mt-2 space-x-2">
          <span className="text-2xl">🔗</span>
          <span className="text-2xl">⚡</span>
          <span className="text-2xl">🌊</span>
          <span className="text-2xl">🗝️</span>
        </div>
      </div>

      {/* 메인 시각화 */}
      <div className="relative">
        <svg width="600" height="450" className="mx-auto border-2 border-teal-200 rounded-lg bg-white shadow-lg">
          {/* 연결선들 - 서로 다른 요소들이 연결되어 있음을 표현 */}
          <defs>
            <linearGradient id="connectionGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: '#2E86AB', stopOpacity: 0.3}} />
              <stop offset="100%" style={{stopColor: '#1B998B', stopOpacity: 0.3}} />
            </linearGradient>
          </defs>
          
          {diversityElements.map((element, index) => {
            const nextElement = diversityElements[(index + 1) % diversityElements.length];
            return (
              <line
                key={`connection-${index}`}
                x1={element.x}
                y1={element.y}
                x2={nextElement.x}
                y2={nextElement.y}
                stroke="url(#connectionGrad)"
                strokeWidth="2"
                strokeDasharray="5,5"
                style={{
                  animation: showMessage ? 'dashMove 3s linear infinite' : 'none',
                }}
              />
            );
          })}

          {/* 중앙 메시지 */}
          {showMessage && (
            <g>
              <circle
                cx="300"
                cy="225"
                r="60"
                fill="rgba(46, 134, 171, 0.1)"
                stroke="#2E86AB"
                strokeWidth="2"
                strokeDasharray="10,5"
                style={{ animation: 'pulse 2s ease-in-out infinite' }}
              />
              <text
                x="300"
                y="220"
                textAnchor="middle"
                className="text-lg font-bold fill-slate-700"
              >
                함께할 때
              </text>
              <text
                x="300"
                y="240"
                textAnchor="middle"
                className="text-lg font-bold fill-slate-700"
              >
                더 강해져요
              </text>
            </g>
          )}

          {/* 다양성 요소들 */}
          {diversityElements.map((element) => (
            <g
              key={element.id}
              style={{ cursor: 'pointer' }}
              onMouseEnter={() => setActiveElement(element.id)}
              onMouseLeave={() => setActiveElement(null)}
            >
              {renderShape(element)}
              
              {/* 이름 라벨 */}
              <text
                x={element.x}
                y={element.y + element.size/2 + 20}
                textAnchor="middle"
                className="text-sm font-semibold fill-slate-600"
              >
                {element.name}
              </text>
            </g>
          ))}
        </svg>

        {/* 활성 요소 정보 */}
        {activeElement && (
          <div className="mt-4 p-4 bg-white rounded-lg shadow-md border-l-4 border-teal-500">
            <div className="flex items-center space-x-3">
              <div 
                className="w-8 h-8 rounded-full"
                style={{ backgroundColor: diversityElements.find(e => e.id === activeElement)?.color }}
              ></div>
              <div>
                <h3 className="font-bold text-slate-800">
                  {diversityElements.find(e => e.id === activeElement)?.name}
                </h3>
                <p className="text-slate-600">
                  특별한 능력: {diversityElements.find(e => e.id === activeElement)?.trait}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 학습 메시지 */}
      <div className="mt-8 space-y-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-slate-800 mb-3 flex items-center">
            <span className="mr-2">🌊</span>
            다양성이 만드는 아름다움
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-slate-700">
            <div>
              <h3 className="font-semibold mb-2">🔗 서로 다른 것의 가치</h3>
              <p className="text-sm">모든 사람은 각자 특별한 능력과 개성을 가지고 있어요</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">⚡ 함께할 때의 힘</h3>
              <p className="text-sm">서로 다른 능력이 만나면 더 큰 힘을 발휘할 수 있어요</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-100 to-teal-100 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-slate-800 mb-3 flex items-center">
            <span className="mr-2">🗝️</span>
            다양성 존중하기
          </h2>
          <div className="space-y-2 text-slate-700">
            <p>• 친구의 다른 점을 비교하지 않고 인정해주기</p>
            <p>• 나와 다른 의견도 귀기울여 들어보기</p>
            <p>• 서로의 장점을 찾아서 칭찬하기</p>
            <p>• 차이를 통해 새로운 것을 배우려는 마음 갖기</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes dashMove {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 20; }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default DiversityRespect;