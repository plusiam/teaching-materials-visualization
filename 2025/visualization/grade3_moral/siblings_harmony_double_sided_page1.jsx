import React from 'react';

/**
 * 3학년 도덕 양면 활동지 - 1페이지 (수업 중 활동) - 현장 피드백 반영 버전
 * 특징: 9:16 세로형, "학반" 항목 추가, "생각 열기" 도입 단계 명확화
 * 활용: 35분 수업시간 내 완료 가능한 구조적 활동들
 */
const Grade3SiblingsDoubleSidedPage1 = ({ 
  studentName = "", 
  classGrade = "",
  classNumber = "",
  classDate = "",
  customTitle = "형제자매와 사이좋게 지내요"
}) => {
  
  const classInfo = classGrade && classNumber ? `${classGrade}학년 ${classNumber}반` : "_________________";
  
  return (
    <div className="w-full max-w-md mx-auto bg-white" style={{ aspectRatio: '9/16' }}>
      <svg viewBox="0 0 540 960" className="w-full h-full">
        {/* 배경 */}
        <rect width="540" height="960" fill="#FFF8E1"/>
        
        {/* 상단 제목 배경 */}
        <rect x="0" y="0" width="540" height="100" fill="#FF6B9D" opacity="0.1"/>
        
        {/* 메인 제목 */}
        <text x="270" y="30" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="bold" fill="#FF6B9D">
          3학년 도덕 - 수업활동지 ①
        </text>
        <text x="270" y="55" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="bold" fill="#2D3748">
          {customTitle}
        </text>
        <text x="270" y="80" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="16" fill="#666">
          학반: {classInfo} 이름: {studentName || "_________________"}
        </text>
        
        {/* 생각 열기: 우리 가족 소개 */}
        <rect x="30" y="120" width="480" height="200" fill="white" stroke="#4ECDC4" strokeWidth="3" rx="15"/>
        <text x="50" y="145" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="#4ECDC4">
          🧠 생각 열기. 우리 가족을 소개해요!
        </text>
        
        {/* 가족 그리기 박스들 */}
        <rect x="50" y="160" width="100" height="100" fill="#F7FAFC" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="5,5"/>
        <text x="100" y="185" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fill="#666">아빠</text>
        <text x="100" y="245" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fill="#666">좋은 점:</text>
        <line x1="60" y1="250" x2="140" y2="250" stroke="#E5E7EB" strokeWidth="1"/>
        
        <rect x="170" y="160" width="100" height="100" fill="#F7FAFC" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="5,5"/>
        <text x="220" y="185" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fill="#666">엄마</text>
        <text x="220" y="245" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fill="#666">좋은 점:</text>
        <line x1="180" y1="250" x2="260" y2="250" stroke="#E5E7EB" strokeWidth="1"/>
        
        <rect x="290" y="160" width="100" height="100" fill="#FFE4E1" stroke="#FF6B9D" strokeWidth="3" strokeDasharray="5,5"/>
        <text x="340" y="185" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fill="#FF6B9D" fontWeight="bold">나</text>
        <text x="340" y="245" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fill="#FF6B9D">잘하는 것:</text>
        <line x1="300" y1="250" x2="380" y2="250" stroke="#FF6B9D" strokeWidth="1"/>
        
        <rect x="410" y="160" width="100" height="100" fill="#F7FAFC" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="5,5"/>
        <text x="460" y="185" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fill="#666">형제자매</text>
        <text x="460" y="245" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fill="#666">좋은 점:</text>
        <line x1="420" y1="250" x2="500" y2="250" stroke="#E5E7EB" strokeWidth="1"/>
        
        <text x="50" y="290" fontFamily="Arial, sans-serif" fontSize="14" fill="#666">
          우리 가족은 총 _____명이고, 나는 _____째예요.
        </text>
        <text x="50" y="310" fontFamily="Arial, sans-serif" fontSize="14" fill="#666">
          우리 가족의 특별한 점: _______________________________________________
        </text>
        
        {/* 활동 1: 자기 점검 체크리스트 */}
        <rect x="30" y="340" width="480" height="240" fill="white" stroke="#FFD93D" strokeWidth="3" rx="15"/>
        <text x="50" y="365" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="#F59E0B">
          💡 활동 1. 나는 어떤 형제자매인가요? (해당하는 것에 ✓)
        </text>
        
        {/* 왼쪽 체크박스들 */}
        <g transform="translate(50, 385)">
          <rect x="0" y="0" width="20" height="20" fill="white" stroke="#666" strokeWidth="2"/>
          <text x="30" y="15" fontFamily="Arial, sans-serif" fontSize="14" fill="#333">
            형제자매와 장난감을 나누어 써요
          </text>
          
          <rect x="0" y="35" width="20" height="20" fill="white" stroke="#666" strokeWidth="2"/>
          <text x="30" y="50" fontFamily="Arial, sans-serif" fontSize="14" fill="#333">
            형제자매가 아플 때 걱정해줘요
          </text>
          
          <rect x="0" y="70" width="20" height="20" fill="white" stroke="#666" strokeWidth="2"/>
          <text x="30" y="85" fontFamily="Arial, sans-serif" fontSize="14" fill="#333">
            형제자매를 도와줘요
          </text>
          
          <rect x="0" y="105" width="20" height="20" fill="white" stroke="#666" strokeWidth="2"/>
          <text x="30" y="120" fontFamily="Arial, sans-serif" fontSize="14" fill="#333">
            형제자매와 대화를 많이 해요
          </text>
        </g>
        
        {/* 오른쪽 체크박스들 */}
        <g transform="translate(280, 385)">
          <rect x="0" y="0" width="20" height="20" fill="white" stroke="#666" strokeWidth="2"/>
          <text x="30" y="15" fontFamily="Arial, sans-serif" fontSize="14" fill="#333">
            형제자매와 자주 싸워요
          </text>
          
          <rect x="0" y="35" width="20" height="20" fill="white" stroke="#666" strokeWidth="2"/>
          <text x="30" y="50" fontFamily="Arial, sans-serif" fontSize="14" fill="#333">
            혼자만 좋은 것을 가지려고 해요
          </text>
          
          <rect x="0" y="70" width="20" height="20" fill="white" stroke="#666" strokeWidth="2"/>
          <text x="30" y="85" fontFamily="Arial, sans-serif" fontSize="14" fill="#333">
            형제자매를 놀리거나 괴롭혀요
          </text>
          
          <rect x="0" y="105" width="20" height="20" fill="white" stroke="#666" strokeWidth="2"/>
          <text x="30" y="120" fontFamily="Arial, sans-serif" fontSize="14" fill="#333">
            형제자매의 말을 잘 안 들어요
          </text>
        </g>
        
        <text x="50" y="535" fontFamily="Arial, sans-serif" fontSize="14" fill="#666">
          ✨ 고쳐야 할 점: ________________________________________________
        </text>
        <text x="50" y="560" fontFamily="Arial, sans-serif" fontSize="14" fill="#666">
          💝 계속 해야 할 점: ____________________________________________
        </text>
        
        {/* 활동 2: 상황별 기분 표현 */}
        <rect x="30" y="590" width="480" height="180" fill="white" stroke="#A8E6CF" strokeWidth="3" rx="15"/>
        <text x="50" y="615" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="#22C55E">
          😊 활동 2. 상황별 내 기분을 표현해보세요
        </text>
        
        {/* 감정 상황들 */}
        <g transform="translate(50, 640)">
          {/* 상황 1 */}
          <rect x="0" y="0" width="220" height="50" fill="#F0FDF4" stroke="#22C55E" strokeWidth="2" rx="10"/>
          <text x="10" y="20" fontFamily="Arial, sans-serif" fontSize="14" fill="#333">형제자매와 함께 놀 때</text>
          <text x="10" y="40" fontFamily="Arial, sans-serif" fontSize="14" fill="#666">기분: ___________________</text>
          
          {/* 상황 2 */}
          <rect x="240" y="0" width="220" height="50" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2" rx="10"/>
          <text x="250" y="20" fontFamily="Arial, sans-serif" fontSize="14" fill="#333">형제자매와 싸웠을 때</text>
          <text x="250" y="40" fontFamily="Arial, sans-serif" fontSize="14" fill="#666">기분: ___________________</text>
          
          {/* 상황 3 */}
          <rect x="0" y="65" width="220" height="50" fill="#FEE2E2" stroke="#EF4444" strokeWidth="2" rx="10"/>
          <text x="10" y="85" fontFamily="Arial, sans-serif" fontSize="14" fill="#333">형제자매가 아플 때</text>
          <text x="10" y="105" fontFamily="Arial, sans-serif" fontSize="14" fill="#666">기분: ___________________</text>
          
          {/* 상황 4 */}
          <rect x="240" y="65" width="220" height="50" fill="#E0E7FF" stroke="#6366F1" strokeWidth="2" rx="10"/>
          <text x="250" y="85" fontFamily="Arial, sans-serif" fontSize="14" fill="#333">형제자매에게 도움받을 때</text>
          <text x="250" y="105" fontFamily="Arial, sans-serif" fontSize="14" fill="#666">기분: ___________________</text>
        </g>
        
        {/* 하단 수업 목표 */}
        <rect x="50" y="790" width="440" height="60" fill="#E0F2FE" stroke="#0EA5E9" strokeWidth="2" rx="10"/>
        <text x="270" y="810" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#0284C7">
          🎯 수업 목표
        </text>
        <text x="270" y="830" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fill="#0284C7">
          형제자매의 소중함을 알고,
        </text>
        <text x="270" y="845" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fill="#0284C7">
          서로 사랑하고 도우며 지내는 방법을 생각해보아요!
        </text>
        
        {/* 뒷면 안내 */}
        <text x="270" y="890" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fill="#666" fontStyle="italic">
          📄 뒷면에 계속...
        </text>
        
        {/* 페이지 번호 */}
        <circle cx="480" cy="920" r="20" fill="#FF6B9D" opacity="0.8"/>
        <text x="480" y="925" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="white">
          1
        </text>
      </svg>
    </div>
  );
};

export default Grade3SiblingsDoubleSidedPage1;