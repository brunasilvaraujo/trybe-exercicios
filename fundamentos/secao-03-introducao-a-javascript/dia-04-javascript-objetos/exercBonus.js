let basket = [
  "Melancia",
  "Abacate",
  "Melancia",
  "Melancia",
  "Uva",
  "Laranja",
  "Jaca",
  "Pera",
  "Melancia",
  "Uva",
  "Laranja",
  "Melancia",
  "Banana",
  "Uva",
  "Pera",
  "Abacate",
  "Laranja",
  "Abacate",
  "Banana",
  "Melancia",
  "Laranja",
  "Laranja",
  "Jaca",
  "Uva",
  "Banana",
  "Uva",
  "Laranja",
  "Pera",
  "Melancia",
  "Uva",
  "Jaca",
  "Banana",
  "Pera",
  "Abacate",
  "Melancia",
  "Melancia",
  "Laranja",
  "Pera",
  "Banana",
  "Jaca",
  "Laranja",
  "Melancia",
  "Abacate",
  "Abacate",
  "Pera",
  "Melancia",
  "Banana",
  "Banana",
  "Abacate",
  "Uva",
  "Laranja",
  "Banana",
  "Abacate",
  "Uva",
  "Uva",
  "Abacate",
  "Abacate",
  "Melancia",
  "Uva",
  "Jaca",
  "Uva",
  "Banana",
  "Abacate",
  "Banana",
  "Uva",
  "Banana",
  "Laranja",
  "Laranja",
  "Jaca",
  "Jaca",
  "Abacate",
  "Jaca",
  "Laranja",
  "Melancia",
  "Pera",
  "Jaca",
  "Melancia",
  "Uva",
  "Abacate",
  "Jaca",
  "Jaca",
  "Abacate",
  "Uva",
  "Laranja",
  "Pera",
  "Melancia",
  "Jaca",
  "Pera",
  "Laranja",
  "Jaca",
  "Pera",
  "Melancia",
  "Jaca",
  "Banana",
  "Laranja",
  "Jaca",
  "Banana",
  "Pera",
  "Abacate",
  "Uva",
];

let repeticao = {};
// let resultado = 0;
for (let index = 0; index < basket.length; index += 1) {
  let element = basket[index];
  if (repeticao[element] === undefined) {
    repeticao[element] = 1;
  } else {
    repeticao[element] += 1;
  }
  // element += 1;
}
console.log(repeticao);

//  Bônus – Organização de lições

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

let allLessons = Object.assign(
    {},
    {
      lesson1: lesson1,
      lesson2: lesson2,
      lesson3: lesson3,
    }
  );

function totalDeAlunos(objeto) {
    let total = 0;
    let keys = Object.keys(objeto);
    for (let index in keys) {
        if (objeto[keys[index]].materia === 'Matemática') {
            total += objeto[keys[index]].numeroEstudantes;
        }
    }
    return total;
}

console.log(totalDeAlunos(allLessons));
