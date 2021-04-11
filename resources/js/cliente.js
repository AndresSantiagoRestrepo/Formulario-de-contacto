export default class Cliente {
    constructor(nombre, apellido, direccion, correo, telefono, edad, sexo, segSocial, rh, gustos) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.correo = correo;
        this.telefono = telefono;
        this.edad = edad;
        this.sexo = sexo;
        this.segSocial = segSocial;
        this.rh = rh;
        this.gustos = gustos;


    }

    verificarDatos() {
        if (this.nombre != "" && this.apellido != "" && this.direccion != "" && this.correo != "" && this.telefono != "" && this.edad != "" && this.gustos !="") {
            return true
            //retorna true indicando que todos los datos necesarios estan diligenciados
         }else{
             return false
             //retorna false porque los datos no estan diligenciados
         }
    }

}
