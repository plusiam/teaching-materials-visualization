#!/usr/bin/env python3
"""
📁 교육자료 폴더 구조 마이그레이션 도구

기존 grade{N}_{subject} 구조를 elementary/grade{N}/{subject}_u{unit}_{topic} 구조로 변환
"""

import os
import re
import json
from pathlib import Path
from typing import Dict, List, Tuple
from datetime import datetime

class EducationalMaterialMigrator:
    def __init__(self, base_path: str = "2025"):
        self.base_path = Path(base_path)
        self.migration_config = {
            "grade2_play": {
                "target": "elementary/grade2/play_u01_friendship",
                "unit_title": "친구와 함께 놀기",
                "subject": "놀이",
                "grade": 2,
                "unit": 1
            },
            "grade3_moral": {
                "target": "elementary/grade3/moral_u02_sibling_harmony", 
                "unit_title": "형제자매와 사이좋게 지내요",
                "subject": "도덕",
                "grade": 3,
                "unit": 2
            },
            "grade4_moral": {
                "target": "elementary/grade4/moral_u01_honesty",
                "unit_title": "정직한 생활",
                "subject": "도덕", 
                "grade": 4,
                "unit": 1
            },
            "grade6_moral": {
                "target": "elementary/grade6/moral_u01_global_citizenship",
                "unit_title": "세계 시민으로서의 역할",
                "subject": "도덕",
                "grade": 6,
                "unit": 1
            }
        }
        
        self.file_type_mapping = {
            "worksheet": "worksheet",
            "mindmap": "mindmap", 
            "concept": "concept-map",
            "conflict": "conflict-resolution",
            "happiness": "happiness-guide",
            "friendship": "friendship-guide",
            "honesty": "honesty-choices",
            "global": "global-citizenship",
            "guide": "guide",
            "printing": "printing-guide"
        }

    def analyze_current_structure(self) -> Dict:
        """현재 폴더 구조 분석"""
        analysis = {
            "folders_to_migrate": [],
            "files_by_folder": {},
            "total_files": 0
        }
        
        visualization_path = self.base_path / "visualization"
        if not visualization_path.exists():
            print(f"❌ {visualization_path} 폴더가 존재하지 않습니다.")
            return analysis
            
        for folder_name in self.migration_config.keys():
            folder_path = visualization_path / folder_name
            if folder_path.exists():
                files = list(folder_path.glob("*"))
                analysis["folders_to_migrate"].append(folder_name)
                analysis["files_by_folder"][folder_name] = [f.name for f in files if f.is_file()]
                analysis["total_files"] += len([f for f in files if f.is_file()])
                
        return analysis

    def generate_new_filename(self, old_filename: str, folder_config: Dict) -> str:
        """새로운 파일명 생성"""
        # 파일 확장자 분리
        name_part = Path(old_filename).stem
        ext = Path(old_filename).suffix
        
        # 날짜 추출 (YYYYMMDD 형식)
        date_match = re.search(r'(\d{8})', name_part)
        date_str = date_match.group(1) if date_match else datetime.now().strftime("%Y%m%d")
        
        # 자료 타입 추출
        file_type = "material"  # 기본값
        for key, mapped_type in self.file_type_mapping.items():
            if key in name_part.lower():
                file_type = mapped_type
                break
                
        # 주제 추출 (폴더 설정에서)
        topic_key = {
            "sibling": "sibling-harmony",
            "friendship": "friendship", 
            "honesty": "honesty-choices",
            "global": "global-citizenship",
            "family": "family-happiness"
        }
        
        topic = "topic"  # 기본값
        for key, topic_name in topic_key.items():
            if key in name_part.lower():
                topic = topic_name
                break
        
        # 차시 번호 (기본 1차시)
        lesson_num = 1
        
        # 새 파일명 생성: {차시}-{타입}-{주제}-{날짜}.{확장자}
        new_filename = f"{lesson_num}-{file_type}-{topic}-{date_str}{ext}"
        
        return new_filename

    def create_readme_template(self, folder_config: Dict, files: List[str]) -> str:
        """README.md 템플릿 생성"""
        grade = folder_config["grade"]
        subject = folder_config["subject"] 
        unit_title = folder_config["unit_title"]
        unit_num = folder_config["unit"]
        
        # 포함된 자료 분석
        included_materials = []
        for file in files:
            if "worksheet" in file.lower():
                included_materials.append("- [x] 활동지 (worksheet)")
            elif "mindmap" in file.lower():
                included_materials.append("- [x] 마인드맵 (mindmap)")
            elif "concept" in file.lower():
                included_materials.append("- [x] 개념도 (concept-map)")
            elif "guide" in file.lower():
                included_materials.append("- [x] 활동 가이드 (activity-guide)")
                
        materials_section = "\n".join(set(included_materials)) or "- [ ] 자료 준비 중"
        
        template = f"""# {grade}학년 {subject} - {unit_title}

## 📚 교육과정 정보
- **학년**: {grade}학년
- **교과**: {subject}
- **단원**: {unit_num}. {unit_title}
- **차시**: 1-3차시 (총 3차시)
- **성취기준**: [성취기준코드 입력 필요]

## 🎯 학습 목표
- 학습 목표 1 (수정 필요)
- 학습 목표 2 (수정 필요)
- 학습 목표 3 (수정 필요)

## 📁 포함 자료
{materials_section}

## 🎨 디자인 특징
- **9:16 세로 비율**: 모바일 친화적 설계
- **{grade}학년 특성**: 발달 단계에 적합한 디자인
- **{subject} 교과 특성**: 교과 특성을 반영한 시각화

## 🖨️ 활용 방법

### PPT 활용
1. PowerPoint → 디자인 → 슬라이드 크기 → 사용자 지정
2. 너비: 16cm, 높이: 28.44cm (9:16 비율)
3. SVG 파일 삽입 → 텍스트 편집 가능

## 🏷️ 태그
`#{grade}학년` `#{subject}` `#교육자료` `#시각화`

## 📅 제작 정보
- **최초 제작**: {datetime.now().strftime("%Y-%m-%d")}
- **최종 수정**: {datetime.now().strftime("%Y-%m-%d")}
- **제작자**: plusiam
- **버전**: v1.0

---

💡 **사용 후기나 개선 의견이 있으시면 Issues에 등록해 주세요!**
"""
        return template

    def migrate_folder(self, folder_name: str, dry_run: bool = True) -> Dict:
        """개별 폴더 마이그레이션"""
        if folder_name not in self.migration_config:
            return {"error": f"설정에 없는 폴더: {folder_name}"}
            
        config = self.migration_config[folder_name]
        source_path = self.base_path / "visualization" / folder_name
        target_path = self.base_path / config["target"]
        
        if not source_path.exists():
            return {"error": f"소스 폴더가 존재하지 않음: {source_path}"}
        
        migration_log = {
            "folder": folder_name,
            "source": str(source_path),
            "target": str(target_path),
            "files_migrated": [],
            "files_skipped": [],
            "dry_run": dry_run
        }
        
        # 타겟 폴더 생성
        if not dry_run:
            target_path.mkdir(parents=True, exist_ok=True)
            
        # 파일 목록 가져오기
        source_files = [f for f in source_path.iterdir() if f.is_file()]
        
        for source_file in source_files:
            # 새 파일명 생성
            new_filename = self.generate_new_filename(source_file.name, config)
            target_file = target_path / new_filename
            
            migration_info = {
                "original": source_file.name,
                "new": new_filename,
                "type": source_file.suffix
            }
            
            if dry_run:
                migration_log["files_migrated"].append(migration_info)
            else:
                try:
                    # 파일 복사 (이동이 아닌 복사로 안전하게)
                    target_file.write_bytes(source_file.read_bytes())
                    migration_log["files_migrated"].append(migration_info)
                except Exception as e:
                    migration_info["error"] = str(e)
                    migration_log["files_skipped"].append(migration_info)
        
        # README.md 생성
        if not dry_run:
            readme_content = self.create_readme_template(
                config, 
                [f["new"] for f in migration_log["files_migrated"]]
            )
            readme_path = target_path / "README.md"
            readme_path.write_text(readme_content, encoding='utf-8')
            migration_log["readme_created"] = True
            
        return migration_log

    def migrate_all(self, dry_run: bool = True) -> Dict:
        """전체 마이그레이션 실행"""
        print(f"🚀 교육자료 마이그레이션 {'시뮬레이션' if dry_run else '실행'} 시작")
        print("=" * 60)
        
        analysis = self.analyze_current_structure()
        all_logs = []
        
        for folder_name in analysis["folders_to_migrate"]:
            print(f"\n📁 처리 중: {folder_name}")
            log = self.migrate_folder(folder_name, dry_run)
            all_logs.append(log)
            
            if "error" in log:
                print(f"❌ 오류: {log['error']}")
                continue
                
            print(f"✅ 파일 {len(log['files_migrated'])}개 {'이동 예정' if dry_run else '이동 완료'}")
            for file_info in log["files_migrated"]:
                print(f"   {file_info['original']} → {file_info['new']}")
                
        summary = {
            "total_folders": len(analysis["folders_to_migrate"]),
            "total_files": sum(len(log.get("files_migrated", [])) for log in all_logs),
            "success_folders": len([log for log in all_logs if "error" not in log]),
            "migration_logs": all_logs,
            "dry_run": dry_run
        }
        
        print("\n" + "=" * 60)
        print(f"📊 마이그레이션 {'시뮬레이션' if dry_run else ''} 완료")
        print(f"   폴더: {summary['success_folders']}/{summary['total_folders']}")
        print(f"   파일: {summary['total_files']}개")
        
        return summary

def main():
    """메인 실행 함수"""
    import argparse
    
    parser = argparse.ArgumentParser(description="교육자료 폴더 구조 마이그레이션 도구")
    parser.add_argument("--dry-run", action="store_true", help="실제 실행 없이 시뮬레이션만")
    parser.add_argument("--folder", type=str, help="특정 폴더만 마이그레이션")
    parser.add_argument("--base-path", type=str, default="2025", help="기준 경로")
    
    args = parser.parse_args()
    
    migrator = EducationalMaterialMigrator(args.base_path)
    
    if args.folder:
        # 특정 폴더만 마이그레이션
        result = migrator.migrate_folder(args.folder, args.dry_run)
        print(json.dumps(result, indent=2, ensure_ascii=False))
    else:
        # 전체 마이그레이션
        result = migrator.migrate_all(args.dry_run)
        
        # 결과를 JSON 파일로 저장
        log_filename = f"migration_log_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
        with open(log_filename, 'w', encoding='utf-8') as f:
            json.dump(result, f, indent=2, ensure_ascii=False)
        print(f"\n📄 상세 로그 저장: {log_filename}")

if __name__ == "__main__":
    main()
