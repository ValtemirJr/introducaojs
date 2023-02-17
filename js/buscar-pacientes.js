var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();
    
    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");
    
    xhr.addEventListener("load", function(){
        if(xhr.status == 200){
            document.querySelector("#erro-ajax").classList.add("esconde-paciente");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);
            });
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            document.querySelector("#erro-ajax").classList.remove("esconde-paciente");
        }
    })

    xhr.send();
    
});