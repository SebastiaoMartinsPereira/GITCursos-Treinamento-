var varrerArray = function(array,comportamento){

	for(var posicaoAtual = 0; posicaoAtual <= array.length - 1; posicaoAtual++){
        
         var item = array[posicaoAtual];

		 comportamento(item);
	}	
}


varrerArray = function(array,comportamento){

	for(var posicaoAtual = 0; posicaoAtual <= array.length - 1; posicaoAtual++){
        
         var item = array[posicaoAtual];

		 comportamento(item,item.parentNode.parentNode.parentNode);
	}	
}
