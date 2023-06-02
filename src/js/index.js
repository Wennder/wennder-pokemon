// passo1 - pegar no JS o elemento HTML correspondente ao botao troca de tema

const botaoAlterarTema = document.getElementById("botao-alterar-tema");

// passo 2 - dar um jeito de pegar no JS o elemento HTML corresponde ao body

const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

//passo 3 -dar um jeito de identificar o clique do usuario no botao de troca de tema
botaoAlterarTema.addEventListener("click", () => {
     // passo 6 -  remover a classe modo-escuro do body
     const modoEscuroEstaAtivo =body.classList.contains("modo-escuro");

     body.classList.toggle("modo-escuro");

     if(modoEscuroEstaAtivo) {
        // passo 7 - remover a classe do modo-escuro do body
        // passo 8 - trocar a imagem do botao de alterar tema pra sol
        imagemBotaoTrocaDeTema.setAttribute("src","./src/imagens/sun.png");        
     } else{
        // passo 4 - adicionar a classe modo-escuro no body
        
    // passo 5 -  trocar a imagem do botão de alterar tema pra lua
    imagemBotaoTrocaDeTema.setAttribute("src","./src/imagens/moon.png");
     } 
});

