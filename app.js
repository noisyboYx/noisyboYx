//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const nomeInput = document.getElementById('amigo');
const btnAdicionar = document.querySelector('.button-add');
const listaAmigos = document.getElementById('listaAmigos');
const btnSortear = document.querySelector('.button-draw');
const resultadoSorteio = document.getElementById('resultado');

// Array para armazenar os amigos
let amigos = [ "JOAO, LARRISA, FERNANDA, BRUNA, MARCOS, DEPAY, YURI" ];

// Função para adicionar o nome do amigo à lista
function adicionarAmigo() {
    const nome = nomeInput.value.trim();

    if (nome === '') {
        alert('Por favor, digite um nome válido!');
    } else {
        amigos.push(nome);
        atualizarLista();
        nomeInput.value = ''; // Limpar o campo de texto
    }
}

// Função para atualizar a lista de amigos na página
function atualizarLista() {
    listaAmigos.innerHTML = ''; // Limpar lista atual
    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear o amigo secreto
function sortearAmigo() {
    if (amigos.length < 1) {
        alert('Adicione pelo menos um amigo antes de sortear!');
    } else {
        const sorteio = amigos[Math.floor(Math.random() * amigos.length)];
        resultadoSorteio.textContent = `O amigo secreto sorteado é: ${sorteio}`;
    }
}