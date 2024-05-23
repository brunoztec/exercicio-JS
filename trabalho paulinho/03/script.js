let saldoInput = document.querySelector("#saldoInput");
let resultado = document.querySelector("#resultado");
let btSomar = document.querySelector("#btSomar");
function Reajuste() {
    let Saldo = Number (saldoInput.value);


    let Resultado = Saldo * 1.01 
    

    resultado.textContent = "Saldo:" + Resultado.toFixed(3);
}
btSomar.onclick = function(){
    Reajuste();
}
