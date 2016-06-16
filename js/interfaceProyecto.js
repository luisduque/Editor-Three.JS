
    

function createBoxI(){
    var mensaje = "Digite los parametros del cubo: width, height, depth, widthsegments, heightSegments, depthSegments, color";
    var parametros = prompt(mensaje,"40,40,40,4,4,4,0xFF0000");

    if(parametros){

        var valores = parsePromtParams(parametros,",");//separar por comas

        var w = valores[0] || 10,
        h = valores[1] || 10,
        d = valores[2] || 10,
        ws = valores[3] || 4,
        hs = valores[4] || 4,
        ds = valores[5] || 4;
        var color = new THREE.Color(0,0,0);
        color.setHex(valores[6]);



        return createBox(w,h,d,ws,hs,ds,color);
        
    }
}

function createBox(w,h,d,ws,hs,ds,color){

    var geometry = new THREE.BoxGeometry( w,h,d,ws,hs,ds );
    var material = new THREE.MeshBasicMaterial( {color: color, wireframe: false} );//malla o color
    var cube = new THREE.Mesh( geometry, material );
    escena.add( cube );
    var obj = {
        id: escena.children.length-1,
        name: "Cubo | Children("+ (escena.children.length-1) +")",
        obj3D: escena.children[escena.children.length-1]
    };

    primitivas.push(obj);
    targetList.push(obj.obj3D);
    obj.obj3D.name="Cubo - Figura "+primitivas.length;

    

    

    return obj;
}



function createPlaneI(){
    var mensaje = "Digite los parametros del plano de la forma: ancho , alto , segmentosAncho , segmentosAlto , color";
    var parametros = prompt(mensaje,"40,70,1,1,0x00FF00");

    if(parametros){

        var valores = parsePromtParams(parametros,",");//separar por comas

        var w = valores[0] || 40,
        h = valores[1] || 70,
        ws = valores[2] || 1,
        hs = valores[3] || 1;
        var colorp = new THREE.Color(0,0,0);
        colorp.setHex(valores[4]);

        return createPlane(w,h,ws,hs,colorp);

    }
}

function createPlane(w,h,ws,hs,colorp){

	var geometry = new THREE.PlaneGeometry(w,h,ws,hs);
	var material = new THREE.MeshBasicMaterial( {color: colorp, wireframe: false , side: THREE.DoubleSide } );//material side es para ver por los dos lados
	var plane = new THREE.Mesh( geometry, material );
    escena.add( plane );

    var obj = {
        id: escena.children.length-1,
        name: "Plano | Children("+ (escena.children.length-1) +")",
        obj3D: escena.children[escena.children.length-1]
    };

    primitivas.push(obj);
    targetList.push(obj.obj3D);
    obj.obj3D.name="Plano - Figura "+primitivas.length;

    return obj;


}

function createCircleI(){
    var mensaje = "Digite los parametros del circulo de la forma: radio , segmentos , segmentosAngulo , angulocentral , color";
    var parametros = prompt(mensaje,"20,32,0x0000FF");

    if(parametros){

        var valores = parsePromtParams(parametros,",");//separar por comas

        var r = valores[0] || 20,
        s = valores[1] || 32;
        var color = new THREE.Color(0,0,0);
        color.setHex(valores[2]);

        return createCircle(r,s,color);

    }
}

function createCircle(r,s,color){

    var geometry = new THREE.CircleGeometry(r,s);
    var material = new THREE.MeshBasicMaterial( {color: color, wireframe: false , side: THREE.DoubleSide } );//material side es para ver por los dos lados
    var circle = new THREE.Mesh( geometry, material );
    escena.add( circle );

    var obj = {
        id: escena.children.length-1,
        name: "Circle | Children("+ (escena.children.length-1) +")",
        obj3D: escena.children[escena.children.length-1]
    };

    primitivas.push(obj);
    targetList.push(obj.obj3D);
    obj.obj3D.name="Circulo - Figura "+primitivas.length;

    return obj;
}

