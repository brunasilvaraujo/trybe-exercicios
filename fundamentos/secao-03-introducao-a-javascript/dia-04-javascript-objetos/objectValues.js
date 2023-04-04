//como faríamos para retornar os valores de cada propriedade do objeto coolestTvShow em um array?
let coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

for (let key in coolestTvShow) {
  console.log(coolestTvShow[key]);
}

// BoJack Horseman
// adult animation
// Raphael Bob-Waksberg
// Princess Carolyn
// Princess Carolyn always lands on her feet.
// 6

// Utilizando o .values
console.log(Object.values(coolestTvShow));

// [
//   'BoJack Horseman',
//   'adult animation',
//   'Raphael Bob-Waksberg',
//   'Princess Carolyn',
//   'Princess Carolyn always lands on her feet.'
//    6
// ]

//um exemplo em que foram implementadas, de modos diferentes, duas funções que retornam a mesma lista de valores. Perceba como fica muito mais fácil obter os valores de um objeto com o uso do Object.values

let student = {
  html: "Muito Bom",
  css: "Bom",
  javascript: "Ótimo",
  softskill: "Ótimo",
};

function listSkillsValuesWithFor(student) {
  let skills = [];
  for (skill in student) {
    skills.push(student[skill]);
  }

  return skills;
}

function listSkillsValuesWithValues(student) {
  return Object.values(student);
}

// Sem Object.values
console.log(listSkillsValuesWithFor(student));

// Com Object.values
console.log(listSkillsValuesWithValues(student));

