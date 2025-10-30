/**
 * 공통 variant 스타일 정의
 * 모든 UI 컴포넌트에서 재사용 가능한 스타일 패턴
 */

/**
 * 포커스 스타일 (Tailwind config의 focus-ring 토큰 사용)
 */
export const focusStyles =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring ring-offset-2 ring-offset-bg";

/**
 * Disabled 스타일
 */
export const disabledStyles = "disabled:opacity-50 disabled:cursor-not-allowed";

/**
 * 기본 트랜지션
 */
export const transitionStyles = "transition-colors";

/**
 * 인터랙티브 요소의 기본 스타일
 */
export const interactiveBaseStyles = `select-none outline-none ${transitionStyles}`;

/**
 * 공통 호버 스타일 (variant에 따라 다름)
 */
export const hoverVariants = {
  // 어두운 배경 (default 버튼 등)
  inverse: "hover:bg-btn-inverse-hover/95",
  // 밝은 배경 (outline, plain 버튼 등)
  light: "hover:bg-btn-inverse-hover/5",
  // 투명한 배경 위에 밝은 호버
  transparent: "hover:bg-btn-hover/10",
};

/**
 * 크기별 패딩 및 폰트 스타일 (Tailwind config 기반)
 */
export const sizeVariants = {
  xs: {
    padding: "px-2 py-1",
    rounded: "rounded-md",
    text: "text-label-tiny",
  },
  sm: {
    padding: "px-2 py-1",
    rounded: "rounded-md",
    text: "text-label-small",
  },
  base: {
    padding: "px-2.5 py-1.5",
    rounded: "rounded-lg",
    text: "text-label-small",
  },
  l: {
    padding: "px-3 py-2",
    rounded: "rounded-lg",
    text: "text-label-small",
  },
  xl: {
    padding: "px-4 py-2",
    rounded: "rounded-lg",
    text: "text-label-base",
  },
};

/**
 * 크기 스타일을 문자열로 변환
 */
export function getSizeStyles(size) {
  const variant = sizeVariants[size] || sizeVariants.base;
  return `${variant.padding} ${variant.rounded} ${variant.text}`;
}

