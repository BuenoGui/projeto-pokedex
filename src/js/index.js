const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

function esconderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}

function mostrarCartao() {
  cartoes[cartaoAtual].classList.add("selecionado");
}

btnAvancar.addEventListener("click", function () {
  if (cartaoAtual === 3) cartaoAtual = - 1;

  esconderCartaoSelecionado();

  cartaoAtual++;
  mostrarCartao();
});

btnVoltar.addEventListener("click", function () {
  if (cartaoAtual === 0) cartaoAtual = 4 ;

  esconderCartaoSelecionado();

  cartaoAtual--;
  mostrarCartao();
});