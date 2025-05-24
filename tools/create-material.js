#!/usr/bin/env node

/**
 * 🎨 템플릿 기반 교육자료 생성 도구
 * 학년별 템플릿을 사용하여 새로운 교육자료를 자동 생성
 */

const fs = require('fs').promises;
const path = require('path');

// 학년별 템플릿 설정
const GRADE_TEMPLATES = {
  2: {
    subject: 'play',
    colors: ['#FF6B6B', '#4ECDC4', '#FFE66D', '#A8E6CF'],
    characteristics: ['친근한', '활동적인', '체험중심'],
    defaultComponents: ['AnimalCharacter', 'PlayRuleCard', 'Grade2Header']
  },
  3: {
    subject: 'moral', 
    colors: ['#FF6B9D', '#4ECDC4', '#FFD93D', '#A8E6CF'],
    characteristics: ['스토리텔링', '감정표현', '개별화학습'],
    defaultComponents: ['WorksheetHeader', 'EmotionFace', 'CheckboxList']
  },
  4: {
    subject: 'moral',
    colors: ['#8B5CF6', '#3B82F6', '#10B981', '#F59E0B'], 
    characteristics: ['논리적', '체계적', '구조화'],
    defaultComponents: ['LogicalFlowChart', 'CauseEffectDiagram']
  },
  6: {
    subject: 'moral',
    colors: ['#2D3436', '#636E72', '#00B894', '#74B9FF'],
    characteristics: ['미니멀', '성숙한', '철학적'],
    defaultComponents: ['MinimalHeader', 'GlobalIssueCard', 'ReflectionBox']
  }
};

// 자료 유형별 템플릿
const MATERIAL_TYPES = {
  worksheet: {
    name: '활동지',
    extension: 'jsx',
    aspectRatio: '9:16',
    printable: true
  },
  mindmap: {
    name: '마인드맵', 
    extension: 'jsx',
    aspectRatio: '16:9',
    printable: true
  },
  concept: {
    name: '개념도',
    extension: 'jsx', 
    aspectRatio: '4:3',
    printable: true
  },
  chart: {
    name: '차트',
    extension: 'jsx',
    aspectRatio: '16:9', 
    printable: false
  }
};

/**
 * 명령행 인수 파싱
 */
function parseArguments() {
  const args = process.argv.slice(2);
  const options = {};
  
  for (let i = 0; i < args.length; i += 2) {
    const key = args[i].replace('--', '');
    const value = args[i + 1];
    options[key] = value;
  }
  
  return options;
}

/**
 * 입력 값 검증
 */
function validateInputs(options) {
  const { grade, subject, unit, topic, type } = options;
  
  if (!grade || !GRADE_TEMPLATES[grade]) {
    throw new Error(`❌ 지원하지 않는 학년: ${grade} (지원: 2, 3, 4, 6)`);
  }
  
  if (!unit || !/^\d{2}$/.test(unit)) {
    throw new Error(`❌ 단원 형식이 잘못됨: ${unit} (예: 01, 02, 03)`);
  }
  
  if (!topic) {
    throw new Error(`❌ 주제가 필요합니다`);
  }
  
  if (!type || !MATERIAL_TYPES[type]) {
    const availableTypes = Object.keys(MATERIAL_TYPES).join(', ');
    throw new Error(`❌ 지원하지 않는 자료 유형: ${type} (지원: ${availableTypes})`);
  }
  
  return true;
}

/**
 * 디렉토리 생성
 */
async function ensureDir(dirPath) {
  try {
    await fs.access(dirPath);
  } catch {
    await fs.mkdir(dirPath, { recursive: true });
    console.log(`📁 디렉토리 생성: ${dirPath}`);
  }
}

/**
 * 파일명 생성
 */
function generateFileName(options) {
  const { type, topic, lesson = '1' } = options;
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const cleanTopic = topic.replace(/[^a-zA-Z0-9가-힣]/g, '_').toLowerCase();
  
  return `${lesson}-${type}-${cleanTopic}-${date}.jsx`;
}

/**
 * 폴더명 생성
 */
function generateFolderName(options) {
  const { grade, subject, unit, topic } = options;
  const gradeTemplate = GRADE_TEMPLATES[grade];
  const cleanTopic = topic.replace(/[^a-zA-Z0-9가-힣]/g, '_').toLowerCase();
  
  return `${gradeTemplate.subject}_u${unit}_${cleanTopic}`;
}

/**
 * JSX 템플릿 생성
 */
