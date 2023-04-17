const $gameZone = document.querySelector('.main .game-zone');
let money = 0; //기본 돈
const plMon = setInterval(() => { //시간지날때마다 돈 들어오기
    money += 50;
}, 1000);

let enemyCount = 1; //소환 개수
let death = 0; // 죽은 수 체크

let kk = -20;
let poXL1 = [];
let poXL2 = [];
let poXL3 = [];
let poXL4 = [];

//라인 마다 HP설정해주면서 몇마린지 확인
let HP1 = [];
let HP2 = [];
let HP3 = [];
let HP4 = [];

//캐릭 고를 때 사용할
let want = 1;

//패배 시
function end() {
    alert('패배!!');
}

//승리 시
function win() {
    alert('승리!!');
}

const $score = document.querySelector('.scores');

//몬스터 생성
const newMon = setInterval(() => {
    const num = Math.floor((Math.random() * 4) + 1); // 생성될때마다 몬스터 라인 설정

    const $monImg = document.createElement('img');
    $gameZone.appendChild($monImg);
    $monImg.src = './img/enemys/HornMushy_walk.gif';
    $monImg.style.position = 'absolute';
    $monImg.classList.add(`monster`, `ln${num}`, `new${enemyCount}`);
    $monImg.style.width = '20%';
    $monImg.style.height = '25%';
    $monImg.style.left = '-20%';

    // 자리 배치해주기
    let poY = 0;
    if (num === 1) {
        poY = 5;
        HP1.push(10);
        poXL1.push(kk);
        kk -= 47;
    } else if (num === 2) {
        poY = 30;
        HP2.push(10);
        poXL2.push(kk);
        kk -= 47;
    } else if (num === 3) {
        poY = 55;
        HP3.push(10);
        poXL3.push(kk);
        kk -= 47;
    } else if (num === 4) {
        poY = 80;
        HP4.push(10);
        poXL4.push(kk);
        kk -= 47;
    }
    $monImg.style.left = `${kk+47}%`;
    $monImg.style.top = `${poY}%`;
    
    
    
    if (enemyCount === 10) { // 소환 정지
        clearInterval(newMon);
    }
    enemyCount++;
}, 500);

