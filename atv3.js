const jogadores = [
  { "nome": "Levi", idade: 17 },
  { "nome": "João", idade: 20 },
  {"nome": "Marcos", idade: 16},
  {"nome": "Caio", idade: 25},
  {"nome": "Matheus", idade: 21}
];

const maioresde18 = jogadores.filter(jogador => jogador.idade >= 18);

console.log(maioresde18);