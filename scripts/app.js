function pesquisar(){
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Digite alguma linguagem para poder aprender</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()
    
    //Inicializa um String vazia para armazenar os Dados
    let resultados = "";
    let titulo = "";
    let imagem = "";
    
    //para cada dado dentro da lista de dados
    //Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        //se titulo includes campoPesquisa entao, faça...
        if(titulo.includes(campoPesquisa) || imagem.includes(campoPesquisa)) {
        //Cria um novo elemento HTML para cada resultado
        resultados += `
        <div class="item-resultado">
                        <h2>${dado.titulo}</h2>
                        <img src =${dado.imagem} alt="linguagem logo">
                        <p class="descricao-meta">${dado.descricao}</p>
                        <a href="${dado.link}" target="_blank">Aprender mais !</a>
                    </div>
        `;
    }
    };

    if (!resultados) {
       resultados = "<p>Encontramos nada relacionado</p>"
    }

    //Atribui os resultados gerados à seção HTML 
    section.innerHTML = resultados  
}






