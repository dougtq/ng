import { Veiculo } from "./veiculo";

export class Moto extends Veiculo {
  private cilindradas : number;
  constructor (cilindradas : number, modelo : string, vel = 0) {
    super(modelo, vel);
    this.cilindradas = cilindradas;
  }
}