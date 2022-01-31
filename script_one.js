
//Linea de codigo para que todo el texto este en minuscula
window.addEventListener("load",inicio, true);

function inicio(){
document.getElementById("mensaje").addEventListener("keyup", function(){
this.value = this.value.toLowerCase(); 
//"this.value.toLowerCase()",le estoy indicando que todo el texto que se ingrese automaticamente se escriba en minuscula
},true);
}

//encriptar
function Encriptar(){
    var encriptar = document.getElementById('mensaje').value;
    var encriptado = encriptar.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat');
    document.getElementById("resultado").value = encriptado
   
}

//desencriptar
function Desencriptar(){
    var desencriptar= document.getElementById ("mensaje").value;
    var desencriptado= desencriptar.replace(/ai/gi, 'a').replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
    document.getElementById("resultado").value = desencriptado
}

//copiar
function Copiar(){
    var contenido = document.getElementById('resultado');
    contenido.select();
    alert("Mensaje copiado");
    document.execCommand('Copy');
}

