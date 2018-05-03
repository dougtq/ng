import { IConcessionaria } from './Iconcessionaria';
import { Carro } from './carro';

export class Concessionaria implements IConcessionaria {
  private listaDeCarros : Carro[] = [];
  private endereco : string;

  constructor (endereco : string, listaDeCarros : Carro[] = []) {
    this.endereco = endereco;
    this.listaDeCarros = listaDeCarros;
  }

  public fornecerEndereco (endereco : string) : string {
    return this.endereco;
  }

  public fornecerHorarioDeFuncionamento () : string {
    return '10:00 às 18:00'
  }

  public listaCarros () : Carro[] {
    return this.listaDeCarros;
  }

  public addCarros (veiculos : Carro[]) : Carro[] {
    veiculos.map((carro : Carro, i : number) => {
      if (!this.listaDeCarros.includes(carro)) {
        this.listaDeCarros.push(carro)  
      };
    });
    return this.listaDeCarros;
  }

}
