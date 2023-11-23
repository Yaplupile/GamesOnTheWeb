import camera from "./camera.js";
import player from "./player.js";

export default class scene{

    constructor(canvas, engine){
        this.canvas = canvas;
        this.engine = engine;
        this.scene = this.createScene();
        this.player = new player(canvas, this.scene).player;
        this.camera = new camera(canvas, this.scene).camera;
    }

    createScene(){
        let scene = new BABYLON.Scene(this.engine);
        let light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
        let sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 2 }, scene);
        let ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 20, height: 5 }, scene);
        let camera = new BABYLON.FreeCamera("CamPlayer", new BABYLON.Vector3(0, 2, 0), scene);
        camera.attachControl(this.canvas, true);
        return scene;
    }
}