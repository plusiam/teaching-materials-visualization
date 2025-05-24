# 📁 폴더 구조 개선 작업 로그

## 🎯 목표
기존의 `grade{N}_{subject}` 형태의 평면적 구조를  
`elementary/grade{N}/{subject}_u{unit}_{topic}` 형태의 계층적 구조로 개선

## 📊 변경 사항

### 새로 추가된 문서
- ✅ `docs/FOLDER_STRUCTURE.md` - 폴더 구조 가이드
- ✅ `2025/elementary/grade3/moral_u02_sibling_harmony/README.md` - 상세 자료 설명

### 이동 완료된 자료
- ✅ `siblings_harmony_worksheet_20250524.jsx` → `1-worksheet-sibling-harmony-20250524.jsx`

### 이동 예정 자료
- ⏳ `siblings_harmony_worksheet_20250524.svg` → `1-worksheet-sibling-harmony-20250524.svg`
- ⏳ `activity_guide_siblings_harmony.md` → `activity-guide-sibling-harmony.md`
- ⏳ `double_sided_printing_guide.md` → `printing-guide-double-sided.md`
- ⏳ 양면 활동지 관련 파일들

## 🗂️ 새로운 폴더 구조 미리보기

```
2025/
├── elementary/
│   ├── grade2/
│   │   └── play_u01_friendship/
│   ├── grade3/
│   │   └── moral_u02_sibling_harmony/     ✅ 진행 중
│   ├── grade4/
│   │   └── moral_u01_honesty/
│   └── grade6/
│       └── moral_u01_global_citizenship/
├── docs/
│   └── FOLDER_STRUCTURE.md                ✅ 완료
└── legacy/                                 (기존 구조 보관용)
    └── visualization/
        ├── grade2_play/
        ├── grade3_moral/
        ├── grade4_moral/
        └── grade6_moral/
```

## 📝 명명 규칙 적용 현황

### 폴더명 ✅
- `grade3_moral` → `moral_u02_sibling_harmony`

### 파일명 ✅  
- `siblings_harmony_worksheet_20250524.jsx` → `1-worksheet-sibling-harmony-20250524.jsx`

### 컴포넌트명 (유지)
- `Grade3SiblingsWorksheet` (기존과 동일)

## 🔄 다음 단계

1. **나머지 파일 이동** (자동화 스크립트 개발)
2. **다른 학년 폴더 구조 개선**
3. **레거시 폴더 정리**
4. **검색 인덱스 업데이트**

## 💡 개선 효과

### Before (기존)
```bash
find grade3_moral -name "*.jsx"
# 결과: 긴 파일명, 교육과정 정보 부족
```

### After (개선)
```bash
find elementary/grade3 -name "*worksheet*"
# 결과: 체계적 분류, 명확한 자료 유형 구분
```

---

## 🤝 협업 가이드

이제 새로운 자료 추가 시:
1. `elementary/grade{N}/{subject}_u{unit}_{topic}/` 폴더 생성
2. README.md 템플릿 적용  
3. 파일명 규칙 준수: `{차시}-{타입}-{주제}-{날짜}.{확장자}`

**문의사항**: Issues 탭에 등록 부탁드립니다! 🙋‍♀️
