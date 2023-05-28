//cargo en un arreglo las imganes de las banderas. Este sera el orden que se mostrarán
let banderas = ["c_amarillo.png","c_azul.png","c_cafe.png","c_dorado.png","c_gris.png","c_lila.png","c_morado.png","c_naranjado.png","c_negro.png","c_rojo.png","c_rosa.png","c_verde.png"];

//arreglo que guardara la opcion correcta
let correcta = [0,1,2,0,1,2,0,1,2,0,1,2];

//arreglo que guardara los paises a mostrar en cada jugada
let opciones = [];
//cargo en el arreglo opciones las opciones a mostrar en cada jugada
opciones.push(["YELLOW",      "YELLOUW",    "YELOW"]);
opciones.push(["BLU",   "BLUE",  "BLUH"]);
opciones.push(["BROUN","BROW", "BROWN"]);

opciones.push(["GOLD",    "GOOLD",    "GOLDH"]);
opciones.push(["GRAI", "GRAY", "GREY"]);
opciones.push(["LILA",   "LILHA",  "LILAC"]);

opciones.push(["PURPLE",    "PORPLUE",    "PORPLE"]);
opciones.push(["ORANCHE", "ORANGE", "ORANGHE"]);
opciones.push(["BLAC",   "BLAK",  "BLACK"]);

opciones.push(["RED",    "REED",    "REDH"]);
opciones.push(["PINC", "PINK", "PHINK"]);
opciones.push(["GREN",   "GRIIN",  "GREEN"]);

// opciones.push(["NAMIBIA", "OMAN", "ETIOPIA"]);*/

//variable que guarda la posicion actual
let posActual = 0;
//variable que guarda la cantidad acertadas hasta el moemento
let cantidadAcertadas = 0;

function comenzarJuego(){
    //reseteamos las variables
    posActual = 0;
    cantidadAcertadas = 0;
    //activamos las pantallas necesarias
    document.getElementById("pantalla-inicial").style.display = "none";
	document.getElementById("pantalla-inicial2").style.display = "none";
	document.getElementById("pantalla-juego").style.display = "block";
    cargarBandera();

}

//funcion que carga la siguiente bandera y sus opciones
function cargarBandera(){
    //controlo sis se acabaron las banderas
    if(banderas.length <= posActual){
        terminarJuego();
    }
    else{//cargo las opciones
        //limpiamos las clases que se asignaron
        limpiarOpciones();

        document.getElementById("imgBandera").src = "img/" + banderas[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
		document.getElementById("n3").innerHTML = opciones[posActual][3];
    }
}

function limpiarOpciones(){
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";

    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
}

function comprobarRespuesta(opElegida){
    if(opElegida==correcta[posActual]){//acertó
        //agregamos las clases para colocar el color verde a la opcion elegida
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    }else{//no acerto
        //agramos las clases para colocar en rojo la opcion elegida
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";

        //opcion que era correcta
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++;
    //Esperamos 1 segundo y pasamos mostrar la siguiente bandera y sus opciones
    setTimeout(cargarBandera,1000);
}
function terminarJuego(){
    //ocultamos las pantallas y mostramos la pantalla final
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
	document.getElementById("pantalla-final2").style.display = "block";
	
    //agreamos los resultados
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = banderas.length - cantidadAcertadas;
}

function volverAlInicio(){
    //ocultamos las pantallas y activamos la inicial
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}