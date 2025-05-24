#!/usr/bin/env node

/**
 * 🔄 교육자료 마이그레이션 도구
 * 기존 2025/visualization/ 구조를 새로운 elementary/ 구조로 이동
 */

const fs = require('fs').promises;
const path = require('path');

// 마이그레이션 매핑 테이블
const MIGRATION_MAP = {
  'grade2_play': {
    target: 'elementary/grade2/play_u01_friendship',
    subject: 'play',
    unit: '01',
    topic: 'friendship'
  },
  'grade3_moral': {
    target: 'elementary/grade3/moral_u02_sibling_harmony', 
    subject: 'moral',
    unit: '02',
    topic: 'sibling_harmony'
  },
  'grade4_moral': {
    target: 'elementary/grade4/moral_u01_honesty',
    subject: 'moral', 
    unit: '01',
    topic: 'honesty'
  },
  'grade6_moral': {
    target: 'elementary/grade6/moral_u01_global_citizenship',
    subject: 'moral',
    unit: '01', 
    topic: 'global_citizenship'
  }
};

// 파일명 변환 규칙
const FILE_RENAME_RULES = [
  {
    pattern: /^([^_]+)_([^_]+)_(\d{8})\.jsx$/,
    transform: (match, topic, type, date) => `1-${type}-${topic}-${date}.jsx`
  },
  {
    pattern: /^([^_]+)_([^_]+)_(\d{8})\.svg$/,
    transform: (match, topic, type, date) => `1-${type}-${topic}-${date}.svg`
  },
  {
    pattern: /^(.+)_worksheet_(\d{8})\.jsx$/,
    transform: (match, topic, date) => `1-worksheet-${topic.replace(/_/g, '-')}-${date}.jsx`
  },
  {
    pattern: /^(.+)_worksheet_(\d{8})\.svg$/,
    transform: (match, topic, date) => `1-worksheet-${topic.replace(/_/g, '-')}-${date}.svg`
  }
];

/**
 * 파일명 변환
 */
function transformFileName(oldName) {
  for (const rule of FILE_RENAME_RULES) {
    const match = oldName.match(rule.pattern);
    if (match) {
      return rule.transform(...match);
    }
  }
  return oldName; // 변환 규칙이 없으면 그대로
}

/**
 * 디렉토리 존재 확인 및 생성
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
 * 파일 복사
 */
async function copyFile(src, dest) {
  try {
    const data = await fs.readFile(src);
    await fs.writeFile(dest, data);
    console.log(`📄 파일 복사: ${path.basename(src)} → ${path.basename(dest)}`);
  } catch (error) {
    console.error(`❌ 파일 복사 실패: ${src} → ${dest}`, error.message);
  }
}

/**
 * template-ref.json 생성
 */
async function createTemplateRef(targetDir, gradeInfo) {
  const templateRef = {
    templateSystem: {
      version: "1.0.0",
      description: "교육자료 시각화 템플릿 참조 시스템",
      lastUpdated: new Date().toISOString().split('T')[0]
    },
    templatePath: `templates/grade${gradeInfo.grade}/${gradeInfo.subject}/`,
    metadata: {
      grade: gradeInfo.grade,
      subject: gradeInfo.subject,
      unit: gradeInfo.unit,
      topic: gradeInfo.topic,
      migrated: true,
      originalPath: gradeInfo.originalPath
    },
    components: gradeInfo.components || [],
    styleTheme: `grade${gradeInfo.grade}-${gradeInfo.subject}`,
    generationSettings: {
      autoSVGConversion: true,
      responsiveDesign: true,
      printOptimization: true
    }
  };

  const refPath = path.join(targetDir, 'template-ref.json');
  await fs.writeFile(refPath, JSON.stringify(templateRef, null, 2));
  console.log(`📋 템플릿 참조 파일 생성: ${refPath}`);
}

/**
 * README.md 생성
 */
