import Three, { AmbientLight, HemisphereLight, PerspectiveCamera, PointLight, Scene, WebGLRenderer } from "three"
import { OrbitControls } from '@three-ts/orbit-controls';

export class App
{
    private camera: PerspectiveCamera
    private scene: Scene;
    private renderer: WebGLRenderer;
    private controls: OrbitControls

    constructor()
    {
        this.camera = new PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
        this.camera.position.z = 400;
        
        this.scene = new Scene();

        const geometry = new Three.BoxGeometry( 100, 100, 100 );
        const material = new Three.MeshLambertMaterial({
            color: 0x0095DD 
        })
        const cube = new Three.Mesh(geometry, material);
        
        this.scene.add(cube);
        
        let light = new HemisphereLight(0x404040, 0xffffff, 0.5);
        this.scene.add(light);
        

        this.renderer = new WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setClearColor(0x202020, 1);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);

        document.body.appendChild(this.renderer.domElement);

        window.addEventListener("resize", this.onWindowResize.bind(this), false);

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);

        this.animate();
    }

    private onWindowResize() : void
    {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    private animate() : void
    {
        requestAnimationFrame(this.animate.bind(this));

        this.controls.update();

        this.renderer.render(this.scene, this.camera);
    }
}

new App();