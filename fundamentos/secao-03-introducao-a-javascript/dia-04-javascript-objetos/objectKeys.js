let coolestTvShow = {
    name: 'BoJack Horseman',
    genre: 'adult animation',
    author: 'Raphael Bob-Waksberg',
    favoriteCharacter: 'Princess Carolyn',
    quote: 'Princess Carolyn always lands on her feet.',
    seasons: 6,
  };
  
for (let key in coolestTvShow) {
    console.log(key);
}
  
  // name
  // genre
  // author
  // favoriteCharacter
  // quote
  // seasons

// Método object.keys
console.log(Object.keys(coolestTvShow));

  // [ 'name', 'genre', 'createdBy', 'favoriteCharacter', 'quote', 'seasons' ] 

//cada habilidade deve ser exibida no formato “Nome da habilidade, Nível: valor da chave referente à habilidade”. Após desenvolver a função, observe a sugestão de resposta a seguir e compare-a com sua solução.
  let student1 = {
    html: 'Muito Bom',
    css: 'Bom',
    javascript: 'Ótimo',
    softskills: 'Ótimo',
  };
  
  let student2 = {
    html: 'Bom',
    css: 'Ótimo',
    javascript: 'Ruim',
    softskills: 'Ótimo',
    git: 'Bom', // chave adicionada
  };
  
  function listSkills(student) {
    let arrayOfSkills = Object.keys(student);
    for (let index in arrayOfSkills) {
      console.log(arrayOfSkills[index] + ', Nível: ' + student[arrayOfSkills[index]]);
    }
  };
  
  console.log('Estudante 1');
  listSkills(student1);
  
  console.log('Estudante 2');
listSkills(student2);
  
