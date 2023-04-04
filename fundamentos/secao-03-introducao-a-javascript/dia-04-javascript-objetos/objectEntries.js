//  Object.entries, ele retorna um array de arrays, no qual cada conjunto tem a chave e o valor do objeto

let coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

console.log(Object.entries(coolestTvShow));

// [
//   [ 'name', 'BoJack Horseman' ],
//   [ 'genre', 'adult animation' ],
//   [ 'createdBy', 'Raphael Bob-Waksberg' ],
//   [ 'favoriteCharacter', 'Princess Carolyn' ],
//   [ 'quote', 'Princess Carolyn always lands on her feet.' ],
//   [ 'seasons', 6 ]
// ]

// Exemplo

let countries = {
  franca: "Paris",
  brasil: "Brasília",
  espanha: "Madrid",
  portugal: "Lisboa",
};
let pairKeyValue = Object.entries(countries);
console.log(pairKeyValue);

for (index in pairKeyValue) {
  console.log("--------");
  console.log("País:", pairKeyValue[index][0]);
  console.log("Capital:", pairKeyValue[index][1]);
}
