  Vector3 = function ( x, y, z, w ) {

    this.x = x;
    this.y = y || x;
    this.z = z || x;
    this.w = w || 1;

};

Vector3.prototype = {

    constructor: Vector3,

    set: function ( x, y, z, w ) {

        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;

        return this;

    },

    setX: function ( x ) {

        this.x = x;

        return this;

    },

    setY: function ( y ) {

        this.y = y;

        return this;

    },

    setZ: function ( z ) {

        this.z = z;

        return this;

    },

    setW: function ( w ) {

        this.w = w;

        return this;

    },

    copy: function ( v ) {

        this.x = v.x;
        this.y = v.y;
        this.z = v.z;
        this.w = v.w;

        return this;

    },

    add: function ( v, u ) {

        if ( u !== undefined ) {

            console.warn( 'Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead.' );
            return this.addVectors( v, w );

        }

        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
        this.w += v.w;

        return this;

    },

    addScalar: function ( s ) {

        this.x += s;
        this.y += s;
        this.z += s;

        return this;

    },

    addVectors: function ( a, b ) {

        this.x = a.x + b.x;
        this.y = a.y + b.y;
        this.z = a.z + b.z;

        return this;

    }

};


   Vector3.multiplicationVectors = function(u,v){
    var result = new Vector3(0);

    /*result.x = u.x*v.x;
    result.y = u.y*v.y;
    result.z = u.z*v.z;
    result.w = u.w*v.w;
    */
    return new Vector3(u.x*v.x , u.y*v.y , u.z*v.z , u.w*v.w);

   }