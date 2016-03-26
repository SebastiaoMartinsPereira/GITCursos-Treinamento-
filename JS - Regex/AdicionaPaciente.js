
	var botao = document.querySelector("#adicionar-paciente");
    
    botao.addEventListener("click",function(event){

    	var campos = [document.querySelector("#campo-nome"),document.querySelector("#campo-peso"),document.querySelector("#campo-altura")];

    	if(campos[0].value != "" && campos[1].value != "" && campos[2].value != "" ){
			
			var newRowTable = "<tr class='paciente'>"+
				"<td class='info-nome'>" + campos[0].value + "</td>"+
				"<td class='info-peso'>" + campos[1].value + "</td>"+ 
				"<td class='info-altura'>" + campos[2].value + "</td>"+
				"<td class='info-imc'></td>"+
			    "</tr> ";

			var tabela = document.querySelector("tbody");

			tabela.innerHTML = tabela.innerHTML + newRowTable;

			selecionaColunas();

    	}else{
    		//alert("Todos os campos do formulário devem ser preenchidos!");
    	}
    });






