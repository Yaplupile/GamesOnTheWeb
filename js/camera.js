export default class camera{
    constructor(canvas, scene){
        this.canvas = canvas;
        this.scene = scene;
    }

    createCamera = function (scene) {
        var camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0, 5, -10), scene);
        camera.setTarget(BABYLON.Vector3.Zero());
        camera.attachControl(this.canvas, true);
        return camera;
    };

    createCameraV2 = function (scene,player) {
        var camera = new BABYLON.FollowCamera("Followcamera", new BABYLON.Vector3(0, 5, -10), scene, player);
        camera.radius = 0.5; // how far from the object to follow
        camera.heightOffset = 0; // how high above the object to place the camera
        camera.rotationOffset = 0; // the viewing angle
        camera.cameraAcceleration = .1; // how fast to move
        camera.maxCameraSpeed = 5; // speed limit
        return camera;
    };

    createCameraV3 = function (scene) {
        // Create a FreeCamera
        var camera = new BABYLON.FreeCamera('fpsCamera', new BABYLON.Vector3(0, 5, -10), scene);

        // Attach the camera to the canvas
        camera.attachControl(this.canvas, true);

        // Set the camera's movement and rotation speeds
        camera.speed = 0.2;
        camera.angularSensibility = 500;

        // Enable gravity and collisions for a more realistic FPS experience
        camera.applyGravity = true;
        camera.checkCollisions = true;

        // Create a gravity vector
        const gravityVector = new BABYLON.Vector3(0, -9.81, 0);

        // Enable physics for the scene
        scene.enablePhysics(gravityVector, new BABYLON.CannonJSPlugin());

        // Set the ellipsoid and checkCollisions for the camera
        camera.ellipsoid = new BABYLON.Vector3(1, 1, 1);
        camera.checkCollisions = true;

        // Enable physics for the camera
        camera.physicsImpostor = new BABYLON.PhysicsImpostor(camera, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 1, friction: 0.5, restitution: 0 }, scene);
    }
}