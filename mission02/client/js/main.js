/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const nav = getNode(".nav");
const visualImage = getNode(".visual img");
const nickName = getNode(".nickName");
const body = getNode("body");
const audio = new AudioPlayer("./assets/audio/clod.m4a");

function handleClick(e) {
  e.preventDefault();

   // 클릭했을 떄 CSS 선택자 li 선택
  let li = e.target.closest("li");

    // li가 아닐 경우 return
  if (!li) return;

  // nav > ul의 자식인 li 배열
  const list = Array.from(nav.children[0].children);

  // 전체 li에 is-active 클래스를 뺴주기
  list.forEach((li) => li.classList.remove("is-active"));

  // li를 클릭했을 때 is-active를 넣어주기
  li.classList.add("is-active");

  // 선택한 li의 index
  let index = li.dataset.index;

  // .visual img의 src, alt 변경
  visualImage.src = `./assets/${data[index-1].name.toLowerCase()}.jpeg`;
  visualImage.alt = `${data[index - 1].alt}`;

  // nickName 텍스트 변경
  nickName.innerText = `${data[index - 1].name}`;

  // 배경색상 바꿔주기
  body.style.background = `linear-gradient(to bottom, ${
    data[index - 1].color[0]
  }, ${data[index - 1].color[1]})`;
  
  // 캐릭터에 맞는 오디오 음성 
  audioVoice(data[index-1].name.toLowerCase());
  
}

  // nav를 클릭했을 떄 클릭 이벤트 발생
nav.addEventListener("click", handleClick);
