
const codigosPremiados = {
  "TF200": "¡Ganaste 200 fichas! 🎉",
  "BONO50": "¡Premio sorpresa! 💥",
  "REGALO100": "100 fichas extra activadas 🤑"
};

function girarRuleta() {
  const codigo = document.getElementById("codigo").value.trim().toUpperCase();
  const resultado = codigosPremiados[codigo] || "Sin suerte esta vez 😢";
  document.getElementById("resultado").innerText = resultado;

  // Animación simple de ruleta
  const canvas = document.getElementById("ruletaCanvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, 300, 300);
  ctx.beginPath();
  ctx.arc(150, 150, 140, 0, 2 * Math.PI);
  ctx.fillStyle = "gold";
  ctx.fill();
  ctx.fillStyle = "#000";
  ctx.font = "20px Arial";
  ctx.fillText("🎡", 135, 160);
}
