export class Coracao {
  constructor(
    public cheio = true,
    protected urlCheio = '/assets/coracao_cheio.png',
    protected urlVazio = '/assets/coracao_vazio.png'
  ) {}

  public existeCoracao() {
    if (this.cheio) {
      return this.urlCheio;
    } else {
      return this.urlVazio;
    }
  }
}
