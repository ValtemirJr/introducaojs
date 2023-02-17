var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    var pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0){
        pacientes.forEach((paciente) => {
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value,"i");
            if(!expressao.test(nome)){
                paciente.classList.add("esconde-paciente");
            }
            else{
                paciente.classList.remove("esconde-paciente");
            }
        });
        }
    else{
        pacientes.forEach(function(paciente){
            paciente.classList.remove("esconde-paciente");
        });
    }
});