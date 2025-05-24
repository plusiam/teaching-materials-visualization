# 🎨 교육자료 시각화 템플릿 시스템

## 📋 시스템 개요

이 템플릿 시스템은 학년별 교육 특성을 반영한 디자인 가이드라인과 재사용 가능한 컴포넌트를 제공하여, 일관성 있고 효율적인 교육자료 개발을 지원합니다.

### 🎯 핵심 철학
1. **교육적 적합성**: 각 학년의 인지발달 단계와 학습 특성 반영
2. **디자인 일관성**: 학년별 시각적 통일성과 브랜드 정체성 유지  
3. **개발 효율성**: 템플릿 재사용을 통한 빠른 자료 개발
4. **확장 가능성**: 새로운 교과와 주제에 대한 유연한 확장

---

## 📁 시스템 구조

```
templates/
├── shared/              # 🔗 공통 컴포넌트
│   └── components/
│       └── CommonComponents.jsx
├── grade2/              # 🐰 2학년 놀이 템플릿  
│   └── play/
│       ├── styles/colors.js
│       └── components/PlayComponents.jsx
├── grade3/              # 🐷 3학년 도덕 템플릿
│   └── moral/
│       ├── styles/colors.js  
│       └── components/WorksheetComponents.jsx
├── grade4/              # 📊 4학년 도덕 템플릿
│   └── moral/
│       ├── styles/colors.js
│       └── components/StructuredComponents.jsx
├── grade6/              # 🌍 6학년 도덕 템플릿
│   └── moral/
│       ├── styles/colors.js
│       └── components/MinimalComponents.jsx
└── examples/            # 📄 참조 시스템 예시
    └── template-ref-grade3-moral.json
```

---

## 🎨 학년별 디자인 시스템

### 2학년 놀이 🐰
- **특징**: 친근하고 활동적인 디자인
- **색상**: 매우 밝고 화려한 색상 (`#FF6B6B`, `#4ECDC4`, `#FFE66D`, `#A8E6CF`)
- **요소**: 동물 캐릭터, SVG 일러스트, 둥근 모서리, 애니메이션
- **교육적 접근**: 놀이 중심, 체험 활동, 구체적 조작

### 3학년 도덕 🐷  
- **특징**: 스토리텔링 중심, 감정 표현 중시
- **색상**: 차분한 밝은색 (`#FF6B9D`, `#4ECDC4`, `#FFD93D`, `#A8E6CF`)
- **요소**: 9:16 세로 워크시트, 체크리스트, 감정 얼굴, 말풍선
- **교육적 접근**: 감정 표현, 개별화 학습, 상황 중심 사고

### 4학년 도덕 📊
- **특징**: 체계적이고 구조적인 디자인  
- **색상**: 차분한 보라/파랑 계열 (`#8B5CF6`, `#3B82F6`, `#6366F1`, `#14B8A6`)
- **요소**: 논리적 흐름도, 선택지 분석, 원인-결과 다이어그램
- **교육적 접근**: 논리적 사고, 단계별 분석, 체계적 판단

### 6학년 도덕 🌍
- **특징**: 성숙하고 미니멀한 디자인
- **색상**: 절제된 회색/검정 계열 (`#2D3436`, `#636E72`, `#00B894`, `#74B9FF`)  
- **요소**: 깔끔한 카드, 격자 레이아웃, 성찰 공간, 추상적 표현
- **교육적 접근**: 철학적 사고, 글로벌 시각, 성찰적 학습

---

## 🔧 템플릿 참조 시스템

각 교육자료는 `template-ref.json` 파일을 통해 사용된 템플릿 정보를 관리합니다.

### 예시 구조
```json
{
  "templateSystem": {
    "version": "1.0.0",
    "lastUpdated": "2025-05-24"
  },
  "templatePath": "templates/grade3/moral/",
  "metadata": {
    "grade": 3,
    "subject": "도덕",
    "unit": "02", 
    "topic": "sibling_harmony",
    "materialType": "worksheet"
  },
  "components": [
    "WorksheetHeader",
    "ActivitySection", 
    "FamilyDrawingBoxes",
    "CheckboxList"
  ],
  "styleTheme": "grade3-moral-storytelling"
}
```

---

## 🤖 자동화 도구

### 1. 템플릿 기반 자료 생성
```bash
node tools/generators/create-from-template.js \
  --grade=3 \
  --subject=moral \
  --unit=02 \
  --topic=honesty \
  --type=worksheet
```

**결과**: `elementary/grade3/moral_u02_honesty/` 폴더에 완전한 자료 세트 생성

### 2. 기존 자료 마이그레이션
```bash
node tools/migrators/migrate-legacy-structure.js
```

**기능**: 
- 기존 `grade{N}_{subject}` 구조를 새 구조로 변환
- 파일명 표준화 (`siblings_harmony_worksheet.jsx` → `1-worksheet-sibling-harmony.jsx`)
- `template-ref.json` 자동 생성
- 레거시 백업 생성

### 3. 일괄 SVG 변환 (개발 예정)
```bash
npm run convert:svg
```

---

## 🚀 사용 가이드

### 새 자료 개발 프로세스

1. **템플릿 선택**
   ```bash
   # 3학년 도덕 자료 생성
   npm run create -- --grade=3 --subject=moral --unit=03 --topic=honesty --type=worksheet
   ```

