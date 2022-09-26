       

        let arrayCammara = [];
        let carroCompra = [];

        let menuusuarios = document.getElementById("menuusuarios");

        menuusuarios.addEventListener("click", () => {
            document.location.href="usuario/index.html";
        });

        /*
        function menucamaras(){
            
        }
        */


        function iniciosesion(usuario){
            if(usuario === "abcd"){
                document.location.href="../index.html";
            }else{
                window.alert("Ese no es un usuario registrado, lanza.")
            }
        }

        let btnCerrarSesion = document.getElementById("btnCerrarSesion");
        btnCerrarSesion.addEventListener("click", () => {
            window.alert("Estas cerrando sesión");
            document.location.href="../index.html";
        })

        class camara{
            constructor(usuario){
                this.usuario = usuario;
            }
            crear(){
                let numcam = parseInt(prompt("Indique el numero de camaras"));
                let nomcam = "";
                    for(let i = 0; i < numcam; i++){
                        nomcam = prompt("Ingrese el nombre de la camara");
                            while((nomcam.length)<2){
                                window.alert("Esta malo, tonto");
                                nomcam = prompt("Ingrese el nombre de la camara");
                            }
                        nombrecamara += "Camara "+(i)+": "+nomcam+" Añadida con exito. por "+this.usuario+"<br>"; 
                    }
                    document.getElementById("resusutxt").innerHTML=nombrecamara;
            }
        }

        function crearcamara(usuario){
            let textocamara = new camara(usuario);
            document.getElementById("resusu").style.display="block";  
            textocamara.crear();
            nombrecamara="";
        }

        //Index de adquirir de camaras
        function adquirir(){

            //Declarar variables y array
            let cantidadcamaras = [];
            let valorcompra = 0;

            let a = document.getElementsByName("siyno");
            
            let comprar = (a,b) => a*b; 
           //Obtener valor de cantidad de camaras
           for(let i = 1; i < 4; i++){
            let cam = document.getElementById("cam"+i).value;
            console.log(cam);
            cantidadcamaras.push(cam);            
            }

            valorcompra += comprar(cantidadcamaras[0], 1000);
            valorcompra += comprar(cantidadcamaras[1], 2000);
            valorcompra += comprar(cantidadcamaras[2], 3000); 

            // Utilizado para identificar el valor seleccionado del radio button 
            for (let i =0 ; i < a.length ; i++){
                if (a[i].checked) {
                    var instalación = a[i].value;
                }
            }    
           
            // funcion anonima 
            let valorins = function () { valorcompra += 1111;};
            
            // Ternario javascript 
            instalación === "Si" ? 
                (valorins()) : (console.log("Sin instalador"));
            console.log("El valor de la compra es: "+ valorcompra);

            document.getElementById("tablaresultado").style.display="block";
            document.getElementById("tablaresultado").innerHTML="El valor total es: $"+valorcompra;
            //Metodo para recorrer objetos y arrays
           /* for( const valor in cantidadcamaras){
                console.log(cantidadcamaras[valor]);
            }
            */
            
        }   

        
        
