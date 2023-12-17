
// 노드 선택 함수
function getNode(node) {
  if (typeof node !== "string") {
    throw new error("getNode 함수의 인수는 문자 타입 이어야 합니다.");
  }

  return document.querySelector(node);
}