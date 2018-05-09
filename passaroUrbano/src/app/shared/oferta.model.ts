export interface Oferta {
  id: number;
  categoria: string;
  titulo: string;
  descricao_oferta: string;
  anunciante: string;
  valor: string;
  destaque: boolean;
  imagens: Array<Img>;
}

interface Img {
  url: string;
}
