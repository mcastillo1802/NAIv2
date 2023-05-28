let banderas = ["enero.png","febrero.png","marzo.png","abril.png","mayo.png","junio.png","julio.png","agosto.png","septiembre.png","octubre.png","noviembre.png","diciembre.png"];

//arreglo que guardara la opcion correcta
let correcta = [0,1,2,0,1,2,0,1,2,0,1,2];

//arreglo que guardara los paises a mostrar en cada jugada
let opciones = [];
//cargo en el arreglo opciones las opciones a mostrar en cada jugada
opciones.push(["JANUARY",      "JANUARE",    "JINUARI"]);
opciones.push(["FEBRERY",   "FEBRUARY",  "FEBRUARE"]);
opciones.push(["MERCH","MARCHE", "MARCH"]);

opciones.push(["APRIL",    "APRHIL",    "APRILE"]);
opciones.push(["MAI", "MAY", "MAYE"]);
opciones.push(["JANE",   "JUNIE",  "JUNE"]);

opciones.push(["JULY",    "JULIE",    "JALIO"]);
opciones.push(["AUGEST", "AUGUST", "AGOUTS"]);
opciones.push(["SEPTEMBIR",   "SEPTIMBIR",  "SEPTEMBER"]);

opciones.push(["OCTOBER",    "OCTUBIR",    "OCT"]);
opciones.push(["NOVIEMBIR", "NOVEMBER", "NOVIMBEAR"]);
opciones.push(["DIC",   "DICIMBIR",  "DECEMBER"]);


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

        document.getElementById("imgBandera").src = "img/Mesesi/" + banderas[posActual];
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
}// JavaScript Document// JavaScript Document