2. **컴포넌트 활용**
   ```jsx
   // 템플릿 컴포넌트 임포트
   import { WorksheetHeader, ActivitySection } from '../../../templates/grade3/moral/components/WorksheetComponents.jsx';
   
   // 공통 컴포넌트 임포트  
   import { BaseLayout, CardContainer } from '../../../templates/shared/components/CommonComponents.jsx';
   ```

3. **스타일 적용**
   ```jsx
   import { grade3MoralTheme } from '../../../templates/grade3/moral/styles/colors.js';
   
   // 테마 색상 사용
   <div style={{ backgroundColor: grade3MoralTheme.colors.primary.pink }}>
   ```

4. **SVG 변환 및 배포**
   ```bash
   npm run convert:svg
   npm run deploy
   ```

### 기존 자료 활용

1. **마이그레이션 실행**
   ```bash
   npm run migrate
   ```

2. **template-ref.json 확인 및 수정**
3. **README.md 업데이트**
4. **필요시 컴포넌트 리팩토링**

---

## 📦 컴포넌트 라이브러리

### 공통 컴포넌트 (`templates/shared/`)
- `BaseLayout`: 기본 레이아웃 컨테이너
- `WorksheetHeader`: 범용 워크시트 헤더
- `CardContainer`: 범용 카드 컨테이너  
- `CheckboxGroup`: 체크박스 그룹
- `InputField`: 입력 필드
- `SpeechBubble`: 말풍선
- `IconButton`: 아이콘 버튼

### 학년별 전용 컴포넌트

#### 2학년 놀이 (`templates/grade2/play/`)
- `AnimalCharacter`: 동물 캐릭터
- `PlayfulBackground`: 활동적 배경
- `PlayRuleCard`: 놀이 규칙 카드
- `ActivityCheckbox`: 체크박스 활동
- `Grade2Header`: 2학년용 헤더

#### 3학년 도덕 (`templates/grade3/moral/`)
- `WorksheetHeader`: 워크시트 헤더 (9:16)
- `ActivitySection`: 활동 섹션 컨테이너
- `FamilyDrawingBoxes`: 가족 그리기 박스
- `CheckboxList`: 체크박스 리스트
- `EmotionFace`: 감정 얼굴 표현
- `SpeechBubble`: 말풍선
- `InputLine`: 입력 라인

#### 4학년 도덕 (`templates/grade4/moral/`)
- `ThinkingFlowStep`: 단계별 사고 흐름
- `ChoiceCard`: 논리적 선택 카드
- `SituationCard`: 상황 제시 카드
- `AnalysisChart`: 논리적 분석 차트
- `CauseEffectDiagram`: 원인-결과 다이어그램
- `ReflectionQuestions`: 성찰 질문 박스

#### 6학년 도덕 (`templates/grade6/moral/`)
- `MinimalHeader`: 미니멀 헤더
- `GlobalIssueCard`: 글로벌 이슈 카드
- `ValueCard`: 핵심 가치 카드
- `ActionLevelCard`: 단계별 행동 계획
- `ReflectionBox`: 성찰 질문 박스
- `ActionPledge`: 실천 다짐 영역
- `QuoteBox`: 인용구 박스

---

## 🎯 확장 가이드

### 새 학년 템플릿 추가

1. **색상 시스템 정의**
   ```javascript
   // templates/grade5/moral/styles/colors.js
   export const grade5MoralColors = {
     primary: { /* 색상 팔레트 */ },
     backgrounds: { /* 배경 색상 */ },
     text: { /* 텍스트 색상 */ }
   };
   ```

2. **컴포넌트 개발**
   ```javascript
   // templates/grade5/moral/components/ConceptualComponents.jsx
   export const AbstractConceptCard = ({ concept, examples }) => {
     // 5학년 특성에 맞는 추상적 개념 카드
   };
   ```

3. **자동화 도구 업데이트**
   ```javascript
   // tools/generators/create-from-template.js에 grade5 추가
   ```

### 새 교과 템플릿 추가

1. **폴더 구조 생성**
   ```
   templates/grade{N}/science/
   ├── styles/colors.js
   └── components/ScienceComponents.jsx
   ```

2. **교과 특성 반영**
   - 과학: 실험 과정, 관찰 기록, 가설-검증
   - 수학: 문제해결 과정, 단계별 풀이, 시각화
   - 사회: 지도, 연표, 비교 분석

---

## 🔄 유지보수

### 버전 관리
- 템플릿 시스템 버전: Semantic Versioning 사용
- 컴포넌트별 개별 버전 관리
- template-ref.json에 버전 정보 기록

### 품질 관리
- 컴포넌트 테스트 자동화
- 디자인 시스템 일관성 검증
- 접근성 가이드라인 준수

### 성능 최적화
- 컴포넌트 Lazy Loading
- SVG 최적화
- 번들 크기 모니터링

---

## 📞 지원 및 기여

### 이슈 리포팅
- GitHub Issues를 통한 버그 리포트
- 새 기능 제안 및 개선 사항

### 기여 가이드
1. Fork 저장소
2. Feature 브랜치 생성
3. 컴포넌트/템플릿 개발
4. 테스트 및 문서화
5. Pull Request 제출

### 커뮤니티
- 교육자료 개발 베스트 프랙티스 공유
- 템플릿 활용 사례 교환
- 교육 효과성 피드백

---

*템플릿 시스템으로 더 나은 교육자료를 만들어갑시다! 🎓✨*