#!/usr/bin/env node

/**
 * 템플릿 기반 자료 생성 스크립트
 * 사용법: node create-from-template.js --grade=3 --subject=moral --unit=02 --topic=honesty --type=worksheet
 */

const fs = require('fs').promises;
const path = require('path');

// 명령행 인수 파싱
function parseArgs() {
  const args = {};
  process.argv.slice(2).forEach(arg => {
    const [key, value] = arg.replace('--', '').split('=');
    args[key] = value;
  });
  return args;
}

// 템플릿 메타데이터 로드
async function loadTemplateMetadata(grade, subject) {
  const templatePath = path.join(__dirname, `../templates/grade${grade}/${subject}/metadata.json`);
  try {
    const data = await fs.readFile(templatePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    throw new Error(`템플릿 메타데이터를 찾을 수 없습니다: ${templatePath}`);
  }
}

// 새 자료 생성 경로 결정
function generateOutputPath(grade, subject, unit, topic) {
  const date = new Date().toISOString().split('T')[0].replace(/-/g, '');
  const folderName = `${subject}_u${unit.padStart(2, '0')}_${topic}`;
  const fileName = `1-worksheet-${topic}-${date}`;
  
  return {
    folder: path.join(__dirname, `../elementary/grade${grade}/${folderName}`),
    jsx: `${fileName}.jsx`,
    svg: `${fileName}.svg`,
    readme: 'README.md',
    templateRef: 'template-ref.json'
  };
}

// 템플릿 기반 JSX 생성
function generateJSXContent(args, templateMetadata) {
  const { grade, subject, topic, type } = args;
  const componentName = `Grade${grade}${subject.charAt(0).toUpperCase() + subject.slice(1)}${type.charAt(0).toUpperCase() + type.slice(1)}`;
  
  return `import React from 'react';

/**
 * ${grade}학년 ${subject} - ${topic} ${type}
 * 자동 생성: ${new Date().toISOString().split('T')[0]}
 * 템플릿: ${templateMetadata.name || 'default'}
 */

// 템플릿 컴포넌트 임포트
${templateMetadata.components?.map(comp => 
  `import { ${comp.name} } from '../../../templates/grade${grade}/${subject}/components/${comp.source}';`
).join('\n') || ''}

// 공통 컴포넌트 임포트
import { BaseLayout, CardContainer } from '../../../templates/shared/components/CommonComponents.jsx';

const ${componentName} = ({ 
  studentName = "", 
  studentNumber = "", 
  customTitle = "${topic}" 
}) => {
  return (
    <BaseLayout className="bg-white" aspectRatio="9/16">
      <div className="w-full max-w-md mx-auto bg-white" style={{ aspectRatio: '9/16' }}>
        {/* 여기에 템플릿 기반 컨텐츠를 구현하세요 */}
        <div className="p-6">
          <h1 className="text-2xl font-bold text-center mb-6">
            ${grade}학년 ${subject} - {customTitle}
          </h1>
          
          <CardContainer title="활동 내용" icon="📝" color="#4ECDC4">
            <p>이 자료는 템플릿 시스템으로 자동 생성되었습니다.</p>
            <p>학습자: {studentName || "_______________"}</p>
            <p>번호: {studentNumber || "_____"}</p>
          </CardContainer>
          
          {/* TODO: 실제 교육 내용 구현 */}
        </div>
      </div>
    </BaseLayout>
  );
};

export default ${componentName};`;
}

// README.md 생성
function generateReadmeContent(args, paths) {
  const { grade, subject, unit, topic, type } = args;
  
  return `# ${grade}학년 ${subject} - ${topic}

## 📚 교육과정 정보
- **학년**: ${grade}학년
- **교과**: ${subject}
- **단원**: ${unit}. ${topic}
- **자료 유형**: ${type}
- **생성일**: ${new Date().toISOString().split('T')[0]}

## 🎯 학습 목표
- TODO: 학습 목표를 작성하세요

## 📁 포함 자료
- [x] ${paths.jsx} - React 컴포넌트
- [ ] ${paths.svg} - SVG 변환 파일
- [x] ${paths.readme} - 설명 문서
- [x] ${paths.templateRef} - 템플릿 참조 정보

## 🔧 사용법
1. React 환경에서 JSX 파일을 직접 사용
2. SVG 변환하여 PowerPoint, 한글에서 사용
3. 템플릿 시스템으로 유사한 자료 생성

## 🏷️ 태그
\`#${grade}학년\` \`#${subject}\` \`#${topic}\` \`#${type}\` \`#템플릿자동생성\`

---
*템플릿 시스템으로 자동 생성된 자료입니다.*`;
}

// template-ref.json 생성
function generateTemplateRef(args, templateMetadata) {
  const { grade, subject, unit, topic, type } = args;
  
  return {
    templateSystem: {
      version: "1.0.0",
      generatedAt: new Date().toISOString(),
      generator: "create-from-template.js"
    },
    templatePath: `templates/grade${grade}/${subject}/`,
    metadata: {
      grade: parseInt(grade),
      subject,
      unit: unit.padStart(2, '0'),
      topic,
      title: topic,
      materialType: type,
      format: "9:16",
      printable: true,
      interactive: true
    },
    components: templateMetadata.components || [],
    styleTheme: templateMetadata.styleTheme || `grade${grade}-${subject}-default`,
    customization: {
      editable: ["studentName", "studentNumber", "title"],
      configurable: ["content", "activities"],
      themeable: ["colors", "fonts", "spacing"]
    },
    compatibility: {
      exportFormats: ["JSX", "SVG", "PNG", "PDF"],
      targetSoftware: ["PowerPoint", "한글", "Canva", "브라우저"]
    }
  };
}

// 메인 함수
async function main() {
  try {
    const args = parseArgs();
    
    // 필수 인수 검증
    const required = ['grade', 'subject', 'unit', 'topic', 'type'];
    for (const arg of required) {
      if (!args[arg]) {
        console.error(`❌ 필수 인수가 누락되었습니다: --${arg}`);
        process.exit(1);
      }
    }
    
    console.log('🚀 템플릿 기반 자료 생성을 시작합니다...');
    console.log(`📋 설정: ${args.grade}학년 ${args.subject} ${args.unit}단원 ${args.topic} ${args.type}`);
    
    // 템플릿 메타데이터 로드
    let templateMetadata = {};
    try {
      templateMetadata = await loadTemplateMetadata(args.grade, args.subject);
      console.log(`✅ 템플릿 메타데이터 로드됨: ${templateMetadata.name || 'default'}`);
    } catch (error) {
      console.warn(`⚠️  ${error.message} - 기본 템플릿을 사용합니다.`);
    }
    
    // 출력 경로 생성
    const paths = generateOutputPath(args.grade, args.subject, args.unit, args.topic);
    
    // 폴더 생성
    await fs.mkdir(paths.folder, { recursive: true });
    console.log(`📁 폴더 생성됨: ${paths.folder}`);
    
    // 파일들 생성
    const files = {
      [paths.jsx]: generateJSXContent(args, templateMetadata),
      [paths.readme]: generateReadmeContent(args, paths),
      [paths.templateRef]: JSON.stringify(generateTemplateRef(args, templateMetadata), null, 2)
    };
    
    for (const [filename, content] of Object.entries(files)) {
      const filePath = path.join(paths.folder, filename);
      await fs.writeFile(filePath, content);
      console.log(`✅ 파일 생성됨: ${filename}`);
    }
    
    console.log('🎉 자료 생성이 완료되었습니다!');
    console.log(`📍 위치: ${paths.folder}`);
    console.log('\n📝 다음 단계:');
    console.log('1. JSX 파일을 열어서 실제 교육 내용을 구현하세요');
    console.log('2. npm run convert:svg 명령으로 SVG 파일을 생성하세요');
    console.log('3. README.md를 업데이트하여 학습 목표와 활동을 추가하세요');
    
  } catch (error) {
    console.error('❌ 생성 실패:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { parseArgs, generateJSXContent, generateTemplateRef };