 
/* o cifrão indica que está sendo guardado um elemento do html
 var $cards = document.querySelectorAll('.card-options');

 varrerArray($cards,function(item){
 	 item.addEventListener('click',function(){
 	 	this.parentNode.parentNode.parentNode.dataset.color = this.dataset.color;
        this.classList.add("isActive"); 
 	 	/*Outra forma de fazer a mesma ação*/
 	 	//this.parentNode.parentNode.parentNode.setAttribute("data-color",this.getAttribute("data-color"));	}); });  */
/*recupero o elemento referente aos cards*/
var $cards = document.querySelectorAll(".card");
/*Recupero todos os elementos card options*/
var $cardoptions = document.querySelectorAll(".card-options");
varrerArray($cards,function(card){
	card.addEventListener('click',function(event){
        /*indica o elemento que foi clicado*/
		var $this = event.target;
		/*referencia ao elemento car do loop for*/
		var $card = this;
		/*conteudo da tag p do card selecionardo*/
		var $cardContent = $card.querySelector('.card_content');
        /*if($this.classList.contains('card-options')){*/
		if($this.dataset.color){
			/*defino a cor para o card*/
			$card.dataset.color = $this.dataset.color;
/*			varrerArray($cardoptions,function(cardoptions,$this){
				console.log($this)
			});*/
           /* get todos os card-clors do card clicado*/
            var $thiscardoptions = this.querySelectorAll('.card-options');
            /*desmarca o cor anteriormente selecionada*/
			varrerArray($thiscardoptions,function(cardoptions){
				cardoptions.classList.remove('isActive');
			});
			/*marca a nova cor selecionada*/
			$this.classList.add('isActive');
		}else if($this.classList.contains('card_delete')){
			$card.remove();
		}else if($this.classList.contains('card_editar')){

			/*verifica se o estado é de edição ou não e trata o que deve acontecer*/
			if($cardContent.getAttribute('contenteditable') == 'false'){
				$cardContent.setAttribute('contenteditable','true');
				$cardContent.focus();
				$this.classList.add('isActive');
			}else{
				$cardContent.setAttribute('contenteditable','false');
				$cardContent.blur();
				$this.classList.remove('isActive');
			};
		}
	});

	card.addEventListener('mouseenter',function(){
		
	});
});




