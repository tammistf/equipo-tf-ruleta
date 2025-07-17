
const canvas = document.getElementById("ruleta");
const ctx = canvas.getContext("2d");
const spinBtn = document.getElementById("spin");
const resultadoDiv = document.getElementById("resultado");

const premios = [
  "🎁 200 fichas",
  "💥 20% extra",
  "💸 Carga gratis",
  "❌ Sin suerte",
  "🧨 Premio sorpresa",
  "💣 100 fichas",
  "🎊 Regalo sorpresa",
  "😢 Sin suerte"
];

const colores = ["#FFD700", "#FF5733", "#28B463", "#555", "#3498DB", "#C70039", "#F39C12", "#7F8C8D"];

let startAngle = 0;
const arc = Math.PI / (premios.length / 2);

function dibujarRuleta() {
  const outsideRadius = 200;
  const textRadius = 160;
  const insideRadius = 50;

  ctx.clearRect(0, 0, 500, 500);
  for (let i = 0; i < premios.length; i++) {
    const angle = startAngle + i * arc;
    ctx.fillStyle = colores[i];

    ctx.beginPath();
    ctx.arc(250, 250, outsideRadius, angle, angle + arc, false);
    ctx.arc(250, 250, insideRadius, angle + arc, angle, true);
    ctx.fill();

    ctx.save();
    ctx.fillStyle = "white";
    ctx.translate(250 + Math.cos(angle + arc / 2) * textRadius,
                  250 + Math.sin(angle + arc / 2) * textRadius);
    ctx.rotate(angle + arc / 2);
    ctx.fillText(premios[i], -ctx.measureText(premios[i]).width / 2, 0);
    ctx.restore();
  }
}

function girar() {
  const grados = Math.floor(3600 + Math.random() * 360);
  const rotaciones = grados / 360;
  const seleccionado = Math.floor(premios.length - (rotaciones % premios.length));

  let rotation = 0;
  const totalFrames = 90;
  let frame = 0;

  const animar = setInterval(() => {
    rotation += grados / totalFrames;
    startAngle += (grados / totalFrames) * Math.PI / 180;
    dibujarRuleta();
    frame++;
    if (frame >= totalFrames) {
      clearInterval(animar);
      const index = Math.floor(premios.length - (rotation / 360) % premios.length) % premios.length;
      resultadoDiv.textContent = "Resultado: " + premios[index];
    }
  }, 20);
}

spinBtn.addEventListener("click", girar);
dibujarRuleta();
