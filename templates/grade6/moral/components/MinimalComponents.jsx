import React from 'react';
import { grade6MoralTheme } from '../styles/colors.js';

/**
 * 6학년 도덕 템플릿 - 미니멀 헤더
 */
export const MinimalHeader = ({ title, subtitle, icon = "🌐" }) => (
  <div className="text-center mb-16">
    <div className="inline-block bg-white rounded-xl p-6 shadow-lg mb-6 border border-gray-200">
      <span className="text-4xl">{icon}</span>
    </div>
    <h1 className="text-3xl font-light text-gray-800 mb-4 tracking-wide">
      {title}
    </h1>
    <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
      {subtitle}
    </p>
  </div>
);

/**
 * 글로벌 이슈 카드
 */
export const GlobalIssueCard = ({ issue, index }) => (
  <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
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
);

/**
 * 핵심 가치 카드
 */
export const ValueCard = ({ principle, description, symbol, index }) => (
  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
    <div className="text-2xl mb-4">{symbol}</div>
    <h3 className="text-sm font-semibold text-gray-800 mb-2 tracking-wide">
      {principle}
    </h3>
    <p className="text-xs text-gray-600 leading-relaxed">
      {description}
    </p>
  </div>
);

/**
 * 단계별 행동 계획
 */
export const ActionLevelCard = ({ level, index }) => (
  <div className="text-center">
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
);

/**
 * 성찰 질문 박스
 */
export const ReflectionBox = ({ questions }) => (
  <div className="space-y-6">
    <h3 className="text-lg font-medium text-gray-800 mb-4">
      🤔 깊이 생각해보기
    </h3>
    
    <div className="space-y-4">
      {questions.map((question, index) => (
        <div key={index} className="bg-gray-50 rounded-lg p-4">
          <p className="text-sm text-gray-700 leading-relaxed">
            {question}
          </p>
        </div>
      ))}
    </div>
  </div>
);

/**
 * 실천 다짐 영역
 */
export const ActionPledge = () => (
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
);

/**
 * 진행 단계 연결선
 */
export const ProgressConnector = ({ steps }) => (
  <div className="relative">
    {/* 연결선 */}
    <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gray-200"></div>
    
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
      {steps.map((step, index) => (
        <ActionLevelCard key={index} level={step} index={index} />
      ))}
    </div>
  </div>
);

/**
 * 인용구 박스 (명언, 속담 등)
 */
export const QuoteBox = ({ quote, author, source }) => (
  <div className="text-center mt-12">
    <div className="inline-block bg-gradient-to-r from-gray-100 to-slate-200 rounded-lg p-6 shadow-sm">
      <p className="text-lg font-light text-gray-700 leading-relaxed">
        "{quote}"
      </p>
      {author && (
        <p className="text-sm text-gray-500 mt-2">
          - {author} {source && `(${source})`}
        </p>
      )}
    </div>
  </div>
);

/**
 * 섹션 제목
 */
export const SectionTitle = ({ title, subtitle, center = true }) => (
  <div className={center ? "text-center mb-10" : "mb-8"}>
    <h2 className="text-xl font-medium text-gray-700 mb-2">
      {title}
    </h2>
    {subtitle && (
      <p className="text-gray-600 text-sm">
        {subtitle}
      </p>
    )}
  </div>
);

/**
 * 그리드 컨테이너 (반응형)
 */
export const ResponsiveGrid = ({ children, columns = 4, gap = 6 }) => (
  <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-${gap}`}>
    {children}
  </div>
);