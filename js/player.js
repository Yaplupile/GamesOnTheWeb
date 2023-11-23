export default class player{
    constructor(canvas, engine, scene){
        this.canvas = canvas;
        this.scene = scene;
        this.engine = engine;
        this.player = this.createPlayer();
    }

    createPlayer = function (scene) {
        var player = BABYLON.MeshBuilder.CreateBox("player", { size: 2 }, scene);
        player.position.y = 2; // Set the height of the player
        return player;
    };

    movePlayer = function (player,inputStates) {
        if (inputStates.left) {
            player.position.x += 0.1;
        }
        if (inputStates.right) {
            player.position.x -= 0.1;
        }
        if (inputStates.up) {
            player.position.z -= 0.1;
        }
        if (inputStates.down) {
            player.position.z += 0.1;
        }
        if (inputStates.space) {
            player.position.y += 0.1;
        }
   }

   applyGravity = function (player) {
        player.position.y -= 0.1;
   }
}