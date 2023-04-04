// A função recebe um número qualquer de parâmetros. Todos são agregados como valores para adicionar ao objeto-destino.

// Object.assign(destino, objeto1);
// Object.assign(destino, objeto1, objeto2);
// Object.assign(destino, objeto1, objeto2, objeto3, objeto4);

//a função Object.assign recebe pelo menos dois parâmetros, de modo que o primeiro sempre será o objeto-destino, e os parâmetros restantes serão os objetos cujas propriedades serão adicionados a esse objeto-destino.

// let person = {
//   name: "Alberto",
//   lastName: "Gomes",
//   age: 20,
// };

// let info = {
//   age: 23,
//   job: "engenheiro",
// };

// let family = {
//   children: ["Maria", "João"],
//   wife: "Ana",
// };

// Object.assign(person, info, family);
// console.log(person);

/* Output
    { name: 'Alberto',
    lastName: 'Gomes',
    age: 23,
    job: 'engenheiro',
    children: [ 'Maria', 'João' ],
    wife: 'Ana'
    } */

//o método Object.assign foi usado para adicionar as propriedades de info e de family ao objeto person. Observe que a chave age aparece tanto em person quanto em info e é sobrescrita pelo valor contido em info. Isso acontece quando há propriedades repetidas entre o objeto-destino e os objetos passados por parâmetro, de modo que a propriedade do objeto-destino sempre utilizará o último valor disponível.

let person = {
  name: "Roberto",
};

let lastName = {
  lastName: "Silva",
};

let clone = Object.assign(person, lastName);

console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
console.log(person); // { name: 'Roberto', lastName: 'Silva' }

//Nesse exemplo, o clone é exatamente igual ao objeto person e, se você mudar qualquer propriedade nele, observará que o objeto person também será modificado. Isso ocorre devido ao fato de que o objeto retornado pelo método Object.assign é o próprio objeto-destino, que foi alterado ao adicionar as novas propriedades.

clone.name = "Maria";

console.log("Mudando a propriedade name através do objeto clone");
console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
console.log(person); // Output: { name: 'Maria', lastName: 'Silva' }
console.log("--------------");

person.lastName = "Ferreira";

console.log("Mudando a propriedade lastName através do objeto person");
console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
console.log(person); // Output: { name: 'Maria', lastName: 'Ferreira' }

//  a seguir, é apresentada outra maneira de copiar um objeto.

// let obj = { value1: 10, value2: 11 };
// let cloneObj = obj;

// Se você modificar o cloneObj, verá que novamente tem-se o mesmo resultado anterior, de modo que o obj também é alterado. Levando esses fatos em consideração, como é possível mudar os dados do novo objeto criado sem modificar o objeto inicial?

//Para resolver esse problema, pode-se passar como primeiro parâmetro do Object.assign um objeto vazio {} e armazenar seu retorno em uma nova variável. Veja como fazer isso no exemplo a seguir.

let person = {
  name: "Roberto",
};

let lastName = {
  lastName: "Silva",
};

let newPerson = Object.assign({}, person, lastName);
newPerson.name = "Gilberto";
console.log(newPerson);
console.log(person);

