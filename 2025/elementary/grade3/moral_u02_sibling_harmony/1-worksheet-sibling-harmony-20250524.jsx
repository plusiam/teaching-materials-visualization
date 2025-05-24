import React from 'react';

/**
 * 3학년 도덕 - 형제자매 우애 학생 활동지 (9:16 세로형)
 * 특징: 학생 직접 참여형 워크시트, PPT 세로 슬라이드 최적화
 * 활용: 인쇄용, 디지털 활동지, 개별 학습지
 */
const Grade3SiblingsWorksheet = ({ 
  studentName = "", 
  studentNumber = "", 
  customTitle = "형제자매와 사이좋게 지내요"
}) => {
  return (
    <div className="w-full max-w-md mx-auto bg-white" style={{ aspectRatio: '9/16' }}>
      <svg viewBox="0 0 540 960" className="w-full h-full">
        {/* 배경 */}
        <rect width="540" height="960" fill="#FFF8E1"/>
        
        {/* 상단 제목 배경 */}
        <rect x="0" y="0" width="540" height="120" fill="#FF6B9D" opacity="0.1"/>
        
        {/* 메인 제목 */}
        <text x="270" y="35" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#FF6B9D">
          3학년 도덕
        </text>
        <text x="270" y="65" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="bold" fill="#2D3748">
          {customTitle}
        </text>
        <text x="270" y="95" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="16" fill="#666">
          이름: {studentName || "_________________"} 번호: {studentNumber || "_____"}
        </text>
        
        {/* 활동 1: 내 가족 그리기 */}
        <rect x="30" y="140" width="480" height="160" fill="white" stroke="#4ECDC4" strokeWidth="3" rx="15"/>
        <text x="50" y="165" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="#4ECDC4">
          🎨 활동 1. 우리 가족을 그려보세요
        </text>
        
        {/* 가족 그리기 박스들 */}
        <rect x="50" y="180" width="80" height="80" fill="#F7FAFC" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="5,5"/>
        <text x="90" y="205" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fill="#666">아빠</text>
        
        <rect x="150" y="180" width="80" height="80" fill="#F7FAFC" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="5,5"/>
        <text x="190" y="205" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fill="#666">엄마</text>
        
        <rect x="250" y="180" width="80" height="80" fill="#FFE4E1" stroke="#FF6B9D" strokeWidth="2" strokeDasharray="5,5"/>
        <text x="290" y="205" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fill="#FF6B9D" fontWeight="bold">나</text>
        
        <rect x="350" y="180" width="80" height="80" fill="#F7FAFC" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="5,5"/>
        <text x="390" y="205" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fill="#666">형제자매</text>
        
        <text x="50" y="280" fontFamily="Arial, sans-serif" fontSize="14" fill="#666">
          우리 가족은 총 _____명이에요.
        </text>
        
        {/* 활동 2: 상황별 체크리스트 */}
        <rect x="30" y="320" width="480" height="200" fill="white" stroke="#FFD93D" strokeWidth="3" rx="15"/>
        <text x="50" y="345" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="#F59E0B">
          💡 활동 2. 나는 어떤 형제자매인가요?
        </text>
        
        {/* 체크박스들 */}
        <g transform="translate(50, 365)">
          <rect x="0" y="0" width="18" height="18" fill="white" stroke="#666" strokeWidth="2"/>
          <text x="30" y="14" fontFamily="Arial, sans-serif" fontSize="14" fill="#333">
            형제자매와 장난감을 나누어 써요
          </text>
          
          <rect x="0" y="30" width="18" height="18" fill="white" stroke="#666" strokeWidth="2"/>
          <text x="30" y="44" fontFamily="Arial, sans-serif" fontSize="14" fill="#333">
            형제자매가 아플 때 걱정해줘요
          </text>
          
          <rect x="0" y="60" width="18" height="18" fill="white" stroke="#666" strokeWidth="2"/>
          <text x="30" y="74" fontFamily="Arial, sans-serif" fontSize="14" fill="#333">
            형제자매와 자주 싸워요
          </text>
          
          <rect x="250" y="0" width="18" height="18" fill="white" stroke="#666" strokeWidth="2"/>
          <text x="280" y="14" fontFamily="Arial, sans-serif" fontSize="14" fill="#333">
            혼자만 좋은 것을 가지려고 해요
          </text>
          
          <rect x="250" y="30" width="18" height="18" fill="white" stroke="#666" strokeWidth="2"/>
          <text x="280" y="44" fontFamily="Arial, sans-serif" fontSize="14" fill="#333">
            형제자매를 도와줘요
          </text>
          
          <rect x="250" y="60" width="18" height="18" fill="white" stroke="#666" strokeWidth="2"/>
          <text x="280" y="74" fontFamily="Arial, sans-serif" fontSize="14" fill="#333">
            형제자매와 대화를 많이 해요
          </text>
        </g>
        
        <text x="50" y="470" fontFamily="Arial, sans-serif" fontSize="14" fill="#666">
          체크한 것 중에서 고쳐야 할 점: _________________________________
        </text>
        <text x="50" y="495" fontFamily="Arial, sans-serif" fontSize="14" fill="#666">
          계속 해야 할 점: ________________________________________________
        </text>
        
        {/* 활동 3: 마음 표현하기 */}
        <rect x="30" y="540" width="480" height="180" fill="white" stroke="#A8E6CF" strokeWidth="3" rx="15"/>
        <text x="50" y="565" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="#22C55E">
          💝 활동 3. 형제자매에게 마음을 전해보세요
        </text>
        
        {/* 말풍선 */}
        <path 
          d="M 70 590 Q 70 580 80 580 L 450 580 Q 460 580 460 590 L 460 650 Q 460 660 450 660 L 120 660 L 90 680 L 110 660 L 80 660 Q 70 660 70 650 Z" 
          fill="#F0FDF4" 
          stroke="#22C55E" 
          strokeWidth="2"
        />
        
        <text x="90" y="605" fontFamily="Arial, sans-serif" fontSize="14" fill="#333">
          형제자매에게 하고 싶은 말:
        </text>
        
        {/* 빈 줄들 */}
        <line x1="90" y1="625" x2="440" y2="625" stroke="#E5E7EB" strokeWidth="1"/>
        <line x1="90" y1="645" x2="440" y2="645" stroke="#E5E7EB" strokeWidth="1"/>
        
        <text x="50" y="695" fontFamily="Arial, sans-serif" fontSize="14" fill="#666">
          앞으로 어떻게 지낼지 약속해보세요:
        </text>
        <line x1="50" y1="710" x2="490" y2="710" stroke="#E5E7EB" strokeWidth="1"/>
        
        {/* 활동 4: 감정 표현 */}
        <rect x="30" y="740" width="480" height="160" fill="white" stroke="#E879F9" strokeWidth="3" rx="15"/>
        <text x="50" y="765" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="#C026D3">
          😊 활동 4. 기분을 표현해보세요
        </text>
        
        {/* 감정 얼굴들 */}
        <g transform="translate(80, 780)">
          {/* 행복한 얼굴 */}
          <circle cx="0" cy="0" r="25" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2"/>
          <circle cx="-8" cy="-8" r="3" fill="#000"/>
          <circle cx="8" cy="-8" r="3" fill="#000"/>
          <path d="M -12 8 Q 0 20 12 8" stroke="#000" strokeWidth="2" fill="none"/>
          <text x="0" y="40" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">형제자매와</text>
          <text x="0" y="52" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">함께 있을 때</text>
          
          {/* 보통 얼굴 */}
          <circle cx="120" cy="0" r="25" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2"/>
          <circle cx="112" cy="-8" r="3" fill="#000"/>
          <circle cx="128" cy="-8" r="3" fill="#000"/>
          <line x1="108" y1="8" x2="132" y2="8" stroke="#000" strokeWidth="2"/>
          <text x="120" y="40" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">형제자매와</text>
          <text x="120" y="52" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">싸웠을 때</text>
          
          {/* 슬픈 얼굴 */}
          <circle cx="240" cy="0" r="25" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2"/>
          <circle cx="232" cy="-8" r="3" fill="#000"/>
          <circle cx="248" cy="-8" r="3" fill="#000"/>
          <path d="M 228 12 Q 240 4 252 12" stroke="#000" strokeWidth="2" fill="none"/>
          <text x="240" y="40" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">형제자매가</text>
          <text x="240" y="52" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">아플 때</text>
          
          {/* 화난 얼굴 */}
          <circle cx="360" cy="0" r="25" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2"/>
          <circle cx="352" cy="-8" r="3" fill="#000"/>
          <circle cx="368" cy="-8" r="3" fill="#000"/>
          <path d="M 348 12 Q 360 20 372 12" stroke="#000" strokeWidth="2" fill="none"/>
          <path d="M 348 -15 L 356 -10" stroke="#000" strokeWidth="2"/>
          <path d="M 372 -15 L 364 -10" stroke="#000" strokeWidth="2"/>
          <text x="360" y="40" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">형제자매가</text>
          <text x="360" y="52" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">놀릴 때</text>
        </g>
        
        {/* 하단 메시지 */}
        <rect x="50" y="910" width="440" height="35" fill="#E0F2FE" stroke="#0EA5E9" strokeWidth="2" rx="10"/>
        <text x="270" y="925" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fill="#0284C7">
          🌟 가족은 세상에서 가장 소중한 사람들이에요!
        </text>
        <text x="270" y="940" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fill="#0284C7">
          서로 사랑하고 도우며 지내요! 💕
        </text>
      </svg>
    </div>
  );
};

export default Grade3SiblingsWorksheet;