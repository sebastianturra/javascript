/* Clase Usuario*/
class Usuario{
    constructor(rut,nombre,cuenta){
        this.rut = rut;
        this.nombre = nombre;
        this.cuenta = cuenta;
    }

/* Metodos o funciones */
    crearusuario(){
        let rut = document.getElementById(formRut);
        let nombre = document.getElementById(formNombre);
        let cuenta = document.getElementById(formCuenta);

        let usuario = new Usuario(rut.value,nombre.value,cuenta.value);
        arrayUsuario.push(usuario);
        console.log(arrayUsuario);
        window.alert("Usuario creado con exito. Ver consola más detalles.");
    }

    eliminarusuario(){
        let rut = prompt("Indique su rut");
    }

}

let arrayUsuario = [];

/* Ingreso de usuario al array */
    let usuarioUno = new Usuario("6131951-4","Glenda","Adminstrativo");
    let usuarioDos = new Usuario("7925396-0","Alfrodín","Adminstrativo");
    let usuarioTres = new Usuario("19353791-k","Sebastián","Gerente");
    arrayUsuario.push(usuarioUno);
    arrayUsuario.push(usuarioDos);
    arrayUsuario.push(usuarioTres);
