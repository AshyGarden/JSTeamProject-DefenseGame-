
const $start = document.querySelector('.wrapper .start-button');
let duration = 8000; /* 한 장면당 할당 시간(ms) */

$start.addEventListener('click', e => {
    const $main = document.querySelector('.main')
    /* 오디오 변경 */
    const $audioPlayer = document.querySelector('.audioPlayer');
    $audioPlayer.setAttribute('src', './source/music/Tutorial-First_Step_Master.mp3');

    const stopAudio = setTimeout(() => {
        $audioPlayer.setAttribute('src', './source/music/MainGame-Rest_N_Peace.mp3');
        clearTimeout(stopAudio);
    }, duration*10);


    /* 첫번째 텍스트박스 */
    const $tutorialBox1 = document.createElement('div');

    $main.appendChild($tutorialBox1);
    $tutorialBox1.className = 'tutorialBox1';
    $tutorialBox1.style.position = 'absolute';
    $tutorialBox1.style.top = '65%';
    $tutorialBox1.style.left = '5%';
    $tutorialBox1.style.width = '50%';
    $tutorialBox1.style.height = '30%';
    $tutorialBox1.style.borderRadius = '20px';
    $tutorialBox1.style.background = 'black';
    $tutorialBox1.style.opacity = '0.7';
    $tutorialBox1.style.color = 'white';
    $tutorialBox1.style.fontSize = '30px';
    $tutorialBox1.innerHTML = '박스안의 광부를 눌러주세요.';
    $tutorialBox1.style.textAlign = 'center';
    $tutorialBox1.style.lineHeight = '200%';
    $tutorialBox1.style.padding = '80px 10%';
    $tutorialBox1.style.boxSizing = 'border-box';

    /* 첫번째 노란색박스 */
    const $yellowBox1 = document.createElement('div');

    $main.appendChild($yellowBox1);
    $yellowBox1.className = 'yellowBox1';
    $yellowBox1.style.position = 'absolute';
    $yellowBox1.style.border = '5px solid yellow';
    $yellowBox1.style.top = '0%';
    $yellowBox1.style.left = '58%';
    $yellowBox1.style.width = '20%';
    $yellowBox1.style.height = '19%';

    /* 첫번째 위 화살표*/
    const $up = document.createElement('i');

    $main.appendChild($up);
    $up.className = 'lnr lnr-chevron-up';
    $up.style.position = 'absolute';
    $up.style.color = 'yellow';
    $up.style.fontSize = '60px';
    $up.style.fontWeight = 'bold';
    $up.style.left = '63.5%';
    $up.style.bottom = '72%';

    /* 1 -> 2 */
    const block1 = setTimeout(() => {
        $tutorialBox1.style.display = 'none';
        $yellowBox1.style.display = 'none';
        $up.style.display = 'none';
        $tutorialBox2.style.display = 'block';
        $yellowBox2.style.display = 'block';
        $down2.style.display = 'block';
        clearTimeout(block1);
    }, duration);

    /* 두번째 텍스트박스 */
    const $tutorialBox2 = document.createElement('div');

    $main.appendChild($tutorialBox2);
    $tutorialBox2.className = 'tutorialBox2';
    $tutorialBox2.style.display = 'none';
    $tutorialBox2.style.position = 'absolute';
    $tutorialBox2.style.top = '65%';
    $tutorialBox2.style.left = '5%';
    $tutorialBox2.style.width = '50%';
    $tutorialBox2.style.height = '30%';
    $tutorialBox2.style.borderRadius = '20px';
    $tutorialBox2.style.background = 'black';
    $tutorialBox2.style.opacity = '0.7';
    $tutorialBox2.style.color = 'white';
    $tutorialBox2.style.fontSize = '30px';
    $tutorialBox2.innerHTML = '화살표 위치의 바닥을 클릭하면,<br> 광부를 생성하실 수 있습니다.';
    $tutorialBox2.style.textAlign = 'center';
    $tutorialBox2.style.lineHeight = '200%';
    $tutorialBox2.style.padding = '50px 10%';
    $tutorialBox2.style.boxSizing = 'border-box';

    /* 두번째 노란색박스 */
    const $yellowBox2 = document.createElement('div');

    $main.appendChild($yellowBox2);
    $yellowBox2.className = 'yellowBox2';
    $yellowBox2.style.display = 'none';
    $yellowBox2.style.position = 'absolute';
    $yellowBox2.style.border = '5px solid yellow';
    $yellowBox2.style.top = '40%';
    $yellowBox2.style.left = '80%';
    $yellowBox2.style.width = '9.5%';
    $yellowBox2.style.height = '19%';

    /* 두번째 아래화살표 */
    const $down2 = document.createElement('i');

    $main.appendChild($down2);
    $down2.className = 'lnr lnr-chevron-down';
    $down2.style.position = 'absolute';
    $down2.style.color = 'yellow';
    $down2.style.fontSize = '60px';
    $down2.style.fontWeight = 'bold';
    $down2.style.left = '83%';
    $down2.style.bottom = '60%';
    $down2.style.display = 'none';

    /* 2->3 */
    const block2 = setTimeout(() => {
        $tutorialBox2.style.display = 'none';
        $tutorialBox3.style.display = 'block';
        $yellowBox3.style.display = 'block';
        $up3.style.display = 'block';

        /* 메소 올라가는 텍스트 변경 */
        const $mesoUp = document.querySelector('.totalMeso');
        $mesoUp.innerHTML = '00500';
        
        clearTimeout(block2);
    }, duration*2);

    /* 세번째 텍스트박스 */
    const $tutorialBox3 = document.createElement('div');

    $main.appendChild($tutorialBox3);
    $tutorialBox3.className = 'tutorialBox3';
    $tutorialBox3.style.display = 'none';
    $tutorialBox3.style.position = 'absolute';
    $tutorialBox3.style.top = '65%';
    $tutorialBox3.style.left = '5%';
    $tutorialBox3.style.width = '50%';
    $tutorialBox3.style.height = '30%';
    $tutorialBox3.style.borderRadius = '20px';
    $tutorialBox3.style.background = 'black';
    $tutorialBox3.style.opacity = '0.7';
    $tutorialBox3.style.color = 'white';
    $tutorialBox3.style.fontSize = '30px';
    $tutorialBox3.innerHTML = ' 광부는 공격할 수 없지만 <br>일정시간마다 메소를 생성합니다.';
    $tutorialBox3.style.textAlign = 'center';
    $tutorialBox3.style.lineHeight = '200%';
    $tutorialBox3.style.padding = '50px 10%';
    $tutorialBox3.style.boxSizing = 'border-box';

    /* 세번째 노란색박스(메소) */
    const $yellowBox3 = document.createElement('div');

    $main.appendChild($yellowBox3);
    $yellowBox3.className = 'yellowBox3';
    $yellowBox3.style.display = 'none';
    $yellowBox3.style.position = 'absolute';
    $yellowBox3.style.border = '5px solid yellow';
    $yellowBox3.style.top = '0%';
    $yellowBox3.style.left = '33%';
    $yellowBox3.style.width = '9.5%';
    $yellowBox3.style.height = '19%';

     /* 세번째 위 화살표*/
     const $up3 = document.createElement('i');

    $main.appendChild($up3);
    $up3.className = 'lnr lnr-chevron-up';
    $up3.style.position = 'absolute';
    $up3.style.color = 'yellow';
    $up3.style.fontSize = '60px';
    $up3.style.fontWeight = 'bold';
    $up3.style.left = '36.25%';
    $up3.style.bottom = '72%';
    $up3.style.display = 'none';

 
    /* 3->4 */
    const block3 = setTimeout(() => {
        $up3.style.display = 'none';
        $yellowBox2.style.display = 'none';
        $yellowBox3.style.display = 'none';
        $tutorialBox3.style.display = 'none';
        $down2.style.display = 'none';
        $tutorialBox4.style.display = 'block';
        $yellowBox4.style.display = 'block';
        $up4.style.display = 'block';

        /* 메소 초기화 */
        const $mesoUp = document.querySelector('.totalMeso');
        $mesoUp.innerHTML = '00000';

        clearTimeout(block3);
    }, duration*3);

    /* 네번째 텍스트박스 */
    const $tutorialBox4 = document.createElement('div');

    $main.appendChild($tutorialBox4);
    $tutorialBox4.className = 'tutorialBox4';
    $tutorialBox4.style.display = 'none';
    $tutorialBox4.style.position = 'absolute';
    $tutorialBox4.style.top = '65%';
    $tutorialBox4.style.left = '5%';
    $tutorialBox4.style.width = '50%';
    $tutorialBox4.style.height = '30%';
    $tutorialBox4.style.borderRadius = '20px';
    $tutorialBox4.style.background = 'black';
    $tutorialBox4.style.opacity = '0.7';
    $tutorialBox4.style.color = 'white';
    $tutorialBox4.style.fontSize = '30px';
    $tutorialBox4.innerHTML = '박스안의 요원을 눌러주세요.';
    $tutorialBox4.style.textAlign = 'center';
    $tutorialBox4.style.lineHeight = '200%';
    $tutorialBox4.style.padding = '80px 10%';
    $tutorialBox4.style.boxSizing = 'border-box';

    /* 네번째 노란색박스 */
    const $yellowBox4 = document.createElement('div');

    $main.appendChild($yellowBox4);
    $yellowBox4.className = 'yellowBox4';
    $yellowBox4.style.display = 'none';
    $yellowBox4.style.position = 'absolute';
    $yellowBox4.style.border = '5px solid yellow';
    $yellowBox4.style.top = '0%';
    $yellowBox4.style.left = '78%';
    $yellowBox4.style.width = '21%';
    $yellowBox4.style.height = '19%';

    /* 네번째 위 화살표*/
    const $up4 = document.createElement('i');

    $main.appendChild($up4);
    $up4.className = 'lnr lnr-chevron-up';
    $up4.style.display = 'none';
    $up4.style.position = 'absolute';
    $up4.style.color = 'yellow';
    $up4.style.fontSize = '60px';
    $up4.style.fontWeight = 'bold';
    $up4.style.left = '87.5%';
    $up4.style.bottom = '72%';

    /* 4->5 */
    const block4 = setTimeout(() => {
        $tutorialBox4.style.display = 'none';
        $yellowBox4.style.display = 'none';
        $up4.style.display = 'none';
        $tutorialBox5.style.display = 'block';
        $yellowBox5.style.display = 'block';
        $down5.style.display = 'block';
        clearTimeout(block4);
    }, duration*4);

    /* 다섯번째 텍스트박스 */
    const $tutorialBox5 = document.createElement('div');

    $main.appendChild($tutorialBox5);
    $tutorialBox5.className = 'tutorialBox5';
    $tutorialBox5.style.display = 'none';
    $tutorialBox5.style.position = 'absolute';
    $tutorialBox5.style.top = '65%';
    $tutorialBox5.style.left = '5%';
    $tutorialBox5.style.width = '50%';
    $tutorialBox5.style.height = '30%';
    $tutorialBox5.style.borderRadius = '20px';
    $tutorialBox5.style.background = 'black';
    $tutorialBox5.style.opacity = '0.7';
    $tutorialBox5.style.color = 'white';
    $tutorialBox5.style.fontSize = '30px';
    $tutorialBox5.innerHTML = '화살표 위치의 바닥을 클릭하면,<br> 요원을 생성하실 수 있습니다.';
    $tutorialBox5.style.textAlign = 'center';
    $tutorialBox5.style.lineHeight = '200%';
    $tutorialBox5.style.padding = '50px 10%';
    $tutorialBox5.style.boxSizing = 'border-box';

    /* 다섯번째 노란색박스 */
    const $yellowBox5 = document.createElement('div');

    $main.appendChild($yellowBox5);
    $yellowBox5.className = 'yellowBox5';
    $yellowBox5.style.display = 'none';
    $yellowBox5.style.position = 'absolute';
    $yellowBox5.style.border = '5px solid yellow';
    $yellowBox5.style.top = '40%';
    $yellowBox5.style.left = '70%';
    $yellowBox5.style.width = '9.5%';
    $yellowBox5.style.height = '19%';

    /* 다섯번째 아래화살표 */
    const $down5 = document.createElement('i');

    $main.appendChild($down5);
    $down5.className = 'lnr lnr-chevron-down';
    $down5.style.position = 'absolute';
    $down5.style.color = 'yellow';
    $down5.style.fontSize = '60px';
    $down5.style.fontWeight = 'bold';
    $down5.style.left = '73%';
    $down5.style.bottom = '60%';
    $down5.style.display = 'none';

    /* 5->6 */
    const block5 = setTimeout(() => {
        $tutorialBox5.style.display = 'none';
        $tutorialBox6.style.display = 'block';
        clearTimeout(block5);
    }, duration*5);

     /* 여섯번째 텍스트박스 */
    const $tutorialBox6 = document.createElement('div');

    $main.appendChild($tutorialBox6);
    $tutorialBox6.className = 'tutorialBox6';
    $tutorialBox6.style.display = 'none';
    $tutorialBox6.style.position = 'absolute';
    $tutorialBox6.style.top = '65%';
    $tutorialBox6.style.left = '5%';
    $tutorialBox6.style.width = '50%';
    $tutorialBox6.style.height = '30%';
    $tutorialBox6.style.borderRadius = '20px';
    $tutorialBox6.style.background = 'black';
    $tutorialBox6.style.opacity = '0.7';
    $tutorialBox6.style.color = 'white';
    $tutorialBox6.style.fontSize = '30px';
    $tutorialBox6.innerHTML = '요원은 버섯을 공격할 수 있습니다.';
    $tutorialBox6.style.textAlign = 'center';
    $tutorialBox6.style.lineHeight = '200%';
    $tutorialBox6.style.padding = '80px 10%';
    $tutorialBox6.style.boxSizing = 'border-box';

    /* 6->7 */
    const block6 = setTimeout(() => {
        $tutorialBox6.style.display = 'none';
        $yellowBox5.style.display = 'none';
        $down5.style.display = 'none';
        $tutorialBox7.style.display = 'block';
        $yellowBox7.style.display = 'block';
        $up7.style.display = 'block';
        /* 스코어 올라가는 텍스트 변경 */
        const $scoreUp = document.querySelector('.scores');
        $scoreUp.innerHTML = '010';
        clearTimeout(block6);
    }, duration*6);
    
    /* 일곱번째 텍스트박스 */
    const $tutorialBox7 = document.createElement('div');

    $main.appendChild($tutorialBox7);
    $tutorialBox7.className = 'tutorialBox7';
    $tutorialBox7.style.display = 'none';
    $tutorialBox7.style.position = 'absolute';
    $tutorialBox7.style.top = '65%';
    $tutorialBox7.style.left = '5%';
    $tutorialBox7.style.width = '50%';
    $tutorialBox7.style.height = '30%';
    $tutorialBox7.style.borderRadius = '20px';
    $tutorialBox7.style.background = 'black';
    $tutorialBox7.style.opacity = '0.7';
    $tutorialBox7.style.color = 'white';
    $tutorialBox7.style.fontSize = '30px';
    $tutorialBox7.innerHTML = '버섯을 죽이면 스코어가 올라갑니다.';
    $tutorialBox7.style.textAlign = 'center';
    $tutorialBox7.style.lineHeight = '200%';
    $tutorialBox7.style.padding = '80px 10%';
    $tutorialBox7.style.boxSizing = 'border-box';

    /* 일곱번째 노란색박스(스코어) */
    const $yellowBox7 = document.createElement('div');

    $main.appendChild($yellowBox7);
    $yellowBox7.className = 'yellowBox3';
    $yellowBox7.style.display = 'none';
    $yellowBox7.style.position = 'absolute';
    $yellowBox7.style.border = '5px solid yellow';
    $yellowBox7.style.top = '0%';
    $yellowBox7.style.left = '43.3%';
    $yellowBox7.style.width = '9.5%';
    $yellowBox7.style.height = '19%';

    /* 일곱번째 위 화살표*/
    const $up7 = document.createElement('i');

    $main.appendChild($up7);
    $up7.className = 'lnr lnr-chevron-up';
    $up7.style.position = 'absolute';
    $up7.style.color = 'yellow';
    $up7.style.fontSize = '60px';
    $up7.style.fontWeight = 'bold';
    $up7.style.left = '46.5%';
    $up7.style.bottom = '72%';
    $up7.style.display = 'none';


    /* 7->8 */
     const block7 = setTimeout(() => {
        $tutorialBox7.style.display = 'none';
        $yellowBox7.style.display = 'none';
        $up7.style.display = 'none';
        $tutorialBox8.style.display = 'block';
        $yellowBox8.style.display = 'block';
        $left8.style.display = 'block';
        
        /* 스코어 초기화 */
        const $scoreUp = document.querySelector('.scores');
        $scoreUp.innerHTML = '0000';

        clearTimeout(block7);
    }, duration*7);

    /* 여덟번째 텍스트박스 */
    const $tutorialBox8 = document.createElement('div');

    $main.appendChild($tutorialBox8);
    $tutorialBox8.className = 'tutorialBox8';
    $tutorialBox8.style.display = 'none';
    $tutorialBox8.style.position = 'absolute';
    $tutorialBox8.style.top = '40%';
    $tutorialBox8.style.left = '20%';
    $tutorialBox8.style.width = '30%';
    $tutorialBox8.style.height = '40%';
    $tutorialBox8.style.borderRadius = '20px';
    $tutorialBox8.style.background = 'black';
    $tutorialBox8.style.opacity = '0.7';
    $tutorialBox8.style.color = 'white';
    $tutorialBox8.style.fontSize = '30px';
    $tutorialBox8.innerHTML = '해당위치에서 적이<br>랜덤으로 생성됩니다.';
    $tutorialBox8.style.textAlign = 'center';
    $tutorialBox8.style.lineHeight = '200%';
    $tutorialBox8.style.padding = '90px 0';
    $tutorialBox8.style.boxSizing = 'border-box';

     /* 여덟번째 노란색박스 */
     const $yellowBox8 = document.createElement('div');

    $main.appendChild($yellowBox8);
    $yellowBox8.className = 'yellowBox8';
    $yellowBox8.style.display = 'none';
    $yellowBox8.style.position = 'absolute';
    $yellowBox8.style.border = '5px solid yellow';
    $yellowBox8.style.top = '20%';
    $yellowBox8.style.left = '1%';
    $yellowBox8.style.width = '9.5%';
    $yellowBox8.style.height = '78.75%';

     /* 여덟번째 왼쪽화살표*/
     const $left8 = document.createElement('i');

     $main.appendChild($left8);
     $left8.className = 'lnr lnr-chevron-left';
     $left8.style.position = 'absolute';
     $left8.style.color = 'yellow';
     $left8.style.fontSize = '60px';
     $left8.style.fontWeight = 'bold';
     $left8.style.left = '12%';
     $left8.style.bottom = '36.5%';
     $left8.style.display = 'none';


    /* 8->9 */
    const block8 = setTimeout(() => {
        $tutorialBox8.style.display = 'none';
        $yellowBox8.style.display = 'none';
        $left8.style.display = 'none';
        $tutorialBox9.style.display = 'block';
        $yellowBox9.style.display = 'block';
        $right9.style.display = 'block';

        clearTimeout(block8);
    }, duration*8);

    /* 아홉번째 텍스트박스 */
    const $tutorialBox9 = document.createElement('div');

    $main.appendChild($tutorialBox9);
    $tutorialBox9.className = 'tutorialBox9';
    $tutorialBox9.style.display = 'none';
    $tutorialBox9.style.position = 'absolute';
    $tutorialBox9.style.top = '40%';
    $tutorialBox9.style.left = '30%';
    $tutorialBox9.style.width = '30%';
    $tutorialBox9.style.height = '40%';
    $tutorialBox9.style.borderRadius = '20px';
    $tutorialBox9.style.background = 'black';
    $tutorialBox9.style.opacity = '0.7';
    $tutorialBox9.style.color = 'white';
    $tutorialBox9.style.fontSize = '30px';
    $tutorialBox9.innerHTML = '적이 해당위치를 통과하면<br>패배하게 됩니다.';
    $tutorialBox9.style.textAlign = 'center';
    $tutorialBox9.style.lineHeight = '200%';
    $tutorialBox9.style.padding = '90px 0';
    $tutorialBox9.style.boxSizing = 'border-box';
    
    /* 아홉번째 노란색박스 */
    const $yellowBox9 = document.createElement('div');

    $main.appendChild($yellowBox9);
    $yellowBox9.className = 'yellowBox9';
    $yellowBox9.style.display = 'none';
    $yellowBox9.style.position = 'absolute';
    $yellowBox9.style.border = '5px solid yellow';
    $yellowBox9.style.top = '20%';
    $yellowBox9.style.left = '89.5%';
    $yellowBox9.style.width = '9.5%';
    $yellowBox9.style.height = '78.75%';

    /* 아홉번째 왼쪽화살표*/
    const $right9 = document.createElement('i');

    $main.appendChild($right9);
    $right9.className = 'lnr lnr-chevron-right';
    $right9.style.position = 'absolute';
    $right9.style.color = 'yellow';
    $right9.style.fontSize = '60px';
    $right9.style.fontWeight = 'bold';
    $right9.style.left = '85.5%';
    $right9.style.bottom = '36.5%';
    $right9.style.display = 'none';


    /* 9->10 */
    const block9 = setTimeout(() => {
        $tutorialBox9.style.display = 'none';
        $yellowBox9.style.display = 'none';
        $right9.style.display = 'none';
        $tutorialBox10.style.display = 'block';
        clearTimeout(block9);
    }, duration*9);

    /* 아홉번째 텍스트박스 */
    const $tutorialBox10 = document.createElement('div');

    $main.appendChild($tutorialBox10);
    $tutorialBox10.className = 'tutorialBox10';
    $tutorialBox10.style.display = 'none';
    $tutorialBox10.style.position = 'absolute';
    $tutorialBox10.style.top = '40%';
    $tutorialBox10.style.left = '20%';
    $tutorialBox10.style.width = '60%';
    $tutorialBox10.style.height = '40%';
    $tutorialBox10.style.borderRadius = '20px';
    $tutorialBox10.style.color = '#ac0000';
    $tutorialBox10.style.fontSize = '50px';
    $tutorialBox10.style.fontWeight = 'bold';
    $tutorialBox10.innerHTML = '잠시 후 게임을 시작합니다!';
    $tutorialBox10.style.textAlign = 'center';
    $tutorialBox10.style.lineHeight = '200%';
    $tutorialBox10.style.padding = '70px 0';
    $tutorialBox10.style.boxSizing = 'border-box';


    /* 10 */
    const block10 = setTimeout(() => {
        $tutorialBox10.style.display = 'none';
        
        clearTimeout(block10);
    }, duration*10);



});
