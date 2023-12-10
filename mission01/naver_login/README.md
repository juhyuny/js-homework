# 네이버 로그인 페이지 구현

---

<!-- 로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성합니다. -->


---
- [x] 재사용 가능한 함수를 분리하고 함수를 중심으로 설계하는 방법에 대해 학습합니다.

---

## 로그인에 필요한 아이디, 비밀번호를 받았을 떄 값 가져오기
1. 자바스크립트에서 사용할 수 있도록 선택자를 변수에 할당한다.
```javascript
  const userEmail = document.querySelector('#userEmail');  // 아이디 input
  const userPassword = document.querySelector('#userPassword');   // 비밀번호 input
  const btnLogin = document.querySelector('.btn-login');   // 로그인 버튼
  const welcome = 'welcome.html';  // 로그인 성공 시 이동할 페이지

```


2. 각 요소에 발생하는 이벤트와 함수호출

```javascript

  // userEmail의 입력값과 emailReg 비교
  userEmail.addEventListener('input', isValidEmail);
  // userEmail의 입력값과 emailReg 비교
  userPassword.addEventListener('input', isValidPassword);
  // 로그인 버튼을 눌렀을 떄 이벤트
  btnLogin.addEventListener('click', handleLogin);

```


3-1. 입력받은 아이디가 email 정규표현식과 일치하는지 비교하는 함수선언

```javascript

  // email 정규표현식을 사용한 validation
  function isValidEmail(){
    
    if( emailReg(this.value) || this.value === ""){
      // true면 해당 input에 is--invalid 제거
      userEmail.classList.remove('is--invalid');
    } else {
      // false면 해당 input에 is--invalid 추가
      userEmail.classList.add('is--invalid');
      
    }
  }

```



3-2. 입력받은 비밀번호가 password 정규표현식과 일치하는지 비교하는 함수선언

```javascript

  // pw 정규표현식을 사용한 validation
  function isValidPassword(){
  
  if( pwReg(this.value) || this.value === ""){  // 빈문자 
    // true면 해당 input에 is--invalid 제거
    userPassword.classList.remove('is--invalid');
  } else {
    // false면 해당 input에 is--invalid 추가
    userPassword.classList.add('is--invalid');
    
  }
}

```



4. 로그인 버튼 클릭 시 userEmail, userPassword가 모두 일치하면 페이지 이동

```javascript

  function handleLogin(e){
  // 태그의 기본 링크 이벤트 중단
  e.preventDefault();
  
  if (userEmail.value === user.id){
    if(userPassword.value === user.pw){
      window.location.href = welcome;
    } else  {
      // 비밀번호가 틀렸을 경우 
      alert('입력하신 비밀번호가 일치하지 않습니다.');
    }
  } else {
    alert('올바른 아이디를 입력해주세요.');
  }
}

```


