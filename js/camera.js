export default class camera{
    constructor(canvas, scene,engine){
        this.canvas = canvas;
        this.scene = scene;
        this.engine = engine;
    }

    createCamera = function (scene) {
        var camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0, 15, -10), scene);
        camera.setTarget(BABYLON.Vector3.Zero());
        camera.attachControl(this.canvas, true);
        scene.onPointerDown = (evt) => {
                if (evt.button === 0) this.engine.enterPointerlock();
                if (evt.button === 1) this.engine.exitPointerlock();
        };
        camera.applyGravity = true;
        camera.checkCollisions = true;
        camera.ellipsoid = new BABYLON.Vector3(1, 1, 1);
        camera.minZ = 0.45;
        camera.speed = 0.3;
        camera.angularSensibility = 3000;

        console.log(camera.inputs);
        camera.keysUp.push(90); // Z
        camera.keysDown.push(83); // S
        camera.keysLeft.push(81); // Q
        camera.keysRight.push(68); // D
        
        
    };
}