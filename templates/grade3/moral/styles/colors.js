/**
 * 3학년 도덕 템플릿 - 색상 시스템
 * 특징: 스토리텔링 중심, 차분한 밝은 색상, 감정 표현 중시
 */

export const grade3MoralColors = {
  // 메인 색상 팔레트 
  primary: {
    pink: '#FF6B9D',     // 부드러운 핑크 - 감정과 따뜻함
    teal: '#4ECDC4',     // 밝은 청록 - 안정감과 신뢰
    gold: '#FFD93D',     // 따뜻한 골드 - 지혜와 깨달음  
    mint: '#A8E6CF'      // 부드러운 민트 - 성장과 조화
  },
  
  // 활동별 색상
  activities: {
    drawing: '#4ECDC4',    // 그리기 활동
    checklist: '#FFD93D',  // 체크리스트
    emotion: '#E879F9',    // 감정 표현
    reflection: '#A8E6CF'  // 성찰 활동
  },
  
  // 배경 색상
  backgrounds: {
    main: '#FFF8E1',       // 따뜻한 크림
    activity: '#F7FAFC',   // 연한 회색
    highlight: '#FFE4E1'   // 연한 핑크
  },
  
  // 텍스트 색상
  text: {
    title: '#FF6B9D',     // 제목용 핑크
    primary: '#2D3748',   // 본문용 진한 회색
    secondary: '#666',    // 부제목용 회색
    muted: '#E5E7EB'      // 연한 회색 (선, 구분선)
  }
};

export const grade3MoralTheme = {
  colors: grade3MoralColors,
  
  // 폰트 스타일 (워크시트 최적화)
  fonts: {
    title: 'text-2xl font-bold',     // 제목
    subtitle: 'text-lg font-bold',   // 부제목
    body: 'text-sm',                 // 본문
    label: 'text-xs',                // 라벨
    student: 'text-base'             // 학생 입력 영역
  },
  
  // 워크시트 레이아웃
  layout: {
    aspect: '9/16',          // 세로형 비율
    padding: '30px',         // 기본 여백
    sectionGap: '20px',      // 섹션 간격
    cardRadius: '15px'       // 카드 모서리
  },
  
  // 상호작용 요소
  interactive: {
    checkbox: '18px',        // 체크박스 크기
    inputLine: '1px',        // 입력 라인 두께
    border: '3px'            // 테두리 두께
  }
};