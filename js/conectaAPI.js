async function lista_videos() {
    const conexao = await fetch('http://localhost:3000/videos')
    const conexao_convertida = await conexao.json()

    return conexao_convertida
}

async function cria_videos(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil vizualizações`,
            url: url,
            imagem: imagem
        })
    })

    if (!conexao.ok) {
        throw new Error('Não foi possível enviar o vídeo!')
    }
    const conexao_convertida = await conexao.json()
    return conexao_convertida
}

async function buscaVideo(busca) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${busca}`)

    const conexao_convertida = conexao.json();

    return conexao_convertida
}

export const conectaApi = {
    lista_videos,
    cria_videos,
    buscaVideo
}