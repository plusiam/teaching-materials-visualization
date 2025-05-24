# 🛠️ 자동화 도구 사용법

## 📋 개요
`tools/migrate_folders.py` 스크립트는 기존 교육자료를 새로운 폴더 구조로 자동 이동시켜주는 도구입니다.

## 🚀 빠른 시작

### 1. 전체 미리보기 (안전)
```bash
cd teaching-materials-visualization
python tools/migrate_folders.py --dry-run
```

### 2. 실제 마이그레이션 실행
```bash
python tools/migrate_folders.py
```

### 3. 특정 폴더만 이동
```bash
python tools/migrate_folders.py --folder grade3_moral --dry-run
python tools/migrate_folders.py --folder grade3_moral
```

## 📊 마이그레이션 대상

| 기존 폴더 | 새로운 위치 | 주제 |
|-----------|-------------|------|
| `grade2_play` | `elementary/grade2/play_u01_friendship` | 친구와 함께 놀기 |
| `grade3_moral` | `elementary/grade3/moral_u02_sibling_harmony` | 형제자매와 사이좋게 지내요 |
| `grade4_moral` | `elementary/grade4/moral_u01_honesty` | 정직한 생활 |
| `grade6_moral` | `elementary/grade6/moral_u01_global_citizenship` | 세계 시민으로서의 역할 |

## 📝 파일명 변환 예시

### Before → After
```
siblings_harmony_worksheet_20250524.jsx
→ 1-worksheet-sibling-harmony-20250524.jsx

conflict_resolution_20250524.svg  
→ 1-conflict-resolution-topic-20250524.svg

activity_guide_siblings_harmony.md
→ 1-guide-sibling-harmony-20250524.md
```

## 🔧 스크립트 기능

### ✅ 자동 처리 항목
- [x] 폴더 구조 생성
- [x] 파일 이동 및 이름 변경
- [x] README.md 자동 생성
- [x] 마이그레이션 로그 저장
- [x] 안전한 dry-run 모드

### 📚 자동 생성되는 README.md
```markdown
# 3학년 도덕 - 형제자매와 사이좋게 지내요

## 📚 교육과정 정보
- **학년**: 3학년
- **교과**: 도덕
- **단원**: 2. 형제자매와 사이좋게 지내요
- **차시**: 1-3차시 (총 3차시)

## 🎯 학습 목표
- 형제자매의 소중함 깨닫기
- 가족 간 갈등 해결 방법 익히기

## 📁 포함 자료
- [x] 활동지 (worksheet)
- [x] 개념도 (concept-map)
```

## 📄 로그 파일

스크립트 실행 후 `migration_log_YYYYMMDD_HHMMSS.json` 파일이 생성됩니다:

```json
{
  "total_folders": 4,
  "total_files": 25,
  "success_folders": 4,
  "migration_logs": [
    {
      "folder": "grade3_moral",
      "source": "2025/visualization/grade3_moral",
      "target": "2025/elementary/grade3/moral_u02_sibling_harmony",
      "files_migrated": [
        {
          "original": "siblings_harmony_worksheet_20250524.jsx",
          "new": "1-worksheet-sibling-harmony-20250524.jsx",
          "type": ".jsx"
        }
      ]
    }
  ]
}
```

## ⚡ 고급 사용법

### 사용자 정의 경로
```bash
python tools/migrate_folders.py --base-path custom/path
```

### 단계별 실행
```bash
# 1단계: 시뮬레이션으로 확인
python tools/migrate_folders.py --dry-run

# 2단계: 폴더별 점진적 실행  
python tools/migrate_folders.py --folder grade3_moral
python tools/migrate_folders.py --folder grade4_moral

# 3단계: 나머지 전체 실행
python tools/migrate_folders.py
```

## 🚨 주의사항

### ⚠️ 실행 전 체크리스트
- [ ] `--dry-run`으로 미리보기 확인
- [ ] 중요 파일 백업 완료
- [ ] 현재 작업 중인 파일 커밋
- [ ] Git 상태가 clean한지 확인

### 🔒 안전 기능
- **복사 방식**: 원본 파일 삭제하지 않음
- **중복 방지**: 동일 파일명 충돌 시 안전 처리
- **로그 기록**: 모든 변경 사항 추적 가능
- **Dry-run**: 실제 실행 전 시뮬레이션

## 🆘 문제 해결

### 자주 묻는 질문

**Q: 스크립트 실행 시 오류가 발생해요**
```bash
# Python 버전 확인 (3.6+ 필요)
python --version

# 권한 확인
ls -la tools/migrate_folders.py
chmod +x tools/migrate_folders.py
```

**Q: 파일이 누락되었어요**
```bash
# 로그 파일 확인
cat migration_log_*.json | grep -A5 "files_skipped"

# 원본 폴더 확인 (삭제되지 않음)
ls 2025/visualization/
```

**Q: README가 잘못 생성되었어요**
```bash
# 수동 수정 후 Git 커밋
git add 2025/elementary/grade3/moral_u02_sibling_harmony/README.md
git commit -m "Fix README template"
```

## 🔄 되돌리기

마이그레이션을 되돌리려면:
```bash
# 1. 새로 생성된 폴더 삭제
rm -rf 2025/elementary/

# 2. Git 리셋 (커밋 전이라면)
git checkout -- .

# 3. 원본 폴더는 그대로 유지됨
ls 2025/visualization/
```

## 📞 지원

- **Issues**: [GitHub Issues](https://github.com/plusiam/teaching-materials-visualization/issues)
- **Discussions**: 사용법 관련 질문
- **Wiki**: 상세 가이드 (준비 중)

---

💡 **팁**: 처음 사용하실 때는 꼭 `--dry-run` 옵션으로 미리 확인해보세요!
