
var $newCard = document.querySelector(".newCard");
var $newCardContent = $newCard.querySelector(".newCard-content");
var $newCardAction = $newCard.querySelector(".newCard-action");


$newCardContent.addEventListener('input',function(){
	var $error = document.querySelector(".error");
	if($error != null)
		$error.remove();
});


$newCard.addEventListener('submit',function(event){

	event.preventDefault();

   if($newCardContent.value === ""){
		
		if(document.querySelector(".error")===null){
			var $error = document.createElement('span');
			$error.classList.add("error");
			$error.classList.add('color','#ffffff');
		    $error.textContent = "Por favor preencher o campo acima!";
		    $newCard.insertBefore($error,$newCardAction);
		};
    	
    }else{
		 var $wrapCard = document.querySelector(".wrap-card");
		 var $card = document.querySelector(".card");
		 var $copyCard = $card.cloneNode(true);

		 $copyCard.querySelector(".card_content").textContent = $newCardContent.value;

		 $wrapCard.insertBefore($copyCard,$card);		
	};


});


Rodrigo Brana  aulas 

laravel - 
codegniter - 