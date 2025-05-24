import React, { useState } from 'react';
import Grade3SiblingsDoubleSidedPage1 from './siblings_harmony_double_sided_page1';
import Grade3SiblingsDoubleSidedPage2 from './siblings_harmony_double_sided_page2';

/**
 * 3학년 도덕 양면 활동지 통합 컴포넌트 - 현장 피드백 반영 완전 버전
 * 특징: 생각열기-활동-공감활동-실천 단계별 학습 설계
 * 활용: 수업 중 활동 + 가정연계 심화학습 통합 관리
 */
const Grade3SiblingsDoubleSidedWorksheet = ({
  studentName = "",
  classGrade = "",
  classNumber = "",
  classDate = "",
  weekStartDate = "",
  customTitle = "형제자매와 사이좋게 지내요",
  customConflictSituations = null,
  practiceItems = null,
  customFamilyActivities = null,
  showBothPages = true,
  initialPage = 1
}) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [studentData, setStudentData] = useState({
    name: studentName,
    grade: classGrade,
    classNum: classNumber,
    date: classDate
  });

  // 인쇄용: 두 페이지를 모두 표시
  if (showBothPages) {
    return (
      <div className="w-full space-y-8">
        {/* 페이지 구분 헤더 */}
        <div className="text-center py-4 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-bold text-gray-800">3학년 도덕 - 형제자매 우애 양면 활동지 (현장 개선 버전)</h2>
          <p className="text-sm text-gray-600 mt-2">
            🖨️ 양면 출력용: 1페이지(생각열기 + 활동1-2) + 2페이지(활동3 + 공감활동 + 실천)
          </p>
          <p className="text-xs text-gray-500 mt-1">
            ✨ 새로운 기능: 학반 정보, 생각열기 단계, 공감활동 추가
          </p>
        </div>

        {/* 1페이지 */}
        <div className="border-2 border-gray-300 rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-blue-600">📄 1페이지 - 수업 중 활동 (35분)</h3>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">앞면</span>
          </div>
          <div className="text-sm text-gray-600 mb-3">
            🧠 생각열기 → 💡 활동1(자기점검) → 😊 활동2(감정표현)
          </div>
          <Grade3SiblingsDoubleSidedPage1
            studentName={studentData.name}
            classGrade={studentData.grade}
            classNumber={studentData.classNum}
            classDate={studentData.date}
            customTitle={customTitle}
          />
        </div>

        {/* 페이지 구분선 */}
        <div className="border-t-4 border-dashed border-gray-400 py-2">
          <p className="text-center text-gray-500 text-sm">✂️ 양면 출력 시 자동으로 뒷면에 인쇄됩니다</p>
        </div>

        {/* 2페이지 */}
        <div className="border-2 border-gray-300 rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-green-600">📄 2페이지 - 심화활동 & 가정연계 (1주일)</h3>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">뒷면</span>
          </div>
          <div className="text-sm text-gray-600 mb-3">
            🎭 활동3(갈등해결) → 💌 공감활동(편지쓰기) → 📅 실천다짐표 → 🏠 가족활동
          </div>
          <Grade3SiblingsDoubleSidedPage2
            studentName={studentData.name}
            customConflictSituations={customConflictSituations}
            practiceItems={practiceItems}
            familyActivities={customFamilyActivities}
            weekStartDate={weekStartDate}
          />
        </div>

        {/* 출력 안내 */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                <strong>💡 양면 출력 팁 (업데이트):</strong>
              </p>
              <ul className="mt-2 text-sm text-yellow-600 list-disc list-inside">
                <li>PPT에서 세로 슬라이드 설정: 16cm × 28.44cm (9:16 비율)</li>
                <li>양면 인쇄 시 "긴 가장자리 대칭" 또는 "용지에 맞춤" 선택</li>
                <li>A4 용지 권장, 좌우 여백 약 2.5cm 발생 (정상)</li>
                <li>📚 학급 관리: "학반" 항목으로 더욱 체계적 관리 가능</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 교육적 개선 사항 */}
        <div className="bg-green-50 border-l-4 border-green-400 p-4">
          <div className="ml-3">
            <p className="text-sm text-green-700">
              <strong>🌟 이번 업데이트의 교육적 개선사항:</strong>
            </p>
            <ul className="mt-2 text-sm text-green-600 list-disc list-inside">
              <li><strong>"생각 열기"</strong> 단계 추가로 수업 도입 구조 명확화</li>
              <li><strong>"공감활동"</strong> 신설로 감정교육 및 소통능력 강화</li>
              <li><strong>실천 다짐표</strong> 구체화로 행동 변화 실질적 유도</li>
              <li><strong>학반 정보</strong> 추가로 학급 단위 활용도 극대화</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  // 페이지별 보기 모드
  return (
    <div className="w-full max-w-md mx-auto">
      {/* 페이지 전환 탭 */}
      <div className="flex mb-4 bg-gray-100 rounded-lg p-1">
        <button
          onClick={() => setCurrentPage(1)}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            currentPage === 1
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-gray-600 hover:text-blue-600'
          }`}
        >
          🧠 수업활동 (1페이지)
        </button>
        <button
          onClick={() => setCurrentPage(2)}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            currentPage === 2
              ? 'bg-white text-green-600 shadow-sm'
              : 'text-gray-600 hover:text-green-600'
          }`}
        >
          💌 가정연계 (2페이지)
        </button>
      </div>

      {/* 학생 정보 입력 (확장) */}
      <div className="mb-4 p-3 bg-gray-50 rounded-lg">
        <h4 className="text-sm font-medium text-gray-700 mb-2">학생 정보 입력 (현장 맞춤형)</h4>
        <div className="space-y-2">
          <input
            type="text"
            placeholder="학생 이름"
            value={studentData.name}
            onChange={(e) => setStudentData(prev => ({ ...prev, name: e.target.value }))}
            className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="학년 (예: 3)"
              value={studentData.grade}
              onChange={(e) => setStudentData(prev => ({ ...prev, grade: e.target.value }))}
              className="flex-1 px-3 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="반 (예: 2)"
              value={studentData.classNum}
              onChange={(e) => setStudentData(prev => ({ ...prev, classNum: e.target.value }))}
              className="flex-1 px-3 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="날짜"
              value={studentData.date}
              onChange={(e) => setStudentData(prev => ({ ...prev, date: e.target.value }))}
              className="flex-1 px-3 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* 선택된 페이지 표시 */}
      <div className="border rounded-lg overflow-hidden">
        {currentPage === 1 ? (
          <Grade3SiblingsDoubleSidedPage1
            studentName={studentData.name}
            classGrade={studentData.grade}
            classNumber={studentData.classNum}
            classDate={studentData.date}
            customTitle={customTitle}
          />
        ) : (
          <Grade3SiblingsDoubleSidedPage2
            studentName={studentData.name}
            customConflictSituations={customConflictSituations}
            practiceItems={practiceItems}
            familyActivities={customFamilyActivities}
            weekStartDate={weekStartDate}
          />
        )}
      </div>

      {/* 페이지 정보 (업데이트) */}
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          {currentPage === 1 
            ? "🧠 생각열기 → 자기점검 → 감정표현 (35분)" 
            : "💌 갈등해결 → 공감활동 → 실천다짐 (1주일 프로그램)"}
        </p>
        <p className="text-xs text-gray-500 mt-1">
          페이지 {currentPage} / 2 • 현장 개선 버전
        </p>
      </div>

      {/* 새로운 기능 안내 */}
      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-700 font-medium mb-1">🆕 이번 업데이트 주요 개선사항</p>
        <ul className="text-xs text-blue-600 space-y-1">
          <li>• 학반 정보로 체계적 학급 관리</li>
          <li>• 생각열기 단계로 수업 구조 개선</li>
          <li>• 공감활동으로 감정교육 강화</li>
          <li>• 구체적 실천표로 행동 변화 유도</li>
        </ul>
      </div>
    </div>
  );
};

export default Grade3SiblingsDoubleSidedWorksheet;