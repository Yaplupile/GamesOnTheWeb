export default class player{
    constructor(canvas, scene){
        this.canvas = canvas;
        this.scene = scene;
        this.player = this.createPlayer();
    }

    createPlayer = function (scene) {
        var player = BABYLON.MeshBuilder.CreateBox("player", { size: 2 }, scene);
        player.position.y = 2; // Set the height of the player
        return player;
    };
}