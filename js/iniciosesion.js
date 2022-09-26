let btnIngresar = document.getElementById("btnIngresar");
btnIngresar.onclick = (e) => {
    e.preventDefault();
    let formUsuario = document.getElementById("formUsuario").value;
    console.log(formUsuario);
    let arrayfind = arrayUsuario.find((Usuario) => Usuario.rut === formUsuario);
    console.log(arrayfind);
    if(typeof(arrayfind) === "undefined"){
        console.log("No es tu cuenta. Usuario:"+formUsuario);
       // window.alert("No es tu cuenta, ladron");
    }else{
        console.log(`Usuario: ${arrayfind.nombre}`);
        document.location.href="../index.html";
    } 
};