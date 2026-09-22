# Clínica Vitelia — Reglas fijas del proyecto

Sitio web de Clínica Vitelia (antes "Dr. Miguel Paredes"), medicina estética
en La Ligua, V Región, Chile. Cliente real — el Dr. Miguel Paredes Soto es
tío de Rodolfo, quien es el freelancer construyendo el sitio.

Este archivo son las reglas que no cambian de sesión a sesión. El estado de
avance (qué se hizo, cuándo, por qué, commits) vive en `PROYECTO.md` — léelo
también, pero las reglas de abajo tienen precedencia si algo entra en
conflicto con una entrada vieja de PROYECTO.md.

- **Repo:** https://github.com/rodolforjs/dr-miguel-paredes-sitio (público)
- **Sitio en vivo:** https://clinicavitelia.cl/ (dominio propio, activado
  2026-09-22; el link de GitHub Pages https://rodolforjs.github.io/dr-miguel-paredes-sitio/
  sigue funcionando también, es el mismo sitio)
- **Working copy:** `~/Downloads/DrMiguelParedes_Sitio/` (raíz del repo —
  hasta el 2026-09-22 el sitio vivía en una subcarpeta `Intrio HTML/` con un
  redirect en la raíz; se aplanó la estructura para que las URLs del dominio
  propio queden limpias, ej. `clinicavitelia.cl/services.html` en vez de
  `clinicavitelia.cl/Intrio%20HTML/services.html`)
- **Template base:** Intrio (Designesia, licencia paga) — original intacto en
  `~/Downloads/Templates_Web/Intrio/Intrio HTML`, **nunca editar ahí directo**

## Reglas que no se rompen

1. **Nunca editar el template original de Intrio.** Todo el trabajo ocurre en
   la copia (raíz de este repo, `~/Downloads/DrMiguelParedes_Sitio/`).
2. **No reestructurar sin que Rodolfo lo pida explícitamente.** Reskinnear =
   solo colores, textos e imágenes en su lugar exacto. No quitar/reordenar
   secciones, menús ni componentes por iniciativa propia. Esto ya causó que
   se descartara un primer intento completo al inicio del proyecto.
3. **La tipografía es la original de Intrio** (Google Sans) — "solo colores/
   textos" NO incluye tipografía, aunque en algún momento se haya asumido lo
   contrario.
4. **No fabricar datos, nunca.** Años de experiencia, N° de pacientes,
   estadísticas, duración de procedimientos, contraindicaciones médicas —
   todo lo que no esté confirmado por el Dr. Paredes queda como placeholder
   explícito (`[AÑOS]`, `[Nº]`, `[MIN]`, `[SEM]`, `[A COMPLETAR CON EL DR.
   PAREDES]`). Nunca inventar cifras ni completar "a ojo".
   - **Excepción explícita (2026-09-19):** Rodolfo autorizó investigar y
     completar datos **técnicos/clínicos generales** (duración de un
     procedimiento, tiempo de recuperación, contraindicaciones médicas
     estándar por tipo de tratamiento) usando fuentes médicas y
     clinicariversso.cl como referente — esto NO es fabricar datos, es
     información pública sobre la técnica en general, no específica de
     los pacientes del Dr. Paredes. Mantener el disclaimer "Lista
     referencial — debe ser revisada y confirmada por el Dr. Paredes
     antes de publicar" en Contraindicaciones aunque se complete.
   - Esto NO aplica a datos personales/de negocio del propio Dr. Paredes
     (años de experiencia, N° de pacientes atendidos) — esos placeholders
     (`[AÑOS]`, `[Nº]`) nunca se completan por investigación, solo él
     los puede confirmar.
5. **Tratamientos nuevos deben verificarse antes de agregarse al catálogo.**
   Si el doctor pide sumar un tratamiento que no existía, investigar que sea
   real (su propio Instagram, Riversso como referente de información — nunca
   de código —, fuentes chilenas confiables) antes de crear la página. No
   basta con que "suene bien".
6. **Fotos de pacientes (antes/después, retratos) requieren consentimiento
   confirmado explícitamente antes de usarse.** Si no está claro si una foto
   nueva es de un paciente real con consentimiento, preguntar directo antes
   de publicarla — no asumir.
