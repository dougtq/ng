export interface DAO<T> {
  inserir (data : T) : boolean;
  atualizar (data : T) : boolean;
  deletar (id : string) : boolean;
  selecionar (id : string) : T;
  selecionarTodos () : Array<T>;
}