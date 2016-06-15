class NegociacaoController{

  constructor(){
      let $ = document.querySelector.bind(document);
      this._inputData = $('#data');
      this._inputQuantidade = $('#quantidade');
      this._inputValor = $('#valor');
      this._listNegociacoes = new ListNegociacoes();
      this._negociacoesView = new NegociacoesView(document.querySelector("#negociacoesView"));

      this._negociacoesView.update(this._listNegociacoes);
  }

  adiciona(event){
        event.preventDefault();

        this._listNegociacoes.adiciona(this._criarNegociacao());
        this._negociacoesView.update(this._listNegociacoes);
        this._limpaFormulario();

        console.log(this._listNegociacoes.negociacoes);
  };

   _limpaFormulario() {
        this._inputData.value = '';
        this._inputData.focus();
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0

    };

    _criarNegociacao(){
         return new Negociacao(
            DataHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    };
}