function generateJSXTemplate(options) {
  const { grade, subject, unit, topic, type } = options;
  const gradeTemplate = GRADE_TEMPLATES[grade];
  const materialType = MATERIAL_TYPES[type];
  const componentName = `Grade${grade}${topic.replace(/[^a-zA-Z]/g, '')}${type.charAt(0).toUpperCase() + type.slice(1)}`;
  
  return `import React from 'react';

/**
 * ${grade}학년 ${gradeTemplate.subject === 'play' ? '놀이' : '도덕'} - ${topic} ${materialType.name}
 * 특징: ${gradeTemplate.characteristics.join(', ')}
 * 템플릿: Grade${grade} ${gradeTemplate.subject.charAt(0).toUpperCase() + gradeTemplate.subject.slice(1)}
 */

// 템플릿 컴포넌트 import
import { 
  ${gradeTemplate.defaultComponents.join(',\n  ')} 
} from '../../../templates/grade${grade}/${gradeTemplate.subject}/components/';

import { 
  grade${grade}${gradeTemplate.subject.charAt(0).toUpperCase() + gradeTemplate.subject.slice(1)}Colors,
  grade${grade}${gradeTemplate.subject.charAt(0).toUpperCase() + gradeTemplate.subject.slice(1)}Theme 
} from '../../../templates/grade${grade}/${gradeTemplate.subject}/styles/colors.js';

// 공통 컴포넌트 import
import { BaseLayout, CardContainer } from '../../../templates/shared/components/CommonComponents.jsx';

const ${componentName} = ({ 
  studentName = "", 
  studentNumber = "", 
  customTitle = "${topic}"
}) => {
  
  // 자료 내용 데이터
  const contentData = {
    title: customTitle,
    mainColor: '${gradeTemplate.colors[0]}',
    activities: [
      // TODO: 활동 내용 추가
    ]
  };

  return (
    <BaseLayout aspectRatio="${materialType.aspectRatio}">
      <div className="w-full h-full bg-gradient-to-br from-gray-50 to-white p-8">
        
        {/* 헤더 영역 */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4" style={{ color: contentData.mainColor }}>
            ${grade}학년 ${gradeTemplate.subject === 'play' ? '놀이' : '도덕'} - {contentData.title}
          </h1>
          <p className="text-gray-600">
            이름: {studentName || "_______________"} 번호: {studentNumber || "____"}
          </p>
        </div>

        {/* 메인 콘텐츠 영역 */}
        <div className="space-y-8">
          
          {/* 활동 1 */}
          <CardContainer 
            title="활동 1. 기본 활동"
            color={contentData.mainColor}
            icon="🎯"
          >
            <p className="text-gray-700">
              TODO: 활동 내용을 여기에 추가하세요
            </p>
          </CardContainer>

          {/* 활동 2 */}
          <CardContainer 
            title="활동 2. 심화 활동"
            color="${gradeTemplate.colors[1]}"
            icon="✨"
          >
            <p className="text-gray-700">
              TODO: 심화 활동 내용을 여기에 추가하세요
            </p>
          </CardContainer>

          {/* 성찰 영역 */}
          <CardContainer 
            title="생각해보기"
            color="${gradeTemplate.colors[2]}"
            icon="💭"
          >
            <div className="space-y-4">
              <p className="text-gray-700">오늘 배운 것 중 가장 기억에 남는 것은?</p>
              <div className="border-b-2 border-gray-200 h-8"></div>
              
              <p className="text-gray-700">앞으로 어떻게 실천할까요?</p>
              <div className="border-b-2 border-gray-200 h-8"></div>
            </div>
          </CardContainer>
        </div>

        {/* 푸터 */}
        <div className="text-center mt-8 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            템플릿 시스템으로 생성됨 • Grade${grade} ${gradeTemplate.subject.charAt(0).toUpperCase() + gradeTemplate.subject.slice(1)} Template
          </p>
        </div>
      </div>
    </BaseLayout>
  );
};

export default ${componentName};`;
}

/**
 * template-ref.json 생성
 */
function generateTemplateRef(options) {
  const { grade, subject, unit, topic, type } = options;
  const gradeTemplate = GRADE_TEMPLATES[grade];
  
  return {
    templateSystem: {
      version: "1.0.0",
      description: "교육자료 시각화 템플릿 참조 시스템",
      lastUpdated: new Date().toISOString().split('T')[0]
    },
    templatePath: `templates/grade${grade}/${gradeTemplate.subject}/`,
    metadata: {
      grade: parseInt(grade),
      subject: gradeTemplate.subject,
      unit: unit,
      topic: topic,
      title: topic,
      materialType: type,
      format: MATERIAL_TYPES[type].aspectRatio,
      printable: MATERIAL_TYPES[type].printable,
      generated: true
    },
    components: gradeTemplate.defaultComponents,
    styleTheme: `grade${grade}-${gradeTemplate.subject}`,
    customization: {
      editable: ["studentName", "studentNumber", "title"],
      themeable: ["colors", "fonts", "spacing"]
    },
    generationSettings: {
      autoSVGConversion: true,
      responsiveDesign: true,
      printOptimization: MATERIAL_TYPES[type].printable,
      accessibilityFeatures: true
    }
  };
}

/**
 * README.md 생성
 */
