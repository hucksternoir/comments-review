const pessoasComentario = [
  {
    foto: "imgs/imagem-1.jpg",
    empresa: "Facebook",
    comentario: "Gostei muito",
  },
  {
    foto: "imgs/imagem-2.jpg",
    empresa: "Google",
    comentario: "Gostei bastante",
  },
  {
    foto: "imgs/imagem-3.jpg",
    empresa: "Twitter",
    comentario: "Gostei pakas",
  },
];
let indexFoto = 1;
let indexEmpresa = 1;
let indexComent = 1;
function proximo(event) {
  console.log([indexFoto, indexComent, indexEmpresa]);
  document
    .querySelector(".imagem-review img")
    .setAttribute("src", pessoasComentario[indexFoto++].foto);
  document.querySelector(".empresa-nome").innerHTML =
    pessoasComentario[indexEmpresa++].empresa;
  document.querySelector(".comentario").innerHTML =
    pessoasComentario[indexComent++].comentario;
  if (indexFoto > 2) {
    indexFoto = 0;
    indexEmpresa = 0;
    indexComent = 0;
  }
}

const botao = document.querySelector("#proximo");

botao.addEventListener("click", proximo);
