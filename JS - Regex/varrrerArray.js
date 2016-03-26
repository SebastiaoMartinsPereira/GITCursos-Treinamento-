var varrerArray = function(array,comportamento){

	for(var posicaoAtual = 0; posicaoAtual <= array.length - 1; posicaoAtual++){
        
         var pacienteAtual = array[posicaoAtual];

		 comportamento(pacienteAtual);
	}	
}