function inverterString(str) {
  try {
    if (str) {
      let invertida = ""; // String para armazenar o resultado

      // Percorre a string de trás para frente
      for (let i = str.length - 1; i >= 0; i--) {
        invertida += str[i];
      }

      return invertida;
    }
  } catch (e) {
    null;
  }
}

// String de entrada (pode ser alterada ou receber de entrada do usuário)
const entrada = "Rodrigo";

// Chama a função para inverter e exibe o resultado
const resultado = inverterString(entrada);
console.log(`String original: "${entrada}"`);
console.log(`String invertida: "${resultado}"`);
