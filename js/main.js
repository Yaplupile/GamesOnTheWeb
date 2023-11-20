// IMPORT LIBRARY PACKAGES //


// DECLARE GLOBAL VARIABLES //

let canvas;
let engine;
let scene;

// EXECUTE GAME CODE //

window.onload = startGame;

function startGame() {
    canvas = document.getElementById("myCanvas");
    engine = new BABYLON.Engine(canvas, true);
    scene = createScene();
    engine.runRenderLoop(function () {
        scene.render();
    });
}

function createScene() {
    let scene = new BABYLON.Scene(engine);
    let camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 10, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);
    let light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
    let sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 2 }, scene);
    let ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, scene);
    return scene;
}