var titulo = document.querySelector(".titulo-pagina");
titulo.textContent = "Aparecida Nutrition";

var btForm = document.querySelector("#")

var pacientes = document.querySelectorAll(".paciente");

for (i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var alturaValida = true
    var pesoValida = true

    if (peso < 40 || peso >= 595) {
        tdImc.textContent = "Peso Inválido";
        pesoValida = false;
        paciente.classList.add("paciente-invalido");        
    }
    if (altura <= 1.25 || altura >= 2.50) {
        tdImc.textContent = "Altura Inválida";
        alturaValida = false;
        paciente.classList.add("paciente-invalido");
    }
    if (alturaValida && pesoValida) {
        var calcImc = peso / (altura * altura);
        tdImc.textContent = calcImc.toFixed(2);
    }
}

titulo.addEventListener("click", mostraMensagem);
function mostraMensagem(){
    console.log("click");
}
console.log("Loaded");
