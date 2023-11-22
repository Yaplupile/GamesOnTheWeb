// IMPORT LIBRARY PACKAGES //

import scene from "./scene.js";

// DECLARE GLOBAL VARIABLES //

let canvas;
let engine;
let scene_1;

// EXECUTE GAME CODE //

window.onload = startGame;

function startGame() {
    canvas = document.getElementById("myCanvas");
    engine = new BABYLON.Engine(canvas, true);
    scene_1 = new scene(canvas, engine).createScene();
    engine.runRenderLoop(function () {
        scene_1.render();
    });
}
