var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function () {
    
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function () {
        var erroAjax = document.querySelector("#error-ajax");
        if (xhr.status == 200) {

            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function (paciente) {
                addPatientOnTable(paciente);
                botaoAdicionar.setAttribute("disabled", "disabled");
            });

        } else {
            erroAjax.classList.add("visivel");
            setTimeout(() => {
                erroAjax.classList.remove("visivel");
            }, 5000);

        }
    });

    xhr.send();

});