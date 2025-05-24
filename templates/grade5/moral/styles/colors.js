/**
 * 5학년 도덕 템플릿 - 색상 시스템
 * 특징: 개념적이고 성찰적, 세련된 색상 조합, 추상적 개념 시각화
 */

export const grade5MoralColors = {
  // 메인 색상 팔레트 (파랑, 청록 계열 - 세련되고 개념적)
  primary: {
    deepBlue: '#1E3A8A',    // 깊은 파랑 - 지혜와 성찰
    teal: '#0891B2',        // 청록 - 개념적 사고
    cyan: '#0891B2',        // 시안 - 창의적 탐구
    emerald: '#059669'      // 에메랄드 - 가치 성장
  },
  
  // 개념별 색상 (추상적 사고 지원)
  concepts: {
    wisdom: '#1E3A8A',      // 지혜 - 깊은 파랑
    justice: '#059669',     // 정의 - 에메랄드  
    empathy: '#0891B2',     // 공감 - 청록
    values: '#7C3AED'       // 가치 - 보라
  },
  
  // 배경 시스템 (차분하고 세련된)
  backgrounds: {
    main: 'from-blue-50 via-cyan-50 to-teal-50',  // 메인 그라데이션
    card: '#FFFFFF',                                // 카드 배경
    section: '#F0F9FF',                            // 섹션 배경
    accent: '#E0F2FE'                              // 강조 배경
  },
  
  // 텍스트 색상 (가독성과 세련됨)
  text: {
    primary: '#1E293B',    // 주요 텍스트 (진한 슬레이트)
    secondary: '#475569',  // 보조 텍스트 (중간 슬레이트)
    muted: '#64748B',      // 연한 텍스트 (연한 슬레이트)
    accent: '#0891B2'      // 강조 텍스트 (청록)
  },
  
  // 상태별 색상 (성찰적 분위기)
  status: {
    reflection: '#7C3AED', // 성찰 - 보라
    insight: '#0891B2',    // 통찰 - 청록
    growth: '#059669',     // 성장 - 에메랄드
    connection: '#1E3A8A'  // 연결 - 깊은 파랑
  }
};

export const grade5MoralTheme = {
  colors: grade5MoralColors,
  
  // 타이포그래피 (개념적이고 성찰적)
  typography: {
    title: 'text-3xl font-semibold tracking-wide',  // 대제목
    subtitle: 'text-xl font-medium',                // 부제목
    concept: 'text-lg font-semibold',               // 개념 제목
    body: 'text-base leading-relaxed',              // 본문
    reflection: 'text-base leading-loose',          // 성찰 텍스트
    caption: 'text-sm text-slate-600'               // 캡션
  },
  
  // 레이아웃 시스템 (개념 중심)
  layout: {
    container: 'max-w-6xl mx-auto',        // 컨테이너
    section: 'mb-12',                      // 섹션 간격
    card: 'p-6 rounded-xl shadow-md',      // 카드 스타일
    conceptMap: 'grid gap-8',              // 개념도 그리드
    spacing: {
      concept: 'p-6',
      reflection: 'p-8',
      connection: 'p-4'
    }
  },
  
  // 상호작용 요소 (사려깊은 반응)
  interaction: {
    transition: 'transition-all duration-500',
    hover: 'hover:shadow-lg hover:scale-105',
    focus: 'focus:outline-none focus:ring-2 focus:ring-blue-500',
    border: 'border border-blue-100'
  },
  
  // 개념적 시각화 요소
  visualization: {
    connection: {
      line: 'stroke-blue-400',
      node: 'fill-blue-100 stroke-blue-500',
      text: 'fill-blue-700'
    },
    hierarchy: {
      level1: '#1E3A8A',  // 최상위 개념
      level2: '#0891B2',  // 중간 개념  
      level3: '#059669',  // 하위 개념
      level4: '#7C3AED'   // 세부 개념
    }
  },
  
  // 형태와 그림자 (세련된 디자인)
  shapes: {
    radius: {
      sm: 'rounded-lg',
      md: 'rounded-xl', 
      lg: 'rounded-2xl',
      concept: 'rounded-3xl'
    },
    shadow: {
      subtle: 'shadow-sm',
      moderate: 'shadow-md',
      strong: 'shadow-lg',
      conceptual: 'shadow-xl shadow-blue-200/50'
    }
  }
};