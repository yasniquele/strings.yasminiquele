const botaoMostraPalavras = document.querySelector("#botao-palavrachave"); 

botaoMostraPalavras.addEventListener("click", mostraPalavrasChave); 

function mostraPalavrasChave() {
    const texto = document.querySelector("#entrada-de-texto").value;

    const campoResultado = document.querySelector("#resultado-palavrachave");

    // Remover espaços extras antes e depois do texto e dividir as palavras
    const palavras = texto.trim().split(/\s+/);

    // Juntar as palavras com vírgula sem espaço
    campoResultado.textContent = palavras.join(",");
}


