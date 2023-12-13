export default class player{
    constructor(canvas, engine, scene){
        this.canvas = canvas;
        this.scene = scene;
        this.engine = engine;
        this.player = this.createPlayer();
    }

    createPlayer = function (scene) {
        //var player = BABYLON.MeshBuilder.CreateBox("player", { height: 1, width: 0.5, depth: 0.5 }, scene);
        var player = BABYLON.MeshBuilder.CreateSphere("player", { diameter: 1 }, scene);
        player.speed = 0.2;
        player.position.y = 2; // Set the height of the player
        player.checkCollisions = true;
        player.grounded = true;
        player.physicsImpostor = new BABYLON.PhysicsImpostor(player, BABYLON.PhysicsImpostor.SphereImpostor, { mass: 1, restitution: 0 }, scene);
        player.isVisible = true;
        player.frontVector = new BABYLON.Vector3(0, 0, 1);
        return player;
    };

    movePlayer = function (player,inputStates,camera) {
        if (inputStates.down) {
            player.moveWithCollisions(player.frontVector.multiplyByFloats(player.speed, player.speed, player.speed));
        }
        if (inputStates.up) {
            player.moveWithCollisions(player.frontVector.multiplyByFloats(-1 * player.speed, -1 * player.speed, -1 * player.speed));
        }
        if (inputStates.right) {
            player.moveWithCollisions(player.frontVector.rotateByQuaternionToRef(BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 1, 0), -Math.PI / 2), new BABYLON.Vector3()).multiplyByFloats(player.speed, player.speed, player.speed));
        }
        if (inputStates.left) {
            player.moveWithCollisions(player.frontVector.rotateByQuaternionToRef(BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 1, 0), Math.PI / 2), new BABYLON.Vector3()).multiplyByFloats(player.speed, player.speed, player.speed));
        }



        if (inputStates.space) {
            if (player.grounded) {
                player.grounded = false;
                player.physicsImpostor.applyImpulse(new BABYLON.Vector3(0, 1, 0), player.getAbsolutePosition());
            }
        }

        if (player.position.y < 0.6) {
            player.grounded = true;
        }

        player.rotation.x = camera.rotation.x;
        player.rotation.y = camera.rotation.y;

    }


   updatePlayer = function (player,inputStates,camera) {
        this.movePlayer(player,inputStates,camera);
   }
}