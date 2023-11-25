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


   updatePlayer = function (player,inputStates) {
        this.movePlayer(player,inputStates);
   }
}