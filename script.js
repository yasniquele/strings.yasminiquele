const botaoMostraPalavras = document.querySelector("#botao-palavrachave");
botaoMostraPalavras.addEventListener("click", mostraPalavrasChave);

function mostraPalavrasChave() {
  const texto = document.querySelector("#entrada-de-texto").value.trim();
  const campoResultado = document.querySelector("#resultado-palavrachave");

  if (!texto) {
    campoResultado.textContent = "";
    return;
  }

  const palavrasChave = processaTexto(texto);
  campoResultado.textContent = palavrasChave.join(", ");
}

function processaTexto(texto) {
  let palavras = texto.split(/\P{L}+/u).map(p => p.toLowerCase());
  palavras = tiraPalavrasRuins(palavras);
  const frequencias = contaFrequencias(palavras);
  const ordenadas = Object.keys(frequencias).sort((a, b) => frequencias[b] - frequencias[a]);
  return ordenadas.slice(0, 10);
}

function contaFrequencias(palavras) {
  const frequencias = {};
  for (let palavra of palavras) {
    frequencias[palavra] = (frequencias[palavra] || 0) + 1;
  }
  return frequencias;
}

function tiraPalavrasRuins(palavras) {
  const PALAVRAS_RUINS = new Set([
    "para", "uma", "nós", "com", "dos", "das", "nos", "às", "que", "por", "está", "isso", "esta",
    "mas", "então", "ainda", "como", "onde", "quando", "qual", "eles", "elas", "você", "vós",
    "também", "muito", "ser", "tem", "tenho", "tinha", "fui", "foi", "são", "sou", "era", "vai"
  ]);

  return palavras.filter(p => p.length > 2 && !PALAVRAS_RUINS.has(p));
}
