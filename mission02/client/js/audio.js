

class AudioPlayer {
  #audio = null;

  constructor(source) {
    // if (!isString(source)) {
    //   throwTypeError('source 인자는 오디오 음원 경로(문자 값)이어야 합니다.');
    // }

    this.#audio = document.createElement('audio');
    this.#audio.src = source;
  }

  setAudio(source){
    this.#audio.src = source;
  }
  
  play() {
    this.#audio.play();
  }

  loopPlay() {
    this.play();
    on(this.#audio, 'ended', this.play.bind(this));
    // this.#audio.addEventListener('ended', this.play.bind(this));
  }

  pause() {
    this.#audio.pause();
  }

  stop() {
    this.pause();
    this.#audio.currentTime = 0;
  }

  isPlaying() {
    return !this.#audio.paused;
  }

  get time(){
    return this.#audio.currentTime;
  }
}

// 클릭 시 캐릭터에 맞는 오디오 음성
function audioVoice(name){
  
  // 재생되고 있는 음성 멈춤
  audio.stop();
  // 오디오 파일 선택
  audio.setAudio(`./assets/audio/${name}.m4a`);
  // 맞는 오디오 재생
  audio.play();
  
}