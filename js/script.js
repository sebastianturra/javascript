        document.getElementById("resusu").style.display="none";  

        let nombreusuario = "";
        let nombrecamara = "";

        function usuario(){
            this.anausu = function (){
                let contador = 0;
                do{
                        let nomusu = prompt("Ingresar el nombre del usario");
                        console.log("El nombre usuario agregado "+ nomusu);
                        ++contador;
                        nombreusuario += "Usuario: "+nomusu+", añadido con exito.<br>";
                        document.getElementById("resusutxt").innerHTML = nombreusuario;
                    }while(contador < 3);
                    nombreusuario = "";
            }
        }
        
        function anausu(){
            document.getElementById("resusu").style.display="block";  
            let usuariouno = new usuario();
            usuariouno.anausu();
        }

        function iniciosesion(usuario){
            if(usuario === "abcd"){
                document.location.href="intranet.html";
            }else{
                window.alert("Ese no es un usuario registrado, lanza.")
            }
        }

        function cerrarsesion(){
            window.alert("Estas cerrando sesión");
            document.location.href="index.html";
        }

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
        
