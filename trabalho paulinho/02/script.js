    let Valorkilos = document.querySelector("#Valorkilos");
let Quantidadedekilos = document.querySelector("#Quantidadedekilos");
let btSomar = document.querySelector("#btSomar");
let resultado = document.querySelector("#resultado");

btSomar.addEventListener('click', function() {
    let valorKilo = parseFloat(Valorkilos.value);
    let quantidadeKilos = parseFloat(Quantidadedekilos.value);
    
    if (isNaN(valorKilo) || isNaN(quantidadeKilos)) {
        resultado.textContent = "Por favor, insira valores válidos.";
    } else {
        let total = valorKilo * quantidadeKilos;
        resultado.textContent = "Total a pagar: R$ " + total.toFixed(2);
    }
});