function createCylinderI(){
    var mensaje = "Digite los parametros del cilindro de la forma: radio superior , radio inferior , alto , radio segmentos , altura segmentos , tapa(boleano) , color";
    var parametros = prompt(mensaje,"20,20,100,8,1,false,0x0000FF");

    if(parametros){

        var valores = parsePromtParams(parametros,",");//separar por comas

        var rs = valores[0] || 20,
        ri = valores[1] || 20,
        h = valores[2] || 100,
        rseg = valores[3] || 8,
        hseg = valores[4] || 1,
        t = valores[5] || false;
        var color = new THREE.Color(0,0,0);
        color.setHex(valores[6]);

        return createCylinder(rs,ri,h,rseg,hseg,t,color);

    }
}

function createCylinder(rs,ri,h,rseg,hseg,t,color){

    var geometry = new THREE.CylinderGeometry(rs,ri,h,rseg,hseg,t);
    var material = new THREE.MeshBasicMaterial( {color: color, wireframe: false , side: THREE.DoubleSide } );//material side es para ver por los dos lados
    var cylinder = new THREE.Mesh( geometry, material );
    escena.add( cylinder );

    var obj = {
        id: escena.children.length-1,
        name: "cylinder | Children("+ (escena.children.length-1) +")",
        obj3D: escena.children[escena.children.length-1]
    };

    primitivas.push(obj);
    targetList.push(obj.obj3D);
    obj.obj3D.name="Cilindro - Figura "+primitivas.length;

    return obj;
}

function createSphereI(){
    var mensaje = "Digite los parametros de la esfera de la forma: radio , ancho segmentos , alto segmentos , pi inicial horizontal , angulo tamaño horizontal , pi inicial vertical , angulo tamaño vertical , color";
    var parametros = prompt(mensaje,"50,8,6,0,Math.PI * 2,0,Math.PI,0x0000FF");

    if(parametros){

        var valores = parsePromtParams(parametros,",");//separar por comas

        var r = valores[0] || 50,
        wseg = valores[1] || 8,
        hseg = valores[2] || 6,
        pih = valores[3] || 0,
        pth = valores[4] || Math.PI * 2,
        piv = valores[5] || 0,
        ptv = valores[6] || Math.PI;
        var color = new THREE.Color(0,0,0);
        color.setHex(valores[7]);

        return createSphere(r,wseg,hseg,pih,pth,piv,ptv,color);
    }
}

function createSphere(r,wseg,hseg,pih,pth,piv,ptv,color){

    var geometry = new THREE.SphereGeometry(r,wseg,hseg,pih,pth,piv,ptv);
    var material = new THREE.MeshBasicMaterial( {color: color, wireframe: false , side: THREE.DoubleSide } );//material side es para ver por los dos lados
    var sphere = new THREE.Mesh( geometry, material );
    escena.add( sphere );

    var obj = {
        id: escena.children.length-1,
        name: "sphere | Children("+ (escena.children.length-1) +")",
        obj3D: escena.children[escena.children.length-1]
    };

    primitivas.push(obj);
    targetList.push(obj.obj3D);
    obj.obj3D.name="Esfera - Figura "+primitivas.length;

    return obj;
}

function createIcosahedronI(){
    var mensaje = "Digite los parametros del icosahedro de la forma: radio , detalle, color";
    var parametros = prompt(mensaje,"20,0,0x0000FF");

    if(parametros){

        var valores = parsePromtParams(parametros,",");//separar por comas

        var radius = valores[0] || 20,
        detail = valores[1] || 0;
        var color = new THREE.Color(0,0,0);
        color.setHex(valores[2]);

        return createIcosahedron(radius,detail,color);
    }
}

function createIcosahedron(radius,detail,color){

    var geometry = new THREE.IcosahedronGeometry(radius,detail);
    var material = new THREE.MeshBasicMaterial( {color: color, wireframe: false , side: THREE.DoubleSide } );//material side es para ver por los dos lados
    var icosahedron = new THREE.Mesh( geometry, material );
    escena.add( icosahedron );

    var obj = {
        id: escena.children.length-1,
        name: "icosahedron | Children("+ (escena.children.length-1) +")",
        obj3D: escena.children[escena.children.length-1]
    };

    primitivas.push(obj);
    targetList.push(obj.obj3D);
    obj.obj3D.name="Icosahedro - Figura "+primitivas.length;

    return obj;
}

