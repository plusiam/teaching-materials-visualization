/**
 * 6학년 도덕 템플릿 - 색상 시스템
 * 특징: 깔끔하고 성숙한 디자인, 미니멀한 스타일, 절제된 색상
 */

export const grade6MoralColors = {
  // 메인 색상 팔레트 (미니멀하고 성숙한)
  primary: {
    charcoal: '#2D3436',  // 진한 회색 - 성숙함과 안정성
    slate: '#636E72',     // 중간 회색 - 균형과 절제  
    emerald: '#00B894',   // 차분한 초록 - 성장과 지혜
    azure: '#74B9FF'      // 부드러운 파랑 - 신뢰와 평화
  },
  
  // 글로벌 이슈별 색상
  globalIssues: {
    environment: '#00B894',  // 환경 - 초록
    equality: '#74B9FF',     // 평등 - 파랑  
    peace: '#636E72',        // 평화 - 회색
    technology: '#2D3436'    // 기술 - 검정
  },
  
  // 배경 시스템
  backgrounds: {
    main: 'from-gray-50 to-slate-100',  // 메인 그라데이션
    card: '#FFFFFF',                     // 카드 배경
    section: '#F8F9FA',                  // 섹션 배경
    accent: '#F1F3F4'                    // 강조 배경
  },
  
  // 텍스트 색상 (가독성 중심)
  text: {
    primary: '#2D3436',    // 주요 텍스트
    secondary: '#636E72',  // 보조 텍스트  
    muted: '#74B9FF',      // 연한 텍스트
    accent: '#00B894'      // 강조 텍스트
  },
  
  // 상태별 색상
  status: {
    info: '#74B9FF',       // 정보
    success: '#00B894',    // 성공/완료
    warning: '#FDCB6E',    // 주의/경고
    subtle: '#DDD'         // 미묘한 표현
  }
};

export const grade6MoralTheme = {
  colors: grade6MoralColors,
  
  // 타이포그래피 (성숙하고 읽기 쉬운)
  typography: {
    title: 'text-3xl font-light tracking-wide',      // 대제목
    subtitle: 'text-xl font-medium',                 // 부제목
    section: 'text-lg font-medium',                  // 섹션 제목
    body: 'text-base leading-relaxed',               // 본문
    caption: 'text-sm text-gray-600',                // 캡션
    quote: 'text-lg font-light leading-relaxed'     // 인용문
  },
  
  // 레이아웃 시스템
  layout: {
    container: 'max-w-7xl mx-auto',         // 컨테이너
    section: 'mb-16',                       // 섹션 간격
    card: 'p-8 rounded-xl shadow-sm',       // 카드 스타일
    grid: 'grid gap-6',                     // 그리드 간격
    spacing: {
      xs: 'p-4',
      sm: 'p-6', 
      md: 'p-8',
      lg: 'p-12'
    }
  },
  
  // 상호작용 요소
  interaction: {
    transition: 'transition-all duration-300',
    hover: 'hover:shadow-md',
    focus: 'focus:outline-none focus:ring-2',
    border: 'border border-gray-100'
  },
  
  // 형태와 그림자 (미니멀)
  shapes: {
    radius: {
      sm: 'rounded-lg',
      md: 'rounded-xl', 
      lg: 'rounded-2xl',
      full: 'rounded-full'
    },
    shadow: {
      sm: 'shadow-sm',
      md: 'shadow-md',
      lg: 'shadow-lg'
    }
  }
};