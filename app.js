const llaveEncriptado = {
    "e" : "enter",
    "i" : "imes",
    "a" : "ai",
    "o" : "ober",
    "u" : "ufat",
};

const llaveDesencriptado = {
    "enter" : "e",
    "imes" : "i",
    "ai" : "a",
    "ober" : "o",
    "ufat" : "u",
};

const reguex = /^[a-z\s]+$/;

function extraerTextoElemento (elemento){
    return document.getElementById(elemento).value;
};

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
};

function limpiarTexto (texto){
    textoLimpio = texto .toString()
                        .toLowerCase()
                        .normalize('NFD')
                        .replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2")
                        .normalize();
    return textoLimpio
}

function validarTexto (texto, regex){
    textoValido = regex.test(texto.toString());
    if (textoValido === false) {
        cambiarCajaTexto("#ingreso__texto", "Ingrese solo letras minusculas y sin acentos");
    }     
    return textoValido;
}

function limpiarCajaTexto (elemento){
    document.querySelector(elemento).value = '';
};

function cambiarCajaTexto (elemento, texto){
    limpiarCajaTexto(elemento)
    document.querySelector(elemento).placeholder= texto;
};

function verificarEntradaTexto (texAreaValue, regex) {
    return regex.test(texAreaValue);
}

function encriptarTexto (texto, llaveEncriptado ){
    texto = texto.replace(/[aeiou]/g, m => llaveEncriptado[m]);
    return texto;
}

function desencriptarTexto (texto, llaveEncriptado ){
    texto = texto.replace(/enter|imes|ai|ober|ufat/g, m => llaveEncriptado[m]);
    return texto;
}

function encriptar (){
    texto = extraerTextoElemento("ingreso__texto");
    if (validarTexto (texto, reguex) === false){
        cambiarCajaTexto("#ingreso__texto", "Ingrese solo letras minusculas y sin acentos");
        return;
    }
    asignarTextoElemento("#texto__salida1", encriptarTexto(texto,llaveEncriptado));
    asignarTextoElemento("#texto__salida2", "");
    document.getElementById("imagen__salida").style.display = "none";

}

function desencriptar (){
    texto = extraerTextoElemento("ingreso__texto");
    if (validarTexto (texto, reguex) === false){
        cambiarCajaTexto("#ingreso__texto", "Ingrese solo letras minusculas y sin acentos");
        return;
    }
    asignarTextoElemento("#texto__salida1", desencriptarTexto(texto,llaveDesencriptado));
    asignarTextoElemento("#texto__salida2", "");
    document.getElementById("imagen__salida").style.display = "none";

}

function prueba(){
    texto = extraerTextoElemento("ingreso__texto");
    if (validarTexto (texto, reguex) === false){
        cambiarCajaTexto("#ingreso__texto", "Ingrese solo letras minusculas y sin acentos");
        return;
    };
    console.log(desencriptarTexto(texto,llaveDesencriptado));


    //texto = extraerTextoElemento("ingreso__texto");
    //console.log(texto);
    //textoValido = validarTexto(texto,reguex); 
    //if (textoValido === false) {
    //    cambiarCajaTexto("#ingreso__texto", "Ingrese solo letras minusculas y sin acentos");
    //}// else {
    //    cambiarCajaTexto("#ingreso__texto", texto);
    //}

    //console.log(encriptarTexto(texto,llaveEncriptado));

    //asignarTextoElemento("#texto__salida1", encriptarTexto(texto,llaveEncriptado));
    //asignarTextoElemento("#texto__salida2", "");
    //document.getElementById("imagen__salida").style.display = "none";


    //texto = limpiarTexto(extraerTextoElemento("ingreso__texto"));
    //const reguex = /^[a-z\s]+$/;
    //const valido = reguex.test(texto);
    //console.log(valido);
};
