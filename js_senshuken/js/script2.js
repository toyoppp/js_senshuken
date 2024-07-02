$(function () {
  $("#ramen").on('click', function () {
    if ($(this).prop('checked')) {
      // 一旦全てをクリアして再チェックする
      $('.check').prop('checked', false);
      $(this).prop('checked', true);
    }
  });
});

$(function () {
  $('#tea').on('click', function () {
    if ($(this).prop('checked')) {
      // 一旦全てをクリアして再チェックする
      $('.check').prop('checked', false);
      $(this).prop('checked', true);
    }
  });
});

$(function () {
  $('#egg').on('click', function () {
    if ($(this).prop('checked')) {
      // 一旦全てをクリアして再チェックする
      $('.check').prop('checked', false);
      $(this).prop('checked', true);
    }
  });
});

$(() => {
  const countBox = $('#countBox');
  const start = $('#start');
  const stop = $('#stop');
  const reset = $('#reset');
  // const ramen = $('#ramen');
  // const tea = $('#tea');
  // const egg = $('#egg');


  
  //タイマーの秒数
  let setTime = 180;
  //一時停止した時の秒数
  let poseTime = setTime;
  //残りの秒数
  let timeLeft = setTime;
  //setIntervalのための変数
  let testTimer;

  //残りの秒数を表示する関数
  const displayText = () => {
    countBox.text(timeLeft);
  };

  //1ずつカウントダウンする関数
  const countDown = () => {
    timeLeft--;
    poseTime = timeLeft;
    displayText();
  };

  //カウントをストップする関数
  const stopCount = () => {
    clearInterval(testTimer);
  };

  //1000ミリ秒ごとに処理を繰り返す関数
  const timerStart = () => {

    testTimer = setInterval(function () {
      if (timeLeft <= 0) {
        clearInterval(testTimer);
      }
      else {
        countDown();
      }
    }, 1000);

    return;
  };

  displayText();

  //ボタンを押したらカウントダウンスタート
  start.on('click', () => {
    stopCount();
    timeLeft = poseTime;
    displayText();
    timerStart();
  });

  //ボタンを押したらカウントストップ
  stop.on('click', () => {
    stopCount();
  });

  //ボタンを押したらカウントリセット
  reset.on('click', () => {
    stopCount();
    timeLeft = poseTime = setTime;
    displayText();
  });

});