function createTorusI(){
    var mensaje = "Digite los parametros del torus de la forma: radio, diametro tubo, segmentos radiales, segmentos tubulares, arco, color";
    var parametros = prompt(mensaje,"20,10,10,8,Math.PI*2,0x0000FF");

    if(parametros){

        var valores = parsePromtParams(parametros,",");//separar por comas

        var r = valores[0] || 100,
        dt = valores[1] || 40,
        sr = valores[2] || 8,
        st = valores[3] || 6,
        arc = valores[4] || Math.PI*2;
        var color = new THREE.Color(0,0,0);
        color.setHex(valores[5]);

        return createTorus(r,dt,sr,st,arc,color);
    }
}
function createTorus(r,dt,sr,st,arc,color){

    var geometry = new THREE.TorusGeometry(r,dt,sr,st,arc);
    var material = new THREE.MeshBasicMaterial( {color: color, wireframe: false , side: THREE.DoubleSide } );//material side es para ver por los dos lados
    var torus = new THREE.Mesh( geometry, material );
    escena.add( torus );

    var obj = {
        id: escena.children.length-1,
        name: "torus | Children("+ (escena.children.length-1) +")",
        obj3D: escena.children[escena.children.length-1]
    };

    primitivas.push(obj);
    targetList.push(obj.obj3D);
    obj.obj3D.name="Torus - Figura "+primitivas.length;

    return obj;
}

function translateI(){
    var mensaje = "Por favor digite el Id del objeto junto con los valores X, Y, Z";
    var parametros = prompt(mensaje,"objID,Tx,Ty,Tz");

    if (parametros){

        var valores = parsePromtParams(parametros, ",")

        var objID = valores[0],
        Tx = valores[1] || 3,
        Ty = valores[2] || 3,
        Tz = valores[3] || 3;

    return traslacion (objID,Tx,Ty,Tz);
     
    }
}


function traslacion(objID,Tx,Ty,Tz){

    //matriz de traslacion---------------------------
    var m = new THREE.Matrix4();
    m.makeTranslation ( Tx, Ty, Tz );
    //acceder a matriz de traslacion
    var mPos = m.elements;

    actualizarVertice(objID,mPos);

}

function scaleI(){
    var mensaje = "Por favor digite el Id del objeto junto con los valores X, Y, Z";
    var parametros = prompt(mensaje,"objID, x, y, z");

    if (parametros){

        var valores = parsePromtParams(parametros, ",")

    var objID = valores[0],
        Tx = valores[1] || 3,
        Ty = valores[2] || 3,
        Tz = valores[3] || 3;

    return escalacion (objID,Tx,Ty,Tz);
     
    }
}

function escalacion(objID,Tx,Ty,Tz){

    //matriz de Escalacion---------------------------
    var m = new THREE.Matrix4();
    m.makeScale (Tx, Ty, Tz);
    //acceder a matriz de Escalacion
    var mPos = m.elements;
    actualizarVertice(objID,mPos);
}

function rotateI(){
    var mensaje = "Por favor digite el Id del objeto, el Angulo y la opcion siendo 1 para rotar en X, 2 para rotar en Y y 3 para rotar en Z";
    var parametros = prompt(mensaje,"objID, angulo, op");

    if (parametros){

        var valores = parsePromtParams(parametros, ",")

        var objID = valores[0],
        thetha = valores[1] || 45,
        op = valores[2] || 1;

    return rotacion(objID,thetha,op);
     
    }
}

function rotacion(objID, thetha, op){

    //matriz de Rotacion---------------------------
    var m = new THREE.Matrix4();
    if (op == 1) {
        m.makeRotationX(thetha);
    }else if (op == 2){
        m.makeRotationY(thetha);
    }else if (op == 3){
        m.makeRotationZ(thetha);
    }else{
        m.identity();
    }   
    //acceder a matriz de Escalacion
    var mPos = m.elements;
    actualizarVertice(objID,mPos);
    

}

