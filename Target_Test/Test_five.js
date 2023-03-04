const str = "Target Sistemas";

// Variável para armazenar a string invertida
let invertida = "";

// Loop para percorrer a string de trás para frente
for (let i = str.length - 1; i >= 0; i--) {
  // Concatenar o caractere atual à variável da string invertida
  invertida += str[i];
}

// Imprimir a string invertida
console.log(invertida);
