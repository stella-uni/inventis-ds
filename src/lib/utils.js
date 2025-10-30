/**
 * 클래스명을 병합하는 유틸리티 함수
 * @param {...(string|boolean|undefined|null)} classes - 병합할 클래스명들
 * @returns {string} 병합된 클래스명 문자열
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

