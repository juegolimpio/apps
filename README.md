# Mis herramientas digitales

Portal estático para acceder a cuatro aplicaciones desde un solo enlace. Diseñado primero para celulares y alojable gratuitamente en GitHub Pages.

## Aplicaciones incluidas

| Aplicación | Dirección |
| --- | --- |
| Tanteador | https://juegolimpio.github.io/tanteador/ |
| Torneo Fácil | https://juegolimpio.github.io/campeonatos/ |
| Generador de ideas para IA | https://juegolimpio.github.io/generador-prompts/ |
| Generador de Diplomas | https://juegolimpio.github.io/generador-diplomas/ |

El portal solo ofrece enlaces a las aplicaciones originales. No copia código ni almacena información del visitante. No tiene cuentas, analíticas, anuncios ni dependencias externas.

## Contenido del ZIP

- `index.html`: estructura, textos, tarjetas e instrucciones para agregar un acceso a la pantalla de inicio.
- `styles.css`: presentación responsive (celular, tableta y escritorio).
- `script.js`: opción de compartir con menú nativo del dispositivo y alternativa de copiar el enlace; mostrar u ocultar guía de acceso directo.
- `favicon.svg`, `icon-192.png`, `touch-icon.png`: íconos locales para el navegador y los accesos directos.
- `README.md`: instrucciones y mantenimiento.

No utiliza frameworks, librerías externas, base de datos, cookies ni servicios de pago. **No es una PWA con funcionamiento offline:** el acceso de la pantalla de inicio es un atajo a la web y requiere conexión para visitar el portal y las aplicaciones, según sus propias capacidades.

## Probar antes de publicar

1. Extraer el ZIP y abrir `index.html` en un navegador.
2. Revisar los cuatro botones **Abrir aplicación** y su destino.
3. Pulsar **Agregar a la pantalla de inicio** y comprobar las instrucciones para Android y Safari.
4. Pulsar **Compartir portal**. Al probar en un navegador que no tiene Web Share API, se copiará el enlace o se mostrará para copiarlo. El enlace público del portal ya está activo.
5. Probar pantalla angosta y ancha; comprobar que no haya desbordes horizontales.

Nota: la experiencia real de compartir, añadir a inicio y la accesibilidad en distintos navegadores debe verificarse de nuevo después de la publicación por HTTPS.

## Publicación en GitHub Pages

1. El repositorio **público** es `juegolimpio/apps`.
2. Mantener `index.html`, `styles.css`, `script.js` y los íconos en la **raíz** del repositorio.
3. En **Settings → Pages**, elegir **Deploy from a branch**, rama `main`, carpeta `/(root)` y guardar.
4. Revisar la dirección publicada: https://juegolimpio.github.io/apps/.
5. Comprobar navegación, compartir, accesos directos e íconos desde celular y computadora.

Las modificaciones integradas en `main` se publican automáticamente mediante GitHub Pages.

## Agregar una aplicación en el futuro

1. En `index.html`, dentro de `<div class="app-grid">`, copiar un bloque completo `<article class="app-card">…</article>`.
2. Cambiar el nombre (`<h3>`), descripción (`<p>`), categoría e ícono (`<svg>` dentro de `.app-icon`), y la dirección (`href` del enlace). Modificar también el texto `aria-label` del enlace.
3. Si corresponde, actualizar el contador de herramientas y el texto `SHARE_TEXT` de `script.js`.
4. Probar el enlace y revisar la presentación en celular.

Las tarjetas se organizan automáticamente mediante CSS. No hace falta rediseñar la página ni usar JavaScript para mostrarlas.

## Seguridad y privacidad

- No introducir claves, tokens ni datos personales privados.
- Los enlaces externos se abren en una pestaña nueva y utilizan `rel="noopener noreferrer"`.
- El botón de compartir usa la API nativa del navegador o el portapapeles, sin enviar datos del usuario a un servidor propio.
- El texto del portal y las instrucciones para Android/iPhone pueden actualizarse editando `index.html`.

## Identificación del proyecto

- Nombre: **Mis herramientas digitales**.
- Repositorio: `juegolimpio/apps`.
- Dirección publicada: https://juegolimpio.github.io/apps/.
- Estado: **publicado en GitHub Pages**.
