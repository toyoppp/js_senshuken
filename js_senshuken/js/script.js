const startButton = document.getElementById('start_button')
startButton.addEventListener('click', ()=> {
  const timerLabel = document.querySelector('.timer_label')
  let leftTime = 180;
  const timer = () => {
    leftTime--;
    const minutes = Math.floor(leftTime / 60)
    const seconds = leftTime % 60
    timerLabel.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    if (leftTime === 0) {
      timerLabel.textContent = '完成'
      clearInterval(intervalId)
    }
  }
  const intervalId= setInterval(timer, 1000)

})

$("#stop_button").hide();