function actualizarVertice (objID,mPos){

    var verticesNew= escena.children[objID].geometry.vertices;
    var arrayf = [verticesNew];
    //guardar elementos de THREE.Vector3 a THREE.Vector4 
    for (var i = 0 ; i < verticesNew.length ; i++) {
        arrayf[i] = new THREE.Vector4(verticesNew[i].x , verticesNew[i].y , verticesNew[i].z ,1);
    }
    var arrayResult = [verticesNew] 
    for (var i = 0; i < verticesNew.length; i++) {
        x = (arrayf[i].x * mPos[0])+(arrayf[i].y * mPos[4]) + (arrayf[i].z * mPos[8]) + (arrayf[i].w * mPos[12]);
        y = (arrayf[i].x * mPos[1])+(arrayf[i].y * mPos[5]) + (arrayf[i].z * mPos[9]) + (arrayf[i].w * mPos[13]); 
        z = (arrayf[i].x * mPos[2])+(arrayf[i].y * mPos[6]) + (arrayf[i].z * mPos[10]) + (arrayf[i].w * mPos[14]);
        w = (arrayf[i].x * mPos[3])+(arrayf[i].y * mPos[7]) + (arrayf[i].z * mPos[11]) + (arrayf[i].w * mPos[15]); 
        arrayResult[i] = new THREE.Vector4(x,y,z,w);
    };
        //convertir el arrayResult de Vector 4 a vector3
    for (var i = 0; i < verticesNew.length; i++) {
        verticesNew[i].x=arrayResult[i].x;
        verticesNew[i].y=arrayResult[i].y;
        verticesNew[i].z=arrayResult[i].z;
    };
    //colocar el arreglo de vertices Nuevos en el arreglo de vertices viejos
    for (var i = 0; i < verticesNew.length; i++) {
        escena.children[objID].geometry.vertices[i].x = verticesNew[i].x;
        escena.children[objID].geometry.vertices[i].y = verticesNew[i].y;
        escena.children[objID].geometry.vertices[i].z = verticesNew[i].z;
    };
    //Actulizar los verticas
    escena.children[objID].geometry.verticesNeedUpdate = true;   
}

function deleteMeI(){
    var mensaje = "Digite el Id del objeto a eliminar";
    var parametros = prompt(mensaje,"id");

    if(parametros){
        var valores = parsePromtParams(parametros,",");
        if(!valores[0]){
            return alert("No se definió el obj a eliminar");
        }
        var objID = valores[0];
    }
    var obj = escena.children[objID];
    escena.remove(obj);
    deleteMe($(this),$(this).data("id"));
}

