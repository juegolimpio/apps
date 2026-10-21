"use strict";

// Enlace público definitivo del portal. Compartirlo será útil cuando GitHub Pages esté activado.
const PORTAL_URL = "https://juegolimpio.github.io/apps/";
const PORTAL_NAME = "Mis herramientas digitales";
const SHARE_TEXT = "Accedé a estas herramientas digitales gratuitas: Tanteador, Torneo Fácil, Generador de ideas para IA y Generador de Diplomas.";

const shareButton = document.getElementById("share-button");
const shareStatus = document.getElementById("share-status");
const installButton = document.getElementById("install-button");
const installGuide = document.getElementById("install-guide");

function reportShareStatus(message) {
  shareStatus.textContent = message;
}

async function copyPortalUrl() {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(PORTAL_URL);
      return true;
    } catch (_) {
      // Algunos navegadores bloquean el portapapeles: usar alternativa local.
    }
  }

  const field = document.createElement("textarea");
  field.value = PORTAL_URL;
  field.setAttribute("readonly", "");
  field.style.position = "fixed";
  field.style.opacity = "0";
  document.body.appendChild(field);
  field.select();
  let copied = false;
  try {
    copied = document.execCommand("copy");
  } catch (_) {
    copied = false;
  } finally {
    field.remove();
  }
  return copied;
}

shareButton.addEventListener("click", async () => {
  reportShareStatus("");
  if (navigator.share) {
    try {
      await navigator.share({ title: PORTAL_NAME, text: SHARE_TEXT, url: PORTAL_URL });
      reportShareStatus("Se abrió la opción para compartir el portal.");
      return;
    } catch (error) {
      // Cancelar el menú de compartir no debe mostrar un error.
      if (error && error.name === "AbortError") return;
    }
  }

  if (await copyPortalUrl()) {
    reportShareStatus("Enlace copiado. Ya podés pegarlo en WhatsApp, Instagram o donde quieras.");
  } else {
    reportShareStatus(`Copiá este enlace para compartirlo: ${PORTAL_URL}`);
  }
});

installButton.addEventListener("click", () => {
  const willOpen = installGuide.hidden;
  installGuide.hidden = !willOpen;
  installButton.setAttribute("aria-expanded", String(willOpen));
});
