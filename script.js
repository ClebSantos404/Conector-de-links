function modeLight() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
    const img = document.querySelector("#profile img")
    
  // substituir a img
    if (html.classList.contains('light')) {

    // se tiver light mode, adicionar a img light
      img.setAttribute("src", "./assets/ft-de-perfil.png")
    } else {

      // se não mudar para img dark mode
      img.setAttribute("src", "./assets/cleb-dark.png")
    }
}
  // "const" recebe o nome "html", "=" igual séria dár uma atribuição, atribuimos "document" que é para entrar no documento, "." é para acessar propriedades e funcionalidades.  "documentElement" é para acessar-mos o conteúdo do documento.