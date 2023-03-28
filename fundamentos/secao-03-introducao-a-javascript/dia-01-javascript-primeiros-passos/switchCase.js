pessoa = 'aprovado';
let processo = '?';

switch (pessoa) {
    case 'aprovado':
        processo = "Parabéns, você está no grupo de pessoas aprovadas!";
        break;
    case 'lista':
        processo = "Você está na nossa lista de espera.";
    case 'reprovado':
        processo = "Infelizmente, você reprovou.";
    default:
        processo = "Informação incorreta.";
        break;
}

console.log(processo);