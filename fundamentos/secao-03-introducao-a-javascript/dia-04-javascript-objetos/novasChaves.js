// Para adicionar uma nova chave ao OBJETO
// let customer1 = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };
  
// customer1.lastName = 'Faria';
  
//   let customer2 = {
//     firstName: 'Maria',
//     age: 23,
//     job: 'Medic',
//   };
  
// customer2['lastName'] = 'Silva';

// // para adicionar várias chaves ao mesmo tempo no objeto

// let customer = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };
  
//   let newKey = 'lastName';
//   let lastName = 'Ferreira';
  
//   function addProperty(object, key, value) {
//     object[key] = value;
// };
  
// addProperty(customer, newKey, lastName);
// console.log(customer);

// // Toda vez que precisar criar uma chave nova e os valores é só chamar a funçaõ novamente

// newKey = 'fullName';
// let fullName = customer.firstName + ' ' + customer.lastName;

// addProperty(customer, newKey, fullName);
// console.log(customer);
  
//Para fixar

let student = {};

let newKey = 'nome';
let nome = 'Ferreira';
  
function addProperty(object, key, value) {
    object[key] = value;
};
  
addProperty(student, newKey, nome);

newKey = 'eMail';
let eMail = 'student@eMail.com';

addProperty(student, newKey, eMail);

newKey = 'telefone';
let telefone = '21-99999-9999';

addProperty(student, newKey, telefone);
console.log(student);