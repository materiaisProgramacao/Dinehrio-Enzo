let pontos =  0;

function darPontos(){
 
    let span = document.getElementById("spanId")
    let certo = document.getElementById("resposta")

    pontos = pontos +5

    span.textContent = pontos; 
    certo.textContent ="Certa!"}


function tirarPontos(){

    let span = document.getElementById("spanId")
    let resposta = document.getElementById("resposta")



    pontos = pontos  -5;
    span.textContent = pontos;
    resposta.textContent = "Errada!"

}
function darPontos2(){
 
    let span = document.getElementById("spanId")
    let certo = document.getElementById("resposta")

    pontos = pontos +10

    span.textContent = pontos; 
    certo.textContent ="Certa!"}


function tirarPontos2(){

    let span = document.getElementById("spanId")

    pontos = pontos  -3;
    span.textContent = pontos;
    resposta.textContent = "Errada!"

}
