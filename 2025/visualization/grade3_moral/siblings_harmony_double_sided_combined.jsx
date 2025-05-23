import React, { useState } from 'react';
import Grade3SiblingsDoubleSidedPage1 from './siblings_harmony_double_sided_page1';
import Grade3SiblingsDoubleSidedPage2 from './siblings_harmony_double_sided_page2';

/**
 * 3학년 도덕 양면 활동지 통합 컴포넌트
 * 특징: 두 페이지를 함께 관리하고 데이터 공유
 * 활용: 웹사이트에서 미리보기, 인쇄용 출력, 디지털 활동지
 */
const Grade3SiblingsDoubleSidedWorksheet = ({
  studentName = "",
  studentNumber = "",
  classDate = "",
  weekStartDate = "",
  customTitle = "형제자매와 사이좋게 지내요",
  customFamilyActivities = null,
  showBothPages = true,
  initialPage = 1
}) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [studentData, setStudentData] = useState({
    name: studentName,
    number: studentNumber,
    date: classDate
  });

  // 인쇄용: 두 페이지를 모두 표시
  if (showBothPages) {
    return (
      <div className="w-full space-y-8">
        {/* 페이지 구분 헤더 */}
        <div className="text-center py-4 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-bold text-gray-800">3학년 도덕 - 형제자매 우애 양면 활동지</h2>
          <p className="text-sm text-gray-600 mt-2">
            🖨️ 양면 출력용: 1페이지(수업활동) + 2페이지(가정연계)
          </p>
        </div>

        {/* 1페이지 */}
        <div className="border-2 border-gray-300 rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-blue-600">📄 1페이지 - 수업 중 활동</h3>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">앞면</span>
          </div>
          <Grade3SiblingsDoubleSidedPage1
            studentName={studentData.name}
            studentNumber={studentData.number}
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
            <h3 className="text-lg font-semibold text-green-600">📄 2페이지 - 심화활동 & 가정연계</h3>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">뒷면</span>
          </div>
          <Grade3SiblingsDoubleSidedPage2
            studentName={studentData.name}
            customActivities={customFamilyActivities}
            weekStartDate={weekStartDate}
          />
        </div>

        {/* 출력 안내 */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                <strong>💡 양면 출력 팁:</strong>
              </p>
              <ul className="mt-2 text-sm text-yellow-600 list-disc list-inside">
                <li>PPT에서 세로 슬라이드 설정 (16cm × 28.44cm)</li>
                <li>양면 인쇄 시 "긴 가장자리 대칭" 선택</li>
                <li>A4 용지에 맞춤 크기로 조정</li>
              </ul>
            </div>
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
          📝 수업활동 (1페이지)
        </button>
        <button
          onClick={() => setCurrentPage(2)}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            currentPage === 2
              ? 'bg-white text-green-600 shadow-sm'
              : 'text-gray-600 hover:text-green-600'
          }`}
        >
          🏠 가정연계 (2페이지)
        </button>
      </div>

      {/* 학생 정보 입력 (옵션) */}
      <div className="mb-4 p-3 bg-gray-50 rounded-lg">
        <h4 className="text-sm font-medium text-gray-700 mb-2">학생 정보 입력</h4>
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
              placeholder="번호"
              value={studentData.number}
              onChange={(e) => setStudentData(prev => ({ ...prev, number: e.target.value }))}
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
            studentNumber={studentData.number}
            classDate={studentData.date}
            customTitle={customTitle}
          />
        ) : (
          <Grade3SiblingsDoubleSidedPage2
            studentName={studentData.name}
            customActivities={customFamilyActivities}
            weekStartDate={weekStartDate}
          />
        )}
      </div>

      {/* 페이지 정보 */}
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          {currentPage === 1 
            ? "🎯 35분 수업시간 내 완료 가능한 3개 활동" 
            : "🌱 수업 후 가족과 함께하는 1주일 실천 프로그램"}
        </p>
        <p className="text-xs text-gray-500 mt-1">
          페이지 {currentPage} / 2
        </p>
      </div>
    </div>
  );
};

export default Grade3SiblingsDoubleSidedWorksheet;