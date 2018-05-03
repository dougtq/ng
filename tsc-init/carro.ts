import { Veiculo } from "./veiculo";

export class Carro extends Veiculo {
  private numeroDePortas : number;
  constructor (modelo : string, portas : number, vel = 0) {
    super(modelo, vel);
    this.numeroDePortas = portas;
  }
}