const pessoasComentario = [
  {
    foto: "imgs/imagem-1.jpg",
    empresa: "Facebook",
    comentario:
      "I love it!! This service helps me a lot in my work. These tools  are very easy to use.",
  },
  {
    foto: "imgs/imagem-2.jpg",
    empresa: "Google",
    comentario:
      "It's really very useful! These tools reduce my work time a lot, in an easy and fast way.",
  },
  {
    foto: "imgs/imagem-3.jpg",
    empresa: "Twitter",
    comentario:
      "Congratulations to the developers of this service! Always delivering my projects quickly.",
  },
];

let indexFotoProximo = 1;
let indexEmpresaProximo = 1;
let indexComentProximo = 1;

function proximo() {
  console.log([indexFotoProximo, indexComentProximo, indexEmpresaProximo]);
  document
    .querySelector(".imagem-review img")
    .setAttribute("src", pessoasComentario[indexFotoProximo++].foto);
  document.querySelector(".empresa-nome").innerHTML =
    pessoasComentario[indexEmpresaProximo++].empresa;
  document.querySelector(".comentario").innerHTML =
    pessoasComentario[indexComentProximo++].comentario;
  if (indexFotoProximo > 2) {
    indexFotoProximo = 0;
    indexEmpresaProximo = 0;
    indexComentProximo = 0;
  }
}

let indexFotoAnterior = 0;
let indexEmpresaAnterior = 0;
let indexComentAnterior = 0;

function anterior() {
  console.log([indexFotoAnterior, indexComentAnterior, indexEmpresaAnterior]);
  document
    .querySelector(".imagem-review img")
    .setAttribute("src", pessoasComentario[indexFotoAnterior--].foto);
  document.querySelector(".empresa-nome").innerHTML =
    pessoasComentario[indexEmpresaAnterior--].empresa;
  document.querySelector(".comentario").innerHTML =
    pessoasComentario[indexComentAnterior--].comentario;

  if (indexFotoAnterior < 0) {
    indexFotoAnterior = 2;
    indexEmpresaAnterior = 2;
    indexComentAnterior = 2;
  }
}

const botaoProximo = document.querySelector("#proximo");
const botaoAnterior = document.querySelector("#anterior");

botaoProximo.addEventListener("click", proximo);
botaoAnterior.addEventListener("click", anterior);
