var camara, escena, renderer;
var appW = window.innerWidth*0.75;//espacio pantalla
var appH = window.innerHeight;//espacio pantalla
var labels = []; //letras para los ejes
var primitivas = [];//arreglo para guardar objetos
var intersects = [];//arreglo para guardar objetos intersectados
var ultiTiempo;
var targetList = [];
var projector, mouse = { x: 0, y: 0 };
var vector = new THREE.Vector3( mouse.x, mouse.y, 1 );
camara = new THREE.PerspectiveCamera(45, appW / appH, 1, 1500);//crear camara
escena = new THREE.Scene();
camara.position.set(200,200,200);//position de la camara
camara.lookAt(escena.position);


function webGLStart(){
	iniciarEscena();
	ultiTiempo = Date.now();
	animarEscena();
}

function iniciarEscena(){
	//renderer
	renderer = new THREE.WebGLRenderer();//crear render
	console.log(renderer);
	document.getElementById('renderertype').value = "WebGLRenderer()";
	renderer.setClearColor(0xBFBFBF,1);//color del render
	renderer.setSize(appW,appH);
	document.getElementById("App").appendChild(renderer.domElement);//codigo para aparecer los elementos del renderer y agregar esta ventana a el div app

	//Escena
	escena = new THREE.Scene();
	escena.name = "Escena 1";

	//Camera
	camara = new THREE.PerspectiveCamera(45, appW / appH, 1, 1500);//crear camara
	camara.position.set(200,200,200);//position de la camara
	camara.lookAt(escena.position);

	escena.add(camara);//agregar camara a la escena

	//Iniciar controles de la camara
	controlCamara = new THREE.OrbitControls( camara , renderer.domElement );

	var grilla = new THREE.GridHelper( 100, 10 );//Cuadricula
	escena.add(grilla);
	var axes = new THREE.AxisHelper(100);//agregar ejes
	escena.add(axes);

	//agregar letras al eje Y
	var yLabelTexture = textTure(128,"Bold","48px","Arial","0,0,0,1","Y",64,50);
	var yLabel = new THREE.Mesh(new THREE.PlaneGeometry(10,10),
		new THREE.MeshBasicMaterial({
			map: yLabelTexture,
			side:THREE.DoubleSide,
			transparent: true
		})
		);
	yLabel.position.set(0,100,0);
	labels.push(yLabel);
	escena.add(yLabel);
	//agregar letras al eje X
	var xLabelTexture = textTure(128,"Bold","48px","Arial","0,0,0,1","X",64,50);
	var xLabel = new THREE.Mesh(new THREE.PlaneGeometry(10,10),
		new THREE.MeshBasicMaterial({
			map: xLabelTexture,
			side:THREE.DoubleSide,
			transparent: true
		})
		);
	xLabel.position.set(100,0,0);
	labels.push(xLabel);
	escena.add(xLabel);
	//agregar letras al eje Z
	var zLabelTexture = textTure(128,"Bold","48px","Arial","0,0,0,1","Z",64,50);
	var zLabel = new THREE.Mesh(new THREE.PlaneGeometry(10,10),
		new THREE.MeshBasicMaterial({
			map: zLabelTexture,
			side:THREE.DoubleSide,
			transparent: true
		})
		);
	zLabel.position.set(0,0,100);
	labels.push(zLabel);
	escena.add(zLabel);



	

	
	
	projector = new THREE.Projector();

	 
	
	// llama la funcion cuando se presiona el boton del mouse
	document.addEventListener( 'mousedown', onDocumentMouseDown, false );
	
	
}

function animarEscena () {
	requestAnimationFrame( animarEscena );
	renderEscena();
	actualizarEscena();
    
}

function renderEscena(){
	renderer.render(escena,camara);//agregar elementos al render

}

function actualizarEscena(){

	var delta = (Date.now() - ultiTiempo)/1000;
		ultiTiempo = Date.now();

		for (var i = 0; i < labels.length; i++) {
			labels[i].lookAt(camara.position);
		};

		controlCamara.update();

}




