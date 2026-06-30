const botaoDarkMode = document.querySelector(".cabecalho-titulo-inversao");

// Função para alternar modo escuro
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    // Salva preferência do usuário
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("tema", "dark");
        botaoDarkMode.textContent = "Modo Claro ☀️";
    } else {
        localStorage.setItem("tema", "light");
        botaoDarkMode.textContent = "Modo Escuro 🌓";
    }
}

// Evento de clique
botaoDarkMode.addEventListener("click", toggleDarkMode);

// Mantém a escolha ao recarregar a página
window.addEventListener("load", () => {
    const temaSalvo = localStorage.getItem("tema");

    if (temaSalvo === "dark") {
        document.body.classList.add("dark-mode");
        botaoDarkMode.textContent = "Modo Claro ☀️";
    }
});