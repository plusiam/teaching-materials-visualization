import React from 'react';

/**
 * 공통 기본 레이아웃 컴포넌트
 * 모든 학년에서 사용 가능한 기본 구조
 */
export const BaseLayout = ({ children, className = "", aspectRatio = "16/9" }) => (
  <div className={`w-full ${className}`} style={{ aspectRatio }}>
    {children}
  </div>
);

/**
 * 워크시트 헤더 (범용)
 */
export const WorksheetHeader = ({ 
  grade, 
  subject, 
  title, 
  studentName = "", 
  studentNumber = "",
  style = "default" 
}) => {
  const styles = {
    default: {
      bgColor: "#F8F9FA", 
      titleColor: "#2D3748",
      subColor: "#666"
    },
    colorful: {
      bgColor: "#FF6B9D", 
      titleColor: "#FFFFFF",
      subColor: "#FFE4E1"
    },
    minimal: {
      bgColor: "#FFFFFF", 
      titleColor: "#2D3436",
      subColor: "#636E72"
    }
  };
  
  const currentStyle = styles[style] || styles.default;
  
  return (
    <div 
      className="p-6 text-center border-b-2"
      style={{ backgroundColor: currentStyle.bgColor }}
    >
      <h1 
        className="text-2xl font-bold mb-2"
        style={{ color: currentStyle.titleColor }}
      >
        {grade} {subject} - {title}
      </h1>
      <div style={{ color: currentStyle.subColor }}>
        이름: {studentName || "_______________"} 번호: {studentNumber || "____"}
      </div>
    </div>
  );
};

/**
 * 인쇄용 푸터 (범용)
 */
export const PrintableFooter = ({ 
  className = "", 
  message = "소중한 수업 자료입니다",
  showDate = true 
}) => (
  <div className={`text-center p-4 text-sm text-gray-500 border-t ${className}`}>
    <p>{message}</p>
    {showDate && <p className="mt-1">제작일: {new Date().toLocaleDateString('ko-KR')}</p>}
  </div>
);

/**
 * 범용 카드 컨테이너
 */
export const CardContainer = ({ 
  children, 
  title, 
  color = "#4ECDC4", 
  icon, 
  className = "",
  padding = "p-6" 
}) => (
  <div className={`bg-white rounded-lg border-l-4 shadow-sm ${padding} ${className}`} 
       style={{ borderLeftColor: color }}>
    {(title || icon) && (
      <div className="flex items-center mb-4">
        {icon && <span className="text-2xl mr-3">{icon}</span>}
        {title && (
          <h3 className="text-lg font-semibold" style={{ color }}>
            {title}
          </h3>
        )}
      </div>
    )}
    {children}
  </div>
);

/**
 * 체크박스 그룹 (범용)
 */
export const CheckboxGroup = ({ 
  items, 
  title, 
  columns = 2, 
  checkboxSize = "w-4 h-4" 
}) => (
  <div>
    {title && <h4 className="font-medium mb-3">{title}</h4>}
    <div className={`grid grid-cols-${columns} gap-3`}>
      {items.map((item, index) => (
        <label key={index} className="flex items-center space-x-2 cursor-pointer">
          <input 
            type="checkbox" 
            className={`${checkboxSize} border-2 border-gray-300 rounded`} 
          />
          <span className="text-sm">{item}</span>
        </label>
      ))}
    </div>
  </div>
);

/**
 * 입력 필드 (범용)
 */
export const InputField = ({ 
  label, 
  placeholder = "", 
  multiline = false, 
  width = "w-full",
  height = multiline ? "h-20" : "h-8" 
}) => (
  <div className="mb-4">
    {label && <label className="block text-sm font-medium mb-1">{label}</label>}
    {multiline ? (
      <textarea 
        className={`${width} ${height} border border-gray-300 rounded px-3 py-2 text-sm`}
        placeholder={placeholder}
      />
    ) : (
      <input 
        type="text"
        className={`${width} ${height} border border-gray-300 rounded px-3 py-2 text-sm`}
        placeholder={placeholder}
      />
    )}
  </div>
);

/**
 * 그리드 레이아웃 (반응형)
 */
export const ResponsiveGrid = ({ 
  children, 
  cols = { xs: 1, sm: 2, md: 3, lg: 4 }, 
  gap = 4 
}) => {
  const gridCols = `grid-cols-${cols.xs} sm:grid-cols-${cols.sm} md:grid-cols-${cols.md} lg:grid-cols-${cols.lg}`;
  
  return (
    <div className={`grid ${gridCols} gap-${gap}`}>
      {children}
    </div>
  );
};

/**
 * 섹션 구분선
 */
export const SectionDivider = ({ 
  style = "solid", 
  color = "#E5E7EB", 
  thickness = 1,
  margin = "my-6" 
}) => (
  <hr 
    className={margin}
    style={{ 
      borderStyle: style, 
      borderColor: color, 
      borderWidth: `${thickness}px 0 0 0` 
    }} 
  />
);

/**
 * 말풍선 (범용)
 */
export const SpeechBubble = ({ 
  children, 
  direction = "left", 
  color = "#F0F9FF",
  borderColor = "#3B82F6",
  className = ""
}) => (
  <div className={`relative bg-white rounded-lg p-4 border-2 ${className}`}
       style={{ backgroundColor: color, borderColor }}>
    {children}
    {/* 말풍선 꼬리 */}
    <div 
      className={`absolute top-6 w-0 h-0 ${
        direction === 'left' ? '-left-2' : '-right-2'
      }`}
      style={{
        borderTop: `8px solid transparent`,
        borderBottom: `8px solid transparent`,
        [direction === 'left' ? 'borderRight' : 'borderLeft']: `8px solid ${borderColor}`
      }}
    />
  </div>
);

/**
 * 아이콘 버튼 (범용)
 */
export const IconButton = ({ 
  icon, 
  text, 
  color = "#4ECDC4", 
  size = "medium",
  onClick,
  className = ""
}) => {
  const sizes = {
    small: "w-8 h-8 text-lg",
    medium: "w-12 h-12 text-2xl", 
    large: "w-16 h-16 text-3xl"
  };
  
  return (
    <button 
      className={`${sizes[size]} rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all ${className}`}
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      <span>{icon}</span>
      {text && <span className="ml-2 text-sm font-medium">{text}</span>}
    </button>
  );
};