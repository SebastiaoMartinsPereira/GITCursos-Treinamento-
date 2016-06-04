
var campos = [
  document.querySelector("#data"),
  document.querySelector("#quantidade"),
  document.querySelector("#valor"),
];

var tbody = document.querySelector("table tbody");

var form = document.querySelector(".form");
form.addEventListener('submit',function(event){
  event.preventDefault();
  addLinha();
});

function addLinha(){
  //cria um novo elemento
  var tr = document.createElement('tr');
  //loop no array
  campos.forEach(function(campo){
    //criar um elemento d e passa o valor do campo no loop para ele.
     var td = document.createElement('td');
     td.textContent = campo.value;

     //adiciona o td no tr recém criado;
     tr.appendChild(td);
  });

  //criar um td para armazenar o valor do volume e adiciona a tr
  var tdVolume = document.createElement('td');
  tdVolume.textContent =  campos[1].value * campos[2].value;
  tr.appendChild(tdVolume);

  //inclui o novo tr ao tbody
  tbody.appendChild(tr);

  campos[0].focus();

  var data = new Date();
  campos[0].value = data.toLocaleString('pt-BR',{ year: 'numeric'  , month: 'numeric',day: 'numeric'  });
  campos[1].value = 1;
  campos[2].value = 0;
};
