import React from 'react';
import { grade5MoralTheme } from '../styles/colors.js';

/**
 * 5학년 도덕 템플릿 - 개념적이고 성찰적 컴포넌트
 * 특징: 추상적 개념 시각화, 개념 간 관계 표현, 가치 탐구 중심
 */

/**
 * 개념적 헤더 - 5학년용
 */
export const ConceptualHeader = ({ title, subtitle, mainConcept = "가치탐구" }) => (
  <div className="text-center mb-12 relative">
    {/* 배경 패턴 */}
    <div className="absolute inset-0 opacity-10">
      <svg width="100%" height="120" viewBox="0 0 800 120">
        <defs>
          <pattern id="conceptPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="2" fill="#0891B2" opacity="0.3"/>
            <line x1="10" y1="20" x2="30" y2="20" stroke="#1E3A8A" strokeWidth="1" opacity="0.2"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#conceptPattern)"/>
      </svg>
    </div>
    
    <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-2xl p-8 mx-auto max-w-2xl">
      <div className="inline-flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center">
          <span className="text-white text-xl font-bold">🔗</span>
        </div>
        <span className="text-sm font-medium text-blue-600 tracking-wide">{mainConcept}</span>
      </div>
      
      <h1 className="text-3xl font-semibold text-slate-800 mb-3 tracking-wide">
        {title}
      </h1>
      <p className="text-lg text-slate-600 leading-relaxed">
        {subtitle}
      </p>
    </div>
  </div>
);

/**
 * 개념 연결 맵 - 개념 간 관계를 시각화
 */
export const ConceptMap = ({ concepts, connections = [] }) => (
  <div className="relative bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 mb-8">
    <h3 className="text-xl font-semibold text-slate-800 mb-6 text-center">
      🌊 개념 연결 지도
    </h3>
    
    <svg viewBox="0 0 600 400" className="w-full h-80">
      {/* 연결선들 */}
      {connections.map((conn, index) => (
        <line 
          key={index}
          x1={conn.from.x} y1={conn.from.y}
          x2={conn.to.x} y2={conn.to.y}
          stroke="#0891B2" 
          strokeWidth="2"
          strokeDasharray="5,5"
          opacity="0.6"
        />
      ))}
      
      {/* 개념 노드들 */}
      {concepts.map((concept, index) => (
        <g key={index}>
          <circle
            cx={concept.x} cy={concept.y} r="40"
            fill="white" 
            stroke={concept.color || "#1E3A8A"}
            strokeWidth="3"
            className="drop-shadow-md"
          />
          <text 
            x={concept.x} y={concept.y-5} 
            textAnchor="middle" 
            fontSize="24"
          >
            {concept.icon}
          </text>
          <text 
            x={concept.x} y={concept.y+25} 
            textAnchor="middle" 
            fontSize="12" 
            fontWeight="bold"
            fill={concept.color || "#1E3A8A"}
          >
            {concept.name}
          </text>
        </g>
      ))}
    </svg>
  </div>
);

/**
 * 가치 탐구 카드 - 추상적 가치를 구체적으로 탐구
 */
export const ValueExplorationCard = ({ value, aspects, reflection }) => (
  <div className="bg-white rounded-xl p-6 shadow-md border border-blue-100 hover:shadow-lg transition-all duration-500">
    <div className="flex items-center gap-4 mb-4">
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-teal-400 flex items-center justify-center">
        <span className="text-white text-2xl">{value.icon}</span>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-slate-800">{value.name}</h3>
        <p className="text-sm text-slate-600">{value.description}</p>
      </div>
    </div>
    
    {/* 가치의 다양한 측면 */}
    <div className="grid grid-cols-2 gap-3 mb-4">
      {aspects.map((aspect, index) => (
        <div key={index} className="bg-blue-50 rounded-lg p-3">
          <h4 className="text-sm font-medium text-blue-800 mb-1">{aspect.title}</h4>
          <p className="text-xs text-blue-700">{aspect.example}</p>
        </div>
      ))}
    </div>
    
    {/* 성찰 질문 */}
    <div className="bg-teal-50 rounded-lg p-4 border-l-4 border-teal-400">
      <h4 className="text-sm font-semibold text-teal-800 mb-2">🤔 깊이 생각해보기</h4>
      <p className="text-sm text-teal-700 leading-relaxed">{reflection}</p>
    </div>
  </div>
);

/**
 * 단계적 사고 프로세스 - 복잡한 개념을 단계별로 이해
 */
