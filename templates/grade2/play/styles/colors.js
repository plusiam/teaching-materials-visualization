/**
 * 2학년 놀이 템플릿 - 색상 시스템
 * 특징: 매우 밝고 화려한 색상, 친근하고 활동적
 */

export const grade2PlayColors = {
  // 메인 색상 팔레트 
  primary: {
    red: '#FF6B6B',      // 따뜻한 빨강 - 에너지와 활동성
    teal: '#4ECDC4',     // 밝은 청록 - 친근함과 안정감  
    yellow: '#FFE66D',   // 밝은 노랑 - 즐거움과 활력
    green: '#A8E6CF'     // 부드러운 초록 - 성장과 조화
  },
  
  // 배경 그라데이션
  backgrounds: {
    rainbow: 'bg-gradient-to-br from-pink-100 via-yellow-100 to-blue-100',
    sky: 'bg-gradient-to-b from-blue-200 to-blue-100',
    sunny: 'bg-gradient-to-br from-yellow-100 to-orange-100'
  },
  
  // 텍스트 색상
  text: {
    title: '#FF6B9D',     // 제목용 핑크
    primary: '#2D3436',   // 본문용 진한 회색
    secondary: '#636E72', // 부제목용 회색
    accent: '#00B894'     // 강조용 초록
  },
  
  // 상호작용 색상
  interactive: {
    hover: '#FFE66D',
    active: '#FF6B6B',
    disabled: '#DDD'
  }
};

export const grade2PlayTheme = {
  colors: grade2PlayColors,
  
  // 폰트 스타일
  fonts: {
    title: 'text-5xl font-bold',
    subtitle: 'text-2xl font-semibold', 
    body: 'text-xl',
    small: 'text-lg'
  },
  
  // 간격과 크기
  spacing: {
    section: 'mb-12',
    card: 'p-8',
    icon: 'w-20 h-20'
  },
  
  // 모양과 그림자
  shapes: {
    rounded: 'rounded-3xl',
    circle: 'rounded-full',
    shadow: 'shadow-2xl'
  }
};