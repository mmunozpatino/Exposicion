var turno;
function set(id, value) {
    document.getElementById(id).innerHTML = value;
}
function get(id) {
    return document.getElementById(id).innerHTML;
}
function tipoJuego(id, v) {
    document.getElementById(id).setAttribute("onclick", v);
}
function cambiarJuego(j) {
    tipoJuego("0", j);
    tipoJuego("1", j);
    tipoJuego("2", j);
    tipoJuego("3", j);
    tipoJuego("4", j);
    tipoJuego("5", j);
    tipoJuego("6", j);
    tipoJuego("7", j);
    tipoJuego("8", j);
}
function iniciar() {
    var v = document.getElementById("opcionJ").value;
    document.getElementById("tablero").setAttribute("class", "tablero");
    turno = 1;
    if (v == "Pl2Pl") {
        cambiarJuego("jugarP2P(this.id)");
    }
    else {
        if (v == "Pl2Pc") {
            cambiarJuego("jugarP2Pc(this.id)");
        }
        else {
            if (v == "PC2PC") {
                cambiarJuego(" ");
                jugarPc2Pc();
            }
        }
    }
}
function jugarP2P(id) {
    if (turno == 1) {
        set(id, "X");
        turno = 2;
    }
    else {
        set(id, "O");
        turno = 1;
    }
    document.getElementById(id).disabled = true;
    TATETI();
}
function jugarP2Pc(id) {
    set(id, "X");
    if (!TATETI()) {
        deshabilitarT(true);
        setTimeout(function () { juegaPC("O"); }, 3000);
        deshabilitarT(false);
    }
}
function jugarPc2Pc() {
    if (turno == 1) {
        juegaPC("X");
        turno = 2;
        if (!TATETI()) {
            setTimeout(function () { jugarPc2Pc(); }, 1000);
        }
    }
    else {
        juegaPC("O");
        turno = 1;
        if (!TATETI()) {
            setTimeout(function () { jugarPc2Pc(); }, 1000);
        }
    }
}
function juegaPC(v) {
    var num = 1;
    var celda = Math.floor((Math.random() * 8) + 1);
    var id = celda.toString();
    if (verificarTablero()) {
        while (get(id) != " ") {
            id = Math.floor(Math.random() * 8).toString();
        }
        set(id, v);
    }
}
function verificarTablero() {
    if (get("0") != " " && get("1") != " " && get("2") != " " && get("3") != " " && get("4") != " " && get("5") != " " && get("6") != " " && get("7") != " " && get("8") != " ") {
        return false;
    }
    else {
        return true;
    }
}
function deshabilitarT(v) {
    document.getElementById("0").disabled = v;
    document.getElementById("1").disabled = v;
    document.getElementById("2").disabled = v;
    document.getElementById("3").disabled = v;
    document.getElementById("4").disabled = v;
    document.getElementById("5").disabled = v;
    document.getElementById("6").disabled = v;
    document.getElementById("7").disabled = v;
    document.getElementById("8").disabled = v;
}
function TATETI() {
    //horizontales
    if (get("0") == get("1") && get("1") == get("2") && get("2") != " ") {
        if (get("1") == "X") {
            set("ganador", "Ganaron las X!");
        }
        else {
            set("ganador", "Ganaron los O!");
        }
        document.getElementById("R").setAttribute("class", "boton");
        return true;
    }
    if (get("3") == get("4") && get("4") == get("5") && get("5") != " ") {
        if (get("3") == "X") {
            set("ganador", "Ganaron las X!");
        }
        else {
            set("ganador", "Ganaron los O!");
        }
        document.getElementById("R").setAttribute("class", "boton");
        return true;
    }
    if (get("6") == get("7") && get("7") == get("8") && get("8") != " ") {
        if (get("6") == "X") {
            set("ganador", "Ganaron las X!");
        }
        else {
            set("ganador", "Ganaron los O!");
        }
        document.getElementById("R").setAttribute("class", "boton");
        return true;
    }
    //verticales
    if (get("0") == get("3") && get("3") == get("6") && get("6") != " ") {
        if (get("0") == "X") {
            set("ganador", "Ganaron las X!");
        }
        else {
            set("ganador", "Ganaron los O!");
        }
        document.getElementById("R").setAttribute("class", "boton");
        return true;
    }
    if (get("1") == get("4") && get("4") == get("7") && get("7") != " ") {
        if (get("1") == "X") {
            set("ganador", "Ganaron las X!");
        }
        else {
            set("ganador", "Ganaron los O!");
        }
        document.getElementById("R").setAttribute("class", "boton");
        return true;
    }
    if (get("2") == get("5") && get("5") == get("8") && get("8") != " ") {
        if (get("2") == "X") {
            set("ganador", "Ganaron las X!");
        }
        else {
            set("ganador", "Ganaron los O!");
        }
        document.getElementById("R").setAttribute("class", "boton");
        return true;
    }
    //diagonales
    if (get("0") == get("4") && get("4") == get("8") && get("8") != " ") {
        if (get("0") == "X") {
            set("ganador", "Ganaron las X!");
        }
        else {
            set("ganador", "Ganaron los O!");
        }
        document.getElementById("R").setAttribute("class", "boton");
        return true;
    }
    if (get("2") == get("4") && get("4") == get("6") && get("6") != " ") {
        if (get("2") == "X") {
            set("ganador", "Ganaron las X!");
        }
        else {
            set("ganador", "Ganaron los O!");
        }
        document.getElementById("R").setAttribute("class", "boton");
        return true;
    }
}
function reiniciar() {
    set("0", " ");
    set("1", " ");
    set("2", " ");
    set("3", " ");
    set("4", " ");
    set("5", " ");
    set("6", " ");
    set("7", " ");
    set("8", " ");
    document.getElementById("tablero").setAttribute("class", "ocultar");
    document.getElementById("R").setAttribute("class", "ocultar");
    set("ganador", "");
    deshabilitarT(false);
}
