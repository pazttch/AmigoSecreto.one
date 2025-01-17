// Array para os amigos selecionados.
let amigo = [];

// Função para limpar campo
function limparCampo() {
    campoAmigos = document.querySelector('input');
    campoAmigos.value = '';
}


// Função para adicionar os amigos.

function adicionarAmigo() {
    let campoAmigos = document.querySelector('input').value;
    amigo.push(campoAmigos)
    limparCampo();
    atualizarListaAmigos();
}

// Função para atualizar a lista de amigos
function atualizarListaAmigos() {
let listaAmigos = document.getElementById('listaAmigos');

listaAmigos.innerHTML = ''

for (let i = 0; i < amigo.length; i++) {
    let amigos = amigo[i];
    
    let lista = document.createElement('li');
    lista.textContent = amigos;

    listaAmigos.appendChild(lista);}
}

// Função para sortear os amigos
function sortearAmigo() {
    if (amigo.length === 0){
        alert('Por favor, insira um nome.');
        return; 
}

    let sorteio = Math.floor(Math.random() * amigo.length);
    let amigoSorteado = amigo[sorteio];

document.getElementById('resultado').innerHTML = (`Amigo sorteado: ${amigoSorteado}`);
}

