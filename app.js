let nomes = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome !== "") {
        nomes.push(nome);
        document.getElementById('listaAmigos').innerHTML += `<li>${nome}</li>`;
        input.value = "";
    } 
    else {
        alert("Por favor, insira um nome válido.");
    }
}