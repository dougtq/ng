export class Dao<T> implements Dao<T> {
  inserir(data : T) : boolean {
    return true;
  }

  atualizar(data : T) : boolean {
    return true;
  }

  deletar(id : string) : boolean {
    return true;
  }

  selecionar(id : string) : T {
    return Object();
  }

  selecionarTodos() : Array<T> {
    return [];
  }
}