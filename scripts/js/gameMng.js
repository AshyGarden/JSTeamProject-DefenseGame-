/* Main js - 게임로직 설정+ ui표시 및 값 분베 */
/* app.js(전투로직) */

/* BaseData */
const date = new Date(); /* 시작 날짜 */
const $audiocontroller = document.querySelector('.audioCtrl'); /* 오디오 버튼 */
const $audioPlayer = document.querySelector('.audioPlayer');   /* 오디오 플레이어 */

/* gameData */
const gameData = {
    playTimeCounter: 0,/* 플레이타임 카운트  */
    minerCount: 1,/* 광부숫자 */
    totalMeso: 0, /* 총 메소 */
    totalScore: 0,/* 총 점수 */
    leftover: 0, /* 남은 적 게이지 받아줄 변수 */
    isPlay : true /* 음악재생변수 */
};

/* audio - 음악 음파 아이콘 있으면 틀고, 없으면 끄기*/
function audioOnOff() {
    $audiocontroller.addEventListener('click', function () {
        if(gameData.isPlay === false){
            $audioPlayer.play();
            gameData.isPlay = true;
            $audiocontroller.innerHTML='<span class="lnr lnr-volume-high"></span>';
        } else{
            $audioPlayer.pause();
            gameData.isPlay = false;
            $audiocontroller.innerHTML='<span class="lnr lnr-volume"></span>';
        }     
    });
}

/* timer - 시작후 1초씩 증가(+*/
const $playtime = document.querySelector('.playtime');

function playingTime() {
    gameData.playTimeCounter += 1;
    $playtime.textContent =
        gameData.playTimeCounter < 100 ? (gameData.playTimeCounter < 10 ? '00' + gameData.playTimeCounter : '0' + gameData.playTimeCounter) : gameData.playTimeCounter;
}

/* MESO logic*/
const $meso = document.querySelector('.totalMeso');

function earningMeso() {
    /* 광부 숫자 */
    gameData.totalMeso += gameData.minerCount * 500;
    $meso.textContent =
        gameData.totalMeso < 10000 ? (gameData.totalMeso < 1000 ? '00' + gameData.totalMeso : '0' + gameData.totalMeso) : gameData.totalMeso;
}

/* 광부or요원 소환시 돈 깍기 */
function summonCrew(e) {
    /* 광부 숫자 */
    if (gameData.totalMeso) {
        /* 소환시 메소가 모자라면 문구 띄워주기 */
        /* 돈이 모자라요~ */
    } else if (e.target.contains('attacker')) {
        /* 요원소환 */


    } else if (e.target.contains('miner')) {
        /* 광부소환 */

    }
};

/* 적 죽이면 점수증가 */
function scoreUp() {

};

/* 적 죽이면 남은 적 게이지 깍아주기 */
const $togoGauge = document.querySelector('.togo');
const $leftoverGauge = document.querySelector('.leftover');

function gaugeDecrease() {
    let textTime = 0;
    let second = date.getSeconds();


    $leftoverGauge.style.width -= second/100;
    if ($leftoverGauge.style.width <= 0) {
        return;
    }

};

(function () {
    audioOnOff();

   /*  setInterval(date.getSeconds(),2000); */
    /* console.log(date.getSeconds()); */
   /*  console.log($leftoverGauge.style.width); */
   /*  setInterval($leftoverGauge.style.width, 10000); */
    setInterval(playingTime, 1000);
    setInterval(earningMeso, 5000); /* - 5초마다 광부 1명당 500MESO  */
 /*    gaugeDecrease(); */

})();