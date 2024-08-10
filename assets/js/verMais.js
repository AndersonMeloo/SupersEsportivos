export function mostrarConteudo() {
    document.addEventListener("DOMContentLoaded", function () {
        const botaoAlterar = document.getElementById("esconderConteudo");
        const esconderItens = document.querySelectorAll(".buscas-carros.hidden");

        let mostrarMais = false;

        botaoAlterar.addEventListener("click", function () {
            if (mostrarMais) {
                esconderItens.forEach(item => item.classList.add("hidden"));
                botaoAlterar.textContent = "Ver Mais";
            } else {
                esconderItens.forEach(item => item.classList.remove("hidden"));
                botaoAlterar.textContent = "Ver Menos";
            };

            mostrarMais = !mostrarMais;
        });
    });
}

mostrarConteudo();

