Matrix4 = function ( a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16  ) {

    this.a1 = a1;
    this.a2 = a2 || 0 ;
    this.a3 = a3 || 0 ;
    this.a4 = a4 || 0 ;
    this.a5 = a5 || 0 ;
    this.a6 = a6 || 0 ;
    this.a7 = a7 || 0 ;
    this.a8 = a8 || 0 ;
    this.a9 = a9 || 0 ;
    this.a10 = a10 || 0 ;
    this.a11 = a11 || 0 ;
    this.a12 = a12 || 0 ;
    this.a13 = a13 || 0 ;
    this.a14 = a14 || 0 ;
    this.a15 = a15 || 0 ;
    this.a16 = a16 || 0 ;

};

Matrix4.prototype = {

       set: function ( a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16 ) {

        this.a1 = a1;
        this.a2 = a2;
        this.a3 = a3;
        this.a4 = a4;
        this.a5 = a5;
        this.a6 = a6;
        this.a7 = a7;
        this.a8 = a8;
        this.a9 = a9;
        this.a10 = a10;
        this.a11 = a11;
        this.a12 = a12;
        this.a13 = a13;
        this.a14 = a14;
        this.a15 = a15;
        this.a16 = a16;


    },

       setPos: function(fila,columna,value){


        if(fila==1){

          if(columna==1){
            this.a1=value;
          }

          if(columna==2){
            this.a2=value;
          }

          if(columna==3){
            this.a3=value;
          }

          if(columna==4){
            this.a4=value;
          }
        }

        if(fila==2){

          if(columna==1){
            this.a5=value;
          }
          if(columna==2){
            this.a6=value;
          }
          if(columna==3){
            this.a7=value;
          }
          if(columna==4){
            this.a8=value;
          }

        }

        if(fila==3){

          if(columna==1){
            this.a9=value;
          }
          if(columna==2){
            this.a10=value;
          }
          if(columna==3){
            this.a11=value;
          }
          if(columna==4){
            this.a12=value;
          }

        }

        if(fila==4){

          if(columna==1){
            this.a13=value;
          }
          if(columna==2){
            this.a14=value;
          }
          if(columna==3){
            this.a15=value;
          }
          if(columna==4){
            this.a16=value;
          }
        }










       },




       


}


Matrix4.sum = function(a,b){

    return new Matrix4( ( a.a1+b.a1 ) , ( a.a2+b.a2 ), ( a.a3+b.a3 ) , ( a.a4+b.a4 ) , ( a.a5+b.a5 ) , ( a.a6+b.a6 ) , ( a.a7+b.a7 ) , ( a.a8+b.a8 ) , ( a.a9+b.a9 ) , ( a.a10+b.a10) , ( a.a11+b.a11) , ( a.a12+b.a12 ) , ( a.a13+b.a13 ) , ( a.a14+b.a14 ) , ( a.a15+b.a15 ) , ( a.a16+b.a16 ) );


}

Matrix4.rest = function(a,b){

    return new Matrix4( ( a.a1-b.a1 ) , ( a.a2-b.a2 ), ( a.a3-b.a3 ) , ( a.a4-b.a4 ) , ( a.a5-b.a5 ) , ( a.a6-b.a6 ) , ( a.a7-b.a7 ) , ( a.a8-b.a8 ) , ( a.a9-b.a9 ) , ( a.a10-b.a10) , ( a.a11-b.a11) , ( a.a12-b.a12 ) , ( a.a13-b.a13 ) , ( a.a14-b.a14 ) , ( a.a15-b.a15 ) , ( a.a16-b.a16 ) );


}

Matrix4.product = function(a,b){

   return new Matrix4( ((a.a1*b.a1) + (a.a2*b.a5) + (a.a3*b.a9) + (a.a4*b.a13)), ((a.a1*b.a2) + (a.a2*b.a6) + (a.a3*b.a10) + (a.a4*b.a14)) , ((a.a1*b.a3) + (a.a2*b.a7) + (a.a3*b.a11) + (a.a4*b.a15)) , ((a.a1*b.a4) + (a.a2*b.a8) + (a.a3*b.a12) + (a.a4*b.a16)) ,

                        ((a.a5*b.a1) + (a.a6*b.a5) + (a.a7*b.a9) + (a.a8*b.a13)) , ((a.a5*b.a2) + (a.a6*b.a6) + (a.a7*b.a10) + (a.a8*b.a14)) , ((a.a5*b.a3) + (a.a6*b.a7) + (a.a7*b.a11) + (a.a8*b.a15)) , ((a.a5*b.a4) + (a.a6*b.a8) + (a.a7*b.a12) + (a.a8*b.a16)) ,

                        ((a.a9*b.a1) + (a.a10*b.a5) + (a.a11*b.a9) + (a.a12*b.a13)) , ((a.a9*b.a2) + (a.a10*b.a6) + (a.a11*b.a10) + (a.a12*b.a14)) , ((a.a9*b.a3) + (a.a10*b.a7) + (a.a11*b.a11) + (a.a12*b.a15)) , ((a.a9*b.a4) + (a.a10*b.a8) + (a.a11*b.a12) + (a.a12*b.a16)) ,

                        ((a.a13*b.a1) + (a.a14*b.a5) + (a.a15*b.a9) + (a.a16*b.a13)) , ((a.a13*b.a2) + (a.a14*b.a6) + (a.a15*b.a10) + (a.a16*b.a14)) , ((a.a13*b.a3) + (a.a14*b.a7) + (a.a15*b.a11) + (a.a16*b.a15)) , ((a.a13*b.a4) + (a.a14*b.a8) + (a.a15*b.a12) + (a.a16*b.a16)) );         

} 

