const fs = require("fs");

// Carrega os dados do arquivo JSON
let dados = JSON.parse(fs.readFileSync("dados.json", "utf-8"));

//console.log(dados);

function calcularFaturamento(dados) {
  try {
    // Filtra os dias com faturamento maior que zero
    let diasComFaturamento = dados.filter((d) => d.valor > 0);

    // Calcula o menor e maior valor de faturamento
    let menorValor = Math.min(...diasComFaturamento.map((d) => d.valor));
    let maiorValor = Math.max(...diasComFaturamento.map((d) => d.valor));

    // Calcula a média mensal (excluindo dias com faturamento zero)
    let somaFaturamento = diasComFaturamento.reduce(
      (soma, d) => soma + d.valor,
      0
    );
    let mediaMensal = somaFaturamento / diasComFaturamento.length;

    // Conta os dias com faturamento acima da média mensal
    let diasAcimaDaMedia = diasComFaturamento.filter(
      (d) => d.valor > mediaMensal
    ).length;

    return { menorValor, maiorValor, mediaMensal, diasAcimaDaMedia };
  } catch (e) {
    null;
  }
}

// Executa o cálculo
let resultado = calcularFaturamento(dados);

// Exibe os resultados
console.log(
  `Menor valor de faturamento: R$ ${resultado.menorValor.toFixed(2)}`
);
console.log(
  `Maior valor de faturamento: R$ ${resultado.maiorValor.toFixed(2)}`
);
console.log(
  `Número de dias com faturamento acima da média mensal: ${resultado.diasAcimaDaMedia}`
);
