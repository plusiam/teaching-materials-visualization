# 2025년 교육자료 통합 관리 시스템

## 📚 전체 구조 개요

### 🎓 Elementary (교육과정 중심)
```
elementary/
├── grade2/play_u01_friendship/          # 2학년 놀이 1단원: 친구
├── grade3/moral_u02_sibling_harmony/    # 3학년 도덕 2단원: 형제자매 화목
├── grade4/moral_u01_honesty/            # 4학년 도덕 1단원: 정직
└── grade6/                              # 6학년 단원들
```

### 🎨 Visualization (시각화 라이브러리)
```
visualization/
├── grade2_play/                         # 2학년 놀이용 시각화
├── grade3_moral/                        # 3학년 도덕용 시각화  
├── grade4_moral/                        # 4학년 도덕용 시각화
├── grade5_moral/                        # 5학년 도덕용 시각화
├── grade6_moral/                        # 6학년 도덕용 시각화
└── shared/                              # 공통 사용 시각화
```

## 🔗 상호 연결 시스템

### 파일 명명 규칙
- **Elementary**: `[교과]_u[단원번호]_[주제명]`
- **Visualization**: `[주제명]_[날짜].jsx/svg`

### 연결 방식
1. **Elementary → Visualization**: `visual_materials.json` 매핑 파일
2. **Visualization → Elementary**: 각 시각화 파일의 메타데이터
3. **Cross-Reference**: 중앙 인덱스를 통한 양방향 검색

## 📋 활용 시나리오

### 시나리오 1: 수업 준비
1. `elementary/grade3/moral_u02_sibling_harmony/` 접근
2. `visual_materials.json`에서 사용 가능한 시각화 확인
3. 링크된 시각화 자료 즉시 활용

### 시나리오 2: 시각화 재활용
1. `visualization/conflict_resolution_20250524.jsx` 발견
2. 메타데이터에서 어떤 단원들에서 사용 가능한지 확인
3. 필요한 단원에 즉시 적용

## 🎯 자동화 명령어 (향후 개발)
```bash
# 새 단원 생성 (시각화 자료 자동 연결)
create_unit --grade=3 --subject=moral --unit=03 --topic="정의로운 생활"

# 시각화 자료와 단원 연결
link_visual --visual="justice_guide_20250524" --unit="grade3/moral_u03_justice"

# 전체 연결 상태 확인
check_links --grade=all
```

## 📊 현재 구축 상태
- ✅ 기본 폴더 구조 완성
- ✅ 시각화 템플릿 시스템 구축
- 🔄 상호 연결 시스템 구축 중
- ⏳ 자동화 스크립트 개발 예정