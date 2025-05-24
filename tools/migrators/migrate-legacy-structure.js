#!/usr/bin/env node

/**
 * 기존 자료 마이그레이션 스크립트
 * 기존의 grade{N}_{subject} 구조를 새로운 템플릿 기반 구조로 마이그레이션
 */

const fs = require('fs').promises;
const path = require('path');

// 파일명 변환 규칙
const fileNameMapping = {
  // 기존 파일명 패턴 → 새 파일명 패턴
  'siblings_harmony_worksheet_20250524.jsx': '1-worksheet-sibling-harmony-20250524.jsx',
  'siblings_harmony_worksheet_20250524.svg': '1-worksheet-sibling-harmony-20250524.svg',
  'activity_guide_siblings_harmony.md': 'activity-guide-sibling-harmony.md',
  'double_sided_printing_guide.md': 'printing-guide-double-sided.md',
  'play_friendship_20250524.jsx': '1-activity-friendship-games-20250524.jsx',
  'play_friendship_20250524.svg': '1-activity-friendship-games-20250524.svg',
  'honesty_choices_20250524.jsx': '1-worksheet-honesty-choices-20250524.jsx',
  'honesty_choices_20250524.svg': '1-worksheet-honesty-choices-20250524.svg',
  'global_citizenship_20250524.jsx': '1-concept-global-citizenship-20250524.jsx',
  'global_citizenship_20250524.svg': '1-concept-global-citizenship-20250524.svg'
};

// 폴더 매핑 규칙
const folderMapping = {
  'grade2_play': {
    newPath: 'elementary/grade2/play_u01_friendship',
    grade: 2,
    subject: 'play',
    unit: '01',
    topic: 'friendship'
  },
  'grade3_moral': {
    newPath: 'elementary/grade3/moral_u02_sibling_harmony',
    grade: 3,
    subject: 'moral',
    unit: '02', 
    topic: 'sibling_harmony'
  },
  'grade4_moral': {
    newPath: 'elementary/grade4/moral_u01_honesty',
    grade: 4,
    subject: 'moral',
    unit: '01',
    topic: 'honesty'
  },
  'grade6_moral': {
    newPath: 'elementary/grade6/moral_u01_global_citizenship',
    grade: 6,
    subject: 'moral',
    unit: '01',
    topic: 'global_citizenship'
  }
};

// 디렉토리 존재 확인 및 생성
async function ensureDirectory(dirPath) {
  try {
    await fs.access(dirPath);
  } catch {
    await fs.mkdir(dirPath, { recursive: true });
    console.log(`📁 새 폴더 생성: ${dirPath}`);
  }
}

// 파일 복사
async function copyFile(source, destination) {
  try {
    await fs.copyFile(source, destination);
    console.log(`✅ 파일 이동: ${path.basename(source)} → ${path.basename(destination)}`);
  } catch (error) {
    console.error(`❌ 파일 이동 실패: ${source} → ${destination}`, error.message);
  }
}

// template-ref.json 생성
function generateTemplateRef(mapping, files) {
  return {
    templateSystem: {
      version: "1.0.0",
      migratedAt: new Date().toISOString(),
      migrationSource: "legacy-structure"
    },
    templatePath: `templates/grade${mapping.grade}/${mapping.subject}/`,
    metadata: {
      grade: mapping.grade,
      subject: mapping.subject,
      unit: mapping.unit,
      topic: mapping.topic,
      format: mapping.grade === 3 ? "9:16" : "16:9",
      printable: true,
      interactive: true
    },
    migratedFiles: files.map(file => ({
      original: file.original,
      migrated: file.migrated,
      type: file.extension
    })),
    styleTheme: `grade${mapping.grade}-${mapping.subject}-${mapping.topic}`,
    customization: {
      editable: ["studentName", "studentNumber", "title"],
      configurable: ["content", "activities"],
      themeable: ["colors", "fonts", "spacing"]
    }
  };
}

// README.md 생성 (마이그레이션용)
function generateMigratedReadme(mapping, files) {
  const subjectNames = {
    'play': '놀이',
    'moral': '도덕'
  };
  
  const topicNames = {
    'friendship': '친구와 함께 놀기',
    'sibling_harmony': '형제자매 우애',
    'honesty': '정직한 생활',
    'global_citizenship': '지구촌 시민의식'
  };

  return `# ${mapping.grade}학년 ${subjectNames[mapping.subject]} - ${topicNames[mapping.topic]}

## 📚 교육과정 정보
- **학년**: ${mapping.grade}학년
- **교과**: ${subjectNames[mapping.subject]}
- **단원**: ${mapping.unit}. ${topicNames[mapping.topic]}
- **마이그레이션**: ${new Date().toISOString().split('T')[0]}

## 🎯 학습 목표
- ${topicNames[mapping.topic]}에 대한 이해와 실천
- 도덕적 사고력과 판단력 기르기
- 일상생활에서의 실천 의지 함양

## 📁 포함 자료
${files.map(file => `- [x] ${file.migrated} - ${file.type.toUpperCase()} 파일`).join('\n')}
- [x] template-ref.json - 템플릿 참조 정보
- [x] README.md - 자료 설명

## 🔄 마이그레이션 정보
이 자료는 기존 구조에서 새로운 템플릿 기반 구조로 마이그레이션되었습니다.

### 변경사항
${files.map(file => `- \`${file.original}\` → \`${file.migrated}\``).join('\n')}

