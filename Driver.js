"use strict";

let gameSpeed = 1;
let bonusSpeed = 1;

let curTime = new Date();
let totalTime = 0;
let tickRate = 10;
let fpsRate = 10;
let sudoStop = false;

function tick() {
    if(sudoStop) {
        return;
    }
    let newTime = new Date();
    totalTime += newTime - curTime;
    curTime = newTime;
    // if(stop) {
    //     // addOffline(totalTime * offlineRatio);
    //     lastTime = 0;
    //     view.updating.update();
    //     return;
    // }
    while(totalTime > (1000 / tickRate)) {
        for(let skill in skills) {    
            skills[skill].tick();
        }
        totalTime -= 1000 / tickRate;
    }
    //Update view
    view.updating.update();
};   




    // function togglePause() {
    //     if(stop) {
    //         unpauseGame();
    //     } else {
    //         pauseGame();
    //     }
    // }
    
    
    // function pauseGame() {
    //     stop = true;
    //     document.title = "*PAUSED* King's Perfect War";
    //     document.getElementById('pausePlay').innerHTML = 'Play';
    // }
    
    // function unpauseGame() {
    //     if(mana === 0) {
    //         restart();
    //     }
    //     stop = false;
    //     document.title = "King's Perfect War";
    //     document.getElementById('pausePlay').innerHTML = 'Pause';
    // }