function addToTransformI(){
    var parametros = prompt("Digite los ids de los objetos que desea transformar, separelos por comas, por favor no use espacios");
    var parametrot = parsePromtParams(parametros,',');
    var funcion = prompt("Digite la funcion que desea emplear: 1 para transaladar, 2 para rotar, 3 para escalar")

    if(funcion==1){
        var parametrostr = prompt("Tx,Ty,Tz");
        var parametrostr2 = new Array();
        parametrostr2 = parsePromtParams(parametrostr,",");
        for (var i = 0 ; i < parametrot.length ; i++){

            var resultado=this.traslacion(parametrot[i],parametrostr2[0],parametrostr2[1],parametrostr2[2]);
            console.log (resultado);
        }
    }
    if(funcion==2){
        var parametrostr = prompt("angulo,opcion(1 para rotar en X, 2 para rotar en Y, 3 para rotar en Z");
        var parametrostr2 = new Array();
        parametrostr2 = parsePromtParams(parametrostr,",");
        for (var i = 0 ; i < parametrot.length ; i++){
            var resultado=this.rotacion(parametrot[i],parametrostr2[0],parametrostr2[1]);
            console.log (resultado);
        }
    }
    if(funcion==3){

        var parametrostr = prompt("Tx,Ty,Tz");
        var parametrostr2 = new Array();
        parametrostr2 = parsePromtParams(parametrostr,",");
        for (var i = 0 ; i < parametrot.length ; i++){

            var resultado=this.escalacion(parametrot[i],parametrostr2[0],parametrostr2[1],parametrostr2[2]);
            console.log (resultado);
        }
    }
    console.log (parametrot[0]);
}

  function createMatrizMI(){

    var aceptador=true;
    var contador=0;
    var arreglito = new Array();
    var c = new Matrix4();

    while (aceptador==true){
    var ventana=confirm("desea aplicar una transformaciona la Matrix?"); 
    if(ventana){

         var opcion = prompt("Digite la opcion deseada : 1 para añadir una traslacion, 2 para añadir una rotacion, 3 para añadir una escalacion");
         if (opcion==1){
         var parametrostr = prompt("Tx,Ty,Tz");
         var parametrostr2 = new Array();
         parametrostr2 = parsePromtParams(parametrostr,",");
         var t = new THREE.Matrix4; 
         t.makeTranslation(parametrostr2[0],parametrostr2[1],parametrostr2[2]);
         
         arreglito.push(t);
         aceptador=true;
         contador=contador+1;
         console.log(t);
         alert("["+JSON.stringify(t.elements[0])+"  ,  "+JSON.stringify(t.elements[1])+"  ,  "+JSON.stringify(t.elements[2])+"  ,  "+JSON.stringify(t.elements[3])+"\n"+
                  JSON.stringify(t.elements[4])+"  ,  "+JSON.stringify(t.elements[5])+"  ,  "+JSON.stringify(t.elements[6])+"  ,  "+JSON.stringify(t.elements[7])+"\n"+
                  JSON.stringify(t.elements[8])+"  ,  "+JSON.stringify(t.elements[9])+"  ,  "+JSON.stringify(t.elements[10])+"  ,  "+JSON.stringify(t.elements[11])+"\n"+
                  JSON.stringify(t.elements[12])+"  ,  "+JSON.stringify(t.elements[13])+"  ,  "+JSON.stringify(t.elements[14])+"  ,  "+JSON.stringify(t.elements[15])+"]");

         }
         if (opcion==2){
        var parametrostr = prompt("angulo,opcion(1 para rotar en X, 2 para rotar en Y, 3 para rotar en Z");
        var parametrostr2 = new Array();
        parametrostr2 = parsePromtParams(parametrostr,",");
          if(parametrostr2[1]==1){
            var r = new THREE.Matrix4; 
            r.makeRotationX(parametrostr2[0]);
            
            arreglito.push(r);
            aceptador=true;
            contador=contador+1;
            console.log(r);
            alert("["+JSON.stringify(r.elements[0])+"  ,  "+JSON.stringify(r.elements[1])+"  ,  "+JSON.stringify(r.elements[2])+"  ,  "+JSON.stringify(r.elements[3])+"\n"+
                  JSON.stringify(r.elements[4])+"  ,  "+JSON.stringify(r.elements[5])+"  ,  "+JSON.stringify(r.elements[6])+"  ,  "+JSON.stringify(r.elements[7])+"\n"+
                  JSON.stringify(r.elements[8])+"  ,  "+JSON.stringify(r.elements[9])+"  ,  "+JSON.stringify(r.elements[10])+"  ,  "+JSON.stringify(r.elements[11])+"\n"+
                  JSON.stringify(r.elements[12])+"  ,  "+JSON.stringify(r.elements[13])+"  ,  "+JSON.stringify(r.elements[14])+"  ,  "+JSON.stringify(r.elements[15])+"]");


          }
          if(parametrostr2[1]==2){
            var r = new THREE.Matrix4; 
            r.makeRotationY(parametrostr2[0]);
            
            arreglito.push(r);
            aceptador=true;
            contador=contador+1;
            console.log(r);
            alert("["+JSON.stringify(r.elements[0])+"  ,  "+JSON.stringify(r.elements[1])+"  ,  "+JSON.stringify(r.elements[2])+"  ,  "+JSON.stringify(r.elements[3])+"\n"+
                  JSON.stringify(r.elements[4])+"  ,  "+JSON.stringify(r.elements[5])+"  ,  "+JSON.stringify(r.elements[6])+"  ,  "+JSON.stringify(r.elements[7])+"\n"+
                  JSON.stringify(r.elements[8])+"  ,  "+JSON.stringify(r.elements[9])+"  ,  "+JSON.stringify(r.elements[10])+"  ,  "+JSON.stringify(r.elements[11])+"\n"+
                  JSON.stringify(r.elements[12])+"  ,  "+JSON.stringify(r.elements[13])+"  ,  "+JSON.stringify(r.elements[14])+"  ,  "+JSON.stringify(r.elements[15])+"]");
          }
          if(parametrostr2[1]==3){
            var r = new THREE.Matrix4; 
            r.makeRotationZ(parametrostr2[0]);
            
            arreglito.push(r);
            aceptador=true;
            contador=contador+1;
            console.log(r);
            alert("["+JSON.stringify(r.elements[0])+"  ,  "+JSON.stringify(r.elements[1])+"  ,  "+JSON.stringify(r.elements[2])+"  ,  "+JSON.stringify(r.elements[3])+"\n"+
                  JSON.stringify(r.elements[4])+"  ,  "+JSON.stringify(r.elements[5])+"  ,  "+JSON.stringify(r.elements[6])+"  ,  "+JSON.stringify(r.elements[7])+"\n"+
                  JSON.stringify(r.elements[8])+"  ,  "+JSON.stringify(r.elements[9])+"  ,  "+JSON.stringify(r.elements[10])+"  ,  "+JSON.stringify(r.elements[11])+"\n"+
                  JSON.stringify(r.elements[12])+"  ,  "+JSON.stringify(r.elements[13])+"  ,  "+JSON.stringify(r.elements[14])+"  ,  "+JSON.stringify(r.elements[15])+"]");

          }  
        }
        
         if (opcion==3){
         var parametrostr = prompt("Tx,Ty,Tz");
        var parametrostr2 = new Array();
        parametrostr2 = parsePromtParams(parametrostr,",");
        var s = new THREE.Matrix4; 
        s.makeScale(parametrostr2[0],parametrostr2[1],parametrostr2[2]);
        arreglito.push(s);
        aceptador=true;
        contador=contador+1;
        console.log(s);
        alert("["+JSON.stringify(s.elements[0])+"  ,  "+JSON.stringify(s.elements[1])+"  ,  "+JSON.stringify(s.elements[2])+"  ,  "+JSON.stringify(s.elements[3])+"\n"+
                  JSON.stringify(s.elements[4])+"  ,  "+JSON.stringify(s.elements[5])+"  ,  "+JSON.stringify(s.elements[6])+"  ,  "+JSON.stringify(s.elements[7])+"\n"+
                  JSON.stringify(s.elements[8])+"  ,  "+JSON.stringify(s.elements[9])+"  ,  "+JSON.stringify(s.elements[10])+"  ,  "+JSON.stringify(s.elements[11])+"\n"+
                  JSON.stringify(s.elements[12])+"  ,  "+JSON.stringify(s.elements[13])+"  ,  "+JSON.stringify(s.elements[14])+"  ,  "+JSON.stringify(s.elements[15])+"]");

        }
    }else{
      alert("se procedera a calcular la matriz final M");
      aceptador=false;
      var resultado;
      for(var i = 0 ; i < contador-1 ; i++){
        if (i==0){
            var extraer = arreglito[0].elements;
            var a=new Matrix4(extraer[0],extraer[1],extraer[2],extraer[3],extraer[4],extraer[5],extraer[6],extraer[7],extraer[8],extraer[9],extraer[10],extraer[11],extraer[12],extraer[13],extraer[14],extraer[15]);
          }  
        var extraerb = arreglito[i+1].elements;   
        var b=new Matrix4(extraerb[0],extraerb[1],extraerb[2],extraerb[3],extraerb[4],extraerb[5],extraerb[6],extraerb[7],extraerb[8],extraerb[9],extraerb[10],extraerb[11],extraerb[12],extraerb[13],extraerb[14],extraerb[15]);
        c=Matrix4.product(a,b);
        a=c; 
        }
      }  
    }
  console.log(c);
  var m = new THREE.Matrix4(c.a1,c.a5,c.a9,c.a13,c.a2,c.a6,c.a10,c.a14,c.a3,c.a7,c.a11,c.a15,c.a4,c.a8,c.a12,c.a16);
  console.log(m);
  alert("["+JSON.stringify(m.elements[0])+"  ,  "+JSON.stringify(m.elements[1])+"  ,  "+JSON.stringify(m.elements[2])+"  ,  "+JSON.stringify(m.elements[3])+"\n"+
                  JSON.stringify(m.elements[4])+"  ,  "+JSON.stringify(m.elements[5])+"  ,  "+JSON.stringify(m.elements[6])+"  ,  "+JSON.stringify(m.elements[7])+"\n"+
                  JSON.stringify(m.elements[8])+"  ,  "+JSON.stringify(m.elements[9])+"  ,  "+JSON.stringify(m.elements[10])+"  ,  "+JSON.stringify(m.elements[11])+"\n"+
                  JSON.stringify(m.elements[12])+"  ,  "+JSON.stringify(m.elements[13])+"  ,  "+JSON.stringify(m.elements[14])+"  ,  "+JSON.stringify(m.elements[15])+"]");
  }

 function selectObject(object){
    if(this.selected===object)return;
    var uuid=null;
    if(object !== null){
        uuid=object.uuid;
        console.log(uuid);
    }
 }
 
 function onDocumentMouseDown( event ){    
    // update the mouse variable
    mouse.x = ( event.clientX / appW ) * 2 - 1;
    mouse.y = - ( event.clientY / appH ) * 2 + 1;
    // find intersections
    // create a Ray with origin at the mouse position
    //   and direction into the scene (camera direction)
    var vector = new THREE.Vector3( mouse.x, mouse.y, 1 );
    projector.unprojectVector( vector, camara );
    // create an array containing all objects in the scene with which the ray intersects  
    var ray = new THREE.Raycaster( camara.position, vector.sub( camara.position ).normalize() );
    // create an array containing all objects in the scene with which the ray intersects  
    intersects = ray.intersectObjects(targetList);
    primitivas = ray.intersectObjects(targetList);

    
    
    
    // if there is one (or more) intersections
    if ( intersects.length > 0 )
    {
        console.log("Hit @ " + toString( intersects[0].point ) );
        console.log(intersects[0]);
        document.getElementById('UUID').value = intersects[0].object.uuid;
        document.getElementById('nombre').value = intersects[0].object.name; 
        document.getElementById('Parent').value = intersects[0].object.parent.name;
        document.getElementById('x').value = intersects[0].object.position.x;
        document.getElementById('y').value = intersects[0].object.position.y;
        document.getElementById('z').value = intersects[0].object.position.z;
        document.getElementById('xr').value = intersects[0].object.rotation.x;
        document.getElementById('yr').value = intersects[0].object.rotation.y;
        document.getElementById('zr').value = intersects[0].object.rotation.z;
        document.getElementById('xs').value = intersects[0].object.scale.x;
        document.getElementById('ys').value = intersects[0].object.scale.y;
        document.getElementById('zs').value = intersects[0].object.scale.z;
        document.getElementById('visible').value = intersects[0].object.visible;
        document.getElementById('user').value = intersects[0].object.userData; 
        document.getElementById('UUID2').value = intersects[0].object.geometry.uuid;
        document.getElementById('nombre2').value = intersects[0].object.geometry.name;
        document.getElementById('vertices').value = intersects[0].object.geometry.vertices.length;
        document.getElementById('faces').value = intersects[0].object.geometry.faces.length;
        document.getElementById('wd').value = intersects[0].object.geometry.width;
        document.getElementById('ht').value = intersects[0].object.geometry.height;
        document.getElementById('dt').value = intersects[0].object.geometry.depth;
        document.getElementById('wds').value = intersects[0].object.geometry.widthSegments;
        document.getElementById('hts').value = intersects[0].object.geometry.heightSegments;
        document.getElementById('dts').value = intersects[0].object.geometry.depthSegments;
        document.getElementById('UUID3').value = intersects[0].object.material.uuid;
        document.getElementById('nombre3').value = intersects[0].object.material.name;
        document.getElementById('type').value = 'THREE.MeshBasicMaterial';
        document.getElementById('color').value = JSON.stringify(intersects[0].object.material.color);
        document.getElementById('vertexc').value = intersects[0].object.material.vertexColors;
        document.getElementById('skininng').value = intersects[0].object.material.skinning;
        document.getElementById('map').value = intersects[0].object.material.map;
        document.getElementById('alpha').value = intersects[0].object.material.alphaTest;
        document.getElementById('light').value = intersects[0].object.material.lightMap;
        document.getElementById('specularm').value = intersects[0].object.material.specularMap;
        document.getElementById('env').value = intersects[0].object.material.envMap;
        document.getElementById('side').value = intersects[0].object.material.side;
        document.getElementById('shading').value = intersects[0].object.material.shading;
        document.getElementById('blending').value = intersects[0].object.material.blending;
        document.getElementById('opacity').value = intersects[0].object.material.opacity;
        document.getElementById('transparent').value = intersects[0].object.material.transparent;
        document.getElementById('wireframe').value = intersects[0].object.material.wireframe;

    }
}
var figura = -1;

