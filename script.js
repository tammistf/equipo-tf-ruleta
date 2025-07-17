<script>
async function tirar() {
  const codigoIngresado = document.getElementById("codigo").value.trim().toUpperCase();
  const resultado = document.getElementById("resultado");

  if (!codigoIngresado) {
    resultado.style.color = "orange";
    resultado.innerHTML = "⚠️ Ingresá un código.";
    return;
  }

  try {
    const respuesta = await fetch("/api/verificar-codigo.js", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ codigo: codigoIngresado })
    });

    const data = await respuesta.json();

    if (respuesta.ok) {
      if (data.premio) {
        resultado.style.color = "#00ff00";
        resultado.innerHTML = "✅ " + data.premio;
      } else {
        resultado.style.color = "#ffcc00";
        resultado.innerHTML = "🚫 Este código ya fue utilizado.";
      }
    } else {
      resultado.style.color = "#ff3333";
      resultado.innerHTML = "❌ " + (data.mensaje || "Código inválido.");
    }
  } catch (error) {
    resultado.style.color = "#ff3333";
    resultado.innerHTML = "❌ Error al validar el código.";
  }
}
</script>
