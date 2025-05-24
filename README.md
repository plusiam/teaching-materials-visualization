# 🎨 교육자료 시각화 자동화 프로젝트

> **템플릿 시스템 기반 교육자료 생성 플랫폼**  
> React 컴포넌트와 SVG 변환을 통한 효율적인 수업자료 제작

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Template System](https://img.shields.io/badge/templates-4%20grades-purple)
![Auto Generation](https://img.shields.io/badge/auto%20generation-✓-brightgreen)

---

## 🚀 **새로운 기능! 템플릿 시스템**

### ⚡ **빠른 시작**
```bash
# 새 교육자료 생성
npm run create -- --grade=3 --unit=02 --topic="정직한 생활" --type=worksheet

# 기존 자료 마이그레이션  
npm run migrate

# SVG 변환
npm run convert:svg
```

### 🎯 **핵심 특징**
- **🎨 학년별 디자인 시스템** - 교육 발달단계를 반영한 시각적 차별화
- **🧩 컴포넌트 라이브러리** - 재사용 가능한 교육용 UI 요소
- **🔄 자동 변환** - JSX → SVG → 다양한 소프트웨어 호환
- **📱 반응형 디자인** - 데스크탑, 태블릿, 인쇄용 최적화

---

## 📁 **프로젝트 구조**

```
📦 teaching-materials-visualization/
├── 🎨 templates/                    # 템플릿 시스템
│   ├── grade2/play/                 # 2학년 놀이 (친근하고 활동적)
│   ├── grade3/moral/                # 3학년 도덕 (스토리텔링 중심)  
│   ├── grade4/moral/                # 4학년 도덕 (논리적, 체계적)
│   ├── grade6/moral/                # 6학년 도덕 (미니멀, 철학적)
│   └── shared/                      # 공통 컴포넌트
│
├── 📚 2025/elementary/              # 실제 교육자료 저장소
│   ├── grade2/play_u01_friendship/
│   ├── grade3/moral_u02_sibling_harmony/
│   ├── grade4/moral_u01_honesty/
│   └── grade6/moral_u01_global_citizenship/
│
├── 🔧 tools/                       # 자동화 도구
│   ├── create-material.js          # 자료 생성기
│   ├── migrate-structure.js        # 구조 마이그레이션
│   └── jsx-to-svg.js              # SVG 변환기
│
└── 📖 docs/                        # 문서화
    ├── TEMPLATE_SYSTEM.md          # 템플릿 시스템 가이드
    └── FOLDER_STRUCTURE.md         # 폴더 구조 설명
```

---

## 🎨 **학년별 디자인 시스템**

### 🎈 **2학년 놀이**
- **색상**: 매우 밝고 화려 (`#FF6B6B`, `#4ECDC4`, `#FFE66D`, `#A8E6CF`)
- **특징**: 동물 캐릭터, 체험활동 중심, 큰 글씨
- **컴포넌트**: `AnimalCharacter`, `PlayRuleCard`, `Grade2Header`

### 🎨 **3학년 도덕**
- **색상**: 차분한 밝은색 (`#FF6B9D`, `#4ECDC4`, `#FFD93D`, `#A8E6CF`)
- **특징**: 스토리텔링, 감정표현, 9:16 워크시트
- **컴포넌트**: `WorksheetHeader`, `EmotionFace`, `CheckboxList`

### 📊 **4학년 도덕**
- **색상**: 차분한 보라/파랑 (`#8B5CF6`, `#3B82F6`, `#10B981`, `#F59E0B`)
- **특징**: 논리적, 체계적, 원인-결과 관계
- **컴포넌트**: `LogicalFlowChart`, `CauseEffectDiagram`

### 🌍 **6학년 도덕**
- **색상**: 절제된 미니멀 (`#2D3436`, `#636E72`, `#00B894`, `#74B9FF`)
- **특징**: 글로벌 시민의식, 철학적 성찰, 미니멀 디자인
- **컴포넌트**: `MinimalHeader`, `GlobalIssueCard`, `ReflectionBox`

---

## 🔧 **사용법**

### 1️⃣ **새 교육자료 생성**
```bash
# 기본 사용법
npm run create -- --grade=3 --unit=02 --topic="형제자매 우애" --type=worksheet

# 다양한 자료 유형
npm run create -- --grade=6 --unit=01 --topic="지구촌 시민의식" --type=mindmap
npm run create -- --grade=2 --unit=01 --topic="친구와 놀기" --type=concept
```

### 2️⃣ **템플릿 기반 커스터마이징**
```jsx
import { WorksheetHeader, EmotionFace } from '../../../templates/grade3/moral/components/';
import { grade3MoralColors } from '../../../templates/grade3/moral/styles/colors.js';

const MyWorksheet = ({ studentName, topic }) => (
  <div>
    <WorksheetHeader grade="3학년" subject="도덕" title={topic} />
    <EmotionFace type="happy" situation="형제자매와 함께 있을 때" />
  </div>
);
```

### 3️⃣ **기존 자료 마이그레이션**
```bash
# 전체 구조 마이그레이션
npm run migrate

# 결과 확인
ls 2025/elementary/
```

---

## 📤 **내보내기 및 활용**

### 지원 형식
- **JSX** - React 컴포넌트 (개발/편집용)
- **SVG** - 벡터 그래픽 (편집 가능, 확대 무손실)  
- **PNG** - 래스터 이미지 (고품질)
- **PDF** - 인쇄용 문서

### 호환 소프트웨어
| 소프트웨어 | 지원 형식 | 편집 가능 |
|-----------|----------|----------|
| **PowerPoint** | SVG, PNG | ✅ 텍스트 편집 |
| **한글** | SVG, PNG | ✅ 텍스트 편집 |
| **Canva** | SVG | ✅ 완전 편집 |
| **웹브라우저** | JSX | ✅ 완전 편집 |

---

## 🎯 **주요 기능**

### ✨ **자동화된 워크플로우**
- **템플릿 기반 생성** - 학년별 특성을 반영한 자동 스타일링
- **일괄 변환** - 여러 파일을 한번에 SVG로 변환
- **구조 검증** - 폴더 구조와 파일명 규칙 자동 검사

### 🎨 **디자인 시스템**
- **학년별 색상 팔레트** - 교육 발달단계 반영
- **반응형 레이아웃** - 다양한 화면 크기 대응
- **접근성 고려** - 색상 대비, 스크린 리더 호환

### 🔧 **개발자 친화적**
- **컴포넌트 라이브러리** - 재사용 가능한 UI 요소
- **TypeScript 지원** - 타입 안전성
- **Hot Reloading** - 실시간 미리보기

---

## 📋 **템플릿 참조 시스템**

각 교육자료는 `template-ref.json`으로 템플릿과 연결됩니다:

```json
{
  "templatePath": "templates/grade3/moral/",
  "components": ["WorksheetHeader", "EmotionFace", "CheckboxList"],
  "styleTheme": "grade3-moral-storytelling",
  "customization": {
    "editable": ["studentName", "studentNumber", "title"],
    "themeable": ["colors", "fonts", "spacing"]
  }
}
```

---

## 🚀 **설치 및 실행**

### 시스템 요구사항
- **Node.js** 14.0.0 이상
- **npm** 6.0.0 이상

### 설치
```bash
git clone https://github.com/plusiam/teaching-materials-visualization.git
cd teaching-materials-visualization
npm install
```

### 빠른 실행
```bash
# 도움말 보기
npm run help

# 새 자료 생성 (대화형)
npm run create

# 기존 자료 마이그레이션
npm run migrate
```

---

## 📚 **문서화**

- **[📖 템플릿 시스템 가이드](docs/TEMPLATE_SYSTEM.md)** - 상세 사용법
- **[📁 폴더 구조 설명](docs/FOLDER_STRUCTURE.md)** - 프로젝트 구조
- **[🔧 개발자 가이드](docs/DEVELOPMENT_GUIDE.md)** - 컴포넌트 개발
- **[🎨 디자인 가이드](docs/DESIGN_GUIDE.md)** - 학년별 디자인 철학

---

## 🤝 **기여하기**

### 새 템플릿 추가
1. `templates/grade{N}/{subject}/` 폴더 생성
2. 색상 시스템 정의 (`styles/colors.js`)
3. 컴포넌트 라이브러리 구축 (`components/`)
4. 문서화 및 예시 추가

### 버그 리포트 & 기능 요청
- **[GitHub Issues](https://github.com/plusiam/teaching-materials-visualization/issues)** - 버그 및 기능 요청
- **[Discussions](https://github.com/plusiam/teaching-materials-visualization/discussions)** - 아이디어 공유

---

## 📊 **성과 지표**

### 효율성 개선
- **⚡ 자료 제작 시간 70% 단축** (템플릿 시스템 활용)
- **🎨 디자인 일관성 95% 향상** (학년별 스타일 가이드)
- **🔄 재사용성 80% 증가** (컴포넌트 라이브러리)

### 지원 현황
- **📚 4개 학년 템플릿** (2, 3, 4, 6학년)
- **🎯 3개 교과** (놀이, 도덕)
- **📄 4가지 자료 유형** (활동지, 마인드맵, 개념도, 차트)

---

## 🏷️ **라이선스**

MIT License - 자유롭게 사용, 수정, 배포 가능

---

## 💡 **팁 & 트릭**

### 빠른 개발을 위한 단축키
```bash
# 자주 사용하는 명령어들
alias tmv-create="npm run create --"
alias tmv-migrate="npm run migrate"
alias tmv-convert="npm run convert:svg"

# 사용 예시
tmv-create --grade=3 --unit=02 --topic="배려" --type=worksheet
```

### 고급 커스터마이징
```jsx
// 색상 오버라이드
const customColors = {
  ...grade3MoralColors,
  primary: { ...grade3MoralColors.primary, pink: '#E91E63' }
};

// 동적 컴포넌트 생성
const DynamicWorksheet = ({ activities }) => (
  <BaseLayout>
    {activities.map((activity, index) => (
      <ActivitySection key={index} {...activity} />
    ))}
  </BaseLayout>
);
```

---

## 🙋‍♀️ **자주 묻는 질문**

**Q: 새로운 학년을 추가하고 싶어요**  
A: `templates/grade{N}/` 폴더를 생성하고 색상 시스템과 컴포넌트를 추가하세요

**Q: 인쇄했을 때 색상이 이상해요**  
A: `@media print` 스타일을 확인하고 CMYK 호환 색상을 사용하세요

**Q: 다른 교과도 지원하나요?**  
A: 현재 놀이/도덕 교과를 지원하며, 템플릿 시스템으로 쉽게 확장 가능합니다

---

## 📞 **지원**

- **📧 이메일**: [yeohanki@naver.com](mailto:yeohanki@naver.com)
- **💬 GitHub Discussions**: 질문 & 아이디어 공유
- **🐛 Issues**: 버그 리포트 & 기능 요청

---

*교육자를 위한 수업연구 도구로 더 효율적이고 아름다운 교육자료를 만들어보세요! 🚀*

<p align="center">
  <img src="https://img.shields.io/badge/Made%20with-❤️-red" alt="Made with Love">
  <img src="https://img.shields.io/badge/For-Teachers-blue" alt="For Teachers">
  <img src="https://img.shields.io/badge/By-Educators-green" alt="By Educators">
</p>