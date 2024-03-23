document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#form-sorteador");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let valorMaximo = document.querySelector("#numero-maximo").value;

    valorMaximo = parseInt(valorMaximo);

    let numeroAleatorio = Math.floor(Math.random() * valorMaximo) + 1;

    const resultadoValor = document.querySelector("#resultado-valor");

    resultadoValor.innerText = `${numeroAleatorio}`;

    const resultado = document.querySelector(".resultado");

    resultado.style.display = "block";
  });
});
