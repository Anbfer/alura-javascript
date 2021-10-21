var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    //pega todos os elementos HTML com a classe paciente
    var pacientes = document.querySelectorAll(".paciente");
        //se pesquisado no input alguma coisa executa o filtro
        if (this.value.length > 0) {
            //loop que percorre o array dos pacientes
            for (var i = 0; i < pacientes.length; i++ ){
                    var paciente = pacientes [i];
                    var tdNome = paciente.querySelector(".info-nome");
                    var nome = tdNome.textContent;
                    //FiLTRA independente se maiuscula ou minuscula RegExp captura texto de forma lógica
                    var expressao = new RegExp(this.value, "i");
                    //se o teste retornar false aplica a classe invisivel
                    if (!expressao.test(nome)){
                        paciente.classList.add("invisivel");
                    //se retorna true retura a classe invisivel
                    } else {
                        paciente.classList.remove("invisivel");
                } 
            }
        } else {
            //percorre a tabela e remove a classe invisivel caso nada seja pesquisado.
            for (var i = 0; i < pacientes.length; i++ ){
                var paciente = pacientes [i];
                paciente.classList.remove("invisivel");
        }
    }
});