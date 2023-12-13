import camera from "./camera.js";
import player from "./player.js";

export default class scene{
    constructor(canvas, engine){
        this.canvas = canvas;
        this.engine = engine;
    }
    
    createScene = function () {
        var scene = new BABYLON.Scene(this.engine);
        const framePerSecond = 60;
        const gravity= -9.81;
        const sceneGravity = new BABYLON.Vector3(0, gravity, 0);
        scene.enablePhysics(sceneGravity, new BABYLON.CannonJSPlugin());

        this.playerManager = new player(this.canvas,scene,this.engine)
        this.player = this.playerManager.player;

        this.cameraManager = new camera(this.canvas, scene, this.engine)
        this.camera = this.cameraManager.createCamera(scene);

        var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

        var ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 40, height: 40 }, scene);

        ground.physicsImpostor = new BABYLON.PhysicsImpostor(ground, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.9 }, scene);
        ground.checkCollisions = true;
        
        ground.material = new BABYLON.StandardMaterial("ground", scene);
        ground.material.diffuseTexture = new BABYLON.Texture("assets/materials/ground.jpg", scene);

        return scene;
    };

    updateScene = function (scene,inputStates) {
        
        
        this.playerManager.updatePlayer(this.player,inputStates,scene.cameras[0]);
        this.cameraManager.moveCamera(scene.cameras[0],this.player);
        scene.render();

    };
}