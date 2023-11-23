export default class camera{
    constructor(canvas, scene){
        this.canvas = canvas;
        this.scene = scene;
        this.camera = this.createCamera();
    }

    createCamera(player){
        var camera = new BABYLON.FreeCamera("CamPlayer", new BABYLON.Vector3(0, 0, 0), this.scene);
        camera.attachControl(this.canvas, true);
        camera.parent = player;
        camera.position.y = 2;
        return camera;
    }
}