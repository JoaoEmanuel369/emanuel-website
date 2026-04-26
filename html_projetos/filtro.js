// Selecionamos o select e todos os itens
const filtro = document.getElementById('classe');
const itens = document.querySelectorAll('.item');

filtro.addEventListener('change', function() {
    const valorSelecionado = this.value;

    itens.forEach(item => {
        // Se for "todos" ou se a categoria bater com o valor do select
        if (valorSelecionado === 'todos' || item.getAttribute('data-category') === valorSelecionado) {
            item.style.display = 'block'; // Mostra
        } else {
            item.style.display = 'none';  // Esconde
        }
    });
});