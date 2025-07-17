
const codigosPremiados = {
  "00001": "🎁 Ganaste 20% extra",
  "00002": "🤑 ¡Ganaste 200 fichas!",
  "00003": "💸 ¡Carga gratis activada!",
  "00004": "💥 Premio sorpresa desbloqueado",
  "00005": "😢 Sin suerte esta vez",
  "00006": "🎉 ¡Premio doble!",
  "00007": "💣 100 fichas + bonus",
  "00008": "😢 Sin suerte esta vez",
  "00009": "🧨 Ganaste 30% extra",
  "00010": "💎 Acceso VIP activado",
  "00011": "😢 Sin suerte esta vez",
  "00012": "🤑 ¡Ganaste 150 fichas!",
  "00013": "😢 Sin suerte esta vez",
  "00014": "🎁 ¡10% adicional en tu próxima carga!",
  "00015": "💸 ¡Transferencia sin cargo!",
  "00016": "😢 Sin suerte esta vez",
  "00017": "🔥 ¡50 fichas directas!",
  "00018": "🧨 Premio explosivo desbloqueado",
  "00019": "😢 Sin suerte esta vez",
  "00020": "🎊 ¡Regalo sorpresa activado!"
};

function girarRuleta() {
  const ruleta = document.getElementById("ruleta");
  const codigo = document.getElementById("codigo").value.trim();
  const resultadoDiv = document.getElementById("resultado");

  // animación de ruleta
  ruleta.classList.add("girando");

  setTimeout(() => {
    ruleta.classList.remove("girando");

    const resultado = codigosPremiados[codigo] || "😢 Sin suerte esta vez";
    resultadoDiv.textContent = resultado;
  }, 2000); // tiempo de giro
}
