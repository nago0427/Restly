document.addEventListener('DOMContentLoaded', () => {
  const timeCircle = document.querySelector('.time-circle');
  const timeDisplay = document.querySelector('.time-remaining');
  const circle = document.querySelector('.progress-ring__circle');
  const RADIUS = circle.r.baseVal.value;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

  circle.style.strokeDasharray = CIRCUMFERENCE;
  circle.style.strokeDashoffset = CIRCUMFERENCE;

  let duration = 5 * 60; // タイマーの初期時間（秒）
  let timerInterval;
  let isRunning = false;

  function startTimer(duration) {
    let startTime = Date.now();
    timerInterval = setInterval(() => {
        let elapsedTime = (Date.now() - startTime) / 1000; // 経過時間を秒単位で取得
        let remainingTime = duration - elapsedTime;
        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            remainingTime = 0;
            isRunning = false;
        }
        timeDisplay.textContent = formatTime(Math.floor(remainingTime)); // 小数点以下を切り捨て
        updateCircle(remainingTime, duration);
    }, 100); // 100ミリ秒ごとに更新
  }

  function stopTimer() {
    clearInterval(timerInterval);
  }

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60); // 小数点以下を切り捨て
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  function updateCircle(timeLeft, duration) {
      const offset = CIRCUMFERENCE - (timeLeft / duration) * CIRCUMFERENCE;
      circle.style.strokeDashoffset = -offset;
  }

  // タイマーをクリックで開始/停止する
  timeCircle.addEventListener('click', () => {
    if (isRunning) {
      stopTimer();
    } else {
      startTimer(duration);
    }
    isRunning = !isRunning;
  });

  timeCircle.addEventListener('mouseover', () => {
    timeCircle.classList.add('glow');
  });

  timeCircle.addEventListener('mouseout', () => {
    timeCircle.classList.remove('glow');
  });

});