async function createReadme(targetDir, gradeInfo) {
  const grade = gradeInfo.grade;
  const subject = gradeInfo.subject === 'play' ? '놀이' : '도덕';
  const topic = gradeInfo.topic.replace(/_/g, ' ');
  
  const readme = `# ${grade}학년 ${subject} - ${topic}

## 📚 교육과정 정보
- **학년**: ${grade}학년
- **교과**: ${subject}
- **단원**: ${gradeInfo.unit}. ${topic}
- **템플릿**: \`templates/grade${grade}/${gradeInfo.subject}/\`

## 📁 포함 자료
- [ ] 개념도 (concept-map)
- [x] 활동지 (worksheet)
- [ ] 마인드맵 (mindmap)
- [ ] 차트/도표 (chart)

## 🎨 사용된 템플릿 
- **색상 시스템**: Grade${grade} ${subject.charAt(0).toUpperCase() + subject.slice(1)}
- **컴포넌트**: 템플릿 라이브러리 기반
- **스타일**: 학년별 특성 반영

## 🔄 마이그레이션 정보
- **원본 경로**: \`${gradeInfo.originalPath}\`
- **마이그레이션 일시**: ${new Date().toLocaleString('ko-KR')}
- **새 명명 규칙**: \`{차시}-{타입}-{주제}-{날짜}.{확장자}\`

## 🏷️ 태그
\`#${grade}학년\` \`#${subject}\` \`#${topic.replace(/ /g, '')}\` \`#활동지\` \`#템플릿시스템\`

---
*템플릿 시스템으로 자동 생성됨*`;

  const readmePath = path.join(targetDir, 'README.md');
  await fs.writeFile(readmePath, readme);
  console.log(`📖 README 파일 생성: ${readmePath}`);
}

/**
 * 단일 폴더 마이그레이션
 */
async function migrateFolder(sourcePath, targetPath, folderInfo) {
  console.log(`\n🚀 마이그레이션 시작: ${path.basename(sourcePath)}`);
  
  // 대상 디렉토리 생성
  await ensureDir(targetPath);
  
  // 폴더 내 파일 목록
  try {
    const files = await fs.readdir(sourcePath);
    
    for (const file of files) {
      const sourcefile = path.join(sourcePath, file);
      const stat = await fs.stat(sourcefile);
      
      if (stat.isFile()) {
        // 파일명 변환
        const newFileName = transformFileName(file);
        const targetFile = path.join(targetPath, newFileName);
        
        // 파일 복사
        await copyFile(sourcefile, targetFile);
      }
    }
    
    // 템플릿 참조 파일 생성
    await createTemplateRef(targetPath, folderInfo);
    
    // README 생성  
    await createReadme(targetPath, folderInfo);
    
    console.log(`✅ 마이그레이션 완료: ${path.basename(sourcePath)}`);
    
  } catch (error) {
    console.error(`❌ 마이그레이션 실패: ${sourcePath}`, error.message);
  }
}

/**
 * 전체 마이그레이션 실행
 */
async function runMigration() {
  console.log('🔄 교육자료 구조 마이그레이션 시작\n');
  
  const baseSourcePath = '2025/visualization';
  const baseTargetPath = '2025';
  
  for (const [sourceFolder, config] of Object.entries(MIGRATION_MAP)) {
    const sourcePath = path.join(baseSourcePath, sourceFolder);
    const targetPath = path.join(baseTargetPath, config.target);
    
    // 폴더 정보 준비
    const folderInfo = {
      grade: parseInt(sourceFolder.match(/grade(\d+)/)[1]),
      subject: config.subject,
      unit: config.unit,
      topic: config.topic,
      originalPath: sourcePath,
      components: [] // 필요시 컴포넌트 리스트 추가
    };
    
    // 소스 폴더 존재 확인
    try {
      await fs.access(sourcePath);
      await migrateFolder(sourcePath, targetPath, folderInfo);
    } catch {
      console.log(`⚠️  소스 폴더 없음: ${sourcePath}`);
    }
  }
  
  console.log('\n🎉 마이그레이션 완료!');
  console.log('\n📋 다음 단계:');
  console.log('1. 기존 2025/visualization/ 폴더 → legacy/로 이동');
  console.log('2. 새 구조에서 파일 확인');
  console.log('3. template-ref.json 설정 검토');
  console.log('4. SVG 변환 및 테스트');
}

// 스크립트 실행
if (require.main === module) {
  runMigration().catch(console.error);
}

module.exports = { runMigration, migrateFolder, transformFileName };