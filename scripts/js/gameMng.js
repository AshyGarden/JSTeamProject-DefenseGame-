/* Main js - 게임로직 설정+ ui표시 및 값 분베 */
document.write('<script src="./scripts/js/app.js"></script>') /* app.js(전투로직) */
document.write('<script src="./scripts/js/tutorial.js"></script>');/* tutorial.js(튜토리얼) */

/* BaseData */
const date = new Date(); /* 시작 날짜 */
const $audiocontroller = document.querySelector('.audioCtrl'); /* 오디오 버튼 */
const $audioPlayer = document.querySelector('.audioPlayer');   /* 오디오 플레이어 */
const $playtime = document.querySelector('.playtime');         /* 플레이 타임*/
const $meso = document.querySelector('.totalMeso');            /* 총 메소*/

// import enemyCount from './app.js';                             /* 적의 숫자*/
// import death from './app.js';                                  /* 적의 숫자*/
// import duration from './tutorial.js';                          /* 튜토리얼 설명 1개당 지속시간*/

/* gameData */
const gameData = {
    /* UI */
    isPlay : true, /* 음악재생변수 */
    playTimeCounter: 0,/* 플레이타임 카운트  */
    
    /* Players */
    minerCount: 1,/* 광부숫자 */
    totalMeso: 0, /* 총 메소 */
    totalScore: 0,/* 총 점수 */
    enemyKills : 0, /* 적을 죽인 횟수 */
    
    /* Enemy */
    // enemyKillDegree: 10,/* 적을 죽일때 얻는 점수 - 여길 조정하면 점수 변동폭 조정 가능 */
    // totalEnemy: enemyCount, /* 총 적의 수 = (app.js의) 총 생성된 적의 수*/
    // leftover: totalEnemy-death, /* 남은 적의 수 = 총 적의 수*/
};

/////////////////////////////////////////////////////////////////////////////////////////
/* UI */
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
function playingTime() {
    gameData.playTimeCounter += 1;
    // console.log(gameData.playTimeCounter);
    $playtime.textContent =
        gameData.playTimeCounter < 100 ? (gameData.playTimeCounter < 10 ? '00' + gameData.playTimeCounter : '0' + gameData.playTimeCounter) : gameData.playTimeCounter;
}

///////////////////////////////////////////////////////////////////////////////////////
/* Player */
/* MESO logic*/
function earningMeso() {
    // if(gameData.playTimeCounter < 120){ //임시방편
    //     return;
    // }

    /* 광부 숫자 */
    gameData.totalMeso += gameData.minerCount * 500;
    $meso.textContent =
        gameData.totalMeso < 10000 ? (gameData.totalMeso < 1000 ? '00' + gameData.totalMeso : '0' + gameData.totalMeso) : gameData.totalMeso;
}

/* 광부or요원 소환시 돈 깍기 */
// function summonCrew(e) {
//     /* 광부 숫자 */
//     if (gameData.totalMeso) {
//         /* 소환시 메소가 모자라면 문구 띄워주기 */
//         /* 돈이 모자라요~ */

//     } else if (e.target.contains('attacker')) {
//         /* 요원소환 */


//     } else if (e.target.contains('miner')) {
//         /* 광부소환 */

//     }
// };

/* 적 죽이면 점수증가 */
// function scoreUp() { 
//     totalScore += enemyKills * enemyKillDegree;
// };

/////////////////////////////////////////////////////////////////////////////////////////
/* Enemy */
/* 적 죽이면 남은 적 게이지 깍아주기 */
/* const $leftoverGauge = document.querySelector('.leftover');
function gaugeDecrease() {   

    $leftoverGauge.style.width = leftover/totalEnemy;
    if ($leftoverGauge.style.width <= 0) {
        return;
    }

}; */

////////////////////////////////////////////////////////////////////////////////
/* Main Function */
(function () {
    /* UI */
    setInterval(playingTime, 1000);    /* 플레이 타임 함수  */
    audioOnOff();                      /* 오디오 함수 */
    setInterval(earningMeso, 5000);    /* 5초마다 광부 1명당 500MESO  */ 
    // scoreUp();                         /* 적 죽이면 점수증가 */
    // gaugeDecrease();                   /* 적 죽이면 남은 적 게이지 깍아주기 */
})();