# 엘리멘탈 포스터 
[바로가기](https://juhyuny.github.io/js-homework/mission02/client/index.html)
---

### 클릭 시 해당 node를 받는 함수 
getNode.js
```javascript

  // 노드 선택 함수
  function getNode(node) {
    if (typeof node !== "string") {
      throw new error("getNode 함수의 인수는 문자 타입 이어야 합니다.");
    }

    return document.querySelector(node);
  }

```


### nav 클릭 이벤트
1. li 선택
```javascript

  // 클릭했을 떄 CSS 선택자 li 선택
  let li = e.target.closest("li");

  // li가 아닐 경우 return
  if (!li) return;

  // nav > ul의 자식인 li 배열
  const list = Array.from(nav.children[0].children);

```


2. 배경 색상 변경
```javascript 

  
  body.style.background = `linear-gradient(to bottom, ${
    data[index - 1].color[0]
  }, ${data[index - 1].color[1]})`;

```


3. 클릭한 li에 is-active 클래스 추가
```javascript

    // 전체 li에 is-active 클래스를 뺴주기
  list.forEach((li) => li.classList.remove("is-active"));

  // li를 클릭했을 때 is-active를 넣어주기
  li.classList.add("is-active");

```
 
4. 클릭한 li에 맞는 이미지 정보(src, alt) 변경
```javascript

  // 선택한 li의 index
  let index = li.dataset.index;

  // .visual img의 src, alt 변경
  visualImage.src = `./assets/${data[index-1].name.toLowerCase()}.jpeg`;
  visualImage.alt = `${data[index - 1].alt}`;

  // nickName 텍스트 변경
  nickName.innerText = `${data[index - 1].name}`;

```


5. 캐릭터에 맞는 오디오 음성 재생
data의 name을 매개변수로 전달하여 오디오 파일명 재생하기
```javascript

  // 캐릭터에 맞는 오디오 음성 
  audioVoice(data[index-1].name.toLowerCase());

```
오디오 파일의 src 변경 함수 추가
```javascript

  setAudio(source){
    this.#audio.src = source;
  }

```

오디오 재생 함수
```javascript 

  function audioVoice(name){
    // 재생되고 있는 음성 멈춤
    audio.stop();
    // 오디오 파일 선택
    audio.setAudio(`./assets/audio/${name}.m4a`);
    // 맞는 오디오 재생
    audio.play();
  }

```


6. 클릭이벤트 함수 호출
```javascript

  // nav를 클릭했을 떄 클릭 이벤트 발생
  nav.addEventListener("click", handleClick);

```