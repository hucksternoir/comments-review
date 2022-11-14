const pessoas = [
  {
    img: "imgs/imagem-2.jpg",
    nomeEmpresa: "Facebook",
    comentario:
      "Adorei o serviço! Ele me proporciona exatamente tudo o que eu preciso.",
  },
  {
    img: "imgs/imagem-3.jpg",
    nomeEmpresa: "Amazon",
    comentario:
      "Eles realmente sabem o que fazem. Todas as ferramentas necessárias para meu trabalho quebram um galho enorme!!",
  },
  {
    img: "imgs/imagem-1.jpg",
    nomeEmpresa: "Uber",
    comentario:
      "Este serviço facilita e muito o meu trabalho, pois consigo usar suas dezenas de ferramentas e features para melhorar a performance do meu trabalho e, consequentemente, me dando ótimos resultados",
  },
];

function mudaProximo() {
  document.querySelector("img").setAttribute("src", pessoas[1].img);
  document.querySelector("h2").innerText = pessoas[1].nomeEmpresa;
  document.querySelector("p").innerText = pessoas[1].comentario;
}

const btnAvancar = document.querySelector("#proximo");
btnAvancar.addEventListener("click", mudaProximo);