7. **No asociar una foto de paciente a un testimonio/nombre específico sin
   confirmación de que son la misma persona.** Es una atribución médica
   sensible. Si se quiere mostrar variedad de fotos junto a testimonios,
   hacerlo sin vincular 1 a 1 a un nombre (ver el bloque de antes/después
   del inicio como ejemplo ya resuelto así).
8. **Nunca guardar credenciales** (contraseñas, tokens de acceso) en
   memoria, en PROYECTO.md ni en ningún archivo del proyecto — ni siquiera
   si el usuario las pega en el chat. Anotar solo que la cuenta/integración
   existe.
9. **El repo es público por decisión explícita y repetida de Rodolfo**, pese
   a la advertencia sobre la licencia de Intrio. No volver a plantear el
   tema salvo que él pregunte.
10. **No importar código de otros templates o sitios de competidores.**
    Referencias visuales/de información sí se investigan (ej. clinicariversso.cl
    para estructura de catálogo de tratamientos), pero el código siempre se
    construye recombinando piezas del propio Intrio.

## Cómo trabajar con feedback ambiguo

- El feedback del Dr. Paredes suele llegar **relayado por Rodolfo** (notas de
  voz transcritas, capturas de WhatsApp/Instagram con comentarios cortos).
  Cuando un comentario relayado es ambiguo (p. ej. "allí coloca estética
  corporal" sobre la tarjeta equivocada), **preguntar con opciones concretas
  antes de implementar** — adivinar mal implica deshacer trabajo.
- Cuando la interpretación de un pedido puede llevar a una implicación
  médica/ética no verificada (atribución de resultados, afirmaciones sobre
  tratamientos), señalarlo explícitamente antes de tocar código, aunque el
  usuario no lo haya planteado como problema.
- Antes de prometer que una herramienta gratuita "simplemente funciona"
  (widgets, integraciones), **probarla en vivo con los datos reales** si es
  razonable hacerlo — una búsqueda web no siempre detecta que un servicio
  esté roto en la práctica (pasó con Fouita: la documentación decía "sin
  login, sin límites" pero falló en vivo).

## Decisiones de diseño ya tomadas (no re-litigar)

- **Dirección estética "Costa Serena":** paleta sand/ivory cálida +
  azul-grisáceo (`--primary-color: #5D7A88`), fondos oscuros neutros (no
  verde-teal). Archivos propios: `css/costaserena-theme.css` y
  `css/colors/scheme-costaserena.css`, cargados al final sin tocar el CSS
  del template.
- **Ubicación del negocio: La Ligua, V Región** (cambiado desde Concón,
  commit `f299a61`) — si aparece "Concón" en algún lugar nuevo, es un
  residuo viejo, corregir a La Ligua.
- **Nombre de marca: Clínica Vitelia — Medicina & Estética Avanzada.** El
  Dr. Paredes es "Director Médico de Clínica Vitelia", no la marca en sí —
  la clínica es la entidad principal en todo el copy, con espacio para que
  el equipo crezca (ver `feedback_no_restructure_templates` en memoria: el
  carrusel "Nuestro Equipo" con placeholders genéricos tipo "John Smith" se
  mantiene intacto a propósito, no se rellena con personas inventadas).
- **Logo:** `images/brand/logo-vitelia.png` (variante horizontal V2, blanca,
  sin fondo). El logo personal del Dr. Paredes se sacó del todo del sitio —
  decisión explícita de Rodolfo, no se dejó como firma.
- **Instagram del sitio: por ahora sigue siendo `@dr.miguelparedes_`**
  (personal, no `@viteliaclinic_`). Es cuenta profesional/Business — no
  intentar convertirla de nuevo ni sugerirlo, ya se decidió mantenerla como
  está.
- **Menú "Tratamientos" en mobile: corto, 5 ítems fijos.** 4 tratamientos
  específicos principales (Toxina Botulínica, Ácido Hialurónico, Endoláser,
  Evaluación Personalizada → `consultation.html`) + "Ver todos los
  tratamientos" → `services.html`. **No** los 11 tratamientos ni las 4
  categorías — ya se intentó ambas cosas y Rodolfo las rechazó
  explícitamente; el criterio es "mismo largo corto de siempre, pero con
  tratamientos concretos en vez de categorías". Las 4 categorías con su
  listado completo (`.col-lg-6.col-md-6` dentro de `.mega-tratamientos`)
  solo se muestran en **desktop** — en mobile quedan ocultas por completo,
  reemplazadas por los bloques `.mobile-featured-treatment`. Si se quiere
  cambiar cuáles son los "4 principales", preguntar primero — no es obvio
  cuáles son sin que Rodolfo lo confirme.
- **Antes/después en páginas de tratamiento: usar siempre el carrusel
  reutilizable** (`js/before-after-carousel.js`, `.ba-carousel` con
  `data-pairs` en JSON), no un `twentytwenty-container` suelto a mano. Con
  1 sola pareja las flechas se ocultan solas; con 2+, aparecen flechas +
  contador. Antes de crear una pareja nueva, revisar si ya existe una foto
  real sin usar en `images/real/` (pasó con `antes-despues-ojeras`, que
  venía en un solo archivo apilado y quedó sin usar hasta que se separó en
  2 archivos).
  - El slider interno es `twentytwenty-container` (jQuery plugin) — sus
    labels deben ir en español (`before_label: "Antes", after_label:
    "Después"`), el plugin trae "Before"/"After" en inglés por defecto.
  - Al inyectar un `.twentytwenty-container` dinámicamente hay que
    precargar las imágenes antes de llamar a `.twentytwenty()` (ver quirk
    más abajo).
  - Para ocultar/mostrar por JS un elemento que ya tiene clases `.d-flex`/
    `.d-none` de Bootstrap, usar `removeClass`/`addClass` entre esas dos
    clases — **nunca `.hide()`/`.show()` de jQuery**, pierden contra el
    `!important` de esas utilidades.
- Los 4 pasos "Agenda → Evaluación → Tratamiento → Seguimiento" viven en su
  propia sección (`#hero-proceso`, franja oscura "Cómo Funciona"), separados
  de la sección de testimonios+antes/después (`#hero-testimonials`) — ambas
  con `padding-top/bottom: 150px` (override sobre el default de Intrio de
  90px).

## Feed de Instagram (en vivo, con interruptor)

- Integración vía **Behold.so** (`js/instagram-feed.js`), no un widget de
  terceros con diseño propio — Behold entrega JSON crudo y las tarjetas se
  renderizan con el HTML/CSS que el sitio ya tenía.
- **Interruptor `FEED_ENABLED`** en `js/instagram-feed.js`: se puede apagar
  con un solo cambio (vuelve a las 3 tarjetas estáticas de respaldo) sin
  deshacer la integración. Preguntar a Rodolfo antes de asumir si debe estar
  prendido o apagado — puede querer apagarlo durante pruebas.
- Cache de 6h en `localStorage` para no gastar vistas del plan gratis
  (1.200/mes). Si el fetch falla por cualquier motivo, el sitio nunca se
  rompe — se queda con las tarjetas estáticas.
- Se muestran solo los 3 posts con más interacción (likes+comentarios) de
  los últimos que trae Behold, calculado en JS — nunca hardcodear cuáles
  posts mostrar.

## Agenda de evaluaciones (Reservo)

- `consultation.html` usa el `<iframe>` embed oficial de **Reservo**
  (`agendamiento.reservo.cl/makereserva/agenda/<id-de-la-agenda>`), el
  sistema de reservas que ya usa el Dr. Paredes. Reemplazó al formulario
  de contacto original de Intrio, que apuntaba a `action-consultation.php`
  — nunca funcionó en GitHub Pages (no hay backend PHP para procesarlo).
- El `<id-de-la-agenda>` en la URL es específico de la cuenta del Dr.
  Paredes — es un embed público, no requiere login de nadie para
  funcionar en el sitio. Cualquier reserva hecha ahí cae directo en su
  calendario real de Reservo.
- Los 25 botones "Agendar Evaluación" transversales del sitio ya apuntan
  a `consultation.html`, no hace falta tocarlos si se ajusta el widget.

## Flujo de verificación (antes de dar algo por terminado)

1. Servidor local: `python3 -m http.server <puerto>` en la raíz del repo.
2. Claude-in-Chrome para navegar y confirmar visualmente — no basta con
   verificar solo el HTML/grep, hay que verlo renderizado.
3. **Quirks conocidos de este entorno:**
   - Elementos `.wow` empiezan con `opacity:0` hasta que WOW.js los dispara
     por scroll — forzar `opacity:1; transform:none` por JS antes de
     capturar screenshots.
   - Las secciones con `.jarallax` (parallax de fondo fijo) interfieren con
     `scrollIntoView()` y con el scroll normal — usar el scroll nativo del
     `computer` tool (tick por tick) en vez de JS, o remover `.jarallax`
     temporalmente vía JS si hace falta medir posiciones.
   - El sitio usa **Lenis** (smooth-scroll) en todas las páginas —
     `window.scrollTo()`/`scrollIntoView()` no mueven nada (Lenis
     intercepta el scroll nativo, `document.documentElement.scrollTop`
     se queda en 0). Cuando el `computer` tool tampoco puede hacer
     scroll dentro de un iframe de emulación mobile, disparar eventos
     sintéticos `new WheelEvent('wheel', {deltaY, bubbles:true,
     cancelable:true})` sobre el `document` del iframe — eso sí lo
     respeta Lenis.
   - Intrio define `.d-flex { white-space: nowrap }` en su propio
     `style.css` (no es un override nuestro) — cualquier `.d-flex` que
     envuelva texto largo lo corta en vez de dejarlo pasar a la
     siguiente línea en mobile. Si aparece texto cortado dentro de un
     contenedor `.d-flex`, revisar esto primero antes de asumir que es
     un bug nuestro; se soluciona con `white-space: normal` +
     `min-width: 0` en el hijo con el texto, en `costaserena-theme.css`.
   - Intrio trae `#mainmenu li li a { color: rgb(96,96,96) }` en su propio
     `style.css` — cualquier link nuevo de 2 niveles de profundidad dentro
     del nav que dependa de heredar el blanco de un `h4`/ancestro padre
     puede salir gris/oscuro en vez de blanco, porque una regla que
     apunta directo al `<a>` siempre le gana a la herencia, sin importar
     la especificidad del ancestro. Declarar el color explícito (con
     `!important` si hace falta) en vez de confiar en la herencia.
   - `getComputedStyle()` sobre elementos dentro de un **iframe anidado**
     (el usado para emular mobile) puede devolver valores obsoletos varias
     veces seguidas, incluso después de confirmar por CSSOM que la regla
     correcta está cargada y matchea el elemento — pasó varias veces en
     esta sesión con `color`. Si `getComputedStyle` contradice lo que el
     CSSOM dice que debería pasar, **confiar en el screenshot visual**, no
     seguir depurando por ese lado — es un artefacto de este entorno, no
     necesariamente un bug real del sitio.
   - Si se inyecta un `.twentytwenty-container` dinámicamente (no en la
     carga inicial de la página), hay que **precargar las imágenes**
     (`new Image()` + esperar `onload`) antes de llamar a `.twentytwenty()`
     — si no, el plugin mide alto 0 porque la imagen aún no cargó.
   - Cache de CSS del navegador: al recargar un HTML servido por
     `http.server`, el navegador puede seguir sirviendo una versión vieja
     del `<link>` de CSS — cachebustear con `?bust=timestamp` en el `href`
     del link, no solo en la URL de la página.
4. Matar el servidor local (`lsof -ti:<puerto> | xargs kill`) al terminar.
5. Commit + push, con mensaje descriptivo en español, terminando en
   `Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>`.
6. Actualizar `PROYECTO.md` con una sección nueva describiendo qué se hizo,
   commitear eso aparte.

**Por qué el archivo local a veces no coincide con GitHub Pages:**
Rodolfo a veces edita los `*.html` directo con su editor, en
paralelo a esta sesión. Eso es normal y no es un bug — el archivo local
solo se refleja en GitHub Pages (y en `git status` para otras sesiones)
después de `git add` + `commit` + `push`. Si Rodolfo pregunta por qué su
navegador no muestra un cambio: (1) confirmar si abrió el archivo local
(`file://...`) o la URL de GitHub Pages — son cosas distintas; (2) correr
`git status`/`git diff` para ver qué hay sin commitear; (3) recordar que
GitHub Pages tarda uno o dos minutos en redesplegar después del push.

## Convenciones técnicas del repo

- **Lista canónica de páginas reales** (no las huérfanas de demo que trae
  Intrio): mantenida en `/tmp/realpages.txt` durante las sesiones — 25
  páginas a la fecha (23 originales + `tratamiento-endolaser.html` +
  `tratamiento-remodelado-gluteos.html`). Cualquier cambio transversal
  (nav, footer, meta tags) debe aplicarse a esta lista, no a `*.html` a
  ciegas (eso toca también páginas demo fuera de alcance).
- **`.gitignore`** excluye `Recursos/` (fotos crudas sin optimizar, HEIC/PNG
  de cámara) y `Logo Clínica Vitelia/` (archivos fuente de diseño, PSD/
  .afdesign) — solo se versionan los assets finales procesados en
  `images/`.
- **Nombres de fotos reales** en `images/real/`: descriptivos en español
  (`servicio-laser-fibra.webp`, `torso-ginecomastia.webp`,
  `antes-despues-<zona>-antes/despues.webp`). Antes de crear contenido
  nuevo que necesite una foto, revisar si ya existe una real sin usar en
  esa carpeta antes de pedir una nueva o usar una genérica.
- **Reskins/cambios transversales grandes:** hacer con scripts (Python/sed)
  que reporten conteo de coincidencias por archivo, y verificar con un grep
  final de que no quedó nada suelto — no confiar en que un solo `.replace()`
  cubrió todos los casos (pasó antes con textos en inglés que sobrevivieron
  varias pasadas).
- **Fotos pegadas por el usuario en el chat** a veces quedan en una ruta
  temporal de macOS (`.../NSIRD_screencaptureui.../...`) que el tool de
  lectura de imágenes puede ver pero Bash/PIL no puede tocar (permisos TCC
  de macOS, "Operation not permitted"). Si pasa, pedirle a Rodolfo que
  guarde el archivo en `Recursos/` (ya gitignored) antes de procesarlo.
- **Archivos `.HEIC`** (comunes en fotos de iPhone): Pillow en este entorno
  no tiene soporte HEIC — convertir primero con `sips -s format jpeg
  archivo.HEIC --out salida.jpg` (nativo de macOS) antes de abrir con PIL.
- **Antes de reemplazar una foto real, revisar si el archivo se comparte
  entre varias páginas** (`grep -rl nombre-archivo.webp *.html`) — varias
  fotos de `images/real/` se reusan en más de un tratamiento/blog post. Si
  es compartida, no sobreescribir el archivo: crear uno nuevo y actualizar
  solo las referencias que correspondan al tratamiento en cuestión.
- **Datos de contacto reales:** correo `viteliaclinic@gmail.com`, WhatsApp
  `+56 9 6776 5335` (link `wa.me/56967765335`), dirección `Santa Teresa
  580, La Ligua, V Región`. Aparecen en 3 bloques compartidos por las 25
  páginas (panel off-canvas, footer, y el bloque propio de
  `contact.html`/`consultation.html`). **Los links de correo van a Gmail
  web, no a `mailto:`** — Rodolfo pidió explícitamente que siempre abra
  Gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=viteliaclinic@gmail.com`
  con `target="_blank"`.

## Contexto de negocio (no resuelto, no asumir)

- **Precio:** Rodolfo y el Dr. Paredes no han cerrado el monto todavía —
  es una conversación entre ellos, no algo que resolver en el código.
- **Dominio propio:** el sitio sigue en GitHub Pages, sin dominio propio
  comprado todavía.
- **Alcance "medicina general + estética":** el Dr. Paredes pidió en algún
  momento ampliar el posicionamiento más allá de estética pura — **no
  tocar copy/estructura sobre esto** hasta que él especifique qué otros
  servicios de salud general ofrece. No fabricar servicios.
