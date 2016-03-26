

//funcão para marcar um linha na tabela
var selecionaColunas = function(){

	var colunas =document.getElementsByTagName("tr");
	//evento relacionados a linhas  de tabelas;
	varrerArray(colunas,function(colunaAtual){

	    colunaAtual.addEventListener("mousedown",function(){

	        if( this.getAttribute("bgcolor") == "DeepSkyBlue")
	        {
	            this.setAttribute("bgcolor","white");   
	        }else{
	            this.setAttribute("bgcolor","DeepSkyBlue");   
	        }
	        
	    })
	});
}

//funcão para recuperar as colunnas selecionadas
var recuperaColunasSelecionadas = function(){

    var colunas =document.getElementsByTagName("tr");
    var colunasSelecionadas = new Array();
    varrerArray(colunas,function(coluna){
        if(coluna.getAttribute("bgColor")=="DeepSkyBlue")
        {
            colunasSelecionadas.push(coluna);
        }
    });
    return colunasSelecionadas;
};

//funcão para desmarcar colunas selecionadas
var desmarcarColunas = function(colunasAdesmarcar){

    varrerArray(colunasAdesmarcar,function(coluna){
        if(coluna.getAttribute("bgColor")=="DeepSkyBlue")
        {
           coluna.setAttribute("bgcolor","white");
        }
    });
};

selecionaColunas();

// colunaAtual.addEventListener("mouseover",function(){
//     this.setAttribute("bgcolor","LightBlue");
// })

// colunaAtual.addEventListener("mouseout",function(){
//     this.setAttribute("bgcolor","white");
// })