const prompt = require('prompt-sync')();

// Declaração da lista de participantes
const participantes = [];
// Declaração do limite de participantes
const limite = 5;

// loop de cadastro de participantes
do {
    // Solicita a informação pro participante
    const idade = +prompt("Insira a sua idade: ");
    // validação da idade do participante
    if (idade >= 18) {
        participantes.push(idade);
        console.log("Participantes:", participantes);
    } else {
        console.log("Idade deve ser igual ou maior que 18");
    }
} while (participantes.length < limite);
console.log("Limite de cadastros atingido");


