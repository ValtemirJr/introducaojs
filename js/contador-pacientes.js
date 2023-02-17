function atualizaQuantidadePacientes(){
    var pacientes = document.querySelectorAll(".paciente");
    var quantidadePacientes = pacientes.length;
    document.querySelector(".contador-pacientes span").innerHTML = quantidadePacientes;
}

setInterval(atualizaQuantidadePacientes, 100);



