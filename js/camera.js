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
        camera.grounded = true;
        camera.ellipsoid = new BABYLON.Vector3(1, 1, 1);
        camera.minZ = 0.45;
        camera.speed = 0.3;
        camera.angularSensibility = 3000;

        camera.inputs.attached.keyboard.keysDown = [];
        camera.inputs.attached.keyboard.keysLeft = [];
        camera.inputs.attached.keyboard.keysRight = [];
        camera.inputs.attached.keyboard.keysUp = [];

    };

    moveCamera = function (camera,player) {
        camera.position = player.position ;
        player.frontVector.x = Math.sin(player.rotation.y) * -1;
        player.frontVector.z = Math.cos(player.rotation.y) * -1;
        player.frontVector.y = 0;
    }
}