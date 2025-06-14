class Luta {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    switch (this.tipo) {
      case "Ninja":
        ataque = "Shuriken";
        break;
      case "Mago":
        ataque = "Magia";
        break;
      case "Guerreiro":
        ataque = "Espada";
        break;
      case "Monge":
        ataque = "Artes Marciais";
        break;
      default:
        ataque = "um ataque desconhecido";
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}
// Exemplo de uso
const personagem1 = new Luta("Raiden", 35, "Ninja");
const personagem2 = new Luta("Merlin", 150, "Mago");

personagem1.atacar(); 
personagem2.atacar();