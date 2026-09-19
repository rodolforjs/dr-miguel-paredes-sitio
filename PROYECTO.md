# Dr. Miguel Paredes — Estado del proyecto

> **Para retomar en una sesión nueva:** pega esto en Claude Code, en el
> directorio `~/Downloads/DrMiguelParedes_Sitio`:
>
> ```
> Lee PROYECTO.md completo. Estoy retomando el sitio del Dr. Miguel Paredes.
> ```

## Qué es esto

Sitio web para el Dr. Miguel Paredes Soto, médico especialista en
medicina estética facial y corporal, Concón (V Región, Chile). Cliente
real — sobrino (Rodolfo) es el freelancer haciendo el sitio.

- **Repo:** https://github.com/rodolforjs/dr-miguel-paredes-sitio (público)
- **Sitio en vivo:** https://rodolforjs.github.io/dr-miguel-paredes-sitio/
- **Working copy local:** `~/Downloads/DrMiguelParedes_Sitio/Intrio HTML/`
- **Template base:** Intrio (Designesia, licencia paga) — original intacto en
  `~/Downloads/Templates_Web/Intrio/Intrio HTML` (NUNCA editar ahí directo)

## Reglas de trabajo (no romper)

1. **Nunca editar el template original.** Todo el trabajo ocurre en la copia
   dentro de `Intrio HTML/` en este repo.
2. **No reestructurar el template sin que Rodolfo lo pida explícitamente.**
   Al reskinnear: solo colores, textos e imágenes en su lugar exacto — no
   quitar/reordenar secciones ni menús por iniciativa propia. (Ya pasó una
   vez: primer intento fue descartado por esto.)
3. **"Solo colores" no incluye tipografía.** La tipografía es la original de
   Intrio (Google Sans) — no cambiar sin que lo pidan.
4. **No fabricar datos.** Años de experiencia, N° de pacientes, teléfono,
   email siguen como `[PENDIENTE]`/`[Nº]` hasta que el Dr. Paredes los
   confirme. Nunca inventar cifras.
5. **Fotos de pacientes (antes/después) requieren consentimiento explícito
   confirmado por Rodolfo antes de usarse** — ya lo dio para las 4 que están
   en `images/real/antes-despues-*.webp`, pero no están usadas en ninguna
   página todavía.
6. **No importar código de otros templates/sitios pagados.** Referencias
   visuales o de información sí se investigan y adaptan, pero el código
   siempre se construye recombinando piezas del propio Intrio (ya tiene
   `de_count`, `owl-carousel`, `ul-check`, etc.) para no pisar otra licencia.
7. Este repo es **público por decisión explícita y repetida de Rodolfo**,
   pese a que se le advirtió sobre la licencia de Intrio. No volver a
   plantear el tema salvo que él pregunte.

## Dirección de diseño — "Costa Serena"

Paleta cálida (sand/ivory) con acento azul-grisáceo **extraído directo del
CSS de shaferplasticsurgery.com** (no adivinado):

| Variable | Valor |
|---|---|
| `--primary-color` | `#5D7A88` |
| `--secondary-color` | `#D6DFE2` |
| `--bg-default` | `#F5F0E6` (sand cálido) |
| `--bg-dark-1` | `#26323A` (gris-azulado, NO verde) |

Archivos propios (no tocan el CSS del template): `Intrio HTML/css/costaserena-theme.css`
y `Intrio HTML/css/colors/scheme-costaserena.css`, cargados al final del
`<head>` en `index.html`.

