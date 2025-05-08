let intervaloCoracoes = null;

document.getElementById("abrirCarta").addEventListener("click", function () {
  document.getElementById("capa").style.display = "none";
  const cartaContainer = document.getElementById("cartaContainer");
  cartaContainer.style.display = "flex";

  setTimeout(() => {
    cartaContainer.querySelector(".carta").classList.add("show");
    iniciarCorações();
  }, 100);
});

function criarEmoji() {
  const emoji = document.createElement("span");
  const coracoes = ["❤️", "💛", "💚", "💖", "💕"];
  emoji.textContent = coracoes[Math.floor(Math.random() * coracoes.length)];
  emoji.className = "emoji-coracao";
  emoji.style.left = Math.random() * 100 + "vw";
  emoji.style.top = Math.random() * 100 + "vh";
  emoji.style.fontSize = Math.random() * 20 + 16 + "px";
  document.body.appendChild(emoji);

  setTimeout(() => emoji.remove(), 5000);
}

function iniciarCorações() {
  if (!intervaloCoracoes) {
    intervaloCoracoes = setInterval(criarEmoji, 600);
  }
}

function pararCorações() {
  clearInterval(intervaloCoracoes);
  intervaloCoracoes = null;
}
