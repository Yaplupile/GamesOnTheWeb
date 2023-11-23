import camera from "./camera.js";
import player from "./player.js";

export default class scene{
    constructor(canvas, engine){
        this.canvas = canvas;
        this.engine = engine;
        this.scene = this.createScene();
    }
    
    createScene = function () {
        var scene = new BABYLON.Scene(this.engine);
        this.playerManager = new player(this.canvas, this.engine,scene)
        this.player = this.playerManager.player;
        this.cameraManager = new camera(this.canvas, scene)
        this.camera = this.cameraManager.createCameraV2(scene);
        var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
        var ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 100, height: 100 }, scene);
        return scene;
    };

    updateScene = function (scene,inputStates) {
        scene.render();
        this.playerManager.movePlayer(this.player,inputStates);
    };
}