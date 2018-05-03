import { Carro } from './carro';

export class Pessoa {
  private nome : string;
  private carroPreferido?: Carro;
  private carro? : Carro;

  constructor (nome : string, carroPreferido?: Carro, carro?: Carro) {
    this.nome = nome;
    this.carroPreferido = carroPreferido;
    this.carro = carro;
  }

  public dizerNome () : string {
    return this.nome;
  }

  public dizerCarroPreferido () : Carro|undefined {
    return this.carroPreferido;
  }

  public comprarCarro (carro : Carro): Carro {
    this.carro = carro;

    return this.carro;
  }

  public dizerCarroQueTem () : Carro | undefined {
    return this.carro;
  }
}