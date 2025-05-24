import React from 'react';
import { grade4MoralTheme } from '../styles/colors.js';

/**
 * 4학년 도덕 템플릿 - 논리적 사고 과정 컴포넌트들
 */

/**
 * 단계별 사고 흐름 표시기
 */
export const ThinkingFlowStep = ({ 
  stepNumber, 
  title, 
  description, 
  color = "#8B5CF6",
  isActive = false,
  isCompleted = false 
}) => (
  <div className="flex items-start space-x-4">
    {/* 단계 번호 */}
    <div 
      className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm ${
        isActive ? 'ring-4 ring-purple-200' : ''
      }`}
      style={{ backgroundColor: isCompleted ? '#10B981' : color }}
    >
      {isCompleted ? '✓' : stepNumber}
    </div>
    
    {/* 단계 내용 */}
    <div className="flex-1">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

/**
 * 논리적 선택 카드
 */
export const ChoiceCard = ({ 
  choice, 
  consequence, 
  isCorrect, 
  reasoning,
  icon,
  selected = false 
}) => (
  <div className={`
    border-2 rounded-lg p-6 cursor-pointer transition-all
    ${selected ? 'border-purple-500 bg-purple-50' : 'border-gray-200 hover:border-purple-300'}
    ${isCorrect === true ? 'border-green-500 bg-green-50' : ''}
    ${isCorrect === false ? 'border-red-500 bg-red-50' : ''}
  `}>
    <div className="flex items-start space-x-4">
      {icon && (
        <div className="text-3xl flex-shrink-0">
          {icon}
        </div>
      )}
      
      <div className="flex-1">
        <h4 className="text-lg font-medium text-gray-800 mb-3">
          {choice}
        </h4>
        
        <div className="space-y-3">
          <div className="bg-gray-50 rounded p-3">
            <p className="text-sm font-medium text-gray-700 mb-1">결과 예상:</p>
            <p className="text-sm text-gray-600">{consequence}</p>
          </div>
          
          {reasoning && (
            <div className="bg-blue-50 rounded p-3">
              <p className="text-sm font-medium text-blue-700 mb-1">생각해보기:</p>
              <p className="text-sm text-blue-600">{reasoning}</p>
            </div>
          )}
          
          {isCorrect !== undefined && (
            <div className={`rounded p-3 ${
              isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}>
              <p className="text-sm font-medium">
                {isCorrect ? '👍 좋은 선택입니다!' : '🤔 다시 생각해보세요'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

/**
 * 상황 제시 카드
 */
export const SituationCard = ({ 
  title, 
  scenario, 
  characters, 
  conflict,
  illustration 
}) => (
  <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
    <div className="text-center mb-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
      {illustration && (
        <div className="bg-gray-100 rounded-lg p-6 mb-4">
          <div className="text-6xl">{illustration}</div>
        </div>
      )}
    </div>
    
    <div className="space-y-6">
      {/* 상황 설명 */}
      <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
        <h3 className="font-semibold text-blue-800 mb-2">📖 상황</h3>
        <p className="text-blue-700 leading-relaxed">{scenario}</p>
      </div>
      
      {/* 등장인물 */}
      {characters && (
        <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400">
          <h3 className="font-semibold text-green-800 mb-2">👥 등장인물</h3>
          <div className="grid grid-cols-2 gap-3">
            {characters.map((character, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span className="text-lg">{character.emoji}</span>
                <span className="text-sm text-green-700">{character.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* 갈등 요소 */}
      {conflict && (
        <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-400">
          <h3 className="font-semibold text-orange-800 mb-2">⚡ 문제 상황</h3>
          <p className="text-orange-700 leading-relaxed">{conflict}</p>
        </div>
      )}
    </div>
  </div>
);

/**
 * 논리적 분석 차트
 */
export const AnalysisChart = ({ 
  options,
  criteria = ['옳고 그름', '결과', '감정', '관계'],
  title = "선택지 분석하기" 
}) => (
  <div className="bg-white rounded-lg p-6 border border-gray-200">
    <h3 className="text-lg font-semibold text-gray-800 mb-6 text-center">{title}</h3>
    
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b-2 border-gray-200">
            <th className="text-left p-3 font-semibold text-gray-700">선택지</th>
            {criteria.map((criterion, index) => (
              <th key={index} className="text-center p-3 font-semibold text-gray-700">
                {criterion}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {options.map((option, index) => (
            <tr key={index} className="border-b border-gray-100">
              <td className="p-3 font-medium text-gray-800">{option.choice}</td>
              {option.analysis.map((score, scoreIndex) => (
                <td key={scoreIndex} className="text-center p-3">
                  <div className="flex justify-center">
                    {[...Array(3)].map((_, starIndex) => (
                      <span 
                        key={starIndex}
                        className={`text-lg ${
                          starIndex < score ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      >
                        ⭐
                      </span>
                    ))}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

/**
 * 원인-결과 다이어그램
 */
export const CauseEffectDiagram = ({ 
  situation, 
  causes, 
  effects,
  title = "원인과 결과 분석" 
}) => (
  <div className="bg-white rounded-lg p-6 border border-gray-200">
    <h3 className="text-lg font-semibold text-gray-800 mb-6 text-center">{title}</h3>
    
    <div className="flex items-center justify-between">
      {/* 원인들 */}
      <div className="flex-1 space-y-3">
        <h4 className="font-medium text-purple-700 text-center mb-4">원인 🔍</h4>
        {causes.map((cause, index) => (
          <div key={index} className="bg-purple-50 rounded-lg p-3 border border-purple-200">
            <p className="text-sm text-purple-700">{cause}</p>
          </div>
        ))}
      </div>
      
      {/* 화살표와 중심 상황 */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-blue-100 rounded-lg p-4 border-2 border-blue-300 mx-4">
            <p className="font-semibold text-blue-800">{situation}</p>
          </div>
        </div>
      </div>
      
      {/* 결과들 */}
      <div className="flex-1 space-y-3">
        <h4 className="font-medium text-green-700 text-center mb-4">결과 🎯</h4>
        {effects.map((effect, index) => (
          <div key={index} className="bg-green-50 rounded-lg p-3 border border-green-200">
            <p className="text-sm text-green-700">{effect}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/**
 * 성찰 질문 박스
 */
export const ReflectionQuestions = ({ 
  questions,
  title = "생각해보기 💭" 
}) => (
  <div className="bg-white rounded-lg p-6 border border-gray-200">
    <h3 className="text-lg font-semibold text-gray-800 mb-6">{title}</h3>
    
    <div className="space-y-4">
      {questions.map((question, index) => (
        <div key={index} className="border border-gray-200 rounded-lg p-4">
          <p className="font-medium text-gray-700 mb-3">{question}</p>
          <div className="bg-gray-50 rounded p-3 min-h-16">
            <p className="text-sm text-gray-400 italic">여기에 생각을 적어보세요...</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

/**
 * 4학년 도덕 헤더 (체계적)
 */
export const Grade4Header = ({ 
  title, 
  subtitle, 
  unit,
  lesson,
  icon = "📊" 
}) => (
  <div className="text-center mb-12">
    <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-4 py-2 mb-4">
      <span className="text-2xl">{icon}</span>
      <span className="text-sm font-medium text-purple-700">
        {unit && `${unit}단원`} {lesson && `${lesson}차시`}
      </span>
    </div>
    
    <h1 className="text-3xl font-semibold text-gray-800 mb-4">
      {title}
    </h1>
    
    {subtitle && (
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        {subtitle}
      </p>
    )}
  </div>
);