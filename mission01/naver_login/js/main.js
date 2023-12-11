
const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}

const userEmail = document.querySelector('#userEmail');
const userPassword = document.querySelector('#userPassword');
const btnLogin = document.querySelector('.btn-login');

let emailPass = false;      // 아이디의 형식이 맞는지 상태를 확인하는 변수
let pwPass = false;       // 비밀번호의 형식이 맞는지 상태를 확인하는 변수

const welcome = 'welcome.html';   // 로그인 완료 시 넘어가는 환영 페이지


// email 정규표현식을 사용한 validation
function isValidEmail(){
  let value = this.value;
  
  if( emailReg(value) || value === ""){
    // true면 해당 input에 is--invalid 제거
    userEmail.classList.remove('is--invalid');
    // emailPass = true;
  } else {
    // false면 해당 input에 is--invalid 추가
    userEmail.classList.add('is--invalid');
    // emailPass = false;
  }
  // 정규표현식에 맞는 값을 받았을 때의 불린값 true를 할당
  emailPass = emailReg(value);
  
}


// pw 정규표현식을 사용한 validation
function isValidPassword(){
  let value = this.value;
  
  if( pwReg(value) || value === ""){  // 빈문자 
    // true면 해당 input에 is--invalid 제거
    userPassword.classList.remove('is--invalid');
    // pwPass = true;
  } else {
    // false면 해당 input에 is--invalid 추가
    userPassword.classList.add('is--invalid');
    // pwPass = false;
  }
  // 정규표현식에 맞는 값을 받았을 때 불린값 true를 할당
  pwPass = pwReg(value);
  
}

// 로그인 버튼 클릭 시 userEmail, userPassword가 모두 일치하면 페이지 이동
function handleLogin(e){
  // 태그의 기본 링크 이벤트 중단
  e.preventDefault();
  
  // 아이디와 비밀번호가 형식을 통과했을 떄 
  if(emailPass && pwPass){
    if (userEmail.value === user.id && userPassword.value === user.pw){
        window.location.href = welcome;
    } else {
      alert('아이디 또는 비밀번호가 일치하지 않습니다.');
    }
  } else{
    // 아이디와 비밀번호가 형식을 통과하지 못했을 떄 
    alert('아이디 또는 비밀번호 형식이 맞지 않습니다.');
  }
}


function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase())
}

function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}


// 키입력 받을 때 마다 input 이벤트

// userEmail의 입력값과 emailReg 비교
userEmail.addEventListener('input', isValidEmail);
// userEmail의 입력값과 emailReg 비교
userPassword.addEventListener('input', isValidPassword);
// 로그인 버튼을 눌렀을 떄 이벤트
btnLogin.addEventListener('click', handleLogin);





