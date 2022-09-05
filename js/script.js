        document.getElementById("resusu").style.display="none";  

        function verificar(){
            var a = document.getElementsByName("siyno");
            for (let i =0 ; i < a.length ; i++){
                if (a[i].checked) {
                    var cuenta = a[i].value;
                }
            }
            switch(cuenta){
                case "si":
                    document.getElementById("indicatuedad").style.display="block";
                break;
                case "no":
                    window.alert("No molestes, afuera");
                break;
                default:
                    window.alert("No molestes");
                break;
            }
        }

        function verificaredad(){
            let edad = document.getElementById("edad").value;
            if(edad < 13){
                document.getElementById("resultado").style.display="block";
                document.getElementById("txt").innerHTML="Eres un niño";
            }else if((edad > 13) && (edad<18)){
                document.getElementById("resultado").style.display="block";
                document.getElementById("txt").innerHTML="Eres un adolencente";
            }else{
                document.getElementById("resultado").style.display="block";
                document.getElementById("txt").innerHTML="Eres un adulto, flojo";
            }
        }

        function anacam(){
            let numcam = parseInt(prompt("Indique el numero de camaras"));
            let nomcam = "";
            for(i = 0; i < numcam; i++){
                if(!((i%2) === 0)){
                    nomcam = prompt("Ingrese el nombre de la camara");
                    while((nomcam.length)<2){
                        window.alert("Esta malo, tonto");
                        nomcam = prompt("Ingrese el nombre de la camara");
                    }
                }else{
                    nomcam = "(Es par)No vales nada";
                }
                console.log("Ubicación" + i + "el nombre la camara es "+ nomcam);
            }
        }

        let nombreusuario = "";

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
