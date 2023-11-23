export default class player{
    constructor(canvas, engine, scene){
        this.canvas = canvas;
        this.scene = scene;
        this.engine = engine;
        this.player = this.createPlayer();
    }

    createPlayer = function (scene) {
        var player = BABYLON.MeshBuilder.CreateBox("player", { size: 2 }, scene);
        player.speed = 0.2;
        player.position.y = 2; // Set the height of the player
        player.checkCollisions = true;
        player.grounded = true;
        player.physicsImpostor = new BABYLON.PhysicsImpostor(player, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 1 }, this.scene);
        return player;
    };

    movePlayer = function (player,inputStates) {
        if (inputStates.left) {
            player.moveWithCollisions(new BABYLON.Vector3(-player.speed, 0, 0));
        }
        if (inputStates.right) {
            player.moveWithCollisions(new BABYLON.Vector3(player.speed, 0, 0));
        }
        if (inputStates.up) {
            player.moveWithCollisions(new BABYLON.Vector3(0, 0, player.speed));
        }
        if (inputStates.down) {
            player.moveWithCollisions(new BABYLON.Vector3(0, 0, -player.speed));
        }
        if (inputStates.space && player.grounded==true) {
            player.grounded = false;
            player.moveWithCollisions(new BABYLON.Vector3(0, player.speed*10, 0));
        }
        if (player.position.y < 2.1) {
            player.grounded = true;  
        }
   }


   updatePlayer = function (player,inputStates) {
        this.movePlayer(player,inputStates);
   }
}