class Negociacao{

  constructor(data,quantidade,valor){
    this._data = new Date(data);
    this._quantidade = quantidade;
    this._valor = valor;
    this._volume = this._quantidade * this._valor;
    this.freeze;
  };


  get data(){
    return new Date(this._data);
  };

  get quantidade(){
    return this._volume;
  };

  get valor(){
    return this.valor;
  };

  get volume(){
    return this.quantidade * this.valor;
  };
};