var montarPaciente = function(pacienteTr){
	
    var tdNome = pacienteTr.getElementsByClassName("info-nome")[0]; 
    var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0]; 
    var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];
    return paciente = { nome : tdNome.textContent, peso : tdPeso.textContent, altura : tdAltura.textContent};
}