import { conectaApi } from "./conectaAPI.js"
import constroe_card from "./mostrarVideos.js"

async function buscaVideo(event) {
    event.preventDefault();

    const dados = document.querySelector("[data-pesquisa]").value
    const busca = await conectaApi.buscaVideo(dados);
    const lista = document.querySelector('[data-lista]');
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild)
    }

    busca.forEach(element => lista.appendChild(constroe_card(element.titulo, element.descricao, element.url, element.imagem)));

    if(busca.length == 0){
        lista.innerHTML = `<h2 class="mensagem__titulo">Nenhum Vídeo Encontrado!</h2>`
    }
}

const btn_pesquisa = document.querySelector("[data-botaopesquisa]")

btn_pesquisa.addEventListener("click", event => buscaVideo(event))