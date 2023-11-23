// IMPORT LIBRARY PACKAGES //

import scene from "./scene.js";

// DECLARE GLOBAL VARIABLES //

let canvas;
let engine;
let scene_1;
let sceneManager
let inputStates = {};

// EXECUTE GAME CODE //

window.onload = startGame;

function startGame() {
    canvas = document.getElementById("myCanvas");
    engine = new BABYLON.Engine(canvas, true);
    sceneManager = new scene(canvas, engine);
    scene_1 = sceneManager.createScene();
    engine.runRenderLoop(function () {
        sceneManager.updateScene(scene_1, inputStates);
    });
}

inputStates.left = false;
inputStates.right = false;
inputStates.up = false;
inputStates.down = false;
inputStates.space = false;



//add the listener to the main, window object, and update the states
window.addEventListener('keydown', (event) => {
    if ((event.key === "ArrowLeft") || (event.key === "q") || (event.key === "Q")) {
        inputStates.left = true;
    } else if ((event.key === "ArrowUp") || (event.key === "z") || (event.key === "Z")) {
        inputStates.up = true;
    } else if ((event.key === "ArrowRight") || (event.key === "d") || (event.key === "D")) {
        inputStates.right = true;
    } else if ((event.key === "ArrowDown") || (event.key === "s") || (event.key === "S")) {
        inputStates.down = true;
    } else if ((event.key === " ") || (event.key === "Spacebar")) {
        inputStates.space = true;
    }
}, false);

//if the key will be released, change the states object 
window.addEventListener('keyup', (event) => {
    if ((event.key === "ArrowLeft") || (event.key === "q") || (event.key === "Q")) {
        inputStates.left = false;
    } else if ((event.key === "ArrowUp") || (event.key === "z") || (event.key === "Z")) {
        inputStates.up = false;
    } else if ((event.key === "ArrowRight") || (event.key === "d") || (event.key === "D")) {
        inputStates.right = false;
    } else if ((event.key === "ArrowDown") || (event.key === "s") || (event.key === "S")) {
        inputStates.down = false;
    } else if ((event.key === " ") || (event.key === "Spacebar")) {
        inputStates.space = false;
    }
}, false);
