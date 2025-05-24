# 📖 템플릿 시스템 완전 가이드

## 🎯 시스템 개요

이 템플릿 시스템은 **교육자료 시각화 자동화**를 위한 체계적인 디자인 시스템입니다. 
학년별 특성을 반영한 컴포넌트 라이브러리와 스타일 가이드를 제공합니다.

## 📁 전체 구조

```
templates/
├── 📁 shared/                    # 🔗 공통 시스템
│   ├── components/               # 범용 컴포넌트
│   ├── styles/                   # 공통 스타일
│   └── icons/                    # 아이콘 라이브러리
│
├── 📁 grade2/play/              # 🎈 2학년 놀이
│   ├── components/               # 친근한 동물, 활동 컴포넌트
│   ├── styles/                   # 밝고 화려한 색상 시스템
│   └── templates/                # 기본 템플릿
│
├── 📁 grade3/moral/             # 🎨 3학년 도덕  
│   ├── components/               # 워크시트, 감정표현 컴포넌트
│   ├── styles/                   # 스토리텔링 색상 시스템
│   └── templates/                # 9:16 워크시트 템플릿
│
├── 📁 grade4/moral/             # 📊 4학년 도덕
│   ├── components/               # 논리적, 체계적 컴포넌트
│   ├── styles/                   # 차분한 보라/파랑 시스템
│   └── templates/                # 구조화된 템플릿
│
└── 📁 grade6/moral/             # 🌍 6학년 도덕
    ├── components/               # 미니멀, 철학적 컴포넌트  
    ├── styles/                   # 절제된 회색/검정 시스템
    └── templates/                # 글로벌 시민의식 템플릿
```

---

## 🎨 학년별 디자인 철학

### 2학년 놀이 🎈
- **교육철학**: 놀이를 통한 자연스러운 학습
- **색상**: `#FF6B6B, #4ECDC4, #FFE66D, #A8E6CF` (매우 밝고 화려)
- **특징**: 동물 캐릭터, SVG 일러스트, 체험활동 중심
- **컴포넌트**: `AnimalCharacter`, `PlayRuleCard`, `Grade2Header`

### 3학년 도덕 🎨
- **교육철학**: 스토리텔링과 감정 표현 중심
- **색상**: `#FF6B9D, #4ECDC4, #FFD93D, #A8E6CF` (차분한 밝은색)
- **특징**: 9:16 워크시트, 체크리스트, 개별화 학습
- **컴포넌트**: `WorksheetHeader`, `EmotionFace`, `SpeechBubble`

### 4학년 도덕 📊
- **교육철학**: 논리적이고 체계적인 사고 훈련
- **색상**: `#8B5CF6, #3B82F6, #10B981, #F59E0B` (차분한 보라/파랑)
- **특징**: 원인-결과 관계, 단계별 사고과정
- **컴포넌트**: `LogicalFlowChart`, `CauseEffectDiagram`

### 6학년 도덕 🌍
- **교육철학**: 글로벌 시민의식과 철학적 성찰
- **색상**: `#2D3436, #636E72, #00B894, #74B9FF` (절제된 미니멀)
- **특징**: 미니멀 디자인, 추상적 개념 표현
- **컴포넌트**: `MinimalHeader`, `GlobalIssueCard`, `ReflectionBox`

---

## 🔧 사용법

### 1. 새 자료 생성하기

```bash
# 템플릿 기반 자료 생성
npm run create --grade=3 --subject=moral --unit=03 --topic=honesty --type=worksheet

# 결과: elementary/grade3/moral_u03_honesty/ 폴더에 생성됨
```

### 2. 템플릿 참조 설정

각 자료 폴더에 `template-ref.json` 파일 생성:

```json
{
  "templatePath": "templates/grade3/moral/",
  "components": ["WorksheetHeader", "EmotionFace", "CheckboxList"],
  "styleTheme": "grade3-moral-storytelling",
  "customization": {
    "studentName": "",
    "title": "정직한 생활"
  }
}
```

### 3. 컴포넌트 가져오기

```jsx
// 학년별 컴포넌트 import
import { WorksheetHeader, EmotionFace } from '../../../templates/grade3/moral/components/WorksheetComponents.jsx';
import { grade3MoralColors } from '../../../templates/grade3/moral/styles/colors.js';

// 공통 컴포넌트 import  
import { BaseLayout, CardContainer } from '../../../templates/shared/components/CommonComponents.jsx';
```

---

## 📋 컴포넌트 라이브러리

### 공통 컴포넌트 (All Grades)
- `BaseLayout` - 기본 레이아웃 (비율 설정 가능)
- `WorksheetHeader` - 범용 워크시트 헤더  
- `CardContainer` - 범용 카드 컨테이너
- `CheckboxGroup` - 체크박스 그룹
- `InputField` - 입력 필드
- `SpeechBubble` - 말풍선
- `PrintableFooter` - 인쇄용 푸터

