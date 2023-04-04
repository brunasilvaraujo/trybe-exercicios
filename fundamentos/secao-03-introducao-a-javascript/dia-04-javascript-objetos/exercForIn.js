// 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo o nome dela. Para isso, utilize a sintaxe meuObjeto.chave.

let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim",
};

console.log("Bem-vinda, " + info.personagem);

//2 - Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Para isso, use a sintaxe meuObjeto['chave'] = valor.

// info["recorrente"] = "Sim";
// console.log(info);

// 3 - Faça um for/in que mostre todas as chaves do objeto

for (const key in info) {
  console.log(key);
}

//4 - Faça um novo for/in, mas agora mostre todos os valores das propriedades do objeto

for (let value in info) {
  console.log(info[value]);
}

//5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: “Tio Patinhas”, “Christmas on Bear Mountain, Dell’s Four Color Comics #178”, “O último MacPatinhas”, “Sim”. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves.

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

// console.log(info.personagem + ' e ' + info2.personagem);
// console.log(info.origem + ' e ' + info2.origem);
// console.log(info.nota + ' e ' + info2.nota);

for (let key in info) {
  if (key === "recorrente" && info[key] === "Sim" && info2[key] === "Sim") {
    console.log("Ambos recorrentes");
  } else {
    console.log(info[key] + " e " + info2[key]);
  }
}
// ou

for (let key in info) {
  info2[key] += info[key];
}

// Leitura de objetos
// 1 - Acesse as chaves nome, sobrenome e titulo – esta encontra-se dentro da chave livrosFavoritos – e faça um console.log no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”.
let leitor = {
  nome: "Julia",
  sobrenome: "Pessoa",
  idade: 21,
  livrosFavoritos: [
    {
      titulo: "O Pior Dia de Todos",
      autor: "Daniela Kopsch",
      editora: "Tordesilhas",
    },
  ],
};

console.log(
  "O livro favorito de " +
    leitor.nome +
    " " +
    leitor.sobrenome +
    " se chama " +
    leitor.livrosFavoritos[0].titulo
);

//2 - Adicione um novo livro favorito na chave livrosFavoritos, que é um array

leitor.livrosFavoritos.push({
  titulo: "Harry Potter e o Prisioneiro de Azkaban",
  autor: "JK Rowling",
  editora: "Rocco",
});
