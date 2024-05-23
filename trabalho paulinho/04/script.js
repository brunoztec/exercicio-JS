function calcularMedias() {

    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);

 
    const mediaAritmetica = (num1 + num2 + num3) / 3;

  
    const pesos = [3, 2, 5];
    const mediaPonderada = (num1 * pesos[0] + num2 * pesos[1] + num3 * pesos[2]) / (pesos[0] + pesos[1] + pesos[2]);

    const somaMedias = mediaAritmetica + mediaPonderada;


    const mediaDasMedias = somaMedias / 2;


    document.getElementById('mediaAritmetica').innerText = `Média Aritmética: ${mediaAritmetica.toFixed(2)}`;
    document.getElementById('mediaPonderada').innerText = `Média Ponderada: ${mediaPonderada.toFixed(2)}`;
    document.getElementById('somaMedias').innerText = `Soma das Médias: ${somaMedias.toFixed(2)}`;
    document.getElementById('mediaDasMedias').innerText = `Média das Médias: ${mediaDasMedias.toFixed(2)}`;
}
