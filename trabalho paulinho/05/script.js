function encontrarMaior() {

    const valor1 = parseFloat(document.getElementById('valor1').value);
    const valor2 = parseFloat(document.getElementById('valor2').value);

    const maiorValor = (valor1 > valor2) ? valor1 : valor2;

    document.getElementById('resultado').innerText = `Maior valor: ${maiorValor}`;
}