function generateReadme(options) {
  const { grade, subject, unit, topic, type } = options;
  const gradeTemplate = GRADE_TEMPLATES[grade];
  const materialType = MATERIAL_TYPES[type];
  
  return `# ${grade}학년 ${gradeTemplate.subject === 'play' ? '놀이' : '도덕'} - ${topic}

## 📚 교육과정 정보
- **학년**: ${grade}학년
- **교과**: ${gradeTemplate.subject === 'play' ? '놀이' : '도덕'}
- **단원**: ${unit}. ${topic}
- **자료 유형**: ${materialType.name}
- **템플릿**: \`templates/grade${grade}/${gradeTemplate.subject}/\`

## 🎨 디자인 특성
- **색상 팔레트**: ${gradeTemplate.colors.join(', ')}
- **특징**: ${gradeTemplate.characteristics.join(', ')}
- **비율**: ${materialType.aspectRatio}
- **인쇄 가능**: ${materialType.printable ? '✅' : '❌'}

## 📁 포함 자료
- [x] ${materialType.name} (${type})
- [ ] SVG 변환 파일
- [x] 템플릿 참조 파일
- [x] 사용 가이드

## 🧩 사용된 컴포넌트
${gradeTemplate.defaultComponents.map(comp => `- \`${comp}\``).join('\n')}

## 🔧 커스터마이징
- **편집 가능**: 학생명, 번호, 제목
- **테마 조정**: 색상, 폰트, 간격
- **내용 수정**: JSX 파일 직접 편집

## 🚀 사용법
1. JSX 파일을 React 환경에서 열기
2. \`studentName\`, \`studentNumber\` props 설정
3. 활동 내용을 실제 교육과정에 맞게 수정
4. SVG로 변환하여 다른 소프트웨어에서 활용

## 🏷️ 태그
\`#${grade}학년\` \`#${gradeTemplate.subject}\` \`#${topic.replace(/\s/g, '')}\` \`#${type}\` \`#템플릿생성\`

---
*템플릿 생성 도구로 자동 생성됨 (${new Date().toLocaleString('ko-KR')})*`;
}

/**
 * 메인 생성 함수
 */
async function generateMaterial(options) {
  console.log('🎨 템플릿 기반 교육자료 생성 시작\n');
  
  // 입력 검증
  validateInputs(options);
  
  const { grade } = options;
  const folderName = generateFolderName(options);
  const fileName = generateFileName(options);
  
  // 경로 설정
  const targetDir = path.join('2025', 'elementary', `grade${grade}`, folderName);
  const filePath = path.join(targetDir, fileName);
  
  console.log(`📁 대상 디렉토리: ${targetDir}`);
  console.log(`📄 파일명: ${fileName}`);
  
  // 디렉토리 생성
  await ensureDir(targetDir);
  
  // JSX 파일 생성
  const jsxContent = generateJSXTemplate(options);
  await fs.writeFile(filePath, jsxContent);
  console.log(`✅ JSX 파일 생성: ${filePath}`);
  
  // template-ref.json 생성
  const templateRef = generateTemplateRef(options);
  const refPath = path.join(targetDir, 'template-ref.json');
  await fs.writeFile(refPath, JSON.stringify(templateRef, null, 2));
  console.log(`📋 템플릿 참조 파일 생성: ${refPath}`);
  
  // README.md 생성
  const readme = generateReadme(options);
  const readmePath = path.join(targetDir, 'README.md');
  await fs.writeFile(readmePath, readme);
  console.log(`📖 README 파일 생성: ${readmePath}`);
  
  console.log('\n🎉 교육자료 생성 완료!');
  console.log('\n📋 다음 단계:');
  console.log('1. JSX 파일에서 TODO 항목 완성');
  console.log('2. 내용을 실제 교육과정에 맞게 수정');
  console.log('3. SVG 변환 (npm run convert:svg)');
  console.log('4. 다른 소프트웨어에서 활용');
}

/**
 * 도움말 출력
 */
function showHelp() {
  console.log(`
🎨 템플릿 기반 교육자료 생성 도구

사용법:
  node tools/create-material.js --grade=3 --subject=moral --unit=02 --topic="정직한 생활" --type=worksheet

옵션:
  --grade     학년 (2, 3, 4, 6)
  --subject   교과 (play, moral) - 선택사항 (학년별 기본값 사용)
  --unit      단원 (01, 02, 03, ...)
  --topic     주제명
  --type      자료 유형 (worksheet, mindmap, concept, chart)
  --lesson    차시 (기본값: 1) - 선택사항

예시:
  node tools/create-material.js --grade=3 --unit=02 --topic="형제자매 우애" --type=worksheet
  node tools/create-material.js --grade=6 --unit=01 --topic="지구촌 시민의식" --type=mindmap
  node tools/create-material.js --grade=2 --unit=01 --topic="친구와 놀기" --type=concept

지원 자료 유형:
  worksheet   활동지 (9:16 비율, 인쇄용)
  mindmap     마인드맵 (16:9 비율, 인쇄용)  
  concept     개념도 (4:3 비율, 인쇄용)
  chart       차트 (16:9 비율, 디지털용)
`);
}

// 스크립트 실행
if (require.main === module) {
  const options = parseArguments();
  
  if (options.help || Object.keys(options).length === 0) {
    showHelp();
  } else {
    generateMaterial(options).catch(error => {
      console.error('❌ 생성 실패:', error.message);
      process.exit(1);
    });
  }
}

module.exports = { generateMaterial, parseArguments };