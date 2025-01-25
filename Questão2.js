// Função Fibonacci

function isFibonacciNumber(num) {
  try {
    // Números negativos não pertencem à sequência
    if (num < 0) return false;

    let a = 0,
      b = 1;

    while (a <= num) {
      // Se o número for encontrado na sequência
      if (a === num) return true;
      // Atualiza os dois números anteriores
      [a, b] = [b, a + b];
    }
    // Se o loop terminar, o número não pertence à sequência
    return false;
  } catch (e) {
    null;
  }
}

// Função principal para calcular e exibir o resultado
function checkFibonacciNumber(num) {
  try {
    if (isFibonacciNumber(num)) {
      console.log(`O número ${num} pertence à sequência de Fibonacci.`);
    } else {
      console.log(`O número ${num} NÃO pertence à sequência de Fibonacci.`);
    }
  } catch (e) {
    null;
  }
}

// Teste com um número informado
const numero = 22; // Altere aqui para testar outros números
checkFibonacciNumber(numero);
