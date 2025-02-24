const dataCasamento = new Date(2025, 8, 12); // Outubro é mês 9 no JS

function calcularTempoFaltando() {
    const agora = new Date();
    let diferenca = dataCasamento - agora;

    if (diferenca <= 0) {
        document.getElementById('contador').innerHTML = "O grande dia chegou! 🎉💍";
        return;
    }

    let dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    document.getElementById('contador').innerHTML = `Faltam ${dias} dias para o grande dia!`;
    document.getElementById('contador2').innerHTML = `🤵🏻 12/09/2025 👰🏼`;
}

// Função para criar os emojis caindo
function criarEmoji() {
    const emoji = document.createElement('div');
    emoji.classList.add('emoji-caindo');

    // Escolhe aleatoriamente entre noivo e noiva
    emoji.innerText = Math.random() > 0.5 ? "🤵‍♂️" : "👰‍♀️";

    emoji.style.left = Math.random() * 100 + "vw"; // Posição aleatória na largura da tela
    emoji.style.animationDuration = Math.random() * 2 + 3 + "s"; // Duração aleatória da animação

    document.body.appendChild(emoji);

    setTimeout(() => {
        emoji.remove();
    }, 5000);
}

// Criar emojis a cada 800ms
setInterval(criarEmoji, 1000);

setInterval(calcularTempoFaltando, 1000);
window.onload = calcularTempoFaltando;
