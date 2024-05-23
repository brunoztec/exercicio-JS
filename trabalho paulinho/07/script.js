function verificarImpar() {
    // Obter o valor do input
    const numero = parseFloat(document.getElementById('numero').value);

    // Verificar se o número é ímpar
    const resultado = (numero % 2 !== 0) ? "ímpar" : "par";

    // Exibir o resultado
    document.getElementById('resultado').innerText = `O número é: ${resultado}`;
}

