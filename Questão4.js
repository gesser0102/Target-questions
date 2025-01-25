// Dados do faturamento mensal por estado
const faturamentoMensal = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

// Função para calcular os percentuais
function calcularPercentuais(faturamento) {
  try {
    // Obtem faturamento total
    let total = Object.values(faturamento).reduce(
      (soma, valor) => soma + valor,
      0
    );

    // Objeto para armazenar os percentuais
    let percentuais = {};
    for (let [estado, valor] of Object.entries(faturamento)) {
      percentuais[estado] = ((valor / total) * 100).toFixed(2); // Percentual com 2 casas decimais
    }

    return { total, percentuais };
  } catch (e) {
    null;
  }
}

// Calcula os percentuais
let { total, percentuais } = calcularPercentuais(faturamentoMensal);

// Exibe os resultados
console.log(`Faturamento Total: R$ ${total.toFixed(2)}`);
for (let [estado, percentual] of Object.entries(percentuais)) {
  console.log(`${estado}: ${percentual}%`);
}
