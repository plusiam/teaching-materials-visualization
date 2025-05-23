import React from 'react';

/**
 * 3학년 도덕 양면 활동지 - 2페이지 (심화활동 & 가정연계)
 * 특징: 9:16 세로형, 가정 연계용, 일주일간 실천 활동
 * 활용: 수업 후 심화학습 + 가족과 함께하는 실천 활동
 */
const Grade3SiblingsDoubleSidedPage2 = ({ 
  studentName = "", 
  customActivities = null,
  weekStartDate = ""
}) => {
  
  // 기본 가족 활동 목록
  const defaultFamilyActivities = [
    "가족 사진 함께 보기",
    "함께 요리하기", 
    "보드게임 함께 하기",
    "산책하며 대화하기",
    "서로에게 칭찬하기",
    "함께 책 읽기"
  ];
  
  const familyActivities = customActivities || defaultFamilyActivities;

  return (
    <div className="w-full max-w-md mx-auto bg-white" style={{ aspectRatio: '9/16' }}>
      <svg viewBox="0 0 540 960" className="w-full h-full">
        {/* 배경 */}
        <rect width="540" height="960" fill="#F8FAFC"/>
        
        {/* 상단 제목 배경 */}
        <rect x="0" y="0" width="540" height="100" fill="#A8E6CF" opacity="0.2"/>
        
        {/* 메인 제목 */}
        <text x="270" y="30" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="bold" fill="#22C55E">
          3학년 도덕 - 심화활동지 ②
        </text>
        <text x="270" y="55" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="bold" fill="#2D3748">
          가족과 함께 실천해요
        </text>
        <text x="270" y="80" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="16" fill="#666">
          이름: {studentName || "_________________"} (가족과 함께 해보세요!)
        </text>
        
        {/* 활동 4: 갈등 해결 역할극 */}
        <rect x="30" y="120" width="480" height="200" fill="white" stroke="#E879F9" strokeWidth="3" rx="15"/>
        <text x="50" y="145" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="#C026D3">
          🎭 활동 4. 갈등 상황 해결하기
        </text>
        <text x="50" y="165" fontFamily="Arial, sans-serif" fontSize="14" fill="#666">
          다음 상황이 일어났을 때 어떻게 해결할지 써보세요.
        </text>
        
        {/* 상황 1 */}
        <rect x="50" y="180" width="440" height="60" fill="#FDF2F8" stroke="#EC4899" strokeWidth="2" rx="8"/>
        <text x="60" y="200" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="#BE185D">
          상황 1: 형제자매가 내 장난감을 허락 없이 가져갔어요.
        </text>
        <text x="60" y="215" fontFamily="Arial, sans-serif" fontSize="13" fill="#666">
          해결방법: ________________________________________________
        </text>
        <line x1="130" y1="220" x2="480" y2="220" stroke="#E5E7EB" strokeWidth="1"/>
        <line x1="60" y1="235" x2="480" y2="235" stroke="#E5E7EB" strokeWidth="1"/>
        
        {/* 상황 2 */}
        <rect x="50" y="250" width="440" height="60" fill="#F0FDF4" stroke="#22C55E" strokeWidth="2" rx="8"/>
        <text x="60" y="270" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="#15803D">
          상황 2: 형제자매가 울고 있어요. 어떻게 도와줄까요?
        </text>
        <text x="60" y="285" fontFamily="Arial, sans-serif" fontSize="13" fill="#666">
          해결방법: ________________________________________________
        </text>
        <line x1="130" y1="290" x2="480" y2="290" stroke="#E5E7EB" strokeWidth="1"/>
        <line x1="60" y1="305" x2="480" y2="305" stroke="#E5E7EB" strokeWidth="1"/>
        
        {/* 활동 5: 가족에게 편지쓰기 */}
        <rect x="30" y="340" width="480" height="200" fill="white" stroke="#F59E0B" strokeWidth="3" rx="15"/>
        <text x="50" y="365" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="#D97706">
          💌 활동 5. 가족에게 편지를 써보세요
        </text>
        
        {/* 편지 양식 */}
        <rect x="50" y="380" width="440" height="140" fill="#FFFBEB" stroke="#F59E0B" strokeWidth="2" strokeDasharray="3,3" rx="10"/>
        
        <text x="70" y="405" fontFamily="Arial, sans-serif" fontSize="16" fill="#92400E">
          사랑하는 _____________ 에게
        </text>
        
        <line x1="70" y1="430" x2="470" y2="430" stroke="#E5E7EB" strokeWidth="1"/>
        <line x1="70" y1="450" x2="470" y2="450" stroke="#E5E7EB" strokeWidth="1"/>
        <line x1="70" y1="470" x2="470" y2="470" stroke="#E5E7EB" strokeWidth="1"/>
        <line x1="70" y1="490" x2="470" y2="490" stroke="#E5E7EB" strokeWidth="1"/>
        
        <text x="350" y="510" fontFamily="Arial, sans-serif" fontSize="14" fill="#92400E">
          사랑하는 _____________ 가
        </text>
        
        {/* 활동 6: 일주일 실천 다짐표 */}
        <rect x="30" y="560" width="480" height="220" fill="white" stroke="#3B82F6" strokeWidth="3" rx="15"/>
        <text x="50" y="585" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="#1D4ED8">
          📅 활동 6. 일주일 실천 다짐표
        </text>
        <text x="50" y="605" fontFamily="Arial, sans-serif" fontSize="14" fill="#666">
          형제자매와 사이좋게 지내기 위해 매일 실천해보세요! (○, △, ×)
        </text>
        {weekStartDate && (
          <text x="50" y="620" fontFamily="Arial, sans-serif" fontSize="12" fill="#666">
            시작일: {weekStartDate}
          </text>
        )}
        
        {/* 실천 다짐표 테이블 */}
        <g transform="translate(50, 630)">
          {/* 헤더 */}
          <rect x="0" y="0" width="440" height="30" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="2"/>
          <text x="10" y="20" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="#1E40AF">실천 내용</text>
          <text x="180" y="20" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#1E40AF">월</text>
          <text x="210" y="20" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#1E40AF">화</text>
          <text x="240" y="20" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#1E40AF">수</text>
          <text x="270" y="20" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#1E40AF">목</text>
          <text x="300" y="20" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#1E40AF">금</text>
          <text x="330" y="20" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#1E40AF">토</text>
          <text x="360" y="20" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#1E40AF">일</text>
          
          {/* 실천 항목들 */}
          {[
            "형제자매와 인사하기",
            "장난감 나누어 쓰기", 
            "도움이 필요할 때 도와주기",
            "고운 말로 대화하기"
          ].map((item, index) => (
            <g key={index}>
              <rect x="0" y={30 + index * 25} width="440" height="25" 
                    fill={index % 2 === 0 ? "white" : "#F9FAFB"} 
                    stroke="#E5E7EB" strokeWidth="1"/>
              <text x="10" y={47 + index * 25} fontFamily="Arial, sans-serif" fontSize="13" fill="#333">
                {item}
              </text>
              {[0, 1, 2, 3, 4, 5, 6].map(day => (
                <rect key={day} x={175 + day * 30} y={35 + index * 25} width="20" height="15" 
                      fill="white" stroke="#ccc" strokeWidth="1"/>
              ))}
            </g>
          ))}
        </g>
        
        {/* 활동 7: 가족 활동 제안 */}
        <rect x="30" y="800" width="480" height="120" fill="white" stroke="#10B981" strokeWidth="3" rx="15"/>
        <text x="50" y="825" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="#059669">
          🏠 활동 7. 가족과 함께 해보세요!
        </text>
        
        <g transform="translate(50, 845)">
          {familyActivities.map((activity, index) => (
            <g key={index}>
              <rect x={(index % 2) * 200} y={Math.floor(index / 2) * 25} width="18" height="18" 
                    fill="white" stroke="#059669" strokeWidth="2"/>
              <text x={(index % 2) * 200 + 25} y={Math.floor(index / 2) * 25 + 14} 
                    fontFamily="Arial, sans-serif" fontSize="14" fill="#333">
                {activity}
              </text>
            </g>
          ))}
        </g>
        
        {/* 하단 메시지 */}
        <rect x="50" y="930" width="440" height="25" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2" rx="10"/>
        <text x="270" y="945" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="#92400E">
          💕 가족은 평생 함께하는 소중한 사람들이에요!
        </text>
        
        {/* 페이지 번호 */}
        <circle cx="480" cy="920" r="20" fill="#22C55E" opacity="0.8"/>
        <text x="480" y="925" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="white">
          2
        </text>
      </svg>
    </div>
  );
};

export default Grade3SiblingsDoubleSidedPage2;