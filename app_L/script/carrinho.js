var atualizaDados = function(){
    var carrinhos = $(".carrinho");
    carrinhos.each(function(){
        var carrinho = $(this);

        var itens = carrinho.find(".item-total:visible");
        var valorTotal = 0;
        for (var i = 0; i < itens.length; i++) {
          valorTotal += Number($(itens[i]).text());
        };

        carrinho.find(".valor-total").text(valorTotal);
        carrinho.find(".quantidade-itens").text(itens.length);
    });
};

var aposInicializado = function () {
    atualizaDados();
    $(".item-remove").click(removeItem);
    $(".undo").click(undo);
    $(".carrinho").each(function(){
        $(this).find("tr:nth-child(3n), tr:last").each(function(){
            umaPropaganda().insertAfter($(this));
        });
    });
    $(".alterna-propaganda").on("click",alternaPropaganda);
    $(".carrinho tbody tr").hover(daDestaque,tiraDestaque);
};

var removeItem = function (event) {
    event.preventDefault();
    var self = $(this);
    self.closest("tr").hide();
    atualizaDados();
   };

var undo = function(){
            var carrinho = $(this).closest(".carrinho");
            carrinho.find("tr:visible").removeClass("recuperado");
            var trs = carrinho.find("tr:hidden");
            trs.addClass("recuperado");
            trs.show();
            atualizaDados();
    };

 var umaPropaganda = function(){
     var propagandas = ["O que acha de comprar uma motocicleta?",
                "O que acha de comprar uma lancha?",
                "O que acha de comprar uma bicicleta?",
                "O que acha de comprar uma carro?"
                ];
      var posicao = Math.floor(propagandas.length *Math.random());
      var texto = propagandas[posicao];
      var tr =$("<tr>").addClass("propaganda").append($("<td>"));
      tr.find("td").attr("colspan", 6).text(texto);
      return tr;
    };

  var daDestaque = function(){
      $(this).find(".item-remove").fadeIn();
      $(this).addClass("hovering");
    };

   var tiraDestaque = function(){
      $(this).find(".item-remove").fadeOut();
      $(this).removeClass("hovering");
    };

  var alternaPropaganda = function(event){
      event.preventDefault();
      $(".propaganda").fadeToggle();
      $(".alterna-propaganda").toggle();
  };

$(aposInicializado);