### 2학년 놀이 컴포넌트
- `AnimalCharacter` - 동물 캐릭터 (둥근 배경 + 이모지)
- `PlayfulBackground` - 활동적 배경 (태양, 구름, 언덕)
- `PlayRuleCard` - 놀이 규칙 카드
- `ActivityCheckbox` - 체크박스 활동 영역
- `Grade2Header` - 2학년용 제목 헤더

### 3학년 도덕 컴포넌트  
- `WorksheetHeader` - 9:16 세로 워크시트 헤더
- `ActivitySection` - 활동 섹션 컨테이너
- `FamilyDrawingBoxes` - 가족 그리기 박스들
- `CheckboxList` - 체크박스 리스트 (2열 구성)
- `EmotionFace` - 감정 얼굴 표현 (happy/sad/angry/neutral)
- `SpeechBubble` - 말풍선 (꼬리 포함)
- `InputLine` - 입력 라인
- `WorksheetFooter` - 워크시트 마무리 메시지

### 6학년 도덕 컴포넌트
- `MinimalHeader` - 미니멀 헤더 (아이콘 + 제목)
- `GlobalIssueCard` - 글로벌 이슈 카드
- `ValueCard` - 핵심 가치 카드  
- `ActionLevelCard` - 단계별 행동 계획
- `ReflectionBox` - 성찰 질문 박스
- `ActionPledge` - 실천 다짐 영역
- `ProgressConnector` - 진행 단계 연결선
- `QuoteBox` - 인용구 박스
- `SectionTitle` - 섹션 제목

---

## 🎨 색상 시스템

### 사용법
```jsx
import { grade3MoralColors, grade3MoralTheme } from '../styles/colors.js';

// 색상 직접 사용
<div style={{ backgroundColor: grade3MoralColors.primary.pink }}>

// 테마 시스템 사용  
<h1 className={grade3MoralTheme.fonts.title}>
```

### 학년별 색상 팔레트
- **2학년**: 매우 밝고 화려 (`#FF6B6B, #4ECDC4, #FFE66D, #A8E6CF`)
- **3학년**: 차분한 밝은색 (`#FF6B9D, #4ECDC4, #FFD93D, #A8E6CF`) 
- **4학년**: 차분한 보라/파랑 (`#8B5CF6, #3B82F6, #10B981, #F59E0B`)
- **6학년**: 절제된 회색/검정 (`#2D3436, #636E72, #00B894, #74B9FF`)

---

## 🚀 자동화 도구

### 1. 자료 생성기
```bash
npm run create:material --grade=3 --subject=moral --unit=02 --topic=kindness
```

### 2. SVG 변환기  
```bash
npm run convert:svg --input=worksheet.jsx --output=worksheet.svg
```

### 3. 일괄 변환기
```bash
npm run batch:convert --folder=grade3_moral
```

### 4. 구조 검증기
```bash
npm run validate:structure
```

---

## 📤 내보내기 형식

### 지원 형식
- **JSX** - React 컴포넌트 (개발용)
- **SVG** - 벡터 그래픽 (편집 가능)  
- **PNG** - 래스터 이미지 (고품질)
- **PDF** - 인쇄용 문서

### 호환 소프트웨어
- **PowerPoint** - SVG 삽입 후 텍스트 편집 가능
- **한글** - SVG/PNG 삽입 및 편집
- **Canva** - SVG 업로드 후 사용
- **웹브라우저** - 직접 JSX 렌더링

---

## ✨ 특별 기능

### 1. 반응형 디자인
- 데스크탑, 태블릿, 모바일 최적화
- 인쇄용 A4 크기 자동 조정

### 2. 접근성
- 색상 대비 검증
- 스크린 리더 호환
- 키보드 네비게이션

### 3. 국제화
- 다국어 지원 준비
- 텍스트 분리 시스템

### 4. 버전 관리
- 템플릿 버전 추적
- 하위 호환성 보장

---

## 🤝 기여 가이드

### 새 컴포넌트 추가
1. 해당 학년 `components/` 폴더에 추가
2. JSDoc 주석으로 문서화  
3. PropTypes로 타입 정의
4. 예시 코드 포함

### 새 학년/교과 추가
1. `templates/grade{N}/{subject}/` 폴더 생성
2. `styles/colors.js` 색상 시스템 정의
3. `components/` 폴더에 전용 컴포넌트 추가  
4. `README.md`에 특성 문서화

---

## 🔍 문제 해결

### 자주 묻는 질문

**Q: 템플릿을 수정했는데 기존 자료에 반영이 안돼요**
A: `template-ref.json`의 버전을 확인하고 `npm run update:templates` 실행

**Q: 새 색상을 추가하고 싶어요**  
A: 해당 학년 `styles/colors.js` 파일을 수정하고 컴포넌트에서 참조

**Q: 인쇄했을 때 레이아웃이 깨져요**
A: `print.css` 스타일이 적용되었는지 확인하고 `@media print` 규칙 점검

### 지원 요청
- **GitHub Issues**: 버그 리포트 및 기능 요청
- **Discussions**: 사용법 질문 및 아이디어 공유
- **Wiki**: 상세 가이드 및 예제 코드

---

*템플릿 시스템으로 더 효율적인 교육자료 제작을 경험해보세요! 🚀*