import { Contato } from "./model/contato.js";
let contatos = [];
document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formulario-de-cadastro');
    formulario.onsubmit = submeterFormulario;
});
function submeterFormulario(evento) {
    evento.preventDefault();
    const nome = document.getElementById('nome');
    const fone = document.getElementById('fone');
    const contato = new Contato(nome.value, fone.value);
    contatos.push(contato);
    atualizarListaDeContatos(contatos);
    nome.value = '';
    fone.value = '';
    nome.focus();
}
function atualizarListaDeContatos(contatos) {
    const listaDeContatos = document.querySelector('#lista-de-contatos tbody');
    listaDeContatos.innerHTML = '';
    contatos.forEach(contato => {
        const linhaDaTabela = listaDeContatos.insertRow();
        linhaDaTabela.insertCell().textContent = contato.nome;
        linhaDaTabela.insertCell().textContent = contato.fone;
    });
}
