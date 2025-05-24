import React from 'react';
import { grade2PlayTheme } from '../styles/colors.js';

/**
 * 2학년 놀이 템플릿 - 친근한 동물 캐릭터 컴포넌트
 * 특징: 둥근 배경, 큰 이모지, 아래 이름 표시
 */
export const AnimalCharacter = ({ 
  emoji, 
  name, 
  x = 100, 
  y = 150, 
  size = 35,
  bgColor = '#4ECDC4'
}) => (
  <g>
    <circle 
      cx={x} 
      cy={y} 
      r={size} 
      fill="white" 
      stroke={bgColor} 
      strokeWidth="3"
    />
    <text 
      x={x} 
      y={y + 10} 
      textAnchor="middle" 
      fontSize="24"
    >
      {emoji}
    </text>
    <text 
      x={x} 
      y={y + size + 25} 
      textAnchor="middle" 
      fontSize="16" 
      fontWeight="bold"
      fill="#2D3436"
    >
      {name}
    </text>
  </g>
);

/**
 * 활동적인 배경 요소 - 태양, 구름, 언덕
 */
export const PlayfulBackground = ({ width = 800, height = 300 }) => (
  <g>
    {/* 배경 언덕 */}
    <path 
      d={`M0,${height-50} Q${width/4},${height-100} ${width/2},${height-80} T${width},${height-60} L${width},${height} L0,${height} Z`} 
      fill="#A8E6CF" 
      opacity="0.3" 
    />
    <path 
      d={`M0,${height-30} Q${width/3},${height-70} ${width*2/3},${height-40} T${width},${height-50} L${width},${height} L0,${height} Z`} 
      fill="#FFE66D" 
      opacity="0.3" 
    />
    
    {/* 태양 */}
    <circle cx={width-100} cy="80" r="40" fill="#FFE66D" stroke="#FFA726" strokeWidth="4" />
    <g transform={`translate(${width-100}, 80)`}>
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
  </g>
);

/**
 * 활동 규칙 카드 컴포넌트
 */
export const PlayRuleCard = ({ rule, index }) => (
  <div 
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
);

/**
 * 체크박스 활동 영역
 */
export const ActivityCheckbox = ({ items, title }) => (
  <div className="bg-yellow-50 rounded-2xl p-6">
    <h3 className="text-2xl font-bold text-orange-600 mb-4">{title} ✅</h3>
    <div className="flex justify-center gap-8">
      {items.map((item, index) => (
        <div key={index} className="text-center">
          <div className="w-12 h-12 border-4 border-gray-300 rounded-lg mb-2"></div>
          <p className="text-sm font-medium">{item.title}</p>
        </div>
      ))}
    </div>
  </div>
);

/**
 * 2학년 놀이용 제목 헤더
 */
export const Grade2Header = ({ title, subtitle, icon = "🎈" }) => (
  <div className="text-center mb-8">
    <div className="inline-block bg-white rounded-full p-4 shadow-lg mb-4">
      <span className="text-6xl">{icon}</span>
    </div>
    <h1 className="text-5xl font-bold text-pink-600 mb-4 drop-shadow-lg">
      {title}
    </h1>
    <p className="text-2xl text-blue-600 font-semibold">
      {subtitle} 🌈
    </p>
  </div>
);