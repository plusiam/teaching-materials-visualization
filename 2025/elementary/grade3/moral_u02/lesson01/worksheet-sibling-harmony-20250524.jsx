import React from 'react';

/**
 * 3학년 도덕 2단원 1차시 - 형제자매 우애 학생 활동지 (A4)
 * 템플릿: templates/grade3/moral/worksheet-template.jsx
 * 특징: 학생 직접 참여형 워크시트, A4 인쇄 최적화
 * 활용: 인쇄용, 디지털 활동지, 개별 학습지
 */
const Grade3SiblingsWorksheet = ({ 
  studentName = "", 
  studentNumber = "", 
  customTitle = "형제자매와 사이좋게 지내요"
}) => {
  return (
    <div className="w-full max-w-md mx-auto bg-white" style={{ aspectRatio: '210/297' }}>
      <svg viewBox="0 0 210 297" className="w-full h-full">
        {/* 배경 */}
        <rect width="210" height="297" fill="#FFF8E1"/>
        
        {/* 상단 제목 배경 */}
        <rect x="0" y="0" width="210" height="30" fill="#FF6B9D" opacity="0.1"/>
        
        {/* 메인 제목 */}
        <text x="105" y="8" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="6" fontWeight="bold" fill="#FF6B9D">
          3학년 도덕 2단원 1차시
        </text>
        <text x="105" y="16" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="7" fontWeight="bold" fill="#2D3748">
          {customTitle}
        </text>
        <text x="105" y="24" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="4" fill="#666">
          이름: {studentName || "_________________"} 번호: {studentNumber || "_____"}
        </text>
        
        {/* 활동 1: 내 가족 그리기 */}
        <rect x="10" y="35" width="190" height="50" fill="white" stroke="#4ECDC4" strokeWidth="1" rx="3"/>
        <text x="15" y="42" fontFamily="Arial, sans-serif" fontSize="4.5" fontWeight="bold" fill="#4ECDC4">
          🎨 활동 1. 우리 가족을 그려보세요
        </text>
        
        {/* 가족 그리기 박스들 */}
        <rect x="15" y="47" width="25" height="25" fill="#F7FAFC" stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="1,1"/>
        <text x="27.5" y="57" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="3" fill="#666">아빠</text>
        
        <rect x="45" y="47" width="25" height="25" fill="#F7FAFC" stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="1,1"/>
        <text x="57.5" y="57" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="3" fill="#666">엄마</text>
        
        <rect x="75" y="47" width="25" height="25" fill="#FFE4E1" stroke="#FF6B9D" strokeWidth="0.5" strokeDasharray="1,1"/>
        <text x="87.5" y="57" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="3" fill="#FF6B9D" fontWeight="bold">나</text>
        
        <rect x="105" y="47" width="25" height="25" fill="#F7FAFC" stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="1,1"/>
        <text x="117.5" y="57" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="3" fill="#666">형제자매</text>
        
        <text x="15" y="78" fontFamily="Arial, sans-serif" fontSize="3.5" fill="#666">
          우리 가족은 총 _____명이에요.
        </text>
        
        {/* 활동 2: 상황별 체크리스트 */}
        <rect x="10" y="90" width="190" height="65" fill="white" stroke="#FFD93D" strokeWidth="1" rx="3"/>
        <text x="15" y="97" fontFamily="Arial, sans-serif" fontSize="4.5" fontWeight="bold" fill="#F59E0B">
          💡 활동 2. 나는 어떤 형제자매인가요?
        </text>
        
        {/* 체크박스들 */}
        <g transform="translate(15, 102)">
          <rect x="0" y="0" width="4" height="4" fill="white" stroke="#666" strokeWidth="0.3"/>
          <text x="7" y="3" fontFamily="Arial, sans-serif" fontSize="3" fill="#333">
            형제자매와 장난감을 나누어 써요
          </text>
          
          <rect x="0" y="8" width="4" height="4" fill="white" stroke="#666" strokeWidth="0.3"/>
          <text x="7" y="11" fontFamily="Arial, sans-serif" fontSize="3" fill="#333">
            형제자매가 아플 때 걱정해줘요
          </text>
          
          <rect x="0" y="16" width="4" height="4" fill="white" stroke="#666" strokeWidth="0.3"/>
          <text x="7" y="19" fontFamily="Arial, sans-serif" fontSize="3" fill="#333">
            형제자매와 자주 싸워요
          </text>
          
          <rect x="90" y="0" width="4" height="4" fill="white" stroke="#666" strokeWidth="0.3"/>
          <text x="97" y="3" fontFamily="Arial, sans-serif" fontSize="3" fill="#333">
            혼자만 좋은 것을 가지려고 해요
          </text>
          
          <rect x="90" y="8" width="4" height="4" fill="white" stroke="#666" strokeWidth="0.3"/>
          <text x="97" y="11" fontFamily="Arial, sans-serif" fontSize="3" fill="#333">
            형제자매를 도와줘요
          </text>
          
          <rect x="90" y="16" width="4" height="4" fill="white" stroke="#666" strokeWidth="0.3"/>
          <text x="97" y="19" fontFamily="Arial, sans-serif" fontSize="3" fill="#333">
            형제자매와 대화를 많이 해요
          </text>
        </g>
        
        <text x="15" y="135" fontFamily="Arial, sans-serif" fontSize="3.5" fill="#666">
          체크한 것 중에서 고쳐야 할 점: _________________________________
        </text>
        <text x="15" y="143" fontFamily="Arial, sans-serif" fontSize="3.5" fill="#666">
          계속 해야 할 점: ________________________________________________
        </text>
        
        {/* 활동 3: 마음 표현하기 */}
        <rect x="10" y="160" width="190" height="55" fill="white" stroke="#A8E6CF" strokeWidth="1" rx="3"/>
        <text x="15" y="167" fontFamily="Arial, sans-serif" fontSize="4.5" fontWeight="bold" fill="#22C55E">
          💝 활동 3. 형제자매에게 마음을 전해보세요
        </text>
        
        {/* 말풍선 */}
        <path 
          d="M 20 175 Q 20 172 23 172 L 180 172 Q 183 172 183 175 L 183 195 Q 183 198 180 198 L 35 198 L 25 205 L 30 198 L 23 198 Q 20 198 20 195 Z" 
          fill="#F0FDF4" 
          stroke="#22C55E" 
          strokeWidth="0.5"
        />
        
        <text x="25" y="180" fontFamily="Arial, sans-serif" fontSize="3.5" fill="#333">
          형제자매에게 하고 싶은 말:
        </text>
        
        {/* 빈 줄들 */}
        <line x1="25" y1="185" x2="175" y2="185" stroke="#E5E7EB" strokeWidth="0.3"/>
        <line x1="25" y1="192" x2="175" y2="192" stroke="#E5E7EB" strokeWidth="0.3"/>
        
        <text x="15" y="208" fontFamily="Arial, sans-serif" fontSize="3.5" fill="#666">
          앞으로 어떻게 지낼지 약속해보세요:
        </text>
        <line x1="15" y1="212" x2="195" y2="212" stroke="#E5E7EB" strokeWidth="0.3"/>
        
        {/* 활동 4: 감정 표현 */}
        <rect x="10" y="225" width="190" height="55" fill="white" stroke="#E879F9" strokeWidth="1" rx="3"/>
        <text x="15" y="232" fontFamily="Arial, sans-serif" fontSize="4.5" fontWeight="bold" fill="#C026D3">
          😊 활동 4. 기분을 표현해보세요
        </text>
        
        {/* 감정 얼굴들 */}
        <g transform="translate(25, 240)">
          {/* 행복한 얼굴 */}
          <circle cx="0" cy="0" r="8" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="0.5"/>
          <circle cx="-3" cy="-3" r="1" fill="#000"/>
          <circle cx="3" cy="-3" r="1" fill="#000"/>
          <path d="M -4 3 Q 0 6 4 3" stroke="#000" strokeWidth="0.5" fill="none"/>
          <text x="0" y="12" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="2.5" fill="#333">함께 있을 때</text>
          
          {/* 보통 얼굴 */}
          <circle cx="40" cy="0" r="8" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="0.5"/>
          <circle cx="37" cy="-3" r="1" fill="#000"/>
          <circle cx="43" cy="-3" r="1" fill="#000"/>
          <line x1="36" y1="3" x2="44" y2="3" stroke="#000" strokeWidth="0.5"/>
          <text x="40" y="12" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="2.5" fill="#333">싸웠을 때</text>
          
          {/* 슬픈 얼굴 */}
          <circle cx="80" cy="0" r="8" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="0.5"/>
          <circle cx="77" cy="-3" r="1" fill="#000"/>
          <circle cx="83" cy="-3" r="1" fill="#000"/>
          <path d="M 76 4 Q 80 1 84 4" stroke="#000" strokeWidth="0.5" fill="none"/>
          <text x="80" y="12" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="2.5" fill="#333">아플 때</text>
          
          {/* 화난 얼굴 */}
          <circle cx="120" cy="0" r="8" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="0.5"/>
          <circle cx="117" cy="-3" r="1" fill="#000"/>
          <circle cx="123" cy="-3" r="1" fill="#000"/>
          <path d="M 116 4 Q 120 6 124 4" stroke="#000" strokeWidth="0.5" fill="none"/>
          <path d="M 116 -5 L 119 -3" stroke="#000" strokeWidth="0.5"/>
          <path d="M 124 -5 L 121 -3" stroke="#000" strokeWidth="0.5"/>
          <text x="120" y="12" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="2.5" fill="#333">놀릴 때</text>
        </g>
        
        {/* 하단 메시지 */}
        <rect x="15" y="285" width="180" height="10" fill="#E0F2FE" stroke="#0EA5E9" strokeWidth="0.5" rx="2"/>
        <text x="105" y="289" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="3.5" fill="#0284C7">
          🌟 가족은 세상에서 가장 소중한 사람들이에요! 💕
        </text>
        <text x="105" y="293" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="3.5" fill="#0284C7">
          서로 사랑하고 도우며 지내요!
        </text>
      </svg>
    </div>
  );
};

export default Grade3SiblingsWorksheet;