export class Coracao {
  constructor(
    public cheio = true,
    public urlCheio = '/assets/coracao_cheio.png',
    public urlVazio = '/assets/coracao_vazio.png'
  ) {}

  public existeCoracao() {
    if (this.cheio) {
      return this.urlCheio;
    } else {
      return this.urlVazio;
    }
  }
}
