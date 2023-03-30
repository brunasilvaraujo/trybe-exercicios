//1-Percorra o array imprimindo todos os valores contidos nele com a função console.log().

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 0; index < numbers.length; index += 1) {
//     console.log(numbers[index]);
//   }

//2-Some todos os valores contidos no array e imprima o resultado.

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let resultado = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     resultado += numbers[index];
    
// }

// console.log(resultado);

//3-Calcule e imprima a média aritmética dos valores contidos no array.

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sum = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//   sum += numbers[index];
// }

// let average = sum / numbers.length;

// console.log(average);

//4-Com base no código que acabou de gerar, faça com que: caso o valor final seja maior que 20, imprima a mensagem “Valor maior que 20”; e, caso não seja maior que 20, imprima a mensagem “Valor menor ou igual a 20”.

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let result = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//   result += numbers[index];
// }

// result = result / numbers.length;

// if (result > 20) {
//   console.log('valor maior que 20');
// } else {
//   console.log('valor menor ou igual a 20');
// }

//5-Utilizando for, descubra o maior valor contido no array e imprima-o.

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// O valor da variável higherNumber poderia ser qualquer um, desde que fosse menor que o menor número do array numbers. Caso o valor 101 fosse atribuído à variável, o algoritmo estaria errado, pois ele nunca acharia um número maior que 101 no array. Para resolver esse problema, inicie a variável com o primeiro valor do array. Assim, é possível pular a posição 0 e iniciar com index = 1.

// let higherNumber = numbers[0];

// for (let index = 1; index < numbers.length; index += 1) {
//   if (numbers[index] > higherNumber) {
//     higherNumber = numbers[index];
//   }
// }

// console.log(higherNumber);

//6-Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.

//7- Utilizando for, descubra o menor valor contido no array e imprima-o.

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// O valor da variável smallestNumber poderia ser qualquer um, desde que fosse maior que o maior número do array numbers. Caso o valor 1 fosse atribuído à variável, o algoritmo estaria errado, pois ele nunca acharia um número menor que 1 no array. Para resolver esse problema, inicie a variável com o primeiro valor do array. Assim, é possível pular a posição 0 e iniciar com index = 1.

// let smallestNumber = numbers[0];

// for (let index = 1; index < numbers.length; index += 1) {
//   if (numbers[index] < smallestNumber) {
//     smallestNumber = numbers[index];
//   }
// }

// console.log(smallestNumber);

//8-Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.

// let numbers = [];

// for (let index = 1; index <= 25; index += 1) {
//   numbers.push(index);
// }

// console.log(numbers);

//9-Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

// for (let index = 0; index < numbers.length; index += 1) {
//     console.log(numbers[index] / 2);
//   };

//O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero.

// let fatorial = 1;

// for (let index = 10; index > 0; index -= 1) {
//   fatorial *= index;
// }

// console.log(fatorial);

//10-Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra, como a palavra “banana” para “ananab”.

// let word = 'tryber';
// let reverseWord = '';

// for (let index = 0; index < word.length; index += 1) {
//   reverseWord += word[word.length - 1 - index];
// }

// console.log(reverseWord);

//OU

// let word = 'tryber';
// let reverseWord = '';

// reverseWord = word.split('').reverse().join('');

// console.log(reverseWord);

//Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.

// let array = ['java', 'javascript', 'python', 'html', 'css'];

// let biggestWord = array[0];
// let smallestWord = array[0];

// for (let index = 1; index < array.length; index += 1) {
//   if (array[index].length > biggestWord.length) {
//     biggestWord = array[index];
//   }
// }

// for (let index = 1; index < array.length; index += 1) {
//   if (array[index].length < smallestWord.length) {
//     smallestWord = array[index];
//   }
// }

// console.log(biggestWord);
// console.log(smallestWord);

//Um número primo é um número inteiro maior que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.

// let biggestPrimeNumber = 0;

// for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
//   let isPrime = true;
//   for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
//     if (currentNumber % currentDivisor === 0) {
//       isPrime = false;
//     }
//   }
//   if (isPrime) {
//     biggestPrimeNumber = currentNumber;
//     break; // O break finaliza a execução do laço For
//   }
// }

// console.log(biggestPrimeNumber);

//