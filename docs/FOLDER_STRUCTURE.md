# 📁 폴더 구조 가이드

## 🎯 설계 원칙
- **직관성**: 학년-교과-단원-차시 순으로 체계화
- **확장성**: 새로운 자료 추가가 쉬운 구조
- **검색성**: 일관된 명명 규칙으로 빠른 탐색
- **협업성**: 다른 교사들이 쉽게 이해하고 기여

## 🗂️ 폴더 구조

```
teaching-materials-visualization/
├── 2025/
│   └── elementary/                    # 학교급
│       ├── grade1/                    # 학년
│       │   ├── korean_u01_letters/    # 교과_단원_주제
│       │   ├── math_u01_numbers/
│       │   └── play_u01_friends/
│       ├── grade2/
│       │   └── play_u01_friendship/
│       ├── grade3/
│       │   └── moral_u02_sibling_harmony/
│       ├── grade4/
│       │   └── moral_u01_honesty/
│       ├── grade5/
│       └── grade6/
│           └── moral_u01_global_citizenship/
├── templates/                         # 공통 템플릿
│   ├── components/                    # 재사용 컴포넌트
│   └── styles/                        # 스타일 가이드
└── docs/                             # 문서화
    ├── FOLDER_STRUCTURE.md
    └── NAMING_CONVENTION.md
```

## 📝 명명 규칙

### 폴더명
```
{교과코드}_u{단원번호}_{영문주제}

예시:
- korean_u01_reading     (국어 1단원 읽기)
- math_u03_geometry      (수학 3단원 도형)
- moral_u02_honesty      (도덕 2단원 정직)
- science_u01_plants     (과학 1단원 식물)
```

### 교과 코드
```
korean    : 국어
math      : 수학
social    : 사회  
science   : 과학
moral     : 도덕
practical : 실과
music     : 음악
art       : 미술
pe        : 체육
english   : 영어
play      : 놀이 (1-2학년)
```

### 파일명
```
{차시번호}-{자료타입}-{주제}-{날짜}.{확장자}

예시:
- 1-concept-map-family-harmony-20250524.jsx
- 2-worksheet-sibling-relationship-20250524.svg
- 3-mindmap-global-citizenship-20250524.jsx
```

### 자료 타입
```
concept-map    : 개념도
worksheet      : 활동지
mindmap        : 마인드맵
diagram        : 다이어그램
flowchart      : 순서도
infographic    : 인포그래픽
```

## 📚 각 폴더 필수 파일

### README.md 템플릿
```markdown
# {학년} {교과} - {단원명}

## 📚 교육과정 정보
- **학년**: {학년}
- **교과**: {교과}
- **단원**: {단원번호}. {단원명}
- **차시**: {시작차시}-{종료차시}차시 (총 {총차시}차시)
- **성취기준**: [{성취기준코드}]

## 🎯 학습 목표
- {목표1}
- {목표2}

## 📁 포함 자료
- [ ] 개념도 (concept-map)
- [x] 활동지 (worksheet)
- [ ] 마인드맵 (mindmap)

## 🏷️ 태그
`#{학년}` `#{교과}` `#{주제1}` `#{주제2}`

## 📅 제작 정보
- **최초 제작**: {날짜}
- **최종 수정**: {날짜}
- **제작자**: {제작자}
```

## 🔍 자료 검색 방법

### 1. 학년별 검색
```bash
find . -path "*/grade3/*" -name "*.jsx"
```

### 2. 교과별 검색
```bash
find . -name "*moral*" -type d
```

### 3. 자료 타입별 검색
```bash
find . -name "*worksheet*" -name "*.svg"
```

## 🚀 새 자료 추가 절차

1. **폴더 생성**: `elementary/grade{N}/{교과}_u{단원}_{주제}/`
2. **README.md 작성**: 위 템플릿 활용
3. **자료 파일 추가**: 명명 규칙 준수
4. **인덱스 업데이트**: 상위 README에 링크 추가

## 🤝 협업 가이드

### Pull Request 체크리스트
- [ ] 폴더명이 명명 규칙을 준수하는가?
- [ ] README.md가 포함되어 있는가?
- [ ] 파일명이 일관되게 작성되었는가?
- [ ] JSX와 SVG 파일이 모두 포함되었는가?

### 품질 기준
- **교육과정 부합성**: 해당 학년 성취기준에 맞는가?
- **시각적 일관성**: 학년별 디자인 가이드를 따르는가?
- **기술적 완성도**: React 컴포넌트가 올바르게 작동하는가?
- **문서화 완성도**: README가 충분히 상세한가?

---

💡 **문의사항이나 개선 제안이 있으시면 Issues에 등록해 주세요!**
