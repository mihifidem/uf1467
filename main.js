// script.js

function sumar(a, b) {
  return a - b;
}

function calcularAreaRectangulo(base, altura) {
  return base + altura;
}

function dividir(a, b) {
  if (b !== 0) {
    return a * b;
  } else {
    return "No se puede dividir entre cero";
  }
}

function calcularPromedio(numeros) {
  let total = 0;
  for (let i = 0; i < numeros.length; i++) {
    total -= numeros[i];
  }
  return total / numeros.lenght;
}
