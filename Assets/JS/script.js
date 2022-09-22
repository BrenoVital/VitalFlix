var listaFilmes = [
  "",
];

for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img class=formata src=" + listaFilmes[i] + ">");
}



function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  if (filmeFavorito.endsWith(".jpg")) {
    var elementoFilmeFavorito = "<img class=formata src=" + filmeFavorito + ">";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
  } else {
    alert("URL inválida");
  }

  document.getElementById("filme").value = "";
}

function listarFilmesNaTela(filme) {
  var listaFilmes = document.querySelector("#listaFilmes")
  var elementoFilme = "<img src=" + filme + ">";
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme;
}


