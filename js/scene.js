export default class scene{

    constructor(canvas, engine){
        this.canvas = canvas;
        this.engine = engine;
        this.scene = this.createScene();
    }

    createScene(){
        let scene = new BABYLON.Scene(this.engine);
        let camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 10, BABYLON.Vector3.Zero(), scene);
        camera.attachControl(this.canvas, true);
        let light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
        let sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 2 }, scene);
        let ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, scene);
        return scene;
    }
}