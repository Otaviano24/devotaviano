let vlcarro = 110;
let vlcaminhao = 80;
let caminhaotempo = 0;
let distancia = 100;
let distcaminhao = 0;
let distcarro = 0;
let pedagio = 5;
let encontro = 0;

// Converter tempo adicional em minutos para horas
caminhaotempo = pedagio / 60;

// Calcular tempo necessário para que os dois veículos se encontrem na rodovia
encontro = distancia / (vlcarro + vlcaminhao);

// Calcular distância percorrida pelo carro até o ponto de encontro
distcarro = vlcarro * encontro;

// Calcular distância percorrida pelo caminhão até o ponto de encontro
distcaminhao = vlcaminhao * (encontro + caminhaotempo);

// Verificar qual veículo está mais próximo da cidade de Ribeirão Preto
if ( distcarro < distancia / 2) {
        console.log("O carro está mais próximo da cidade de Ribeirão Preto.");
      } else {
        console.log("O caminhão está mais próximo da cidade de Ribeirão Preto.");
      }
