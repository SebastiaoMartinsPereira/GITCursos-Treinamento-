
//recuperar o botão de calcular e implata os eventos nescessários
var btnCalcular = document.getElementById("calcula-imcs");

btnCalcular.addEventListener("click",function(){
    var colunasSelecionadas = recuperaColunasSelecionadas();
    //var trsPacientes = document.getElementsByClassName("paciente");
    //funcão de loop no array de pacientes;
    varrerArray(colunasSelecionadas,function(pacienteSelecionado){
        //devolve o objeto paciente
        var paciente = montarPaciente(pacienteSelecionado);
        if(paciente.altura != 0){
            var imc = paciente.peso / (paciente.altura * paciente.altura);
            var tdImc = pacienteSelecionado.getElementsByClassName("info-imc")[0]; 
            tdImc.textContent = imc;
            console.log("Paciente :" + paciente.nome);
            console.log("IMC :" +  imc); 
        }else{

            console("Não posso dividir por zero!");
        }
    });
    
    desmarcarColunas(colunasSelecionadas);
});


