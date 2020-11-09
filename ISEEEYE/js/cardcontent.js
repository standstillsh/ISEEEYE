// console.log("화이팅!");

// 송재혁 : 건드리지마세요. :)     ------------------------------------------------------
function threejs() {

    var scene = new THREE.Scene;

    var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer({ alpha: true });
    document.getElementById("threejs").appendChild(renderer.domElement);
    // control = new THREE.OrbitControls(camera, renderer.domElement);

    //SIZE ---------
    renderer.setSize(window.innerWidth, window.innerHeight);
    window.addEventListener("resize", function(){
        var width = window.innerWidth;
        var height = window.innerHeight;
        renderer.setSize(width, height);
        camera.aspect = width/height;
        camera.updateProjectMatrix();
    })
    renderer.setClearColor( 0xffffff, 0);
    renderer.toneMapping = THREE.LinearToneMapping;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    //CAMERA--------
    camera.position.set(0, 0, 15);
    camera.lookAt(0, 0, 0);  


    // Light --------
    let hemiLight = new THREE.HemisphereLight( 0xEBF7FD, 0xEBF7FD, 0.5 );
    hemiLight.position.set( 0, 20, 20 );
    scene.add( hemiLight );
    


    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    
    // box --------
    const boxGeo = new THREE.CubeGeometry(1.2, 2, 0.01);
    const texture = new THREE.TextureLoader().load( './image/card/cardback.png' );
    const boxMat = new THREE.MeshStandardMaterial({color: 0xffffff, map: texture});



    let boxGroup = []
    for(let i = 0; i <200 ; i++){
        const box = new THREE.Mesh(boxGeo, boxMat);
        box.position.x = (Math.random()-0.25)*50;
        box.position.y = (Math.random()-0.25)*50;
        box.rotation.y = (Math.random()-0.25) * 5;
        box.position.z = (Math.random()-0.25)*50;
        scene.add(box);
        boxGroup.push(box);
    }
    


    //RENDER-------------------------------------------------------------------------------
    let cameraTurn = true;
    const renderScene = new function renderScene() {
        requestAnimationFrame(renderScene);
        if(cameraTurn){
            camera.rotation.y -= 0.001;
        }else{
            camera.rotation.y = 0.02;
        }

        renderer.render(scene,camera);
    }


  
    window.addEventListener("click", onMouseMove);
    const explain = $("div.explain_wrap");

    const cardFront = "./image/cardFront/"+ Math.floor(Math.random() * 21) +".png";

    function onMouseMove(e){
        e.preventDefault();
        mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.y = - (e.clientY / window.innerHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        var inter = raycaster.intersectObjects(scene.children, true);
        for(var i = 0 ; i < inter.length ; i++){
            cameraTurn = false;
            inter[i].object.material.map = THREE.ImageUtils.loadTexture(cardFront);
            boxGroup[i].material.needsUpdate = true;
            this.tl = new TimelineMax();
            this.tl.to(inter[i].object.scale, 0.5, {x : 5, y : 5, ease:Expo.easeOut});
            this.tl.to(inter[i].object.rotation, 0.5, {y : -0.5, ease:Expo.easeOut});
            this.tl.to(inter[i].object.position, 2, {x : 8, y : 0, z : 5, ease:Expo.easeOut});

            setTimeout(()=>{
                explain.css("opacity", 1);
            }, 1000);
        }
    }
}

window.onload = threejs();

