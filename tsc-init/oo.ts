class Carro {
  private modelo : string;
  private numeroDePortas : number;
  private velocidade : number = 0;

  constructor (modelo : string, portas : number, vel = 0) {
    this.modelo = modelo;
    this.numeroDePortas = portas;
    this.velocidade = vel;
  }

  public acelerar () : void {
    this.velocidade = this.velocidade + 10;
  }
  
  public parar () : void {
    this.velocidade = 0;
  }

  public velocidadeAtual () : number {
    return this.velocidade;
  }
}

class Concessionaria {
  private listaDeCarros : Carro[];
  private endereco : string;

  constructor (endereco : string, listaDeCarros : Carro[]) {
    this.endereco = endereco;
    this.listaDeCarros = listaDeCarros;
  }

  public fornecerEndereco (endereco : string) : string {
    return this.endereco;
  }

  public addCarro (veiculo : Carro) : Carro[] {
    this.listaDeCarros.push(veiculo);
    return this.listaDeCarros;
  }

}

class Pessoa {
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

const eclipse = new Carro('Eclipse GT', 2)
const TT = new Carro('Audi TT', 2)
const Opel = new Concessionaria('Rafael Tramonte', []);

TT.acelerar();

Opel.addCarro(eclipse);
Opel.addCarro(TT);
console.log(Opel);