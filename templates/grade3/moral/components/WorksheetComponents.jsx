import React from 'react';
import { grade3MoralTheme } from '../styles/colors.js';

/**
 * 3학년 도덕 워크시트 헤더 (9:16 세로형 최적화)
 */
export const WorksheetHeader = ({ 
  grade = "3학년", 
  subject = "도덕",
  title,
  studentName = "",
  studentNumber = "" 
}) => (
  <g>
    {/* 상단 제목 배경 */}
    <rect x="0" y="0" width="540" height="120" fill="#FF6B9D" opacity="0.1"/>
    
    {/* 제목 텍스트 */}
    <text x="270" y="35" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#FF6B9D">
      {grade} {subject}
    </text>
    <text x="270" y="65" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="bold" fill="#2D3748">
      {title}
    </text>
    <text x="270" y="95" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="16" fill="#666">
      이름: {studentName || "_________________"} 번호: {studentNumber || "_____"}
    </text>
  </g>
);

/**
 * 활동 섹션 컨테이너
 */
export const ActivitySection = ({ 
  x = 30, 
  y, 
  width = 480, 
  height, 
  title, 
  icon, 
  color,
  children 
}) => (
  <g>
    <rect x={x} y={y} width={width} height={height} fill="white" stroke={color} strokeWidth="3" rx="15"/>
    <text x={x + 20} y={y + 25} fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill={color}>
      {icon} {title}
    </text>
    {children}
  </g>
);

/**
 * 가족 그리기 박스들
 */
export const FamilyDrawingBoxes = ({ startX = 50, startY = 180 }) => (
  <g>
    {/* 아빠 */}
    <rect x={startX} y={startY} width="80" height="80" fill="#F7FAFC" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="5,5"/>
    <text x={startX + 40} y={startY + 25} textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fill="#666">아빠</text>
    
    {/* 엄마 */}
    <rect x={startX + 100} y={startY} width="80" height="80" fill="#F7FAFC" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="5,5"/>
    <text x={startX + 140} y={startY + 25} textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fill="#666">엄마</text>
    
    {/* 나 */}
    <rect x={startX + 200} y={startY} width="80" height="80" fill="#FFE4E1" stroke="#FF6B9D" strokeWidth="2" strokeDasharray="5,5"/>
    <text x={startX + 240} y={startY + 25} textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fill="#FF6B9D" fontWeight="bold">나</text>
    
    {/* 형제자매 */}
    <rect x={startX + 300} y={startY} width="80" height="80" fill="#F7FAFC" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="5,5"/>
    <text x={startX + 340} y={startY + 25} textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fill="#666">형제자매</text>
  </g>
);

/**
 * 체크박스 리스트
 */
export const CheckboxList = ({ items, startX = 50, startY = 365, columns = 2 }) => {
  const itemsPerColumn = Math.ceil(items.length / columns);
  
  return (
    <g>
      {items.map((item, index) => {
        const column = Math.floor(index / itemsPerColumn);
        const row = index % itemsPerColumn;
        const x = startX + (column * 250);
        const y = startY + (row * 30);
        
        return (
          <g key={index}>
            <rect x={x} y={y} width="18" height="18" fill="white" stroke="#666" strokeWidth="2"/>
            <text x={x + 30} y={y + 14} fontFamily="Arial, sans-serif" fontSize="14" fill="#333">
              {item}
            </text>
          </g>
        );
      })}
    </g>
  );
};

/**
 * 감정 얼굴 표현
 */
export const EmotionFace = ({ type, x, y, situation }) => {
  const emotions = {
    happy: {
      face: (
        <g>
          <circle cx={x} cy={y} r="25" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2"/>
          <circle cx={x-8} cy={y-8} r="3" fill="#000"/>
          <circle cx={x+8} cy={y-8} r="3" fill="#000"/>
          <path d={`M ${x-12} ${y+8} Q ${x} ${y+20} ${x+12} ${y+8}`} stroke="#000" strokeWidth="2" fill="none"/>
        </g>
      )
    },
    neutral: {
      face: (
        <g>
          <circle cx={x} cy={y} r="25" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2"/>
          <circle cx={x-8} cy={y-8} r="3" fill="#000"/>
          <circle cx={x+8} cy={y-8} r="3" fill="#000"/>
          <line x1={x-12} y1={y+8} x2={x+12} y2={y+8} stroke="#000" strokeWidth="2"/>
        </g>
      )
    },
    sad: {
      face: (
        <g>
          <circle cx={x} cy={y} r="25" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2"/>
          <circle cx={x-8} cy={y-8} r="3" fill="#000"/>
          <circle cx={x+8} cy={y-8} r="3" fill="#000"/>
          <path d={`M ${x-12} ${y+12} Q ${x} ${y+4} ${x+12} ${y+12}`} stroke="#000" strokeWidth="2" fill="none"/>
        </g>
      )
    },
    angry: {
      face: (
        <g>
          <circle cx={x} cy={y} r="25" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2"/>
          <circle cx={x-8} cy={y-8} r="3" fill="#000"/>
          <circle cx={x+8} cy={y-8} r="3" fill="#000"/>
          <path d={`M ${x-12} ${y+12} Q ${x} ${y+20} ${x+12} ${y+12}`} stroke="#000" strokeWidth="2" fill="none"/>
          <path d={`M ${x-12} ${y-15} L ${x-4} ${y-10}`} stroke="#000" strokeWidth="2"/>
          <path d={`M ${x+12} ${y-15} L ${x+4} ${y-10}`} stroke="#000" strokeWidth="2"/>
        </g>
      )
    }
  };

  return (
    <g>
      {emotions[type]?.face}
      <text x={x} y={y+40} textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">
        {situation.split(' ')[0]}
      </text>
      <text x={x} y={y+52} textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">
        {situation.split(' ').slice(1).join(' ')}
      </text>
    </g>
  );
};

/**
 * 말풍선 컴포넌트
 */
export const SpeechBubble = ({ x = 70, y = 590, width = 390, height = 70, content }) => (
  <g>
    <path 
      d={`M ${x} ${y} Q ${x} ${y-10} ${x+10} ${y-10} L ${x+width-10} ${y-10} Q ${x+width} ${y-10} ${x+width} ${y} L ${x+width} ${y+height-10} Q ${x+width} ${y+height} ${x+width-10} ${y+height} L ${x+50} ${y+height} L ${x+20} ${y+height+20} L ${x+40} ${y+height} L ${x+10} ${y+height} Q ${x} ${y+height} ${x} ${y+height-10} Z`} 
      fill="#F0FDF4" 
      stroke="#22C55E" 
      strokeWidth="2"
    />
    <text x={x+20} y={y+15} fontFamily="Arial, sans-serif" fontSize="14" fill="#333">
      {content}
    </text>
  </g>
);

/**
 * 입력 라인
 */
export const InputLine = ({ x1, y1, x2, y2 }) => (
  <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#E5E7EB" strokeWidth="1"/>
);

/**
 * 워크시트 마무리 메시지
 */
export const WorksheetFooter = ({ x = 50, y = 910, width = 440, message }) => (
  <g>
    <rect x={x} y={y} width={width} height="35" fill="#E0F2FE" stroke="#0EA5E9" strokeWidth="2" rx="10"/>
    <text x={x + width/2} y={y + 15} textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fill="#0284C7">
      🌟 {message}
    </text>
    <text x={x + width/2} y={y + 30} textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fill="#0284C7">
      서로 사랑하고 도우며 지내요! 💕
    </text>
  </g>
);