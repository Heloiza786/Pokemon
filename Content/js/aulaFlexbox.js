
function DarkMode(){
    var conteudo = document.body;
var divTexto = document.getElementById("idTeste");

    
    conteudo.className = "DarkMode";

   divTexto.innerHTML = "Estou no Dark Mode";
  
}

function LightMode(){
    var conteudo = document.body;
var divTexto = document.getElementById("idTeste");
    conteudo.className = "";
    divTexto.innerHTML = "Estou no Light Mode";
}