Matrix4.transpose = function (a){

    return new Matrix4(a.a1,a.a5,a.a9,a.a13,a.a2,a.a6,a.a10,a.a14,a.a3,a.a7,a.a11,a.a15,a.a4,a.a8,a.a12,a.a16);

    }


Matrix4.rotationx = function (a,w){

   

         x = new Matrix4(1,0,0,0,0,(Math.cos(w))*180/Math.PI,(Math.sin(w))*180/Math.PI,0,0,-(Math.sin(w))*180/Math.PI,(Math.cos(w))*180/Math.PI,0,0,0,0,1);
         return this.product(a,x)
         

}

Matrix4.rotationy = function (a,w){

         
         

 

         y = new Matrix4((Math.cos(w)),0,-(Math.sin(w))*180/Math.PI,0,0,1,0,0,(Math.sin(w))*180/Math.PI,0,(Math.cos(w))*180/Math.PI,0,0,0,0,1);
         return this.product(a,y);
         


    }

  Matrix4.rotationz = function (a,w){

         z = new Matrix4((Math.cos(w))*180/Math.PI,(Math.sin(w))*180/Math.PI,0,0,-(Math.sin(w))*180/Math.PI,(Math.cos(a))*180/Math.PI,0,0,0,0,1,0,0,0,0,1);
         return this.product(a,z);
         


    }

 Matrix4.traslation = function (a,x,y,z){


  t = new Matrix4(1,0,0,0,0,1,0,0,0,0,1,0,x,y,z,1);
  return this.sum(a,t);



}
    

 Matrix4.Scallation = function (a,x,y,z){

  s = new Matrix4(x,0,0,0,0,y,0,0,0,0,z,0,0,0,0,1);
  return this.product(a,s);




 }

 Matrix4.identity = function(){
 
  var i = new Matrix4(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
  return  i;
}



 Matrix4.translations = function(x, y, z){
var m = new Matrix4 (0);
    m.set(1,0,0,0,0,1,0,0,0,0,1,0,x,y,z,1);
  

  return m;
}

Matrix4.rotations = function(a, eje){
var m = new Matrix4 (0);

   if (eje == "x"){
    m.set(1,0,0,0,0,( ( Math.cos(a) )*180/Math.PI), ((Math.sin(a))*180/Math.PI) ,0,0,(((Math.sin(a))*180/Math.PI)*(-1)),( ( Math.cos(a) )*180/Math.PI),0,0,0,0,1 );
   } else if (eje == "y"){

    m.set( (( Math.cos(a) )*180/Math.PI), 0, (((Math.sin(a))*180/Math.PI)*(-1)),0,0,1,0,0, ((Math.sin(a))*180/Math.PI),0, ( ( Math.cos(a) )*180/Math.PI),0,0,0,0,1);
   } else if (eje == "z"){
    m.set( (( Math.cos(a) )*180/Math.PI),((Math.sin(a))*180/Math.PI),0,0, (((Math.sin(a))*180/Math.PI)*(-1)), (( Math.cos(a) )*180/Math.PI), 0,0,0,0,1,0,0,0,0,1)
   } else {

    m = this.identity();
   }
  

  return m;
}

Matrix4.escalations = function(x, y, z){
var m = new Matrix4 (0);
m.set(x,0,0,0,0,y,0,0,0,0,z,0,0,0,0,1);
  return m;
}

Matrix4.createTransformationM = function (type, x, y, z, a, eje){
    
    var matrizM = new Matrix4 (0);

    if (type == "traslacion"){
      matrizM = this.translations(x,y,z);
    } 
    else if (type == "rotacion"){
      matrizM = this.rotations(a, eje);

      }
      else if (type == "escalacion"){
       matrizM = this.escalations(x,y,z);
      }

      return matrizM;
    }


