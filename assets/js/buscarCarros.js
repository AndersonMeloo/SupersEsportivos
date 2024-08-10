export function buscaPorCarros() {document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('search-form');
    const formularioInput = document.getElementById('search-input');
    const carrosDaLista = document.querySelectorAll('.buscas-carros');
    const mostrarTodos = document.getElementById('show-all');

    formulario.addEventListener('submit', (event) => {
        event.preventDefault();

        const consultar = formularioInput.value.toLowerCase();
        let encontrar = false;

        carrosDaLista.forEach(car => {
            const carData = car.getAttribute('data-carro').toLowerCase();
            if (carData.includes(consultar)) {
                car.classList.remove('hidden');
                encontrar = true;
            } else {
                car.classList.add('hidden');
            }
        });

        // Mostrar o botão "Mostrar Todos" se algum carro foi encontrado
        mostrarTodos.style.display = encontrar ? 'block' : 'none';
    });

    mostrarTodos.addEventListener('click', () => {
        carrosDaLista.forEach(car => {
            car.classList.remove('hidden');
        });
        mostrarTodos.style.display = 'none';
        formularioInput.value = ''; // Limpar a consulta
    });
});
}