## 🏷️ 태그
\`#${mapping.grade}학년\` \`#${subjectNames[mapping.subject]}\` \`#${topicNames[mapping.topic]}\` \`#마이그레이션\`

---
*레거시 구조에서 마이그레이션된 자료입니다.*`;
}

// 단일 폴더 마이그레이션
async function migrateFolderContents(oldPath, mapping) {
  console.log(`\n🔄 마이그레이션 시작: ${oldPath} → ${mapping.newPath}`);
  
  try {
    // 기존 폴더 확인
    await fs.access(oldPath);
  } catch {
    console.log(`⚠️  폴더가 존재하지 않음: ${oldPath}`);
    return;
  }
  
  // 새 폴더 생성
  const newFullPath = path.join(__dirname, '../..', mapping.newPath);
  await ensureDirectory(newFullPath);
  
  // 기존 파일 목록 가져오기
  const files = await fs.readdir(oldPath);
  const migratedFiles = [];
  
  for (const file of files) {
    const filePath = path.join(oldPath, file);
    const stat = await fs.stat(filePath);
    
    if (stat.isFile()) {
      // 새 파일명 결정
      const newFileName = fileNameMapping[file] || file;
      const newFilePath = path.join(newFullPath, newFileName);
      
      // 파일 복사
      await copyFile(filePath, newFilePath);
      
      migratedFiles.push({
        original: file,
        migrated: newFileName,
        extension: path.extname(file).slice(1),
        type: path.extname(file).slice(1).toUpperCase()
      });
    }
  }
  
  // template-ref.json 생성
  const templateRef = generateTemplateRef(mapping, migratedFiles);
  const templateRefPath = path.join(newFullPath, 'template-ref.json');
  await fs.writeFile(templateRefPath, JSON.stringify(templateRef, null, 2));
  console.log(`✅ template-ref.json 생성`);
  
  // README.md 생성 (기존에 없으면)
  const readmePath = path.join(newFullPath, 'README.md');
  try {
    await fs.access(readmePath);
    console.log(`ℹ️  README.md 이미 존재함`);
  } catch {
    const readmeContent = generateMigratedReadme(mapping, migratedFiles);
    await fs.writeFile(readmePath, readmeContent);
    console.log(`✅ README.md 생성`);
  }
  
  console.log(`🎉 마이그레이션 완료: ${mapping.newPath}`);
  return migratedFiles.length;
}

// 레거시 폴더 백업 생성
async function createLegacyBackup() {
  const legacyPath = path.join(__dirname, '../..', 'legacy');
  await ensureDirectory(legacyPath);
  
  const visualizationPath = path.join(__dirname, '../..', '2025/visualization');
  const backupPath = path.join(legacyPath, 'visualization');
  
  try {
    // 전체 visualization 폴더를 legacy로 복사
    await fs.cp(visualizationPath, backupPath, { recursive: true });
    console.log(`💾 레거시 백업 생성: ${backupPath}`);
  } catch (error) {
    console.warn(`⚠️  백업 생성 실패: ${error.message}`);
  }
}

// 메인 마이그레이션 함수
async function main() {
  console.log('🚀 기존 자료 마이그레이션을 시작합니다...\n');
  
  const basePath = path.join(__dirname, '../..', '2025/visualization');
  let totalMigrated = 0;
  
  // 레거시 백업 생성
  await createLegacyBackup();
  
  // 각 폴더별 마이그레이션
  for (const [oldFolder, mapping] of Object.entries(folderMapping)) {
    const oldPath = path.join(basePath, oldFolder);
    const migratedCount = await migrateFolderContents(oldPath, mapping);
    if (migratedCount) {
      totalMigrated += migratedCount;
    }
  }
  
  // 루트 파일들 처리 (conflict_resolution, family_happiness_guide 등)
  console.log('\n🔄 루트 파일들 처리 중...');
  try {
    const rootFiles = await fs.readdir(basePath);
    const rootJsxFiles = rootFiles.filter(file => 
      file.endsWith('.jsx') && !file.startsWith('GRADE_')
    );
    
    if (rootJsxFiles.length > 0) {
      console.log(`📝 루트에서 발견된 JSX 파일들:`);
      rootJsxFiles.forEach(file => console.log(`   - ${file}`));
      console.log(`ℹ️  이 파일들은 수동으로 적절한 폴더로 이동해주세요.`);
    }
  } catch (error) {
    console.warn(`⚠️  루트 파일 확인 실패: ${error.message}`);
  }
  
  // 완료 보고
  console.log('\n🎉 마이그레이션이 완료되었습니다!');
  console.log(`📊 총 ${totalMigrated}개 파일이 마이그레이션되었습니다.`);
  console.log('\n📝 다음 단계:');
  console.log('1. elementary/ 폴더에서 마이그레이션된 자료들을 확인하세요');
  console.log('2. template-ref.json 파일들을 검토하고 필요시 수정하세요');
  console.log('3. README.md 파일들을 업데이트하세요');
  console.log('4. 루트 파일들을 적절한 위치로 이동하세요');
  console.log('5. legacy/visualization 폴더는 백업용이니 확인 후 삭제 가능합니다');
}

if (require.main === module) {
  main().catch(error => {
    console.error('❌ 마이그레이션 실패:', error);
    process.exit(1);
  });
}

module.exports = { folderMapping, fileNameMapping, migrateFolderContents };