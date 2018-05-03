import { Veiculo } from "./veiculo";
import { DAO } from './daoInterface';

export class Moto extends Veiculo {
  private cilindradas : number;
  constructor (cilindradas : number, modelo : string, vel = 0) {
    super(modelo, vel);
    this.cilindradas = cilindradas;
  }

  inserir(data : Moto) : boolean {
    return true;
  }

  atualizar(data : Moto) : boolean {
    return true;
  }

  deletar(id : string) : boolean {
    return true;
  }

  selecionar(id : string) : Moto {
    return this;
  }

  selecionarTodos() : Array<Moto> {
    return [];
  }
}