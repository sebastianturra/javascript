
/* Clase Usuario*/
class Usuario{
    constructor(rut,nombre,fallos,cuenta,fecha){
        this.rut = rut;
        this.nombre = nombre;
        this.fallos = Math.round(fallos);
        this.cuenta = cuenta;
        this.fecha = fecha || new Date();
    }

/* Metodos o funciones */
}

let arrayUsuario = [];

/* Ingreso de usuario al array */
    let usuarioUno = new Usuario("6131951-4","Glenda",0,"Adminstrativo",new Date(2022,9,24));
    let usuarioDos = new Usuario("7925396-0","Alfrodín",0,"Adminstrativo",new Date(2022,9,24));
    let usuarioTres = new Usuario("19353791-k","Sebastián",0,"Gerente");
    arrayUsuario.push(usuarioUno);
    arrayUsuario.push(usuarioDos);
    arrayUsuario.push(usuarioTres);

let crearUsuario = document.getElementById("btnUsuarioCrear");
let tbody = document.getElementById("tbody");
let usuarioCreado = document.getElementsByClassName("usuarioCreado"); 
let btnOcultarUsuarioCreado = document.getElementById("btnOcultarUsuarioCreado"); 
let formUsuario = document.querySelector('#formUsuario');
let btnMostrarListado = document.getElementById("btnMostrarListado");

let p = document.createElement("p");

let mostrarUsuarioCreado = () =>  
{
    let ultimoUsuarioCreado = (arrayUsuario.length - 1);
    p.innerHTML = `<h3>Usuario creado</h3><br>Rut:${arrayUsuario[ultimoUsuarioCreado].rut}<br>Nombre:${arrayUsuario[ultimoUsuarioCreado].nombre}`+
    `<br>Fallo:${arrayUsuario[ultimoUsuarioCreado].fallos}<br>Cuenta:${arrayUsuario[ultimoUsuarioCreado].cuenta}`+
    `<br>Fecha:${arrayUsuario[ultimoUsuarioCreado].fecha}`;
    p.className = "usuario__formulario";
    usuarioCreado[0].appendChild(p);
};

btnMostrarListado.addEventListener("click",() => {mostrarusuarios();});

btnOcultarUsuarioCreado.onclick = () => {p.remove();};

crearUsuario.onclick = (e) => 
{
    e.preventDefault();
    let rut = document.getElementById("formRut");
    let nombre = document.getElementById("formNombre");
    let cuentaradio = document.getElementsByName("tipocuenta");
    let cuenta = "";
    for (let i =0 ; i < cuentaradio.length ; i++){
        if (cuentaradio[i].checked) {
            cuenta = cuentaradio[i].value;
        }
    }
    /*let nombreUsuario = mostrarnombresminusculas(nombre.value,minusculas);
    console.log("nombreUsario: "+nombreUsuario);*/
    let usuario = new Usuario(rut.value,nombre.value,0,cuenta);
    arrayUsuario.push(usuario);
    console.log("Array usuario:");
    console.log(arrayUsuario);

    tbody.innerHTML = '';
    mostrarusuarios();
    mostrarUsuarioCreado();
};

let eliminarUsuario = (rut) => 
{
    tbody.innerHTML = '';
    let rutUsuario = rut;
    let arrayFind = arrayUsuario.find(Usuario => Usuario.rut === rutUsuario);
    let arrayFindPosition = arrayUsuario.indexOf(arrayFind);
    arrayUsuario.splice(arrayFindPosition,1);
    mostrarusuarios();
    console.log("Array usuario:");
    console.log(arrayUsuario);
};

let mostrarusuarios = () => {
    arrayUsuario.forEach(Usuario => {
    let trow = document.createElement("tr");
    trow.innerHTML = `<td>${Usuario.rut}</td><td>${Usuario.nombre}</td><td>${Usuario.fallos}</td><td>${Usuario.cuenta}</td>`+
    `<td>${Usuario.fecha.toLocaleDateString()}</td><td>
    <button id="btnEliminar" onclick="eliminarUsuario(${Usuario.rut});">Eliminar</button>
    </td>`;
    tbody.appendChild(trow);
    });
}

let btnLimpiarListado = document.getElementById("btnLimpiarListado");
btnLimpiarListado.addEventListener("click",() => {
    //tbody.remove();
    tbody.innerHTML=""});
    
/*
verUsuario.onclick = () => 
{
  
};

modificarUsuario.onclick = () => 
{
  
};

*/    




