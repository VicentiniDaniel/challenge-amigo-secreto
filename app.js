let nomes = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome !== "") {
        nomes.push(nome);
        document.getElementById('listaAmigos').innerHTML += `<li>${nome}</li>`;
        input.value = "";
    } else {
        alert("Por favor, insira um nome válido.");
    }
}

function sortearAmigo() {
    if (nomes.length > 0) {
        const indiceAleatorio = Math.floor(Math.random() * nomes.length);
        const amigoSecreto = nomes.splice(indiceAleatorio, 1)[0];
        document.getElementById('resultado').innerText = `O amigo secreto é: ${amigoSecreto}`;
    } else {
        alert("A lista de nomes está vazia ou todos os nomes já foram sorteados.");
    }
}