//afda 초 움직임부터 모든게 작동 시작
const afda = setTimeout(() => {
    const $monster = [...document.querySelectorAll('.monster')];

const $he1 = document.querySelector('.lane1 .left img');
const $he2 = document.querySelector('.lane1 .middle img');
const $he3 = document.querySelector('.lane1 .right img');
const $he4 = document.querySelector('.lane2 .left img');
const $he5 = document.querySelector('.lane2 .middle img');
const $he6 = document.querySelector('.lane2 .right img');
const $he7 = document.querySelector('.lane3 .left img');
const $he8 = document.querySelector('.lane3 .middle img');
const $he9 = document.querySelector('.lane3 .right img');
const $he10 = document.querySelector('.lane4 .left img');
const $he11 = document.querySelector('.lane4 .middle img');
const $he12 = document.querySelector('.lane4 .right img');

const $lane1LeA = document.querySelector('.game-zone .lane1 .left')
const $lane1MiA = document.querySelector('.game-zone .lane1 .middle')
const $lane1RiA = document.querySelector('.game-zone .lane1 .right')
const $lane2LeA = document.querySelector('.game-zone .lane2 .left')
const $lane2MiA = document.querySelector('.game-zone .lane2 .middle')
const $lane2RiA = document.querySelector('.game-zone .lane2 .right')
const $lane3LeA = document.querySelector('.game-zone .lane3 .left')
const $lane3MiA = document.querySelector('.game-zone .lane3 .middle')
const $lane3RiA = document.querySelector('.game-zone .lane3 .right')
const $lane4LeA = document.querySelector('.game-zone .lane4 .left')
const $lane4MiA = document.querySelector('.game-zone .lane4 .middle')
const $lane4RiA = document.querySelector('.game-zone .lane4 .right')

const $lane1LeM = document.querySelector('.game-zone .lane1 .left .game-miner')
const $lane1MiM = document.querySelector('.game-zone .lane1 .middle .game-miner')
const $lane1RiM = document.querySelector('.game-zone .lane1 .right .game-miner')
const $lane2LeM = document.querySelector('.game-zone .lane2 .left .game-miner')
const $lane2MiM = document.querySelector('.game-zone .lane2 .middle .game-miner')
const $lane2RiM = document.querySelector('.game-zone .lane2 .right .game-miner')
const $lane3LeM = document.querySelector('.game-zone .lane3 .left .game-miner')
const $lane3MiM = document.querySelector('.game-zone .lane3 .middle .game-miner')
const $lane3RiM = document.querySelector('.game-zone .lane3 .right .game-miner')
const $lane4LeM = document.querySelector('.game-zone .lane4 .left .game-miner')
const $lane4MiM = document.querySelector('.game-zone .lane4 .middle .game-miner')
const $lane4RiM = document.querySelector('.game-zone .lane4 .right .game-miner')

const $lane1 = document.querySelectorAll('.ln1')
const $lane2 = document.querySelectorAll('.ln2')
const $lane3 = document.querySelectorAll('.ln3')
const $lane4 = document.querySelectorAll('.ln4')

//몬스터 2분뒤부터 나오기 시작
const start = setTimeout(() => {

//계속 오른쪽으로 움직이게
const tlrks1 = setInterval(() => {
    for (let h = 0; h < poXL1.length; h++) {
        $lane1[h].style.left = `${poXL1[h]+1}%`;
        poXL1[h] += 1;

        if(poXL1[h] > 84) {
            clearInterval(tlrks1);
            clearInterval(tlrks2);
            clearInterval(tlrks3);
            clearInterval(tlrks4);
            end();
        } else if($he1.style.display === 'block') {
            for(let enemyCount=0; enemyCount<poXL1.length; enemyCount++) {
                if(poXL1[enemyCount]+20 > 68) {
                    poXL1[enemyCount] = poXL1[enemyCount]-1;
                }
            }
        } else if($he2.style.display === 'block') {
            for(let enemyCount=0; enemyCount<poXL1.length; enemyCount++) {
                if(poXL1[enemyCount]+20 > 78) {
                    poXL1[enemyCount] = poXL1[enemyCount]-1;
                }
            }
        } else if($he3.style.display === 'block') {
            for(let enemyCount=0; enemyCount<poXL1.length; enemyCount++) {
                if(poXL1[enemyCount]+20 > 88) {
                    poXL1[enemyCount] = poXL1[enemyCount]-1;
                }
            }
        }
    }
}, 380);
const tlrks2 = setInterval(() => {
    for (let h = 0; h < poXL2.length; h++) {
        $lane2[h].style.left = `${poXL2[h]+1}%`;
        poXL2[h] += 1;

        if(poXL2[h] > 84) {
            clearInterval(tlrks1);
            clearInterval(tlrks2);
            clearInterval(tlrks3);
            clearInterval(tlrks4);
            end();
        }  else if($he4.style.display === 'block') {
            for(let enemyCount=0; enemyCount<poXL2.length; enemyCount++) {
                if(poXL2[enemyCount]+20 > 68) {
                    poXL2[enemyCount] = poXL2[enemyCount]-1;
                }
            }
        } else if($he5.style.display === 'block') {
            for(let enemyCount=0; enemyCount<poXL2.length; enemyCount++) {
                if(poXL2[enemyCount]+20 > 78) {
                    poXL2[enemyCount] = poXL2[enemyCount]-1;
                }
            }
        } else if($he6.style.display === 'block') {
            for(let enemyCount=0; enemyCount<poXL2.length; enemyCount++) {
                if(poXL2[enemyCount]+20 > 88) {
                    poXL2[enemyCount] = poXL2[enemyCount]-1;
                }
            }
        }
    }
}, 380);
const tlrks3 = setInterval(() => {
    for (let h = 0; h < poXL3.length; h++) {
        $lane3[h].style.left = `${poXL3[h]+1}%`;
        poXL3[h] += 1;

        if(poXL3[h] > 84) {
            clearInterval(tlrks1);
            clearInterval(tlrks2);
            clearInterval(tlrks3);
            clearInterval(tlrks4);
            end();
        } else if($he7.style.display === 'block') {
            for(let enemyCount=0; enemyCount<poXL3.length; enemyCount++) {
                if(poXL3[enemyCount]+20 > 68) {
                    poXL3[enemyCount] = poXL3[enemyCount]-1;
                }
            }
        } else if($he8.style.display === 'block') {
            for(let enemyCount=0; enemyCount<poXL3.length; enemyCount++) {
                if(poXL3[enemyCount]+20 > 78) {
                    poXL3[enemyCount] = poXL3[enemyCount]-1;
                }
            }
        } else if($he9.style.display === 'block') {
            for(let enemyCount=0; enemyCount<poXL3.length; enemyCount++) {
                if(poXL3[enemyCount]+20 > 88) {
                    poXL3[enemyCount] = poXL3[enemyCount]-1;
                }
            }
        }
    }
}, 380);
const tlrks4 = setInterval(() => {
    for (let h = 0; h < poXL4.length; h++) {
        $lane4[h].style.left = `${poXL4[h]+1}%`;
        poXL4[h] += 1;

        if(poXL4[h] > 84) {
            clearInterval(tlrks1);
            clearInterval(tlrks2);
            clearInterval(tlrks3);
            clearInterval(tlrks4);
            end();
        } else if($he10.style.display === 'block') {
            for(let enemyCount=0; enemyCount<poXL4.length; enemyCount++) {
                if(poXL4[enemyCount]+20 > 68) {
                    poXL4[enemyCount] = poXL4[enemyCount]-1;
                }
            }
        } else if($he11.style.display === 'block') {
            for(let enemyCount=0; enemyCount<poXL4.length; enemyCount++) {
                if(poXL4[enemyCount]+20 > 78) {
                    poXL4[enemyCount] = poXL4[enemyCount]-1;
                }
            }
        } else if($he12.style.display === 'block') {
            for(let enemyCount=0; enemyCount<poXL4.length; enemyCount++) {
                if(poXL4[enemyCount]+20 > 88) {
                    poXL4[enemyCount] = poXL4[enemyCount]-1;
                }
            }
        }
    }
}, 380);
clearTimeout(start);
}, 120000);

//무엇을 소환할지 누르기
const $want2 = document.querySelector('.summon-list .miner .miner-img');
const $want3 = document.querySelector('.summon-list .attacker .attacker-img');
document.addEventListener('click', e => {
    if (e.target === $want2) {
        want = 2;
        const $chMi = [...document.querySelectorAll('.game-zone .game-miner')];
        for (let $ele of $chMi) {
            $ele.style.zIndex = '3';
        }
    } else if (e.target === $want3) {
        want = 3;
        const $chAt = [...document.querySelectorAll('.game-zone .game-attacker')];
        for (let $ele of $chAt) {
            $ele.style.zIndex = '3';
        }
    }
});

//소환 작동
document.addEventListener('click', e => {
    if (want === 3) {
        if (e.target === $lane1LeA) {
            $he1.style.display = 'block';
            want = 1;

            // 공격
            const he1At = setInterval(() => {
                let qkftk1 = 60;
                const $att = document.createElement('div');
                $gameZone.appendChild($att);
                $att.classList.add('attack', `x1`, `Y1`);
                $att.style.position = 'absolute';
                $att.style.left = `60%`;
                $att.style.top = `15%`;
                $att.style.width = '3%';
                $att.style.height = '1%';
                $att.style.border = '2px solid white';
                $att.style.borderRadius = '5px';
                $att.style.background = 'aqua';
                $att.style.display = 'block';
                const qkftk11 = setInterval(() => {
                    $att.style.left = `${qkftk1-1}%`;
                    qkftk1 -= 1;
                    if (qkftk1 === 5) {
                        clearInterval(qkftk11);
                        $att.remove();
                    } else {
                        for (let z = 0; z < $lane1.length; z++) {
                            if (poXL1[z]+11 > qkftk1) {
                                clearInterval(qkftk11);
                                $att.remove();
                                HP1[z]--;
                                //죽은놈 뒤로 보내기기
                                if(HP1[z] < 1) {
                                    HP1[z] = 1000000;
                                    $lane1[z].style.left = $lane1[z].style.left;
                                    $lane1[z].src = `./img/enemys/HornMushy_die.gif`;
                                    const deathAni = setTimeout(() => {
                                        $lane1[z].style.left = `-800%`;
                                        poXL1[z] = -10000;
                                        
                                        if(death === 10) {
                                            win();
                                        }
                                        clearTimeout(deathAni);
                                    }, 1000);
                                    death++;
                                }
                            }
                        }
                    }
                }, 7);
            }, 1000)
        } else if (e.target === $lane1MiA) {
            $he2.style.display = 'block';
            want = 1;

            const he2At = setInterval(() => {
                let qkftk1 = 71;
                const $att = document.createElement('div');
                $gameZone.appendChild($att);
                $att.classList.add('attack', `x2`, `Y1`);
                $att.style.position = 'absolute';
                $att.style.left = `71%`;
                $att.style.top = `15%`;
                $att.style.width = '3%';
                $att.style.height = '1%';
                $att.style.border = '2px solid white';
                $att.style.borderRadius = '5px';
                $att.style.background = 'aqua';
                $att.style.display = 'block';
            
                const qkftk11 = setInterval(() => {
                    $att.style.left = `${qkftk1-1}%`;
                    qkftk1 -= 1;
                    if (qkftk1 === 5) {
                        clearInterval(qkftk11);
                        $att.remove();
                    } else {
                        const $poX1 = [...document.querySelectorAll('.ln1')];
                        for (let z = 0; z < $poX1.length; z++) {
                            if (poXL1[z]+11 > qkftk1) {
                                clearInterval(qkftk11);
                                $att.remove();
                                HP1[z]--;

                                if(HP1[z] < 1) {
                                    HP1[z] = 1000000;
                                    $poX1[z].style.left = $poX1[z].style.left;
                                    $poX1[z].src = `./img/enemys/HornMushy_die.gif`;
                                    const deathAni = setTimeout(() => {
                                        $poX1[z].style.left = `-800%`;
                                        poXL1[z] = -10000;

                                        if(death === 10) {
                                            win();
                                        }
                                        clearTimeout(deathAni);
                                    }, 1000);
                                    death++;
                                }
                            }
                        }
                    }
                }, 7);
            }, 1000)
        } else if (e.target === $lane1RiA) {
            $he3.style.display = 'block';
            want = 1;

            const he3At = setInterval(() => {
                let qkftk1 = 82;
                const $att = document.createElement('div');
                $gameZone.appendChild($att);
                $att.classList.add('attack', `x3`, `Y1`);
                $att.style.position = 'absolute';
                $att.style.left = `82%`;
                $att.style.top = `15%`;
                $att.style.width = '3%';
                $att.style.height = '1%';
                $att.style.border = '2px solid white';
                $att.style.borderRadius = '5px';
                $att.style.background = 'aqua';
                $att.style.display = 'block';
            
                const qkftk11 = setInterval(() => {
                    $att.style.left = `${qkftk1-1}%`;
                    qkftk1 -= 1;
                    if (qkftk1 === 5) {
                        clearInterval(qkftk11);
                        $att.remove();
                    } else {
                        const $poX1 = [...document.querySelectorAll('.ln1')];
                        for (let z = 0; z < $poX1.length; z++) {
                            if (poXL1[z]+11 > qkftk1) {
                                clearInterval(qkftk11);
                                $att.remove();
                                HP1[z]--;

                                if(HP1[z] < 1) {
                                    HP1[z] = 1000000;
                                    $poX1[z].style.left = $poX1[z].style.left;
                                    $poX1[z].src = `./img/enemys/HornMushy_die.gif`;
                                    const deathAni = setTimeout(() => {
                                        $poX1[z].style.left = `-800%`;
                                        poXL1[z] = -10000;

                                        if(death === 10) {
                                            win();
                                        }
                                        clearTimeout(deathAni);
                                    }, 1000);
                                    death++;
                                }
                            }
                        }
                    }
                }, 7);
            }, 1000)
        } else if (e.target === $lane2LeA) {
            $he4.style.display = 'block';
            want = 1;

            const he4At = setInterval(() => {
                let qkftk1 = 60;
                const $att = document.createElement('div');
                $gameZone.appendChild($att);
                $att.classList.add('attack', `x1`, `Y2`);
                $att.style.position = 'absolute';
                $att.style.left = `60%`;
                $att.style.top = `40%`;
                $att.style.width = '3%';
                $att.style.height = '1%';
                $att.style.border = '2px solid white';
                $att.style.borderRadius = '5px';
                $att.style.background = 'aqua';
                $att.style.display = 'block';
            
                const qkftk11 = setInterval(() => {
                    $att.style.left = `${qkftk1-1}%`;
                    qkftk1 -= 1;
                    if (qkftk1 === 5) {
                        clearInterval(qkftk11);
                        $att.remove();
                    } else {
                        const $poX2 = [...document.querySelectorAll('.ln2')];
                        for (let z = 0; z < $poX2.length; z++) {
                            if (poXL2[z]+11 > qkftk1) {
                                clearInterval(qkftk11);
                                $att.remove();
                                HP2[z]--;

                                if(HP2[z] < 1) {
                                    HP2[z] = 1000000;
                                    $poX2[z].style.left = $poX2[z].style.left;
                                    $poX2[z].src = `./img/enemys/HornMushy_die.gif`;
                                    const deathAni = setTimeout(() => {
                                        $poX2[z].style.left = `-800%`;
                                        poXL2[z] = -10000;

                                        if(death === 10) {
                                            win();
                                        }
                                        clearTimeout(deathAni);
                                    }, 1000);
                                    death++;
                                }
                            }
                        }
                    }
                }, 7);
            }, 1000)
        } else if (e.target === $lane2MiA) {
            $he5.style.display = 'block';
            want = 1;

            const he5At = setInterval(() => {
                let qkftk1 = 71;
                const $att = document.createElement('div');
                $gameZone.appendChild($att);
                $att.classList.add('attack', `x2`, `Y3`);
                $att.style.position = 'absolute';
                $att.style.left = `71%`;
                $att.style.top = `40%`;
                $att.style.width = '3%';
                $att.style.height = '1%';
                $att.style.border = '2px solid white';
                $att.style.borderRadius = '5px';
                $att.style.background = 'aqua';
                $att.style.display = 'block';
            
                const qkftk11 = setInterval(() => {
                    $att.style.left = `${qkftk1-1}%`;
                    qkftk1 -= 1;
                    if (qkftk1 === 5) {
                        clearInterval(qkftk11);
                        $att.remove();
                    } else {
                        const $poX2 = [...document.querySelectorAll('.ln2')];
                        for (let z = 0; z < $poX2.length; z++) {
                            if (poXL2[z]+11 > qkftk1) {
                                clearInterval(qkftk11);
                                $att.remove();
                                HP2[z]--;

                                if(HP2[z] < 1) {
                                    HP2[z] = 1000000;
                                    $poX2[z].style.left = $poX2[z].style.left;
                                    $poX2[z].src = `./img/enemys/HornMushy_die.gif`;
                                    const deathAni = setTimeout(() => {
                                        $poX2[z].style.left = `-800%`;
                                        poXL2[z] = -10000;

                                        if(death === 10) {
                                            win();
                                        }
                                        clearTimeout(deathAni);
                                    }, 1000);
                                    death++;
                                }
                            }
                        }
                    }
                }, 7);
            }, 1000)
        } else if (e.target === $lane2RiA) {
            $he6.style.display = 'block';
            want = 1;

            const he6At = setInterval(() => {
                let qkftk1 = 82;
                const $att = document.createElement('div');
                $gameZone.appendChild($att);
                $att.classList.add('attack', `x3`, `Y3`);
                $att.style.position = 'absolute';
                $att.style.left = `82%`;
                $att.style.top = `40%`;
                $att.style.width = '3%';
                $att.style.height = '1%';
                $att.style.border = '2px solid white';
                $att.style.borderRadius = '5px';
                $att.style.background = 'aqua';
                $att.style.display = 'block';
            
                const qkftk11 = setInterval(() => {
                    $att.style.left = `${qkftk1-1}%`;
                    qkftk1 -= 1;
                    if (qkftk1 === 5) {
                        clearInterval(qkftk11);
                        $att.remove();
                    } else {
                        const $poX2 = [...document.querySelectorAll('.ln2')];
                        for (let z = 0; z < $poX2.length; z++) {
                            if (poXL2[z]+11 > qkftk1) {
                                clearInterval(qkftk11);
                                $att.remove();
                                HP2[z]--;

                                if(HP2[z] < 1) {
                                    HP2[z] = 1000000;
                                    $poX2[z].style.left = $poX2[z].style.left;
                                    $poX2[z].src = `./img/enemys/HornMushy_die.gif`;
                                    const deathAni = setTimeout(() => {
                                        $poX2[z].style.left = `-800%`;
                                        poXL2[z] = -10000;

                                        if(death === 10) {
                                            win();
                                        }
                                        clearTimeout(deathAni);
                                    }, 1000);
                                    death++;
                                }
                            }
                        }
                    }
                }, 7);
            }, 1000)
        } else if (e.target === $lane3LeA) {
            $he7.style.display = 'block';
            want = 1;

            const he7At = setInterval(() => {
                let qkftk1 = 60;
                const $att = document.createElement('div');
                $gameZone.appendChild($att);
                $att.classList.add('attack', `x1`, `Y2`);
                $att.style.position = 'absolute';
                $att.style.left = `60%`;
                $att.style.top = `65%`;
                $att.style.width = '3%';
                $att.style.height = '1%';
                $att.style.border = '2px solid white';
                $att.style.borderRadius = '5px';
                $att.style.background = 'aqua';
                $att.style.display = 'block';
            
                const qkftk11 = setInterval(() => {
                    $att.style.left = `${qkftk1-1}%`;
                    qkftk1 -= 1;
                    if (qkftk1 === 5) {
                        clearInterval(qkftk11);
                        $att.remove();
                    } else {
                        const $poX3 = [...document.querySelectorAll('.ln3')];
                        for (let z = 0; z < $poX3.length; z++) {
                            if (poXL3[z]+11 > qkftk1) {
                                clearInterval(qkftk11);
                                $att.remove();
                                HP3[z]--;

                                if(HP3[z] < 1) {
                                    HP3[z] = 1000000;
                                    $poX3[z].style.left = $poX3[z].style.left;
                                    $poX3[z].src = `./img/enemys/HornMushy_die.gif`;
                                    const deathAni = setTimeout(() => {
                                        $poX3[z].style.left = `-800%`;
                                        poXL3[z] = -10000;

                                        if(death === 10) {
                                            win();
                                        }
                                        clearTimeout(deathAni);
                                    }, 1000);
                                    death++;
                                }
                            }
                        }
                    }
                }, 7);
            }, 1000)
            
        } else if (e.target === $lane3MiA) {
            $he8.style.display = 'block';
            want = 1;

            const he8At = setInterval(() => {
                let qkftk1 = 71;
                const $att = document.createElement('div');
                $gameZone.appendChild($att);
                $att.classList.add('attack', `x2`, `Y3`);
                $att.style.position = 'absolute';
                $att.style.left = `71%`;
                $att.style.top = `65%`;
                $att.style.width = '3%';
                $att.style.height = '1%';
                $att.style.border = '2px solid white';
                $att.style.borderRadius = '5px';
                $att.style.background = 'aqua';
                $att.style.display = 'block';
            
                const qkftk11 = setInterval(() => {
                    $att.style.left = `${qkftk1-1}%`;
                    qkftk1 -= 1;
                    if (qkftk1 === 5) {
                        clearInterval(qkftk11);
                        $att.remove();
                    } else {
                        const $poX3 = [...document.querySelectorAll('.ln3')];
                        for (let z = 0; z < $poX3.length; z++) {
                            if (poXL3[z]+11 > qkftk1) {
                                clearInterval(qkftk11);
                                $att.remove();
                                HP3[z]--;

                                if(HP3[z] < 1) {
                                    HP3[z] = 1000000;
                                    $poX3[z].style.left = $poX3[z].style.left;
                                    $poX3[z].src = `./img/enemys/HornMushy_die.gif`;
                                    const deathAni = setTimeout(() => {
                                        $poX3[z].style.left = `-800%`;
                                        poXL3[z] = -10000;

                                        if(death === 10) {
                                            win();
                                        }
                                        clearTimeout(deathAni);
                                    }, 1000);
                                    death++;
                                }
                            }
                        }
                    }
                }, 7);
            }, 1000)
            
        } else if (e.target === $lane3RiA) {
            $he9.style.display = 'block';
            want = 1;

            const he9At = setInterval(() => {
                let qkftk1 = 82;
                const $att = document.createElement('div');
                $gameZone.appendChild($att);
                $att.classList.add('attack', `x3`, `Y3`);
                $att.style.position = 'absolute';
                $att.style.left = `82%`;
                $att.style.top = `65%`;
                $att.style.width = '3%';
                $att.style.height = '1%';
                $att.style.border = '2px solid white';
                $att.style.borderRadius = '5px';
                $att.style.background = 'aqua';
                $att.style.display = 'block';
            
                const qkftk11 = setInterval(() => {
                    $att.style.left = `${qkftk1-1}%`;
                    qkftk1 -= 1;
                    if (qkftk1 === 5) {
                        clearInterval(qkftk11);
                        $att.remove();
                    } else {
                        const $poX3 = [...document.querySelectorAll('.ln3')];
                        for (let z = 0; z < $poX3.length; z++) {
                            if (poXL3[z]+11 > qkftk1) {
                                clearInterval(qkftk11);
                                $att.remove();
                                HP3[z]--;

                                if(HP3[z] < 1) {
                                    HP3[z] = 1000000;
                                    $poX3[z].style.left = $poX3[z].style.left;
                                    $poX3[z].src = `./img/enemys/HornMushy_die.gif`;
                                    const deathAni = setTimeout(() => {
                                        $poX3[z].style.left = `-800%`;
                                        poXL3[z] = -10000;

                                        if(death === 10) {
                                            win();
                                        }
                                        clearTimeout(deathAni);
                                    }, 1000);
                                    death++;
                                }
                            }
                        }
                    }
                }, 7);
            }, 1000)
        } else if (e.target === $lane4LeA) {
            $he10.style.display = 'block';
            want = 1;

            const he10At = setInterval(() => {
                let qkftk1 = 60;
                const $att = document.createElement('div');
                $gameZone.appendChild($att);
                $att.classList.add('attack', `x1`, `Y2`);
                $att.style.position = 'absolute';
                $att.style.left = `60%`;
                $att.style.top = `90%`;
                $att.style.width = '3%';
                $att.style.height = '1%';
                $att.style.border = '2px solid white';
                $att.style.borderRadius = '5px';
                $att.style.background = 'aqua';
                $att.style.display = 'block';
            
                const qkftk11 = setInterval(() => {
                    $att.style.left = `${qkftk1-1}%`;
                    qkftk1 -= 1;
                    if (qkftk1 === 5) {
                        clearInterval(qkftk11);
                        $att.remove();
                    } else {
                        const $poX4 = [...document.querySelectorAll('.ln4')];
                        for (let z = 0; z < $poX4.length; z++) {
                            if (poXL4[z]+11 > qkftk1) {
                                clearInterval(qkftk11);
                                $att.remove();
                                HP4[z]--;

                                if(HP4[z] < 1) {
                                    HP4[z] = 1000000;
                                    $poX4[z].style.left = $poX4[z].style.left;
                                    $poX4[z].src = `./img/enemys/HornMushy_die.gif`;
                                    const deathAni = setTimeout(() => {
                                        $poX4[z].style.left = `-800%`;
                                        poXL4[z] = -10000;

                                        if(death === 10) {
                                            win();
                                        }
                                        clearTimeout(deathAni);
                                    }, 1000);
                                    death++;
                                }
                            }
                        }
                    }
                }, 7);
            }, 1000)
        } else if (e.target === $lane4MiA) {
            $he11.style.display = 'block';
            want = 1;

            const he11At = setInterval(() => {
                let qkftk1 = 71;
                const $att = document.createElement('div');
                $gameZone.appendChild($att);
                $att.classList.add('attack', `x2`, `Y3`);
                $att.style.position = 'absolute';
                $att.style.left = `71%`;
                $att.style.top = `90%`;
                $att.style.width = '3%';
                $att.style.height = '1%';
                $att.style.border = '2px solid white';
                $att.style.borderRadius = '5px';
                $att.style.background = 'aqua';
                $att.style.display = 'block';
            
                const qkftk11 = setInterval(() => {
                    $att.style.left = `${qkftk1-1}%`;
                    qkftk1 -= 1;
                    if (qkftk1 === 5) {
                        clearInterval(qkftk11);
                        $att.remove();
                    } else {
                        const $poX4 = [...document.querySelectorAll('.ln4')];
                        for (let z = 0; z < $poX4.length; z++) {
                            if (poXL4[z]+11 > qkftk1) {
                                clearInterval(qkftk11);
                                $att.remove();
                                HP4[z]--;

                                if(HP4[z] < 1) {
                                    HP4[z] = 1000000;
                                    $poX4[z].style.left = $poX4[z].style.left;
                                    $poX4[z].src = `./img/enemys/HornMushy_die.gif`;
                                    const deathAni = setTimeout(() => {
                                        $poX4[z].style.left = `-800%`;
                                        poXL4[z] = -10000;

                                        if(death === 10) {
                                            win();
                                        }
                                        clearTimeout(deathAni);
                                    }, 1000);
                                    death++;
                                }
                            }
                        }
                    }
                }, 7);
            }, 1000)
        } else if (e.target === $lane4RiA) {
            $he12.style.display = 'block';
            want = 1;

            const he12At = setInterval(() => {
                let qkftk1 = 82;
                const $att = document.createElement('div');
                $gameZone.appendChild($att);
                $att.classList.add('attack', `x3`, `Y3`);
                $att.style.position = 'absolute';
                $att.style.left = `82%`;
                $att.style.top = `90%`;
                $att.style.width = '3%';
                $att.style.height = '1%';
                $att.style.border = '2px solid white';
                $att.style.borderRadius = '5px';
                $att.style.background = 'aqua';
                $att.style.display = 'block';
            
                const qkftk11 = setInterval(() => {
                    $att.style.left = `${qkftk1-1}%`;
                    qkftk1 -= 1;
                    if (qkftk1 === 5) {
                        clearInterval(qkftk11);
                        $att.remove();
                    } else {
                        const $poX4 = [...document.querySelectorAll('.ln4')];
                        for (let z = 0; z < $poX4.length; z++) {
                            if (poXL4[z]+11 > qkftk1) {
                                clearInterval(qkftk11);
                                $att.remove();
                                HP4[z]--;
                                
                                if(HP4[z] < 1) {
                                    HP4[z] = 1000000;
                                    $poX4[z].style.left = $poX4[z].style.left;
                                    $poX4[z].src = `./img/enemys/HornMushy_die.gif`;
                                    const deathAni = setTimeout(() => {
                                        $poX4[z].style.left = `-800%`;
                                        poXL4[z] = -10000;

                                        if(death === 10) {
                                            win();
                                        }
                                        clearTimeout(deathAni);
                                    }, 1000);
                                    death++;
                                }
                            }
                        }
                    }
                }, 7);
            }, 1000)
        }
    }

    if (want === 2) {
        if (e.target === $lane1LeA) {
            $lane1LeM.style.display = 'block';
            want = 1;
        } else if (e.target === $lane1MiA) {
            $lane1MiM.style.display = 'block';
            want = 1;
        } else if (e.target === $lane1RiA) {
            $lane1RiM.style.display = 'block';
            want = 1;
        } else if (e.target === $lane2LeA) {
            $lane2LeM.style.display = 'block';
            want = 1;
        } else if (e.target === $lane2MiA) {
            $lane2MiM.style.display = 'block';
            want = 1;
        } else if (e.target === $lane2RiA) {
            $lane2RiM.style.display = 'block';
            want = 1;
        } else if (e.target === $lane3LeA) {
            $lane3LeM.style.display = 'block';
            want = 1;
        } else if (e.target === $lane3MiA) {
            $lane3MiM.style.display = 'block';
            want = 1;
        } else if (e.target === $lane3RiA) {
            $lane3RiM.style.display = 'block';
            want = 1;
        } else if (e.target === $lane4LeA) {
            $lane4LeM.style.display = 'block';
            want = 1;
        } else if (e.target === $lane4MiA) {
            $lane4MiM.style.display = 'block';
            want = 1;
        } else if (e.target === $lane4RiA) {
            $lane4RiM.style.display = 'block';
            want = 1;
        }
    }

})
clearTimeout(afda); //10초뒤에 시작하고 한번만 돌게 설정.

if(death>0){
    if($score.textContent<100)
    $score.textContent = '00'+ death*10;  
    else if($score.textContent<1000){
        $score.textContent = '0'+ death*10;  
    } else{
        $score.textContent = death*10;  
    }
}

}, 5000);
