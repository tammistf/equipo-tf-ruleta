document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("codigo-form");
  const input = document.getElementById("codigo");
  const resultado = document.getElementById("resultado");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const codigo = input.value.trim().toUpperCase();
    if (!codigo) {
      resultado.style.color = "orange";
      resultado.innerHTML = "⚠️ Ingresá un código.";
      return;
    }

    try {
      const res = await fetch("/api/verificar-codigo.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ codigo }),
      });

      const data = await res.json();

      if (res.ok && data.premio) {
        resultado.style.color = "#00ff00";
        resultado.innerHTML = `✅ ${data.premio}`;
      } else {
        resultado.style.color = "#ff3333";
        resultado.innerHTML = `❌ ${data.mensaje || "Código inválido."}`;
      }
    } catch (error) {
      resultado.style.color = "red";
      resultado.innerHTML = "⚠️ Error al verificar el código.";
    }
  });
});
