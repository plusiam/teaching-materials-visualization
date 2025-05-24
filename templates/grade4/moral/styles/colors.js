/**
 * 4학년 도덕 템플릿 - 색상 시스템
 * 특징: 체계적이고 구조적, 논리적 사고 과정 표현, 차분한 색상
 */

export const grade4MoralColors = {
  // 메인 색상 팔레트 (체계적이고 구조적)
  primary: {
    purple: '#8B5CF6',    // 보라 - 지혜와 성찰
    blue: '#3B82F6',      // 파랑 - 논리와 체계
    indigo: '#6366F1',    // 인디고 - 깊이와 안정
    teal: '#14B8A6'       // 청록 - 균형과 조화
  },
  
  // 활동 단계별 색상
  steps: {
    situation: '#8B5CF6',   // 상황 제시
    thinking: '#3B82F6',    // 사고 과정
    choice: '#6366F1',      // 선택과 판단
    reflection: '#14B8A6'   // 성찰과 다짐
  },
  
  // 배경 색상 (차분하고 집중도 높은)
  backgrounds: {
    main: '#FAFBFC',        // 연한 회색
    card: '#FFFFFF',        // 순백
    accent: '#F1F5F9',      // 연한 파랑
    highlight: '#EEF2FF'    // 연한 보라
  },
  
  // 텍스트 색상
  text: {
    primary: '#1E293B',     // 진한 회색
    secondary: '#475569',   // 중간 회색
    muted: '#64748B',       // 연한 회색
    accent: '#8B5CF6'       // 강조 보라
  },
  
  // 상태 표시 색상
  status: {
    correct: '#10B981',     // 올바른 선택
    incorrect: '#EF4444',   // 잘못된 선택
    thinking: '#F59E0B',    // 고민 중
    neutral: '#6B7280'      // 중립
  }
};

export const grade4MoralTheme = {
  colors: grade4MoralColors,
  
  // 폰트 시스템 (구조적이고 체계적)
  typography: {
    title: 'text-3xl font-semibold tracking-tight',   // 제목
    subtitle: 'text-xl font-medium',                  // 부제목
    section: 'text-lg font-semibold',                 // 섹션 제목
    body: 'text-base leading-relaxed',                // 본문
    step: 'text-sm font-medium',                      // 단계 표시
    caption: 'text-xs text-gray-500'                  // 설명
  },
  
  // 레이아웃 (논리적 구조 강조)
  layout: {
    container: 'max-w-4xl mx-auto',
    section: 'mb-8',
    card: 'p-6 rounded-lg',
    step: 'mb-6',
    flow: 'space-y-4'
  },
  
  // 구조적 요소
  structure: {
    stepIndicator: 'w-8 h-8 rounded-full flex items-center justify-center',
    connector: 'w-px h-8 bg-gray-300',
    flowArrow: '→',
    divider: 'border-t border-gray-200'
  },
  
  // 상호작용 (체계적 피드백)
  interaction: {
    hover: 'hover:shadow-md transition-shadow',
    focus: 'focus:ring-2 focus:ring-purple-500',
    active: 'active:transform active:scale-95',
    disabled: 'opacity-50 cursor-not-allowed'
  }
};