function modificarAtributosI(){

   figura = prompt("ingrese el id de la figura que a la que desea cambiar atributos");
   alert("Cuando quieras cambiar los atributos de otra figura debes presionar este boton");


        $('#x').keyup(function () {

        x2=document.getElementById('x').value;
        escena.children[figura].position.x=x2;

        });
       $('#y').keyup(function () {

        y2=document.getElementById('y').value;
        escena.children[figura].position.y=y2;

        });
       $('#z').keyup(function () {

        z2=document.getElementById('z').value;
        escena.children[figura].position.z=z2;

        });
       $('#xr').keyup(function () {

        x2=document.getElementById('xr').value;
        escena.children[figura].rotation.x=x2;

        });
       $('#yr').keyup(function () {

        y2=document.getElementById('yr').value;
        escena.children[figura].rotation.y=y2;

        });
       $('#zr').keyup(function () {

        z2=document.getElementById('zr').value;
        escena.children[figura].rotation.z=z2;

        });
       $('#xs').keyup(function () {

        x2=document.getElementById('xs').value;
        escena.children[figura].scale.x=x2;

        });
       $('#ys').keyup(function () {

        y2=document.getElementById('ys').value;
        escena.children[figura].scale.y=y2;

        });
       $('#zs').keyup(function () {

        z2=document.getElementById('zs').value;
        escena.children[figura].scale.z=z2;

        });
       $('#visible').keyup(function () {

        x2=document.getElementById('visible').value;
        escena.children[figura].visible=x2;

        });
       $('#user').keyup(function () {

        x2=document.getElementById('user').value;
        escena.children[figura].userData=x2;

        });
       $('#UUID').keyup(function () {

        x2=document.getElementById('UUID').value;
        escena.children[figura].uiid=x2;

        });
       $('#UUID2').keyup(function () {

        x2=document.getElementById('UUID2').value;
        escena.children[figura].geometry.uiid=x2;

        });
       $('#nombre2').keyup(function () {

        x2=document.getElementById('nombre2').value;
        escena.children[figura].geometry.name=x2;

        });
       $('#vertices').keyup(function () {

        x2=document.getElementById('vertices').value;
        escena.children[figura].geometry.vertices.length=x2;

        });
       $('#faces').keyup(function () {

        x2=document.getElementById('faces').value;
        escena.children[figura].geometry.faces.length=x2;

        });
       $('#wd').keyup(function () {

        x2=parseInt(document.getElementById('wd').value);
        escena.children[figura].geometry.width=x2;

        });
       $('#ht').keyup(function () {

        x2=parseInt(document.getElementById('ht').value);
        escena.children[figura].geometry.height=x2;

        });
       $('#dt').keyup(function () {

        x2=parseInt(document.getElementById('dt').value);
        escena.children[figura].geometry.depth=x2;

        });
       $('#wds').keyup(function () {

        x2=parseInt(document.getElementById('wds').value);
        escena.children[figura].geometry.widthSegments=x2;

        });
       $('#hts').keyup(function () {

        x2=parseInt(document.getElementById('hts').value);
        escena.children[figura].geometry.heightSegments=x2;

        });
       $('#dts').keyup(function () {

        x2=parseInt(document.getElementById('dts').value);
        escena.children[figura].geometry.depthSegments=x2;

        })

  


}



 
