
const codigosPremiados = {
  "00001": "🤑 ¡Ganaste 200 fichas!",
  "00002": "💸 ¡Carga gratis activada!",
  "00003": "🎁 Premio sorpresa desbloqueado",
  "00004": "😢 Sin suerte esta vez",
  "00005": "🎁 Ganaste 20% extra",
  "00006": "💣 ¡Ganaste 300 fichas!",
  "00007": "💸 ¡Carga gratis activada!",
  "00008": "😢 Sin suerte esta vez",
  "00009": "💎 Acceso VIP desbloqueado",
  "00010": "🎁 Ganaste 20% extra",
  "00011": "🤑 ¡Ganaste 200 fichas!",
  "00012": "💸 ¡Carga gratis activada!",
  "00013": "😢 Sin suerte esta vez",
  "00014": "🎁 Premio sorpresa desbloqueado",
  "00015": "💎 Acceso VIP desbloqueado",
  "00016": "🎁 Ganaste 20% extra",
  "00017": "💸 ¡Carga gratis activada!",
  "00018": "🎁 Premio sorpresa desbloqueado",
  "00019": "💎 Acceso VIP desbloqueado",
  "00020": "😢 Sin suerte esta vez",
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
