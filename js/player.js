export default class player{
    constructor(canvas, engine, scene){
        this.canvas = canvas;
        this.scene = scene;
        this.engine = engine;
        this.player = this.createPlayer();
    }

    createPlayer = function (scene) {
        var player = BABYLON.MeshBuilder.CreateBox("player", { size: 1 }, scene);
        player.speed = 0.2;
        player.position.y = 2; // Set the height of the player
        player.checkCollisions = true;
        player.grounded = true;
        player.physicsImpostor = new BABYLON.PhysicsImpostor(player, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 1 }, scene);
        return player;
    };

    movePlayer = function (player,inputStates,camera) {
        if (inputStates.up) {
            player.moveWithCollisions(player.calcMovePOV(0, 0, player.speed));
        }
        if (inputStates.down) {
            player.moveWithCollisions(player.calcMovePOV(0, 0, -player.speed));
        }
        if (inputStates.left) {
            player.moveWithCollisions(player.calcMovePOV(-player.speed, 0, 0));
        }
        if (inputStates.right) {
            player.moveWithCollisions(player.calcMovePOV(player.speed, 0, 0));
        }
        if (inputStates.space) {
            if (player.grounded) {
                player.grounded = false;
                player.physicsImpostor.applyImpulse(new BABYLON.Vector3(0, 300, 0), player.getAbsolutePosition());
            }
        }
        player.rotation = camera.rotation;
    }


   updatePlayer = function (player,inputStates,camera) {
        this.movePlayer(player,inputStates,camera);
   }
}