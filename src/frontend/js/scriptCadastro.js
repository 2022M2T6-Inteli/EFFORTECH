
//todo esse arquivo tem uma lógica responsável por fazer com que a tela de cadastro seja animada com javascript

// Inicializa variávies

const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");

const nextBtnSec = document.querySelector(".next-1");

const nextBtnThird = document.querySelector(".next-2");

const submitBtn = document.querySelector(".submit");
const progressText = [...document.querySelectorAll(".step p")];
const progressCheck = [...document.querySelectorAll(".step .check")];
const bullet = [...document.querySelectorAll(".step .bullet")];
let max = 4;
let current = 1;

// slidePage.style.marginLeft = "0%";

// Define as alterações que ocorrem quando o botão da primeira página é clicado
nextBtnFirst.addEventListener("click", function () {
  slidePage.style.marginLeft = "-25%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  console.log("deu");
});
// Define as alterações que ocorrem quando o botão da segunda página é clicado
nextBtnSec.addEventListener("click", function () {
  slidePage.style.marginLeft = "-50%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
// Define as alterações que ocorrem quando o botão da 3a página é clicado
nextBtnThird.addEventListener("click", function () {
  slidePage.style.marginLeft = "-75%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
// Define as alterações que ocorrem quando o botão de enviar é clicado
submitBtn.addEventListener("click", function () {
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  setTimeout(function () {
    alert("Your Form Successfully Signed up");
    location.reload();
  }, 800);
  window.location.href = "/insereUsuario"
});

// Define as alterações que ocorrem quando o botão de voltar da 2a página é clicado
prevBtnSec.addEventListener("click", function () {
console.log("deu");
});
// Define as alterações que ocorrem quando o botão de voltar da 3a página é clicado
prevBtnThird.addEventListener("click", function () {
  console.log("deu");
});
// Define as alterações que ocorrem quando o botão de voltar da 4a página é clicado
prevBtnFourth.addEventListener("click", function () {
  console.log("deu");
});


function sairDoCadastro(){
  var res=confirm("Você esta saindo do cadastro","Deseja Mesmo Sair? Voce voltara para a pagina inicial!");
  if (res){
    window.location.href="./home.html"
  }
}