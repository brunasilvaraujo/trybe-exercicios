let lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

let lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

let lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

// let newTurno = "turno";
// let turno = "noite";

// function addProperty(object, key, value) {
//   object[key] = value;
// }

// // addProperty(lesson2, newTurno, turno);
// // console.log(lesson2);
//Crie uma função para retornar as keys de um objeto em um array. Essa função deve receber um objeto como parâmetro
function lessonList(lessons) {
  return Object.keys(lessons);
}
console.log(lessonList(lesson1));

//Crie uma função para mostrar o tamanho de um objeto. Essa função deve receber um objeto como parâmetro

function lessonList(lessons) {
  return Object.keys(lessons).length;
}
console.log(lessonList(lesson1));

//Crie uma função para retornar os valores de um objeto em um array. Essa função deve receber um objeto como parâmetro.

function lessonList(lessons) {
  return Object.values(lessons);
}
console.log(lessonList(lesson1));

//Crie um objeto de nome allLessons, que deve agrupar todas as aulas por meio do Object.assign

let allLessons = Object.assign(
  {},
  {
    lesson1: lesson1,
    lesson2: lesson2,
    lesson3: lesson3,
  }
);
// O método "Object.assign()" recebe dois parâmetros: um objeto e o que se quer atribuir à ele. Se no primeiro parâmetro for passado um objeto vazio, ele criará um objeto novo com as caraterísticas do segundo parâmetro.

console.log(allLessons);

//Crie uma função que retorne o número total de estudantes em todas as aulas.
//Primeiro passo: Crie a função getNumberOfStudents, que recebe um objeto por parâmetro

function getNumberOfStudents(obj) {
  let total = 0;

  let keys = Object.keys(obj);

  for (index in keys) {
    total += obj[keys[index]].numeroEstudantes; // incremente a variável total a cada iteração
  }
  return total; // a função retorna o total de estudantes após as iterações do "for/in"
}
console.log(getNumberOfStudents(allLessons));

//Crie uma função que verifique se o par chave/valor existe na função. Essa função deve possuir três parâmetros:o objeto, o nome da chave e o valor dela.

function verifyPair(obj, key, value) {
  let entries = Object.entries(obj);
  let isEqual = false;
  for (let index in entries) {
    if (entries[index][0] === key && entries[index][1] === value)
      isEqual = true;
  }
  return isEqual;
}
console.log(verifyPair(lesson2, "professor", "Carlos"));
