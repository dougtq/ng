import { Pessoa } from './pessoa';
import { Carro } from './carro';
import { Concessionaria } from './concessionaria';


const eclipse = new Carro('Eclipse GT', 2);
const TT = new Carro('Audi TT', 2);
const Fusion = new Carro ('Ford Fusion', 4);
const Opel = new Concessionaria('Rafael Tramonte', []);
const Eu = new Pessoa('Douglas Alves', Fusion);

Opel.addCarros([eclipse, TT, Fusion]);
Opel.addCarros([eclipse, TT, Fusion]);

const carrosOpel : Array<Carro> = Opel.listaCarros()
if (carrosOpel.includes(Fusion, 0)) {
  Eu.comprarCarro(Fusion);
}
console.log(Opel.fornecerHorarioDeFuncionamento());
console.log(Eu);