**Referentes elegidos por Rodolfo** (orden de preferencia):
1. [Shafer Clinic](https://www.shaferplasticsurgery.com/) — blanco minimalista, mucho aire
2. [Clínica Lo Arcaya](https://clinicaloarcaya.cl/implante-capilar/) — precios reales, CTA fuerte, WhatsApp flotante
3. [Aesthetics Geneva](https://www.aesthetics-ge.ch/) — ultra minimalista, wordmark serif gigante

**Referente de información** (no visual): [Clínica Riversso](https://clinicariversso.cl/tratamientos)
— clínica competidora en Concón. Patrón de página de tratamiento a adoptar
(ver sección "Próximo paso" abajo).

## Datos reales confirmados (de fotos, no inventados)

- **Nombre completo:** Dr. Miguel Paredes Soto
- **Credenciales verificadas:** miembro SOCHIMCE (Sociedad Chilena de
  Medicina y Cirugía Estética, IX Congreso 2024), asistente BAAS
  International Congress
- **Instagram:** @dr.miguelparedes_ — CTA siempre "escríbeme por DM", sin
  link de agenda (gap a resolver con Cal.com u otro)
- **Tratamientos reales:** Ginecomastia (especialidad/posicionamiento
  fuerte), Plasmage, Estética Facial, Estética Corporal, Perfiloplastia,
  Antienvejecimiento (posible rebranding a "Medicina Estética Regenerativa",
  visto en una bata)

## Estado actual del sitio (`index.html`, único homepage)

Hecho:
- Homepage única (se eliminaron index-2/3/4/5.html y el dropdown demo
  "5 Homepages" / columna "Homepages" del menú More, en las 19 páginas)
- Hero + About portados del layout "index 1" (foto real + firma placeholder
  "John Smith", pendiente de reemplazo — Rodolfo lo hará después)
- Colores Costa Serena aplicados
- 18 de 30 fotos reales nuevas integradas (hero, about, fondos, 6 tarjetas
  de servicios) — reemplazan capturas de Instagram y gradientes placeholder
- Testimonios con citas reales de comentarios de Instagram
- FAQ, footer, sección "Instagram" (ex-Blog) con contenido real
- **Blog real (2026-09-18):** `blog.html` dejó de ser el demo de
  interiorismo de Intrio — ahora lista 6 artículos reales:
  `blog-ginecomastia.html`, `blog-piel.html`, `blog-plasmage.html`,
  `blog-perfiloplastia.html`, `blog-filosofia.html` y
  `blog-congresos.html` (nuevo, sobre formación médica continua —
  SOCHIMCE, BAAS, AMLC, Máster FACOP — con fuentes citadas y
  enlazadas, URLs verificadas por búsqueda antes de citarlas). El
  carrusel "Contenido Educativo" y la sección "Instagram" del
  homepage ahora enlazan a estos artículos reales (antes apuntaban a
  `project-single.html`/`blog-single.html`, páginas demo nunca
  tocadas, con imágenes placeholder en blanco). Contenido grounded en
  lo investigado del Instagram real + datos de credenciales ya
  verificados — sin fabricar nada; los artículos médicos incluyen
  nota de que es información educativa general, no diagnóstico. Se
  quitó la sección de comentarios falsos del template (no se puede
  fabricar testimonios de pacientes).
- **Ajustes 2026-09-18 (continuación):** clase `.blog-thumb-fixed`
  (320px + object-fit:cover) en las tarjetas de `blog.html` y en la
  sección "Instagram" del home, para que las fotos de proporciones
  muy distintas no se vean irregulares. El carrusel "Contenido
  Educativo" del home quedó **oculto** (comentado en `index.html`,
  no borrado) por pedido de Rodolfo — se sentía repetido con la
  sección Instagram de abajo. Esa sección Instagram ahora muestra los
  3 posts más recientes (Filosofía, Congresos, Ginecomastia) en vez
  de fijos. Los artículos de Ginecomastia, Piel y Perfiloplastia se
  ampliaron con fuentes chilenas verificadas (SCCP, SciELO Chile,
  Unidad Ozono/MMA, SOCHIDERM, ISP Chile).
- **Footer con altura de texto reducida (2026-09-18):** el h2 "Agenda
  tu Evaluación" (48px) y los h3 de email/WhatsApp/ubicación (26px)
  se veían desproporcionados — regla CSS transversal en
  `costaserena-theme.css` (`footer h2:not(.hs-5)`, `footer .widget
  h3`) que los reduce en los footers de **todas** las páginas a la
  vez.
- **Títulos de tarjetas de blog resumidos, no truncados:** en vez de
  cortar con "..." (se veía mal), cada tarjeta usa una versión corta
  y natural del título (ej. "Formación médica continua" en vez del
  título largo del artículo) — el `<h1>` completo del artículo no se
  toca.
- **5 páginas reskinneadas (2026-09-18):** `about.html`,
  `contact.html`, `faq.html`, `consultation.html` y
  `testimonials.html` estaban enlazadas desde el nav real pero
  seguían 100% demo de Intrio (nunca se habían tocado — se descubrió
  al revisar el footer de `services.html`). Ahora tienen logo/footer
  reales, y su contenido (bios, FAQ, testimonios, contacto,
  formulario de evaluación) reusa lo mismo ya verificado en
  `index.html` — nada fabricado. El formulario de `contact.html` y
  `consultation.html` sigue sin backend real (apunta a
  `contact.php`/`action-consultation.php`, que no existen) — pendiente
  de un servicio real (Web3Forms/Formspree) o de que el sistema de
  agenda (ver abajo) lo reemplace.
- **Corrección (2026-09-18, mismo día):** Rodolfo aclaró que el sitio
  se piensa como una **clínica** (no la página personal de un
  freelancer) — pidió recuperar la sección de equipo que trae el
  template original de Intrio, en vez de quitarla. El heading "Agenda
  tu Evaluación" del footer (antes solo decorativo) ahora es un link
  real a `consultation.html`, transversal en las 23 páginas con
  footer real.
- **Corrección de nuevo el mismo día:** Rodolfo aclaró que se refería
  literalmente al carrusel "Our Team" que trae Intrio de base (2
  personas, foto+nombre+rol+redes) — no a la versión simplificada que
  se había armado antes. `about.html` ahora tiene ese componente
  restaurado tal cual (fotos y nombres "Anna Charline"/"John Smith"
  como **placeholders explícitos**, mismo patrón que la firma "John
  Smith" del About — Rodolfo los reemplaza cuando haya personal real),
  solo con el subtítulo/título/descripción de la sección traducidos
  al español. El link "Sobre el Dr. Paredes" del nav (30 páginas) se
  renombró a **"Sobre Nosotros"**, con su `<title>`/`<h1>`/breadcrumb
  actualizados en `about.html`.
- **Dropdown "More" del nav, columna y bloque de contacto (2026-09-18,
  mismo día):** seguían con "Our Services" (Furniture & Decor
  Selection, etc.) y contacto falso (Monday-Saturday, 100 S Main St
  New York, contact@intrio.com) en las 23 páginas reales. Esa columna
  se probó primero como "Contenido Educativo" (enlazando a los 6
  artículos del blog), pero Rodolfo pidió que fuera de tratamientos
  en su lugar — quedó como "Tratamientos" con 5 destacados + "Ver
  todos los tratamientos". El bloque de contacto tiene foto real +
  `[HORARIO PENDIENTE]` + Concón + email real. Nota: el panel
  off-canvas (el que abre el
  ícono de hamburguesa extra, distinto de este dropdown) todavía
  tiene su propio "Our Services" demo — sigue fuera de alcance salvo
  que Rodolfo lo pida.

Pendiente / placeholders explícitos en el código:
- `[AÑOS]`, `[Nº] Pacientes Atendidos` en contadores del About
- `[EMAIL PENDIENTE]`, `[TELÉFONO PENDIENTE]` en contacto y footer
- 2 preguntas del FAQ marcadas `[POR CONFIRMAR CON EL DR. PAREDES]`
- Video banner sin video real (CTA deshabilitado con comentario TODO)
- Firma "John Smith" en About (Rodolfo la reemplaza después)
- Menú de navegación: "Inicio", "Tratamientos" y los 3 destinos del
  submenú "More" (Sobre el Dr. Paredes/Preguntas Frecuentes/
  Testimonios) ya en español; "More"/"Blog"/"Contact" (las etiquetas
  del nav en sí) y el mini-box de horario/dirección dentro del
  dropdown "More" siguen en inglés — decisión pendiente de cuándo
  traducir el resto
- Sistema de agenda real (Cal.com u otro) no integrado
- Revisar si `miguel1.mp4`/`miguel2.mp4` (en `Recursos/`) sirven para el
  video banner deshabilitado
- **"Projects" oculto del nav** (2026-09-18): era contenido 100% demo
  de Intrio (portfolio de interiorismo), nunca reskinneado, sin sentido
  para el sitio. Se quitó del menú en las 24 páginas; las páginas demo
  (`projects.html`, `projects-style-2.html`, `project-single.html`)
  siguen existiendo pero sin enlazar. Ideas pendientes de Rodolfo para
  reusar esa sección más adelante: (a) galería "Resultados" que junte
  todos los antes/después reales en una sola página con el slider
  interactivo, o (b) "Nuestro Espacio" con fotos de la consulta.

## Assets

- `Intrio HTML/images/real/` — 18 fotos reales optimizadas y curadas
  (retratos, tratamientos, credenciales, 4 antes/después con consentimiento)
- `Intrio HTML/images/brand/` — logo "M" recortado del Instagram, fotos
  originales de perfil/Plasmage extraídas del Instagram
- `reference-images/` (raíz del repo) — capturas de Instagram usadas como
  fuente/reference, ya extraídas
- `Recursos/` (raíz, **gitignored**, no está en el repo) — las 30 fotos
  originales sin procesar (HEIC/PNG pesados con EXIF) que Rodolfo pasó;
  las que se usaron ya están optimizadas en `images/real/`

## Páginas de tratamientos (hecho 2026-09-18, ampliado 2026-09-18)

`services.html` es el listado de **9 fichas específicas** (no 6
categorías amplias — se desglosó siguiendo el patrón de
clinicariversso.cl/tratamientos, con evidencia real detrás de cada una):

`tratamiento-ginecomastia.html`, `tratamiento-plasmage.html`,
`tratamiento-perfiloplastia.html`, `tratamiento-antienvejecimiento.html`,
`tratamiento-toxina-botulinica.html`, `tratamiento-acido-hialuronico.html`,
`tratamiento-alidya.html` (anticelulítico), `tratamiento-evaluacion-facial.html`,
`tratamiento-evaluacion-corporal.html`.

**Retirados:** `tratamiento-estetica-facial.html` y
`tratamiento-estetica-corporal.html` (demasiado genéricas, reemplazadas
por las específicas de arriba).

**Deliberadamente NO agregado:** HIFU 12D, Emsculpt Neo, Mesoterapia,
Exosomas, Sky Glow, Skin Architecture, Bioregeneradores, Peelings,
Endoláser — todos vistos en el catálogo de Riversso, pero son
equipos/técnicas específicas de esa clínica sin evidencia de que el Dr.
Paredes los tenga. **Pendiente: Rodolfo le pasa esta lista a su tío para
que marque cuáles sí ofrece**, y ahí se agregan con contenido real.

Cada página de detalle tiene: hero + breadcrumb, barra de stats
(`de_count`), "Acerca del Tratamiento", Beneficios como **grid de 4
tarjetas con ícono** (no lista de checks — patrón visual que le gustó a
Rodolfo, tomado del bloque "What's Included" de `service-single.html`),
Proceso en 4 pasos, Antes/Después (solo donde hay foto real con
consentimiento: Plasmage, Ácido Hialurónico, Antienvejecimiento) — con
**slider interactivo arrastrable** (componente `twentytwenty`, jQuery
open-source que ya trae el template Pooluxe de Designesia; su CSS ya
estaba en `plugins.css` de Intrio, solo se copió el JS del plugin +
su dependencia `jquery.event.move.js`). Cada foto antes/después se
separó del collage original en dos archivos (`-antes.webp`/
`-despues.webp`) para alimentar el slider.
Cuidados Posteriores + Contraindicaciones (`ul-check`, con nota
explícita de que las contraindicaciones son referenciales y deben ser
revisadas por el Dr. Paredes antes de publicar — no se fabricó ninguna
indicación médica específica; en las 2 páginas de Evaluación se omiten
estas secciones por no aplicar), y CTA de cierre. Todo construido
recombinando componentes que ya existían en Intrio, sin importar código
de otro template.

Datos reales agregados en esta pasada: Perfiloplastia dura "hasta 18
meses" (caption real de IG), Alidya es el método real que usa para
celulitis (post de colaboración con @alidyachile).

Contenido grounded en info real de Instagram/historias (no inventado):
captions reales de ginecomastia ("1 de 5 consultas estéticas masculinas en
Chile"), Plasmage, piel. Perfiloplastia/Estética Corporal/Antienvejecimiento
usan descripción general de la técnica (términos estándar de medicina
estética) ya que no había caption específico — revisar con el Dr. Paredes.

**Hecho 2026-09-18 (continuación):** se agruparon en categorías tipo
Riversso. El dropdown "Tratamientos" del nav ahora es un mega-menu de 4
columnas (Estética Facial / Estética Corporal / Medicina de la
Longevidad / Estética Masculina), mismo patrón visual del menú "More"
que ya traía Intrio. `services.html` tiene chips de filtro (`#filters`
+ `#gallery`) reusando el sistema Isotope.js nativo de Intrio
(`js/designesia.js`, sin JS nuevo) — patrón de markup tomado del propio
`gallery.html` de Pooluxe (otro template de Designesia que Rodolfo
posee). También se tradujo "Home" → "Inicio" en nav y breadcrumbs en
las 24 páginas.

## Datos adicionales encontrados en Instagram (historias, 2026-09-18)

- **Nombre legal completo:** Miguel Angel Paredes Soto, nacido 11/04/1988,
  nacionalidad extranjera (venezolano)
- **Título de Médico Cirujano:** Universidad del Zulia, Venezuela, 2015
- **Registro en Chile:** Superintendencia de Salud, RUN 26.730.052-6,
  inscrito 04/09/2020, aprobó EUNACOM 26/10/2020 — **da pie a decir ~5-6
  años ejerciendo en Chile o ~10-11 años como médico**, pero confirmar
  con él el framing exacto antes de reemplazar el placeholder `[AÑOS]`
- **Máster en Armonización Facial** — FACOP (Faculdade do Centro Oeste
  Paulista, Brasil), 135 horas, 2024
- **Congresos confirmados:** SOCHIMCE (IX Congreso 2024), BAAS
  International Congress, AMLC 2024 (Santiago, 13-14 junio, Teatro
  Fundación CorpArtes)
- **@clinicariversso**: aparece etiquetado en un post de colaboración
  puntual (no es su lugar de trabajo — confirmado por Rodolfo)
- Highlight "Antes y Después" menciona **"Rinolips"** — posible técnica/
  producto adicional no explorado aún

## Reskin de páginas reales + sección Tratamientos del inicio (2026-09-18)

Se reskinnearon las 5 páginas del nav/mega-menu que seguían 100% demo de
Intrio: `about.html`, `contact.html`, `faq.html`, `consultation.html`,
`testimonials.html`. Contenido real (testimonios, FAQ, datos de
contacto) reutilizado de lo que ya existía en `index.html`. `about.html`
tiene la sección "Nuestro Equipo" — Rodolfo pidió explícitamente
mantener **literal** el carrusel original de Intrio (`#team-carousel`,
2 personas "Anna Charline"/"John Smith" como "Web Developer", fotos
stock `images/team/2.webp` y `3.webp`) como placeholder para cuando se
sume más personal — no simplificar ni reemplazar por mi cuenta. Nav
"Sobre el Dr. Paredes" → "Sobre Nosotros". Footer transversal (23
páginas): "Agenda tu Evaluación" ahora es un link real a
`consultation.html`, y los tamaños de texto del footer se redujeron
con `clamp()` en `costaserena-theme.css` (`footer h2:not(.hs-5)`,
`footer .widget h3`). Dropdown "More" → columna central cambiada de
"Contenido Educativo" a "Tratamientos" con links reales.

Se movió la sección Tratamientos del inicio a justo debajo del hero
(antes estaba más abajo). Su carrusel (`#services-carousel`) estaba
desactualizado: solo 6 de 9 tratamientos, 2 ítems genéricos sin
actualizar ("Estética Facial"/"Estética Corporal" sueltos) y todos los
links apuntaban a `service-single.html` (página demo huérfana, no
real). Se reemplazó por una grilla de 4 tarjetas por categoría
(inspirada en la sección "Medicina Estética" de clinicariversso.cl —
solo como referencia de estructura, nunca copiando su código/visuales
ni sus números fabricados): Estética Facial (5), Estética Corporal
(2), Medicina de la Longevidad (1), Estética Masculina (1) — conteos
reales verificados contra el grid de `services.html`, cada tarjeta con
foto real de `images/services/`, badge de conteo, y link a
`services.html`.

**Corrección (2026-09-18, mismo día):** Rodolfo pidió dejar la
presentación tal como estaba antes (carrusel `owl-4-cols-center` con
flechas `de-custom-nav`, no grilla estática) — lo único que faltaba
era el badge de conteo en cada tarjeta y un botón "Ver todos los
tratamientos". Se restauró el carrusel original con los 4 ítems de
categoría (en vez de tratamientos individuales), cada uno con su
badge, y se agregó el botón junto a las flechas de navegación en el
encabezado de la sección.

**Pendiente para próxima sesión:** formularios de `contact.html` y
`consultation.html` apuntan a PHP inexistente (`contact.php`,
`action-consultation.php`) — necesitan Web3Forms/Formspree o
integración con un sistema de agenda real. El panel lateral off-canvas
(`#extra-wrap`, ícono hamburguesa `#btn-extra`, distinto del dropdown
"More") todavía tiene contenido demo "Our Services" sin actualizar en
algunas páginas.

## Nav en español + CTA homologado (2026-09-18)

El nav de las 23 páginas reales tenía dos ítems de primer nivel sin
traducir ("More"/"Contact") — ahora "Más"/"Contacto". Además el botón
CTA del header era inconsistente: 22 páginas ya decían "Agendar
Evaluación" pero `index.html` seguía con "Free Consultation" en
inglés (quedó así desde el primer reskin, nunca se homologó). Se
verificó con grep que las 23 páginas reales comparten exactamente el
mismo texto de CTA ahora. Commit `022e00c`. El panel off-canvas
`#extra-wrap` sigue teniendo su propio nav duplicado con texto en
inglés en algunas páginas (fuera de alcance de este cambio, ver nota
de arriba sobre contenido demo "Our Services" pendiente).

## Auditoría general de consistencia (2026-09-18)

Rodolfo pidió una auditoría completa ("revisa") tras notar inglés
suelto en algunas vistas. Se encontró y corrigió contenido demo de
Intrio que había quedado sin tocar en pasadas anteriores (parches
previos solo tocaron el nav visible, no todo el contenido oculto):

- **Dropdown "Más" del nav** en `blog.html` + los 6 artículos
  individuales de blog: aún tenían la columna "Our Services" (lista
  de interior design falsa) y el bloque de contacto en inglés con
  "100 S Main St, New York" / `contact@intrio.com`. Reemplazado por
  Tratamientos reales + contacto real.
- **Panel lateral off-canvas (`#extra-wrap`)** de `services.html`:
  estaba 100% intacto del demo — "Latest Projects" (4 fotos de
  interiorismo falsas enlazando a `project-single.html`), "Our
  Services", "Contact Us" con dirección de NY, e íconos sociales de
  Facebook/Twitter/YouTube que la clínica no tiene. Reemplazado por
  el mismo patrón (Tratamientos + Contacto + bio corta + solo
  Instagram/WhatsApp) que ya tenían las otras 22 páginas.
- **Panel off-canvas y footer de `index.html`**: habían quedado en
  una versión híbrida vieja — links muertos a `projects.html` y
  `project-single.html` (páginas huérfanas eliminadas hace tiempo),
  nombres de categoría genéricos ("Estética Facial"/"Estética
  Corporal" apuntando a `services.html` en vez de a la página de
  tratamiento específico), y los mismos íconos sociales falsos de
  Facebook/Twitter/YouTube. Homologado al patrón del resto del sitio.

Verificado por grep que ya no queda ningún rastro de "Intrio",
"Designesia", direcciones de EE.UU., o contenido de interiorismo en
las 23 páginas reales; footers y paneles off-canvas ahora son
idénticos en estructura entre las 23 (solo cambia el ítem de nav que
se omite en la página actual — patrón normal del template). Verificado
visualmente abriendo el panel off-canvas vía JS (el botón hamburguesa
usa `#btn-extra`, no `#menu-btn`). Commit `fcfd61e`.

**Nota:** el hallazgo confirma que los "reskins transversales" previos
(que reemplazaban un string exacto vía `.replace()`) fallan
silenciosamente si el string exacto no coincide en todos los archivos
— páginas creadas o copiadas en momentos distintos pueden quedar
desincronizadas sin que el conteo de reemplazos lo delate, porque el
script simplemente no encuentra coincidencia y sigue. Vale la pena, al
cerrar una pasada de "arregla todas las páginas", correr un grep de
verificación final sobre TODO el archivo (no solo el nav visible) en
vez de confiar en el conteo de reemplazos del script.

## Auditoría de copy (2026-09-18)

Revisión de texto (títulos, meta descriptions, encabezados, párrafos)
en las 23 páginas reales. El copy en general está sólido: consistente,
sin errores de tipeo, con los disclaimers correctos ("Información
educativa general", "Lista referencial — debe ser revisada y
confirmada por el Dr. Paredes") en todos los artículos y páginas de
tratamiento que corresponde. Encontrado y corregido:

- **Capitalización de marcas en CTA:** "Conversemos sobre alidya
  (anticelulítico)" y "Conversemos sobre plasmage" tenían el nombre de
  marca en minúscula (el resto del copy sí capitaliza "Alidya" y
  "Plasmage" como nombres propios). Corregido en ambas páginas.
  Commit `d058dfc`.

**Pendiente — requiere dato real del Dr. Paredes, no se fabrica:**

- `tratamiento-antienvejecimiento.html`: `[MIN]` (duración de la
  evaluación) y `[SEM]` (resultados progresivos) sin llenar en la
  barra de stats.
- `tratamiento-ginecomastia.html`: `[MIN]` (duración del
  procedimiento) y `[SEM]` (recuperación estimada) sin llenar.
- `tratamiento-perfiloplastia.html`: `[MIN]` (duración del
  procedimiento) sin llenar.
- `tratamiento-plasmage.html`: `[SEM]` (resultados visibles) sin
  llenar.

**Para revisar con Rodolfo (no es error, pero vale la pena confirmar):**

- `tratamiento-alidya.html` tiene el stat "El 90% De las mujeres tiene
  celulitis" sin fuente citada — otros stats similares del sitio sí
  citan su fuente (ej. el dato de ginecomastia cita SciELO/SCCP, el de
  radiación UV cita el Ministerio del Medio Ambiente). Sería bueno
  agregar la fuente o confirmar que es un dato de dominio público que
  no necesita cita.

## Altura uniforme de fotos de tratamientos (2026-09-18)

Rodolfo notó que las fotos del carrusel de "Nuestras Especialidades"
(inicio) se veían de alturas distintas entre sí (efecto del carrusel
`owl-4-cols-center`, pero la causa real era que las fotos de
`images/services/*.webp` tienen relaciones de aspecto muy distintas —
desde 1.33 hasta 1.90 — y las tarjetas no recortaban a una altura
pareja). Pidió que todas midieran lo mismo, un promedio entre la más
grande y la más chica actuales, cuidando la responsividad.

Se agregó `.treatment-thumb` en `costaserena-theme.css` con
`aspect-ratio: 1 / 1.618` (promedio medido en ambos contextos donde se
usan estas fotos) en vez de una altura fija en px — a diferencia de
`.blog-thumb-fixed` (que sí es una altura fija de 480px), `aspect-ratio`
escala de forma fluida en cualquier ancho de columna o viewport, así
que no hace falta media queries para que se vea bien en mobile/tablet/
desktop. Aplicada a las mismas 9 fotos (`images/services/1-9.webp`) en
sus dos usos: el carrusel de 4 categorías del inicio y la grilla de 9
tratamientos de `services.html`. Verificado visualmente en ambas
páginas — todas las tarjetas quedan con la misma altura. Commit
`a8aa2a6`.

**Corrección (2026-09-18, mismo día):** Rodolfo primero pidió no tocar
services.html, luego cambió de opinión y pidió que también quedara
parejo ahí ("pasemoslo a service también, que sean todas iguales") —
`.treatment-thumb` está de vuelta en las 9 fotos de `services.html`,
igual que en el carrusel del inicio. Verificado visualmente: las 9
tarjetas de la grilla quedan con la misma altura. Commit `100ad12`.

## Nombre real en la firma "Sobre el Doctor" (2026-09-18)

El bloque de firma bajo la foto/bio ("Sobre el Doctor", tanto en el
inicio como en about.html) mostraba el nombre placeholder "John Smith"
bajo la imagen de firma (`images/misc/signature.webp`). Rodolfo pidió
cambiarlo — a diferencia del carrusel "Nuestro Equipo" (que sí se deja
igual a propósito, ver nota de sesión anterior), esta firma es del
propio Dr. Paredes, no un placeholder de equipo futuro. Cambiado a
"Dr. Miguel Paredes Soto" en ambas páginas. El carrusel "Nuestro
Equipo" de about.html sigue con "Anna Charline"/"John Smith" intacto,
sin tocar. Commits `2640022` (inicio), `6cf06e3` (about.html).

## Dropdown "Más": quitar columna Tratamientos repetida (2026-09-18)

Rodolfo notó que el dropdown "Más" del nav repetía la lista de
tratamientos que ya está completa en el mega-menu "Tratamientos" de al
lado (4 categorías). Se quitó esa columna en las 23 páginas reales y
las 2 columnas restantes (Sobre Nosotros/FAQ/Testimonios + tarjeta de
contacto) pasaron de `col-lg-4` a `col-lg-6` para repartirse el
espacio libre. Verificado visualmente: el dropdown queda con 2
columnas balanceadas, sin aire de más ni contenido redundante. Commit
`38a95f8`.

## Dropdown "Más": patrón chico original de Intrio (2026-09-18)

Rodolfo pidió sacar la tarjeta de contacto (foto + horario + ubicación
+ email) del dropdown "Más" y dejar solo los 3 links, con un hover
"chico, lo necesario" — como lo mostraba Intrio originalmente. Se
encontró el patrón exacto en el template original
(`~/Downloads/Templates_Web/Intrio/Intrio HTML/index-3.html`, dropdown
"Pages"): un `<ul>` simple sin la estructura de mega-menu
(`container`/`sb-menu`/columnas), que Intrio ya sabe dimensionar solo
al contenido. Se reemplazó en las 23 páginas reales — mismo patrón,
mismos 3 links (Sobre Nosotros, Preguntas Frecuentes, Testimonios).
Verificado visualmente: el dropdown ahora es una caja chica pegada al
link "Más", sin la tarjeta ni el layout de 2 columnas. Commit
`5008a12`.

## Mega-menu de Tratamientos: caja compacta (2026-09-18)

Tras achicar el dropdown "Más", Rodolfo pidió aplicar el mismo
espíritu al mega-menu "Tratamientos" — pero a diferencia de "Más",
pidió explícitamente **mantener el agrupamiento por categoría**
("yo lo dejaría agrupado a lo ancho"), no aplanarlo a una lista.

Por defecto el `.mega` de Intrio usa `position:fixed; width:100%`
(ocupa toda la ventana). Se agregó override CSS solo para desktop
(`header:not(.header-mobile) #mainmenu>li ul.mega.mega-tratamientos`)
que lo angosta a una caja fija de 700px, `position:absolute`,
centrada bajo el link — aprovechando que `#mainmenu li` ya tiene
`position:relative`. El CSS mobile existente (lista plana integrada
al menú oscuro, en la misma hoja) no se tocó. Verificado visualmente:
la caja queda compacta, centrada, con las 4 columnas/categorías
intactas. Cambio 100% en `costaserena-theme.css`, aplica
automáticamente a las 23 páginas reales sin tocar el HTML. Commit
`8cb729c`.

## Footer resumido en mobile + título tapado detrás del header fijo (2026-09-18)

Rodolfo reportó dos problemas de mobile con capturas: (1) el footer se
ve muy extenso en mobile, pidió sacar Tratamientos/redes
sociales/correo y dejarlo simple; (2) en las páginas de tratamiento
el título (`<h1>`) del héroe se ve "apretado" y "perdido" — solo se
veía el breadcrumb.

**Causa del título perdido (afecta las 23 páginas reales, no solo
tratamientos):** en mobile el header pasa a `position:fixed` y opaco
(`header.header-mobile` en `style.css`, sin tocar). El div
`spacer-double` que normalmente separa el `<h1>` del borde superior se
oculta completo con `.sm-hide` en el mismo breakpoint (≤992px) — sin
ese espaciador, el `<h1>` queda literalmente detrás del header fijo.
Se agregó override en `costaserena-theme.css` que en vez de
`display:none` le da 100px de alto en mobile, suficiente para despejar
el header (medido: header ~100px de alto en 384px de ancho). Es un fix
transversal (mismo componente de héroe compartido) — beneficia a las
23 páginas reales, no solo a las de tratamiento que fueron las
reportadas.

**Footer resumido:** en mobile (≤767px, breakpoint donde el footer ya
pasa a una sola columna) se ocultan con CSS (selectores estructurales
por posición, sin tocar el HTML de las 23 páginas): el widget
"Tratamientos" (ya redundante con el nav), el bloque de íconos
sociales, y la fila completa de Email (label + valor + espaciador).
Quedan: Navegación, el CTA "Agenda tu Evaluación", WhatsApp, Ubicación
y el copyright. El footer de escritorio no cambia.

Verificado con `getComputedStyle` dentro de un iframe a 384px de ancho
(el `resize_window` de la extensión de Chrome no reduce el viewport
real de la pestaña — hay que usar un iframe angosto para emular mobile
de forma confiable) — confirmado que los 3 elementos quedan
`display:none` en mobile y `block` en desktop, y que el `<h1>` del
héroe queda visible con margen suficiente respecto al header fijo.
Commit `de8473c`.

**Corrección (2026-09-18, mismo día):** aún más corto — se sacaron
también el logo, la fila de Ubicación, y se achicó la flecha del CTA
(60px → 32px) en mobile. Queda: Navegación, "Agenda tu Evaluación" +
WhatsApp, y el copyright. Commit `6d64cbe`.

## Chips de filtro (services.html) con scroll horizontal en mobile (2026-09-18)

Rodolfo notó que los 5 chips de filtro de `services.html` (#filters)
envolvían en varias filas en mobile, ocupando mucho alto, y propuso
scroll horizontal en su lugar. De acuerdo — es el patrón estándar para
filtros/categorías en mobile (ahorra espacio vertical, mantiene todo
al alcance de un swipe). Implementado con `display:flex; flex-wrap:
nowrap; overflow-x:auto` solo en mobile (≤767px); desktop sigue
envolviendo igual que antes. Verificado: contenido de 984px en un
contenedor visible de 344px, confirmando el scroll horizontal
funciona. Commit `2f79378`.

**Corrección (2026-09-18, mismo día):** Rodolfo notó espacio vacío de
más arriba y abajo en el footer resumido — causado por los
espaciadores que quedaron huérfanos al ocultar logo/Ubicación
(`.spacer-single` tras el logo, `.spacer-20` entre WhatsApp y
Ubicación) más el `padding-top:100px` por defecto del footer (pensado
para cuando el logo estaba visible). Se ocultan esos espaciadores y se
reduce el padding a 50px en mobile. Alto total del footer bajó de
~882px a ~576px (verificado con getComputedStyle). Commit `52e68cb`.

## Auditoría del menú mobile: mega-menu de Tratamientos comprimido (2026-09-18)

Rodolfo pidió auditar por qué el menú mobile se sentía "raro" al abrir
"Tratamientos", y comparar con cómo lo tenía Intrio originalmente.

**Hallazgo real:** en el template original, los ítems de nav de primer
nivel con submenú (`Services`, equivalente a nuestro `Tratamientos`)
tienen listas simples de 3-6 ítems, nunca un mega-menu de 4 categorías
(eso solo lo usaban para "Home" y "More", donde igual eran 4-6 ítems
por columna, no 9 repartidos en 4 categorías con headers). Intrio trae
una regla CSS genérica para indentar submenús simples en mobile
(`header.header-mobile #mainmenu li ul li { padding-left: 40px }`),
pensada para esos casos cortos — pero esa regla también se heredaba en
el `<li>` que envuelve TODO nuestro mega-menu de Tratamientos,
comprimiendo su ancho útil de ~354px a ~266px y desalineando las 4
columnas. Se corrigió reseteando ese padding heredado específicamente
para `.mega-tratamientos` (con `!important`, porque Bootstrap aplica
`.p-4` también con `!important` y ganaba sobre nuestro override
anterior). Verificado con getBoundingClientRect: las 4 categorías
ahora usan el ancho completo del menú.

**Confirmado que NO son bugs** (comportamiento de fábrica de Intrio,
verificado contra el template original intacto):
- El ícono "−" al abrir el menú es el propio ícono de cierre de Intrio
  (Font Awesome `fa-minus`), no un ícono roto.
- Tocar el texto "Tratamientos" navega a `services.html` en vez de
  desplegar el acordeón — hay que tocar la flechita (`<span>` que
  Intrio inserta automáticamente) para desplegar. Mismo patrón que el
  "Services" original.
- El menú abierto tiene scroll interno propio (no hace scroll la
  página completa) — también de fábrica.

Commit `16e7fe3`.

## Acordeón de Tratamientos resumido en mobile (2026-09-18)

Rodolfo propuso, tras la auditoría anterior, mostrar solo las 4
categorías más un "Ver más" en vez de las 9 fichas de tratamiento
siempre expandidas. Implementado:

- Los 4 encabezados de categoría (`<h4>`) ahora son links a
  `services.html` (antes texto plano) — en las 23 páginas reales.
- Se agregó un botón "Ver todos los tratamientos" al final del
  mega-menu, con clase `d-lg-none` (Bootstrap: oculto en desktop,
  visible en mobile) — no hace falta CSS propio para ese toggle.
- CSS mobile (≤992px): se oculta la lista de ítems individuales de
  cada categoría (`.row > div > ul`), dejando solo los 4 nombres +
  el botón.

Resultado: el acordeón de Tratamientos pasa de 13 líneas (4
categorías + 9 tratamientos) a solo 5 (4 categorías + botón), y
"Más"/"Blog"/"Contacto" quedan a la vista sin scroll extra. Desktop no
cambia — la caja compacta de 700px sigue mostrando las 4 categorías
con sus tratamientos completos. Verificado en viewport móvil real y
en desktop (`display:block` vs `none` en el listado de ítems). Commit
`0610d0f`.

**Corrección (2026-09-19):** las 4 categorías se veían en mayúscula y
negrita (heredaban el estilo de encabezado `<h4>` del sitio,
`--heading-text-transform: uppercase`), inconsistente con los ítems
planos de "Más" (Sobre Nosotros, etc. — normal, sin mayúsculas, 14px,
que es el patrón original de Intrio para submenús simples). Igualado
el estilo del `<h4>` de categoría al de esos ítems (font-weight:400,
text-transform:none, 14px, mismo borde inferior). Solo mobile —
desktop conserva el h4 bold/uppercase, que ahí sí se ve bien como
encabezado de columna. Commit `02c9fba`.

**Corrección (2026-09-19):** aunque las 4 categorías ya usaban el
mismo tipo de letra que "Más", seguían viéndose distintas porque
tenían ~39px de espacio extra entre cada fila (el gutter vertical de
Bootstrap, `--bs-gutter-y: 1.8rem` de la clase `.g-4` aplicada al
`row`), mientras que "Más" no tiene gap — solo el borde inferior como
separador. Se resetean `--bs-gutter-x`/`--bs-gutter-y` a 0 en el
`.row` del mega-menu de Tratamientos para mobile (más
`margin-top:0 !important` de respaldo en las columnas). Ahora el
ritmo vertical entre filas es idéntico al de "Más". Commit `f3cc87e`.

Nota de depuración: verificar cambios de CSS dentro del iframe de
prueba (390px) requirió forzar recarga del `<link>` de la hoja de
estilos con un query string cache-buster (`?bust=timestamp`) — el
`<link>` normal seguía sirviendo una versión cacheada del CSS pese a
recargar el HTML del iframe con su propio cache-buster.

**Corrección (2026-09-19):** dos pedidos más de Rodolfo sobre el
acordeón de Tratamientos en mobile:

1. "Ver todos los tratamientos" se veía distinto (era un botón
   `btn-line`) — ahora es un `<h4><a>` más, igual que las 4
   categorías, funcionando como una quinta subcategoría.
2. Cada fila mostraba un borde doble: el `<a>` dentro del `<h4>`
   heredaba su propio `border-bottom` de una regla genérica de Intrio
   para links de submenú (`rgba(255,255,255,.1)`, indentado, corto),
   además del border-bottom que le dimos al contenedor de la
   categoría (ancho completo). Se anula el del `<a>` — queda un solo
   borde limpio por fila. Diagnosticado con `elementFromPoint` +
   `getBoundingClientRect` en vez de `getComputedStyle` en cascada,
   que venía dando lecturas poco confiables en el iframe de prueba de
   este entorno.

Commit `d8003fd`.

**Corrección (2026-09-19, mismo día):** las categorías de Tratamientos
tenían un borde inferior propio que "Más" no tenía — "Más" heredaba
otro distinto (indentado, de `#mainmenu li li a { border-bottom:
solid 1px rgba(255,255,255,.1) }`, regla genérica de Intrio, visible
en todos los ítems salvo el último por el `:last-child`). Se quitan
ambos tipos de línea por completo — ninguna de las dos listas tiene
ahora borde entre ítems, quedan idénticas. Commit `6723cab`.

## Hover inestable del nav de Tratamientos + tarjetas de services.html (2026-09-19)

Rodolfo reportó que el dropdown de "Tratamientos" en desktop "se
abría solo" a veces, y pidió reducir 25% el alto de las tarjetas de
`services.html` con descripción + CTA "Ver detalles" (envió un
referente visual con este patrón: foto → tag de categoría → título →
descripción → "Ver detalles").

**Hover inestable:** la caja compacta de 700px centrada bajo
"Tratamientos" (del fix de dropdowns de ayer) se superponía
visualmente con "Más", "Blog" y "Contacto" — mover el mouse hacia
esos ítems en realidad seguía sobre el dropdown de Tratamientos (hijo
absolutamente posicionado de ese `<li>`, capta el hover por encima de
los `<li>` vecinos). Se angostó a 480px alineada al borde derecho del
link (se extiende hacia "Inicio"/el logo — un solo link simple, sin
otro dropdown que pueda interferir), y las 4 categorías pasan de 1
fila de 4 columnas a una grilla 2×2 (`col-lg-3`→`col-lg-6`) para caber
cómodas en el ancho más angosto. También se corrigió un `height:auto`
que había quedado incondicional (debía activarse solo en `:hover`,
como el resto de los `.mega` de Intrio) — podía mantener la caja con
tamaño real aunque estuviera oculta.

**Tarjetas de services.html:** nueva clase `.treatment-card-thumb`
(mismas fotos que `.treatment-thumb` del carrusel del inicio, pero
25% menos alta — `aspect-ratio` ajustado, no afecta al carrusel) +
descripción de 2 líneas (con `line-clamp`, texto real reciclado del
párrafo de introducción que ya existía en cada página de tratamiento,
nada inventado) + link "Ver detalles" reemplazando el solo-ícono de
flecha sobre la imagen. Verificado en desktop (3 columnas) y mobile
(1 columna, 372px). Commits `1c1c1f6` (hover) y `1f6e809` (tarjetas).

**Corrección (2026-09-19, mismo día):** Rodolfo aclaró que quería
todo dentro de la MISMA tarjeta (foto + descripción + CTA en un solo
contenedor visual con UI cuidada), no solo el texto flotando sobre el
fondo de la página debajo de la foto. Se investigó si Intrio traía
algún componente pre-armado así — no lo tiene exactamente (su patrón
de blog/servicios deja imagen y texto como elementos separados sobre
el fondo), pero sí tiene las piezas sueltas para armarlo: el wrapper
`bg-light rounded-1 overflow-hidden soft-shadow` que usa en otras
cards del template (el carrusel de equipo de `about.html`). Se
envolvió toda la tarjeta en ese wrapper — imagen, descripción y "Ver
detalles" quedan dentro de una misma caja con fondo, esquinas
redondeadas y sombra suave, igual que el referente que envió
Rodolfo. Commit `93f600c`.

**Corrección final (2026-09-19, mismo día):** Rodolfo aclaró que
quería la card completa DENTRO de la foto (no una franja blanca
separada abajo) — título y descripción de 2 líneas superpuestos sobre
el degradado inferior, y "Ver detalles" junto al ícono de flecha que
ya estaba arriba a la derecha, mostrándose ambos juntos con la misma
interacción de hover (`hover-op-1`) que ya tenía la flecha. El texto
de descripción pasó a blanco translúcido (antes gris, pensado para el
fondo claro de la versión anterior). Commit `f612775`.

**Corrección (2026-09-19, mismo día):** "Ver detalles" pasó a badge
`bg-blur` en la esquina superior izquierda (mismo patrón que los
badges "N Tratamientos" del carrusel de categorías del inicio), y la
flecha vuelve a quedar sola en su esquina superior derecha original —
ambos con la interacción hover-op-1. Commit `1bb7f3a`.

**Corrección (2026-09-19, mismo día):** con la caja angosta de 480px
(fix del hover inestable), "Estética Corporal" y "Medicina de la
Longevidad" se envolvían a 2 líneas mientras las otras 2 categorías
quedaban en 1, rompiendo la alineación de la grilla 2×2. Se redujo el
tamaño del `h4` de categoría (20px→15px) y el letter-spacing en este
contexto — las 4 quedan siempre en una sola línea sin necesidad de
volver a ensanchar la caja (que reabriría la superposición con Más/
Blog/Contacto). Commit `c1ada06`.

## Sección de video placeholder oculta (2026-09-19)

Rodolfo pidió ocultar la sección con el botón de play en el inicio —
el botón no tenía ningún video real detrás (`href="#"`), solo una
foto estática con el ícono superpuesto, "no está aportando nada".
Comentada (no borrada, mismo patrón usado antes con el carrusel
"Contenido Educativo") para reactivar cuando haya un reel real del
Dr. Paredes que reemplace el placeholder. Commit `97101f5`.

## Logo de la clínica confirmado y aplicado (2026-09-19)

Nombre oficial confirmado con el Dr. Paredes: **Clínica Vitelia —
Medicina & Estética Avanzada** (Instagram de la clínica:
@viteliaclinic_). Rodolfo recibió el logo oficial (carpeta "Logo
Clínica Vitelia" en la raíz del proyecto, gitignored — solo assets
fuente/PSD/variantes sin usar, no se versiona).

Se reemplazó el logo personal (`logo-mp.png`) por el logo de la
clínica en las 23 páginas reales — header, footer, panel off-canvas
y demás usos del logo. Se usó la variante horizontal V2 (blanco sin
fondo), recortada a su bounding box real. Favicon nuevo generado del
ícono (rostro + hoja) en negro a 16/32/48/180px. Las fotos reales del
Dr. Paredes (no el logo) mantienen su alt text sin cambios.

**Pendiente, no resuelto todavía:**
- Si el sitio se conecta al Instagram de la clínica (@viteliaclinic_,
  recién creado, poco contenido) o se sigue usando el personal
  (@dr.miguelparedes_, con más contenido) — el propio Dr. Paredes lo
  preguntó, Rodolfo tiene que decidir/responderle.
- Dominio propio (todavía en GitHub Pages).
- Reencuadre "medicina general + estética" — falta que el Dr. Paredes
  especifique qué otros servicios de salud general ofrece.
- Copy que todavía menciona al doctor personalmente en vez de la
  clínica (copyright del footer, título de las páginas, textos que
  dicen "Dr. Miguel Paredes Soto — Medicina Estética") — no se tocó
  esta vez, se priorizó solo el logo. **Resuelto en la siguiente
  sección.**

## Auditoría de copy: la clínica como sujeto principal (2026-09-19)

Rodolfo pidió una auditoría de copy/contenido en las 23 páginas
reales (imágenes explícitamente excluidas) para que el sitio hable de
Clínica Vitelia como entidad principal, con el Dr. Paredes presentado
como el doctor líder/director — dejando el título exacto a criterio
propio ("cual sea el mejor nombre o solo doctor").

**Título elegido:** "Director Médico de Clínica Vitelia" — se usa en
los dos párrafos de bio (`about.html`, `index.html`, sección "Armonía,
ciencia y un trato cercano en cada consulta").

**Cambios aplicados (23/23 páginas):**
- `<title>`: "... | Dr. Miguel Paredes Soto" → "... | Clínica Vitelia"
  (título del home cambiado aparte: "Clínica Vitelia — Medicina
  Estética en Concón").
- Copyright del footer: "Clínica Vitelia — Medicina & Estética
  Avanzada © 2026".
- Panel off-canvas: heading "Sobre el Dr. Paredes" → "Sobre Vitelia",
  párrafo reescrito para nombrar la clínica primero y al Dr. Paredes
  como quien la dirige.
- Las 23 meta descriptions reescritas para poner "Clínica Vitelia"
  como sujeto (ej. `services.html`: "Tratamientos de medicina
  estética facial y corporal en Clínica Vitelia, Concón — a cargo del
  Dr. Miguel Paredes Soto.").

**Cambios puntuales (no transversales):**
- `about.html` / `index.html`: subtítulo del hero y párrafo de bio
  principal reencuadrados ("Director Médico de Clínica Vitelia,
  especializado en...").
- `testimonials.html`: intro reencuadrada ("...que ya se atendieron
  en Clínica Vitelia").
- `blog-filosofia.html`: tag "Dr. Paredes" del widget de temas →
  "Clínica Vitelia".
- `faq.html` + `index.html`: pregunta "¿Qué tratamientos ofrece el
  Dr. Paredes?" → "...ofrece Clínica Vitelia?".
- `tratamiento-antienvejecimiento.html`: "el enfoque antienvejecimiento
  del Dr. Paredes" → "...de Clínica Vitelia".

**Dejado igual a propósito (no es un problema de framing, es
contenido distinto):**
- Disclaimer de "Contraindicaciones" en las 9 páginas de tratamiento
  ("...debe ser revisada y confirmada por el Dr. Paredes antes de
  publicar") — es una nota de responsabilidad médica que nombra al
  médico revisor específico, no branding.
- Firma bajo la foto del doctor (`<h3>Dr. Miguel Paredes Soto</h3>`)
  y el alt text de las fotos reales (no son logo, no se tocaron).
- Menciones "Dr. Paredes" dentro del carrusel "Contenido Educativo"
  de `index.html` — está comentado/deshabilitado (líneas ~372–533),
  no es contenido vivo.
- Instagram del sitio sigue apuntando a `@dr.miguelparedes_` — pendiente
  de que Rodolfo decida si migra a `@viteliaclinic_` (ver sección
  anterior, sigue sin resolver).

Verificado visualmente con servidor local + Claude-in-Chrome en
`about.html`, `index.html` y `tratamiento-antienvejecimiento.html`.
Commit `84bc47e`.

## Foto real en tarjeta "¿Hombres con pechos?" del inicio (2026-09-19)

Se reemplazó la foto placeholder por una foto real de torso (paciente,
consentimiento confirmado por Rodolfo antes de usarla). Nuevo archivo
`images/real/torso-ginecomastia.webp`. Commit `80c2dbf`.

## Ubicación cambiada de Concón a La Ligua (2026-09-19)

Reemplazo transversal de las 104 menciones de "Concón" por "La Ligua"
en las 23 páginas reales (títulos, meta descriptions, direcciones,
copy). "V Región" se mantuvo igual — La Ligua también pertenece a esa
región. Commit `f299a61`.

## Endoláser y Remodelado de Glúteos + rediseño del inicio (2026-09-19)

El Dr. Paredes envió capturas de la web pidiendo sumar tratamientos
que "faltaban": Endoláser (bajo la tarjeta de Estética Masculina) y
Remodelado de Glúteos (bajo Estética Corporal). Antes de implementar
se verificó que ambos fueran reales y no inventados:

- **Endoláser**: lipólisis láser no quirúrgica (fibra óptica que licúa
  grasa localizada). Confirmado en dos frentes: (1) es una técnica
  documentada, usada específicamente para pseudoginecomastia; (2) el
  propio Dr. Paredes ya la menciona en su Instagram como uno de sus 4
  pilares ("Toxina botulínica, ácido hialurónico, bioestimuladores y
  Endoláser"). Riversso (competidor de Concón, referente de
  información del proyecto) la lista como "Endoláser - Ginecomastia",
  la misma técnica que ellos usan para tratar esa condición.
- **Remodelado de Glúteos**: categoría real del mercado chileno de
  medicina estética (ácido hialurónico/PLA inyectable tipo Lanluma, o
  lipoescultura), coherente con lo que el Dr. Paredes ya ofrece
  (Ácido Hialurónico, Alidya). No aparece todavía en su Instagram ni
  en Riversso como tratamiento propio — parece ser algo que el doctor
  quiere empezar a ofrecer/comunicar, autorizado directamente por él.

Antes de tocar código se le preguntó a Rodolfo un comentario ambiguo
del doctor ("Allí coloca estética corporal" sobre la tarjeta de
Estética Facial) — aclaró que en realidad se refería a repensar el
inicio: mostrar tratamientos específicos en vez de categorías
agrupadas, dejando las categorías como filtros dentro de
`services.html` (que ya existían ahí desde antes, no hubo que
tocarlos).

**Implementado:**
- 2 páginas nuevas: `tratamiento-endolaser.html` (Estética Masculina,
  con link cruzado a Ginecomastia para el caso con componente
  glandular) y `tratamiento-remodelado-gluteos.html` (Estética
  Corporal). Foto real reusada: `images/real/servicio-laser-fibra.webp`
  (foto real del Dr. Paredes sosteniendo la fibra láser, ya existía sin
  usar) para Endoláser; `images/real/servicio-corporal-cutout.webp`
  (reusada una 3ra vez) para Remodelado de Glúteos.
- Nav mega-menu y panel off-canvas "Tratamientos" actualizados en las
  23 páginas reales existentes (ahora 25 páginas reales en total).
- `services.html`: 2 tarjetas nuevas con sus clases de filtro Isotope
  (`.masculina`, `.corporal`) — confirmado que el filtrado sigue
  funcionando.
- **Inicio:** el carrusel "Nuestras Especialidades" pasó de mostrar 4
  categorías (Facial/Corporal/Longevidad/Masculina) a mostrar 6
  tratamientos específicos: Evaluación Personalizada, Ácido
  Hialurónico, Toxina Botulínica, Endoláser, Remodelado de Glúteos,
  Plasmage. Ginecomastia quedó fuera de esta lista a propósito (el
  Endoláser la cubre/referencia en su propia página). La elección de
  cuáles 6 mostrar fue criterio propio dentro de lo acordado con
  Rodolfo — puede ajustarse si pide otra combinación.

Verificado visualmente con servidor local + Claude-in-Chrome: carrusel
del inicio (las 6 tarjetas, incluido Endoláser vía flecha del
carrusel), ambas páginas nuevas, mega-menu en `about.html`, y filtros
Isotope de `services.html`. Commit `347ce1b`.

## Feed de Instagram en vivo (2026-09-19)

Rodolfo pidió sincronizar la sección "Síguenos" del inicio con
Instagram real, pero **manteniendo nuestro propio CSS** (no el diseño
de un widget externo). Recorrido de opciones evaluadas antes de
implementar:

- **Graph API oficial de Meta directo:** requiere cuenta Business/
  Creator (la cuenta `@dr.miguelparedes_` ya lo es — se confirmó vía
  captura de "Cuenta profesional" con categoría "Médico(a)"), pero el
  token expira cada 60 días y este sitio es estático (GitHub Pages,
  sin backend) — se descartó por complejidad de mantenimiento salvo
  que se arme una GitHub Action, que no se llegó a construir.
- **Widgets con diseño propio (SnapWidget, Elfsight, Juicer):**
  descartados porque imponen su propio HTML/CSS — no cumplían el
  requisito de mantener el diseño Costa Serena.
- **Fouita (scraping sin login):** se probó en vivo con
  `@dr.miguelparedes_` y falló (`TypeError: Failed to fetch` en
  consola) — confirma el riesgo de confiabilidad de las herramientas
  de scraping sin autenticación oficial.
- **Elegido: Behold.so** (behold.so) — se conecta una vez vía OAuth
  oficial con Instagram (lo autorizó Rodolfo, quien tiene acceso a la
  cuenta) y entrega los posts en **JSON crudo** en una URL propia
  (`https://feeds.behold.so/JFUk6w8OjnGTC89TC1vn`), sin imponer diseño.
  Plan gratis: 6 posts más recientes, actualización 1 vez al día,
  1.200 vistas/mes (una "vista" = una petición a esa URL).

**Implementado:** `js/instagram-feed.js` — hace `fetch()` al JSON de
Behold, renderiza cada post con el mismo HTML/CSS que ya usaban las 3
tarjetas escritas a mano (`blog-thumb-fixed`, mismo layout de fecha/
avatar/handle). Cachea la respuesta en `localStorage` 6 horas para no
gastar vistas del plan gratis en cada recarga durante el desarrollo o
con tráfico normal. **Degradación segura:** si el fetch falla por
cualquier motivo, las 3 tarjetas estáticas originales quedan tal cual
estaban en el HTML — nunca se reemplazan a un estado rotos/vacío.

Verificado visualmente con servidor local: las 6 tarjetas cargan con
fotos, captions, fecha y likes reales de Instagram, con el diseño
Costa Serena intacto. Commit `6d4856d`.

**Pendiente/a tener en cuenta:**
- Si en algún momento se supera el límite de 1.200 vistas/mes de
  Behold (poco probable con el tráfico actual), el feed deja de
  actualizarse hasta el mes siguiente — cae al fallback estático, no
  rompe el sitio.
- La URL del feed de Behold (`feeds.behold.so/JFUk6w8OjnGTC89TC1vn`)
  queda pública en el código fuente del repo (no es sensible — solo
  expone datos que ya son públicos en el perfil de Instagram).

**Ajustes posteriores (mismo día):** Rodolfo pidió mostrar solo los 3
posts con más interacción de los últimos que trae Behold (no los 6),
elegidos por `likeCount + commentsCount` en JS — nada hardcodeado, se
recalcula cada vez que se actualiza el feed. También se agregó
`.ig-title-2line` (line-clamp real a 2 líneas) porque `blog-title-1line`
no recortaba nada, solo funcionaba porque los títulos escritos a mano
ya eran cortos. Se agregó un interruptor `FEED_ENABLED` en
`js/instagram-feed.js` para apagar el feed en vivo con un solo cambio
mientras el sitio sigue en pruebas — queda en `true` hasta que Rodolfo
confirme verlo funcionando en el sitio en vivo. Commits `3fd9081`,
`9fb8338`.

## Antes/después en el inicio + Proceso como sección propia (2026-09-19)

Rodolfo conversó con el Dr. Paredes sobre mostrar fotos de antes/después
en el inicio. Idea original: sacar la sección "Proceso" (Agenda→
Evaluación→Tratamiento→Seguimiento, que estaba superpuesta a la foto del
doctor en la sección de testimonios) y poner ahí las fotos de antes/
después, una por cada testimonio.

**Punto sensible que se conversó antes de implementar:** asociar una
foto de antes/después a un testimonio específico (ej. "Alejandra Ch.")
sin confirmar que sea la misma persona podría leerse como afirmar que
ese resultado le pertenece a esa paciente exacta — atribución no
verificada en un contexto médico. Se le presentó la disyuntiva a
Rodolfo, quien decidió: mostrar la foto junto al testimonio pero **sin
asociarla a un nombre puntual** — rota automáticamente cada vez que
cambia el testimonio (manual o autoplay), es solo variedad visual, no
una afirmación de correspondencia.

**Implementado:**
- Columna nueva (`col-md-5`) junto al carrusel de testimonios con un
  slider interactivo de antes/después (`twentytwenty-container`,
  divisor arrastrable) — reutiliza el componente que ya existía en 3
  páginas de tratamiento, no se inventó uno nuevo.
- `js/hero-before-after.js`: rota entre las parejas de fotos reales
  cada vez que el carrusel de testimonios dispara `changed.owl.carousel`.
  Solo rotan **entrecejo y mandíbula** (mismo formato apaisado
  1440×692) — la pareja de Plasmage es un close-up vertical del párpado
  con proporción totalmente distinta, así que se dejó fuera de esta
  rotación para que la caja no cambie de tamaño en cada cambio (sigue
  viéndose igual en su propia página de tratamiento).
- Bug encontrado y arreglado: el plugin `twentytwenty` mide el alto de
  la imagen "antes" en el momento del init — como las imágenes se
  insertan dinámicamente (no en la carga inicial de la página), a
  veces medía antes de que la imagen terminara de cargar y el
  contenedor quedaba con alto 0. Se agregó precarga (`new Image()` +
  `Promise.all`) antes de llamar a `.twentytwenty()`.
- La sección "Proceso" pasó a ser su propia sección (franja oscura
  "Cómo Funciona" / "Nuestro Proceso"), mismo patrón `bg-dark-1` ya
  usado en las páginas de tratamiento — ya no compite visualmente con
  la foto del doctor de fondo.
- **Hallazgo de paso:** el plugin `twentytwenty` mostraba "Before"/
  "After" en inglés al pasar el mouse por defecto — no era un problema
  nuevo, ya estaba así en las 3 páginas de tratamiento que lo usan
  desde antes. Corregido a "Antes"/"Después" en las 3 páginas
  existentes + el bloque nuevo del inicio.

Verificado visualmente: el slider funciona, rota correctamente al
cambiar de testimonio (probado disparando el evento del carrusel
manualmente), las etiquetas quedaron en español en las 4 ubicaciones.
Commit `5e4d883`.

**Ajuste de padding (mismo día):** Rodolfo pidió más aire vertical en
`#hero-testimonials` y `#hero-proceso` — se probó +20% (108px) y no se
notó lo suficiente, se subió a 180px, y finalmente se bajó a 150px
como punto intermedio. Commits `bc61bde`, `aeeab3f`, `a734f62`.

## Sistema de memoria de 3 niveles (2026-09-19)

A pedido de Rodolfo, se armó `~/.claude/CLAUDE.md` (contexto de
negocio global, apunta al registro en Google Drive
`RodolfoWeb-Registro/`) y `CLAUDE.md` en la raíz de este proyecto
(reglas fijas construidas con todo el contexto de las conversaciones,
no solo lo documentado en este archivo). Este `PROYECTO.md` sigue
siendo la bitácora de avance. Commit `f8f3e8e`.

## Carrusel reutilizable de antes/después en tratamientos (2026-09-19)

Rodolfo preguntó si todas las fotos de antes/después se estaban
usando y qué pasaría si algún día hay varias del mismo tratamiento.
Encontrado: `antes-despues-ojeras.webp` nunca se había usado — venía
como un solo archivo con el antes/después apilados verticalmente (no
2 archivos separados como las demás parejas), así que no calzaba con
el componente `twentytwenty-container`, que necesita 2 imágenes. Se
separó en `antes-despues-ojeras-antes/despues.webp` y se sumó a
Ácido Hialurónico (ya trata ojeras) como 2da pareja — primer caso real
con más de 1 foto.

Se decidió construir el carrusel reutilizable ahora (no esperar a
tener más fotos): `js/before-after-carousel.js` — cada `.ba-carousel`
lleva sus parejas en `data-pairs` (JSON), y muestra flechas +
contador ("1 / 2") solo si hay 2 o más; con 1 sola pareja las flechas
quedan ocultas automáticamente. Aplicado a las 3 páginas que ya tenían
antes/después (Ácido Hialurónico con 2 parejas, Antienvejecimiento y
Plasmage con 1 cada una).

Bug encontrado en el camino: `jQuery.hide()` no ocultaba la
navegación en los casos de 1 sola pareja — las utilidades `.d-flex`/
`.d-none` de Bootstrap usan `!important`, así que le ganaban al
`display:none` inline que pone `.hide()`. Se resolvió alternando
clases (`removeClass("d-none").addClass("d-flex")`) en vez de
`.hide()`/`.show()`.

**Tratamientos sin antes/después todavía** (por si se suman fotos más
adelante): Alidya, Endoláser, Evaluación Corporal, Evaluación Facial,
Ginecomastia, Perfiloplastia, Remodelado de Glúteos, Toxina Botulínica.
El componente ya está listo para dejarse caer en cualquiera de ellas
en cuanto haya foto real con consentimiento confirmado.

Verificado visualmente: contador y flechas funcionando en Ácido
Hialurónico (2 parejas, clickeado "siguiente" y confirmado el cambio
de foto), flechas ocultas correctamente en Antienvejecimiento y
Plasmage (1 pareja cada uno). Commit `58c6fa2`.

## Auditoría de copy: datos técnicos faltantes (2026-09-19)

Rodolfo pidió completar lo que faltara del copy, con dos reglas
explícitas: lo que se pudiera deducir con lo que ya sabíamos, y lo
técnico investigarlo (luego autorizó usar clinicariversso.cl como
referente de datos técnicos, contrastado con fuentes médicas
generales — nunca copiando su texto textual, mismo patrón ya usado
para la estructura del catálogo).

**Completado (8 páginas de tratamiento):**
- `[MIN]`/`[SEM]` (duración del procedimiento, recuperación estimada,
  resultados visibles) en Antienvejecimiento, Endoláser, Ginecomastia,
  Perfiloplastia, Plasmage y Remodelado de Glúteos — valores
  investigados por tratamiento (ej. Endoláser 180 min según Riversso
  para el mismo procedimiento; Ginecomastia 60-120 min y 4-6 semanas
  de recuperación según fuentes de cirugía plástica; bioestimuladores/
  Ácido Hialurónico 4-12 semanas de resultados progresivos).
- El último ítem pendiente de "Contraindicaciones" en las 8 páginas
  que ya tenían la lista parcialmente llena (o ambos ítems en las 3
  que estaban vacías: Endoláser, Ginecomastia, Remodelado de Glúteos),
  con contraindicaciones médicas estándar por tipo de tratamiento
  (embarazo/lactancia, trastornos de coagulación, enfermedades
  autoinmunes no controladas, etc.), contrastadas con las listas
  reales de Riversso para tratamientos equivalentes.

**Dejado intacto a propósito:** `[AÑOS]` y `[Nº]` en `about.html` e
`index.html` (años de experiencia, pacientes atendidos) — son datos
personales del Dr. Paredes, no deducibles ni investigables, siguen
pendientes de que él los confirme directamente.

El disclaimer "Lista referencial — debe ser revisada y confirmada por
el Dr. Paredes antes de publicar" se mantiene sin cambios en las 8
páginas — estos valores son referenciales/técnicos generales, no
específicos de los pacientes reales del Dr. Paredes.

Verificado visualmente y por JS que ningún `[MIN]`/`[SEM]`/
`A COMPLETAR CON EL DR` quedó suelto en las 23+ páginas reales.
Commit `9a88e08`.

## Arreglos mobile: menú de tratamientos + UI del blog (2026-09-19)

Rodolfo mandó capturas de dos problemas en mobile:

1. **Menú "Tratamientos"** mostraba solo las 4 categorías (Estética
   Facial, Estética Corporal, Medicina de la Longevidad, Estética
   Masculina) sin los tratamientos específicos debajo — una
   simplificación deliberada del 2026-09-18 para acortar el menú, que
   ya no encajaba con el criterio del sitio (categorías = filtros y
   nav, tratamientos específicos = lo que se muestra).
   **Primer intento (revertido):** mostrar los 11 tratamientos bajo
   cada categoría en el acordeón — Rodolfo aclaró que no era eso, el
   acordeón debía mantenerse **corto** como antes.
   **Versión correcta:** se conserva el largo original (4 ítems + "Ver
   todos los tratamientos"), pero los 4 ítems dejan de ser categorías
   y pasan a ser **4 tratamientos específicos principales**: Toxina
   Botulínica, Ácido Hialurónico, Endoláser y Evaluación Personalizada
   (esta última → `consultation.html`). Las 4 secciones de categoría
   con su listado completo solo se ven en desktop (mega-menu
   compacto ya las agrupa de una vista); en mobile se ocultan del todo
   y se muestran en su lugar 4 bloques nuevos `.mobile-featured-treatment`
   + el bloque "Ver todos" ya existente. Cambio en `costaserena-theme.css`
   + un bloque de HTML nuevo repetido en las 25 páginas (script Python,
   verificado 25/25).
2. **Tarjeta CTA de los artículos del blog** ("¿Tienes dudas sobre tu
   caso?") cortaba el texto en mobile en vez de pasar a la línea
   siguiente. Investigando la causa real (no algo que hubiéramos
   escrito nosotros): Intrio define `.d-flex { white-space: nowrap }`
   en su propio `style.css` — se sobreescribe a `normal` en nuestra
   hoja de overrides sin tocar el archivo original. Sumado a eso, el
   div de texto no encogía por debajo de su ancho natural por ser
   flex item (`min-width:auto` por defecto en flexbox) — se agregó
   `min-width: 0`. También se sumó `gy-5` al row que envuelve
   contenido principal + sidebar (antes solo `gx-5`, gutter
   horizontal) para que haya espacio vertical entre la tarjeta CTA y
   "Más Contenido Educativo" cuando las columnas se apilan en mobile.

**Nota de verificación:** este sitio usa Lenis (smooth-scroll) en
todas las páginas — `window.scrollTo()`/`scrollIntoView()` no mueven
la página (Lenis intercepta el scroll nativo). Para verificar en el
emulador de mobile (iframe angosto) hubo que disparar eventos
`WheelEvent('wheel', {deltaY, bubbles:true, cancelable:true})`
sintéticos en vez de scrollTo — buen dato para la próxima vez que se
necesite verificar scroll en este sitio.

Verificado visualmente en iframe de 390px (about.html para el menú,
blog-plasmage.html para la tarjeta CTA), con cache-busting del
`<link>` de CSS en cada paso. Commit `29332f0` (corrección del menú
mobile en `d4fd920`, ver sección siguiente).

**Corrección (mismo día):** al mostrar los 11 tratamientos en el
acordeón, quedó claro que Rodolfo quería el largo original (4 + "Ver
todos"), solo cambiando categorías por tratamientos específicos —
implementado como se describe arriba. Bug adicional encontrado en el
camino: el color blanco de estos links dependía de herencia desde el
`h4` padre, pero Intrio trae su propia regla `#mainmenu li li a` con
color gris que le ganaba a la herencia — se declaró el color blanco
explícito con `!important` en vez de confiar en la cascada. **Nota de
depuración:** en este entorno, `getComputedStyle()` sobre elementos
dentro de un iframe anidado dio lecturas obsoletas/incorrectas varias
veces seguidas (mostraba un color viejo pese a que el DOM/CSSOM
confirmaban el valor correcto) — el screenshot visual fue la única
fuente confiable para verificar esto, no confiar ciegamente en
`getComputedStyle` dentro de iframes anidados en este entorno.
Verificado visualmente en mobile (390px) y desktop (1400px, hover del
mega-menu). Commit `d4fd920`.
