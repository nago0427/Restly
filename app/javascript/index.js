document.addEventListener('DOMContentLoaded', () => {
  const timeCircle = document.querySelector('.time-circle');
  const timeDisplay = document.querySelector('.time-remaining');
  const circle = document.querySelector('.progress-ring__circle');
  const RADIUS = circle.r.baseVal.value;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

  circle.style.strokeDasharray = CIRCUMFERENCE;
  circle.style.strokeDashoffset = CIRCUMFERENCE;

  let duration = 1 * 60; // タイマーの初期時間（秒）

  function startTimer(duration) {
    let startTime = Date.now();
    let timerInterval = setInterval(() => {
        let elapsedTime = (Date.now() - startTime) / 1000; // 経過時間を秒単位で取得
        let remainingTime = duration - elapsedTime;
        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            remainingTime = 0;
        }
        timeDisplay.textContent = formatTime(Math.floor(remainingTime)); // 小数点以下を切り捨て
        updateCircle(remainingTime, duration);
    }, 100); // 100ミリ秒ごとに更新
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

  function formatTime(seconds) {
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  startTimer(duration);
});