export const ThinkingProcess = ({ steps, title = "사고 과정" }) => (
  <div className="bg-white rounded-xl p-6 shadow-md">
    <h3 className="text-lg font-semibold text-slate-800 mb-6 text-center">
      ⚡ {title}
    </h3>
    
    <div className="relative">
      {/* 연결 화살표 */}
      <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-gradient-to-b from-blue-300 to-teal-300"></div>
      
      {steps.map((step, index) => (
        <div key={index} className="relative flex items-start gap-4 mb-6 last:mb-0">
          {/* 단계 번호 */}
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center text-white font-bold relative z-10">
            {step.icon || (index + 1)}
          </div>
          
          {/* 단계 내용 */}
          <div className="flex-1 bg-slate-50 rounded-lg p-4">
            <h4 className="font-semibold text-slate-800 mb-2">{step.title}</h4>
            <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
            
            {step.example && (
              <div className="mt-3 p-3 bg-blue-50 rounded border-l-3 border-blue-400">
                <p className="text-xs text-blue-700">
                  <strong>예시:</strong> {step.example}
                </p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

/**
 * 관점 비교 매트릭스 - 다양한 관점을 체계적으로 비교
 */
export const PerspectiveMatrix = ({ issue, perspectives }) => (
  <div className="bg-white rounded-xl p-6 shadow-md">
    <h3 className="text-lg font-semibold text-slate-800 mb-4 text-center">
      🗝️ 다양한 관점으로 살펴보기: {issue}
    </h3>
    
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-blue-50">
            <th className="text-left p-3 rounded-tl-lg text-sm font-semibold text-blue-800">관점</th>
            <th className="text-left p-3 text-sm font-semibold text-blue-800">생각</th>
            <th className="text-left p-3 text-sm font-semibold text-blue-800">이유</th>
            <th className="text-left p-3 rounded-tr-lg text-sm font-semibold text-blue-800">결과</th>
          </tr>
        </thead>
        <tbody>
          {perspectives.map((perspective, index) => (
            <tr key={index} className="border-b border-blue-100">
              <td className="p-3">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{perspective.icon}</span>
                  <span className="font-medium text-slate-700">{perspective.role}</span>
                </div>
              </td>
              <td className="p-3 text-sm text-slate-600">{perspective.thought}</td>
              <td className="p-3 text-sm text-slate-600">{perspective.reason}</td>
              <td className="p-3 text-sm text-slate-600">{perspective.outcome}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

/**
 * 개념 계층 구조 - 추상적 개념을 계층적으로 표현
 */
export const ConceptHierarchy = ({ rootConcept, levels }) => (
  <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6">
    <h3 className="text-lg font-semibold text-slate-800 mb-6 text-center">
      🎪 개념의 계층구조
    </h3>
    
    <div className="space-y-6">
      {/* 최상위 개념 */}
      <div className="text-center">
        <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-2xl shadow-lg">
          <span className="text-lg font-bold">{rootConcept}</span>
        </div>
      </div>
      
      {/* 계층별 개념들 */}
      {levels.map((level, levelIndex) => (
        <div key={levelIndex} className="relative">
          {/* 연결선 */}
          <div className="absolute top-0 left-1/2 w-0.5 h-6 bg-blue-300 transform -translate-x-0.5 -translate-y-6"></div>
          
          <div className="flex justify-center gap-4 flex-wrap">
            {level.concepts.map((concept, conceptIndex) => (
              <div key={conceptIndex} className="relative">
                {/* 개념 박스 */}
                <div 
                  className="px-4 py-2 rounded-lg text-sm font-medium shadow-md"
                  style={{ 
                    backgroundColor: level.color || '#E0F2FE',
                    color: level.textColor || '#0891B2'
                  }}
                >
                  {concept.icon && <span className="mr-2">{concept.icon}</span>}
                  {concept.name}
                </div>
                
                {/* 하위 연결선 */}
                {levelIndex < levels.length - 1 && (
                  <div className="absolute top-full left-1/2 w-0.5 h-6 bg-blue-300 transform -translate-x-0.5"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

/**
 * 성찰 일기 템플릿 - 깊이 있는 자기 성찰 유도
 */
export const ReflectionJournal = ({ prompts, date }) => (
  <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-400">
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-lg font-semibold text-slate-800">🔮 성찰 일기</h3>
      <span className="text-sm text-slate-500">{date || new Date().toLocaleDateString('ko-KR')}</span>
    </div>
    
    <div className="space-y-6">
      {prompts.map((prompt, index) => (
        <div key={index} className="space-y-3">
          <h4 className="font-medium text-slate-700 flex items-center gap-2">
            <span className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-bold">
              {index + 1}
            </span>
            {prompt.question}
          </h4>
          
          <div className="bg-purple-50 rounded-lg p-4 min-h-20">
            <p className="text-sm text-purple-600 italic mb-2">{prompt.hint}</p>
            <div className="space-y-2">
              {[...Array(3)].map((_, lineIndex) => (
                <div key={lineIndex} className="border-b border-purple-200 h-6"></div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
    
    <div className="mt-6 p-4 bg-teal-50 rounded-lg">
      <h4 className="font-medium text-teal-800 mb-2">💎 오늘의 깨달음</h4>
      <div className="space-y-2">
        {[...Array(2)].map((_, index) => (
          <div key={index} className="border-b border-teal-200 h-6"></div>
        ))}
      </div>
    </div>
  </div>
);

/**
 * 섹션 제목 (5학년용)
 */
export const Grade5SectionTitle = ({ title, subtitle, icon = "🔗" }) => (
  <div className="text-center mb-8">
    <div className="inline-flex items-center gap-3 mb-3">
      <span className="text-2xl">{icon}</span>
      <h2 className="text-xl font-semibold text-slate-800 tracking-wide">{title}</h2>
    </div>
    {subtitle && (
      <p className="text-slate-600 max-w-2xl mx-auto">{subtitle}</p>
    )}
  </div>
);