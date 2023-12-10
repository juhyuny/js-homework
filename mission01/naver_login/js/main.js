
const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

const userEmail = document.querySelector('#userEmail');
const userPassword = document.querySelector('#userPassword');
const btnLogin = document.querySelector('.btn-login');
const welcome = 'welcome.html';


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

// 로그인 버튼 클릭 시 userEmail, userPassword가 모두 일치하면 페이지 이동
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


// 키입력 받을 때 마다 input 이벤트

// userEmail의 입력값과 emailReg 비교
userEmail.addEventListener('input', isValidEmail);
// userEmail의 입력값과 emailReg 비교
userPassword.addEventListener('input', isValidPassword);
// 로그인 버튼을 눌렀을 떄 이벤트
btnLogin.addEventListener('click', handleLogin);




function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase())
}

function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}











