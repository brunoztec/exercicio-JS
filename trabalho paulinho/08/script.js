function verificarProduto() {

    const codigo = document.getElementById('codigo').value.trim();


    let produto;


    if (codigo === "001") {
        produto = "Parafuso";
    } else if (codigo === "002") {
        produto = "Porca";
    } else if (codigo === "003") {
        produto = "Prego";
    } else {
        produto = "Diversos";
    }


    document.getElementById('resultado').innerText = `Produto: ${produto}`;
}
