let nomes = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome !== "") {
        nomes.push(nome);
        input.value = "";
    } 