/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

// 노드 선택 함수
function getNode(node) {
  if (typeof node !== "string") {
    throw new error("getNode 함수의 인수는 문자 타입 이어야 합니다.");
  }

  return document.querySelector(node);
}

const nav = getNode(".nav");
const posterImage = getNode(".nav li img");
const visualImage = getNode(".visual img");
const nickName = getNode(".nickName");
const body = getNode("body");

function handleClick(e) {
  e.preventDefault();

  // 매개변수를 클릭했을 떄 가장 가까운 CSS 선택자 li를 선택하기
  let li = e.target.closest("li");

  if (!li) return;

  // nav 안에 첫 번쨰 자식 ul안에 자식인 li를 배열로 만들어서 list에 넣기
  const list = Array.from(nav.children[0].children);

  // 전체 li에 is-active 클래스를 뺴주기
  list.forEach((li) => li.classList.remove("is-active"));

  // li를 클릭했을 때 is-active를 넣어주기
  li.classList.add("is-active");

  // 선택한 li의 index 뽑아오기
  let index = li.dataset.index;

  // 선택한 li에 data[index-1] 데이터 객체가져오기
  visualImage.src = `${posterImage.src}`;
  visualImage.alt = `${data[index - 1].alt}`;

  console.log(visualImage.src);
  // html img의 src, alt 값 바꿔주기
  // 변수명.src, 변수명.src 경로 변경

  // innerText로 html nickName 바꿔주기
  nickName.innerText = `${data[index - 1].name}`;

  // 배경색상 바꿔주기
  body.style.background = `linear-gradient(to bottom, ${
    data[index - 1].color[0]
  }, ${data[index - 1].color[1]})`;
}

// nav를 클릭했을 떄 자식인 li를 선택해서 이벤트 발생
nav.addEventListener("click", handleClick);
