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

## Datos de contacto reales + links funcionales (2026-09-19/20)

Rodolfo pasó los datos reales de la clínica:
- Correo: `viteliaclinic@gmail.com` (antes el personal del Dr. Paredes)
- WhatsApp: `+56 9 6776 5335`
- Dirección: `Santa Teresa 580, La Ligua, V Región`

Aplicado en las 25 páginas reales (email/WhatsApp/ubicación aparecen
en 3 bloques compartidos: panel off-canvas, footer, y el bloque de
contacto propio de `contact.html`/`consultation.html`). Los correos
son `mailto:` reales, los teléfonos enlazan a `wa.me` (WhatsApp
click-to-chat) — antes eran solo texto plano. El ícono de WhatsApp del
footer/panel off-canvas, que apuntaba a `href="#"` sin funcionalidad,
también quedó conectado al mismo link de `wa.me`.

**Actualización (mismo día):** Rodolfo pidió que el correo abriera
Gmail siempre, no el cliente de correo por defecto del sistema — se
cambiaron los 52 links de `mailto:` a la URL del compositor web de
Gmail (`https://mail.google.com/mail/?view=cm&fs=1&to=...`), con
`target="_blank"` para que abra en pestaña nueva.

## Fotos reales de Ácido Hialurónico y Toxina Botulínica (2026-09-20)

Rodolfo mandó 2 fotos reales nuevas del Dr. Paredes: una con vial en
mano (bata blanca) para Ácido Hialurónico, y una inyectando en
exterior con vista a la ciudad para Toxina Botulínica. Aplicadas de
forma transversal (hero de la página de tratamiento + tarjeta de
`services.html` + carrusel del inicio):

- **Toxina Botulínica:** la foto anterior (`servicio-inyectable.webp`)
  era de uso exclusivo de esa página, así que se reemplazó directo en
  el mismo archivo.
- **Ácido Hialurónico:** la foto anterior
  (`servicio-perfil-inyeccion.webp`) está compartida con varios posts
  del blog (`blog-perfiloplastia.html`, `blog-plasmage.html`,
  `blog.html`) — no se tocó ahí. Se creó un archivo nuevo
  (`servicio-vial-hialuronico.webp`) y solo se actualizó la referencia
  en `tratamiento-acido-hialuronico.html` + los 2 usos numéricos
  (`images/services/1.webp`, compartido entre `services.html` e
  `index.html`, exclusivo de este tratamiento en ambos).

**Nota técnica:** las fotos llegaron como archivos pegados en una
ubicación temporal de macOS (`NSIRD_screencaptureui...`) que el Read
tool puede ver pero Bash/PIL no puede tocar (permisos TCC de macOS) —
hubo que pedirle a Rodolfo que las guardara en `Recursos/` (ya
gitignored) para poder procesarlas. Una de las dos llegó en `.HEIC`,
convertida a JPEG con `sips` (nativo de macOS) antes de procesar con
PIL, ya que Pillow no tiene soporte HEIC instalado en este entorno.

Verificado visualmente en las 4 ubicaciones (2 heroes + services.html
+ carrusel del inicio) y por JS (links de Gmail con target="_blank").
Commit `58795f1`.

## FAQ: catálogo completo de tratamientos (2026-09-20)

El Dr. Paredes mandó por WhatsApp su lista real y completa de
tratamientos (17 en total, agrupados en Estética Facial/Corporal).
Se reemplazó la respuesta genérica de "¿Qué tratamientos ofrece
Clínica Vitelia?" (mismo accordion compartido en `faq.html` e
`index.html`) por esta lista completa en 2 columnas con bullets. Los
9 que ya tienen página propia quedan enlazados; los 8 que no la
tienen quedan como texto plano.

**Tratamientos del catálogo real del doctor sin página propia
todavía** (oportunidad para sumar más adelante, no creados ahora
porque no se pidió): Limpieza facial avanzada, Lipolítico facial,
Mesoterapias, Peeling facial, Exosomas, Bioregenerador facial,
Bioestimulación facial/cuello/escote, Lipolítico corporal.

Verificado visualmente (2 columnas, 17 ítems) y por JS (9 links
correctos, 17 `<li>` en ambas páginas). Commit `46fdc14`.

**Seguimiento (mismo día):** se completó también la respuesta de
"¿Atiende fuera de La Ligua?" (antes `[POR CONFIRMAR CON EL DR.
PAREDES]`) — el Dr. Paredes también atiende en Clínica Riversso, Av.
Concón Reñaca 4000, Concón (mismo accordion compartido en `faq.html`
e `index.html`). Commit `3c6da02`.

**Seguimiento 2 (mismo día):** se completó la última respuesta
pendiente, "¿Qué incluye la evaluación inicial?", con la lista de 6
ítems que mandó el Dr. Paredes (mismo estilo `ul-check` que el resto
del sitio). **Con esto, las 5 preguntas del FAQ quedan sin
placeholders** — ya no queda ningún `[POR CONFIRMAR CON EL DR.
PAREDES]` en `faq.html` ni `index.html`. Commit `cb07133`.

## 2026-09-20 — Fotos reales de Ginecomastia/Evaluación Corporal/Alidya + contenido completo de "Sobre el Doctor"

Rodolfo pasó fotos nuevas guardadas en `Recursos/` (workaround TCC de
siempre) para reemplazar 3 imágenes de tratamiento:

- **Ginecomastia y Evaluación Corporal:** ambas usan ahora la misma
  foto (retrato de brazos cruzados, fondo negro) por instrucción
  explícita de Rodolfo. Procesada desde `Recursos/IMG_3001.PNG` (PNG
  con transparencia/viñeta), compuesta sobre negro sólido con PIL,
  guardada como `images/real/retrato-brazos-cruzados.webp` (1200x1800,
  calidad 88). Los archivos viejos (`servicio-cirugia.webp`, compartido
  con 4 blog posts + index.html; `retrato-scrubs.webp`, exclusivo de
  Evaluación Corporal) se dejaron intactos, solo se cambió la
  referencia `<img>` de cada página de tratamiento.
- **Alidya:** foto nueva del producto (`Recursos/IMG_3002.PNG`, cutout
  con transparencia), compuesta sobre blanco sólido, guardada como
  `images/real/servicio-alidya-producto.webp` (1200x1800, calidad 88).
  El archivo viejo `servicio-corporal-cutout.webp` (compartido con
  services.html, index.html y Remodelado de Glúteos) quedó intacto.
- Tarjetas de `services.html` actualizadas también:
  `images/services/3.webp` y `9.webp` ← retrato-brazos-cruzados.webp,
  `images/services/7.webp` ← servicio-alidya-producto.webp (los 3
  archivos son exclusivos de services.html, confirmado por grep antes
  de sobreescribir).
- Verificado visualmente: heroes de las 3 páginas de tratamiento y las
  3 tarjetas correspondientes en `services.html`, sin regresiones en
  tarjetas vecinas. Commit `5c4c81d`.

**Mismo día — Sección "Sobre el Doctor" (about.html):** Rodolfo mandó
por WhatsApp el texto completo que el Dr. Paredes quiere en esa
sección (venía reemplazando el párrafo único que había antes) más una
foto nueva (fondo blanco, brazos cruzados). Se diagramó como:

- Línea de título "Dr. Miguel Paredes S. — Médico Cirujano" +
  especialidad "Medicina Estética Facial & Corporal".
- Párrafo de trayectoria (desde 2015, ciencia y arte, etc.) tal cual lo
  mandó el doctor.
- Lista `ul-check` con Experiencia ("Más de 10 años") y Formación
  (Universidad del Zulia, Maracaibo, Venezuela).
- Bloque "Certificaciones" con las 6 certificaciones en `ul-check`.
- El placeholder `[AÑOS]` del contador de estadísticas más abajo se
  actualizó a **"10+"** — ya no es un dato fabricado, es el que
  confirmó el propio doctor en este mensaje.
- Foto nueva procesada desde `Recursos/WhatsApp Image 2026-09-20 at
  8.21.45 PM.jpeg` (960x1280, sin transparencia, ya fondo blanco),
  reescalada a 1350x1800 (mismo ratio) y guardada como
  `images/real/retrato-brazos-cruzados-blanco.webp`. El archivo que
  usaba antes esa sección (`images/misc/s1.webp`) está compartido con
  `project-single.html` e `index.html`, así que no se tocó — se creó
  un archivo nuevo solo para `about.html`.
- Verificado visualmente en `about.html` (foto, párrafo, listas y
  contador "10+ Años de Experiencia"). Commit `5c4c81d` (mismo commit
  que las fotos de tratamiento, se hizo un solo push agrupado).

**Mismo día — Sección "Nuestro Equipo" con la primera persona real:**
Rodolfo pasó los datos y foto de la primera integrante real del
equipo — **Valeska Rojas Valenzuela**, Magíster en Cosmetología
(Cosmetología Estética, Corporal y Terapéutica, Minsal Vigente). El
carrusel demo (`#team-carousel`, `owl-2-cols`, con "John Smith"/"Anna
Charline" e íconos sociales falsos) se reemplazó por **una sola
tarjeta estática** (sin carrusel, sin flechas de navegación) ya que
por ahora solo hay una persona en el equipo — se quitaron también los
íconos de redes sociales porque Valeska aún no tiene cuentas
vinculadas al sitio. Foto procesada desde `Recursos/WhatsApp Image
2026-09-20 at 8.24.30 PM.jpeg` (1080x1305), recortada a cuadrado
700x700 centrada en el rostro, guardada como
`images/team/valeska-rojas.webp`. Los archivos viejos
`images/team/2.webp`/`3.webp` quedaron sin uso pero intactos (no se
borran archivos, solo se dejan de referenciar). Verificado visualmente
en `about.html`. Commit `283dbde`.

**Seguimiento (mismo día):** Rodolfo pidió limpiar el texto de la
tarjeta de Valeska para que se pareciera más a la UI original de
Intrio (nombre corto + un solo rol, como "John Smith"/"Web
Developer"). Se acortó el nombre a "Valeska Rojas" (sin segundo
apellido), se dejó un solo rol principal ("Cosmetóloga Estética,
Corporal & Terapéutica"), y las credenciales (Magíster + registro
Minsal) bajaron a una línea secundaria más chica y gris (`fs-15 op-6`)
en vez de competir en peso visual con el nombre. Commit `e7fe554`.

## 2026-09-20 — Widget de agenda de Reservo en consultation.html

Rodolfo mandó el snippet de embed de Reservo (`agendamiento.reservo.cl
/makereserva/agenda/F0T9EBt0t0bg6w3J9Z62E880k3144i`) — el sistema de
reservas que ya usa el Dr. Paredes — y preguntó si con eso bastaba o
necesitaba credenciales. Aclarado: es un embed público, la URL ya
contiene el identificador único de SU agenda real (no un demo), así
que cualquier reserva hecha desde el sitio cae directo en su
calendario de Reservo — no se necesita login de nadie para que
funcione en el sitio.

Se reemplazó el `<form>` de `consultation.html` (que apuntaba a
`action-consultation.php`, un endpoint que nunca funcionó en GitHub
Pages por no tener backend PHP — o sea, el formulario anterior nunca
envió nada de verdad) por el `<iframe>` del widget, dentro de la misma
tarjeta `bg-light rounded-1 p-40` que ya existía. Los 25 botones
"Agendar Evaluación" del sitio ya apuntaban a esta página desde antes,
no hubo que tocar nada transversal. Verificado visualmente: el widget
carga el flujo real de 4 pasos (Selecciona Servicio → Profesional →
Día y hora → Datos). Commit `825b7e2`.

## 2026-09-20 — Placeholder [AÑOS] pendiente en index.html

Rodolfo notó que el contador "Años de Experiencia" del inicio todavía
no tenía el dato actualizado. Causa: `about.html` e `index.html`
tienen cada uno su propio bloque de estadísticas independiente (no
compartido), y al actualizar `[AÑOS]` → "10+" en `about.html` (mismo
día, sección "Sobre el Doctor") no se revisó si `index.html` tenía el
mismo placeholder suelto — sí lo tenía. Grep confirmó que no queda
ningún `[AÑOS]` en el sitio después de este fix. Commit `138e898`.

## 2026-09-20 — Interacción del carrusel de tratamientos + barra fija de agenda en mobile

Rodolfo pidió mejorar la interacción del carrusel "Nuestras
Especialidades" del inicio ("está bien lo de las flechas pero
podríamos agregar scroll horizontal?"). Se agregó soporte para el
gesto de dos dedos del trackpad (deltaX del evento `wheel`) en
`#services-carousel`, que dispara `next`/`prev.owl.carousel` — solo
reacciona a gestos claramente horizontales para no interferir con el
scroll vertical normal. Como le gustó, se extendió el mismo patrón a
los otros 2 carruseles reales del sitio: el carrusel de testimonios
(`owl-single-dots` en `about.html` e `index.html`, que hoy solo se
navega con puntitos) y el slider antes/después (`.ba-carousel`, activo
solo con 2+ parejas, igual que sus flechas). Commits `eabf747`,
`28d55a6`.

**Mismo día — barra fija de "Agendar Evaluación" en mobile:** Rodolfo
notó que el CTA del header queda escondido dentro del menú hamburguesa
en mobile (`menu_side_area` se oculta con el resto del nav junto al
logo) — sin abrir el menú, no hay ningún llamado a la acción visible.
Se investigó el patrón estándar en sitios de clínicas/servicios:
**barra fija inferior con el CTA a ancho completo** es el más común
(vs. un botón flotante circular tipo FAB, menos explícito). Rodolfo
prefirió la barra.

Implementación (`#mobile-cta-bar`, `d-lg-none`, insertada después de
`<!-- header close -->` en las 25 páginas reales): al principio quedó
completamente tapada por las secciones tipo hero, porque Intrio ya usa
su propia utilidad `.z-1000` en esas secciones (`#section-intro`) —
tuvo que subirse la barra a `z-index: 1001`. Rodolfo aclaró que quería
el comportamiento más simple: la barra se queda fija todo el scroll, y
al llegar al final de la página el **footer pasa a estar por encima**
de la barra (tapándola) en vez de que la barra tape al footer — se
logró solo con CSS (`footer { z-index: 1002 }` en mobile), sin
necesidad de JS ni de esconder/mostrar nada dinámicamente (se descartó
un primer intento con `IntersectionObserver` que ocultaba la barra al
acercarse al footer, por ser más complejo de lo que Rodolfo pedía).
Verificado visualmente: la barra se ve durante el scroll normal y el
footer la cubre completo al llegar al final. Commit `c5b47f9`.

**Seguimiento (mismo día):** Rodolfo notó que en `consultation.html`
la barra era redundante (ya estás agendando, con el widget de Reservo
ahí mismo) — se quitó solo en esa página, se mantiene en las otras 24.
Commit `60c3112`.

**Seguimiento 2 (mismo día):** Rodolfo pidió que la dirección de la
clínica fuera clickeable y llevara a Google Maps con la ubicación
exacta, "siempre que salga la dirección". Los 3 bloques compartidos
que muestran "Santa Teresa 580, La Ligua, V Región" en las 25 páginas
(panel off-canvas, widget de footer, bloque de contacto de
`contact.html`/`consultation.html`) ahora enlazan a
`google.com/maps/search/?api=1&query=Santa+Teresa+580,+La+Ligua,+Chile`
con `target="_blank"` — mismo patrón ya usado para los links de correo
(Gmail) y WhatsApp. Commit `687ee1b`.

## 2026-09-21 — Auditoría de copy/consistencia/UX del sitio completo

Rodolfo pidió una auditoría general de copy, inconsistencias y UX
ahora que el sitio ya tiene las 33 páginas reales (25 originales + 8
nuevas de tratamiento). Se delegó a un subagente en background (lectura
de las 33 páginas, sin editar nada) para no gastar contexto propio
extrayendo texto — devolvió un listado categorizado (Copy /
Consistencia / UX / Notas del trabajo del día) que Rodolfo revisó y
aprobó ítem por ítem. Ejecutado:

- **"Mesoterapia" → "Mesoterapia Facial"** en las 33 páginas (mega-menú,
  off-canvas, footer, `services.html`, FAQ) — era la única de las 19
  páginas de tratamiento con desajuste entre su propio `<title>`/`<h1>`
  y cómo se la nombraba en el resto del sitio.
- **CTA final unificado** a "Agendar Evaluación" genérico en las 19
  páginas de tratamiento (antes 6 personalizaban el botón con el
  nombre del tratamiento, 13 no). El h2 "Conversemos sobre X" arriba
  del botón se dejó intacto, sigue personalizado por página.
- **FAQ en Title Case** (antes en minúscula sentence-case, único lugar
  del sitio así) y **Alidya recupera su nombre de marca** en el ítem
  del FAQ ("Tratamiento anticelulítico" → "Alidya (Anticelulítico)").
- **Stat "El 90% de las mujeres tiene celulitis"** (`tratamiento-alidya.html`)
  verificado con fuentes médicas (Sociedad Española de Medicina
  Estética, citado también por medios chilenos) — es un dato real y
  ampliamente reproducido en dermatología estética. Se agregó una
  atribución chica y discreta debajo del bloque de stats, sin tocar el
  diseño de los números grandes.
- **Etiquetas de duración estandarizadas** a 2 variantes según el caso
  ("Duración por sesión" para tratamientos multi-sesión, "Duración
  aproximada" para procedimientos de una sola vez) en vez de 5 formas
  distintas de decir lo mismo.
- **Títulos SEO acortados** en `blog-congresos.html` (96→52 caracteres)
  y `blog-piel.html` (71→35) para que no se corten en resultados de
  búsqueda — el `<h1>` de cada artículo no se tocó.

**⚠️ Pendiente de seguimiento — Pacientes Atendidos:** el placeholder
`[Nº]` en `about.html`/`index.html` se completó con **"+300"** a
pedido explícito de Rodolfo ("pongamos +300 por ahora"). A diferencia
de "Años de Experiencia" (10+) y las certificaciones, que sí vienen
confirmadas directamente por el Dr. Paredes, **este número no fue
validado por él** — Rodolfo lo puso como estimación provisional.
Queda anotado acá para que, cuando el Dr. Paredes confirme la cifra
real (aunque sea aproximada), se actualice si corresponde.

Commit `f1b0614` (Mesoterapia/CTA/FAQ/Alidya), `785c896` (pacientes
atendidos, títulos SEO, etiquetas de duración).

## 2026-09-21 — 4 fotos reales nuevas + auditoría de encuadre en todo el sitio

Rodolfo mandó 4 fotos nuevas (ya en `Recursos/`) para reemplazar:

- **Limpieza Facial Avanzada** ← foto del equipo/máquina de análisis
  facial (`IMG_3020.PNG`, transparente con artefactos de color en los
  bordes — se compuso sobre blanco sólido, quedó limpio). Reemplazó a
  `retrato-desk-pensativo.webp`, que estaba compartido con
  `services.html` — se actualizó en ambos lugares.
- **Evaluación Corporal** ← foto del doctor en consulta con paciente
  real (`IMG_3010.HEIC`, rostro del paciente no visible). El archivo
  anterior (`retrato-brazos-cruzados.webp`) seguía compartido con
  Ginecomastia — solo se cambió la referencia de Evaluación Corporal.
- **Alidya** ← foto del doctor con la caja del producto (`IMG_2813.JPG.jpeg`).
  Archivo exclusivo de esa página, reemplazo directo.
- **Mesoterapia** ← foto real del procedimiento en curso (`IMG_3024.HEIC`,
  mascarilla + dispositivo con luz verde). El archivo anterior
  (`retrato-desk-sonrisa.webp`) estaba muy compartido (blogs, index,
  otras páginas de tratamiento) — solo se cambió la referencia de
  Mesoterapia.

Las 4 tarjetas correspondientes en `services.html` se actualizaron
también. Al hacerlo con un script (`sed`) se pisó por error la tarjeta
de Exosomas (comparte el mismo archivo base que Mesoterapia) —
detectado y corregido antes de commitear.

**Encuadre de Alidya y Mesoterapia:** las fotos originales tenían al
sujeto muy abajo en el encuadre vertical, y el CSS del sitio
(`object-position: center 20%` en `.jarallax-img`, pensado para que
los heroes anchos y cortos muestren la parte de arriba de la foto)
dejaba ver solo pared vacía / gorro, cortando la cara y el producto.
Se resolvió recortando de nuevo el archivo fuente (PIL, ventana
vertical ajustada, mismo tamaño final 1200x1800) para traer al sujeto
más arriba en el encuadre — en este caso el recorte usa una porción
grande del frame original, sin pérdida de calidad relevante. Commit
`ce46e92`.

**Seguimiento (mismo día) — auditoría de encuadre en las 33 páginas:**
Rodolfo pidió revisar si el mismo problema de encuadre afectaba a
otras fotos hero del sitio. Se encontraron 2 casos más:
`retrato-marmol.webp` (about, lipolitico-corporal, peeling-facial,
bioregenerador-facial) y `servicio-laser-facial.webp` (blog-piel,
antienvejecimiento) — en ambas, el sujeto quedaba fuera del recuadro
visible (solo ojos/gorro, o directamente la nuca sin rostro).

A diferencia de Alidya/Mesoterapia, acá **no se recortó el archivo** —
se corrigió con `object-position` puntual en CSS (selector por nombre
de archivo, `img.jarallax-img[src*="archivo.webp"]`), ajustando solo
el punto de anclaje vertical (38% y 45% respectivamente) sin descartar
ni re-comprimir ningún píxel de la foto original. Es el método
preferido: recortar el archivo solo tiene sentido cuando el sujeto
ocupa una porción muy chica de una foto mucho más grande y no hay
forma de que el CSS alcance. Verificado en desktop y mobile — mismo
valor funciona bien en ambos breakpoints, no hizo falta media query.
El resto de las fotos hero del sitio (incluyendo `retrato-scrubs.webp`,
revisado por las dudas) se ven bien, no necesitaron ajuste. Commit
`cddf79f`.

## 2026-09-21 — 3 fotos reales más: Lipolítico Facial, Antienvejecimiento, Ginecomastia

Rodolfo mandó 3 fotos nuevas (`Recursos/IMG_3049.PNG`, `IMG_3045.JPEG`,
`IMG_3047.JPG.jpeg`) con capturas de contexto indicando en qué tarjeta
va cada una. Reemplazan fotos placeholder que estaban en hero + tarjeta
de `services.html` de esos 3 tratamientos:

- **Lipolítico Facial:** `retrato-scrubs.webp` (genérica, compartida con
  nada más) → `retrato-lipolitico-facial.webp`. Foto real: primer plano
  de perfil de mandíbula/papada, exactamente el área que trata este
  procedimiento.
- **Antienvejecimiento:** `servicio-laser-facial.webp` (compartida con
  varios posts de blog — no se tocó el archivo original, se creó uno
  nuevo) → `retrato-antienvejecimiento.webp`. Foto real: composición
  mitad rostro joven / mitad envejecido, concepto claro para la página.
- **Ginecomastia:** `retrato-brazos-cruzados.webp` → `torso-ginecomastia.webp`.
  Foto real: torso masculino con mano sobre el pecho, sin rostro visible.

Las 3 fuentes son de resolución más baja que el estándar del sitio
(1080x793, 1920x1916, 1161x789 aprox.) — mismo caso que la foto de
Perfiloplastia de la tanda anterior. Se procesaron igual (recorte
centrado a 2:3 o 3:4 según la imagen, resize a 1200x1800 o 1350x1800,
webp calidad 88) sin pedir confirmación de nuevo porque Rodolfo ya
había aceptado ese trade-off explícitamente para el mismo tipo de caso.

Igual que en la auditoría de encuadre anterior, el hero (`.jarallax-img`,
banner ancho y bajo) dejaba fuera lo importante con el `object-position`
por defecto (20%) en 2 de las 3 fotos — se agregó excepción puntual en
`css/costaserena-theme.css` para `retrato-antienvejecimiento.webp`
(45%) y `torso-ginecomastia.webp` (40%, luego reajustado a 34%, ver
sección siguiente), sin recortar los archivos.
`retrato-lipolitico-facial.webp` se veía bien con el valor por defecto.

De paso, las tarjetas de Antienvejecimiento y Ginecomastia en
`services.html` todavía usaban placeholders del template
(`images/services/2.webp` y `3.webp`, nunca reemplazados) — se
actualizaron a las fotos reales nuevas también, ya que la tarjeta de
Lipolítico Facial sí compartía imagen con el hero y correspondía
mantener la misma consistencia.

Verificado con servidor local + Claude-in-Chrome en las 3 páginas de
tratamiento y en `services.html` (hard reload para evitar cache de CSS
viejo). Commit `cdf456e`.

## 2026-09-21 — Fotos reales mejoradas: Ginecomastia y Perfiloplastia

Rodolfo mandó 2 fotos más (`Recursos/ginecomastia-3.png`,
`Recursos/perfiloplastia-scaled.jpg`) para reemplazar las que se
acababan de poner hace un rato en la misma sesión — mejores que las
anteriores, así que se sobrescribió directo el mismo archivo
(`torso-ginecomastia.webp` y `servicio-perfiloplastia-perfil.webp`,
ninguna compartida con otra página, confirmado con grep antes de tocar).

- **Ginecomastia:** foto de examen clínico real (guante de nitrilo
  azul, portapapeles) en vez del torso genérico anterior — más
  directamente relacionada con la consulta médica que con una pose de
  estudio. Se probaron varios valores de `object-position` en el hero
  (empezó en 40%, heredado de la foto anterior) hasta encontrar 34%,
  que muestra el guante + gesto clínico + portapapeles sin centrar el
  encuadre en el pezón. La tarjeta de `services.html` no tiene ese
  control fino (no es `.jarallax-img`, usa `object-fit: cover` con
  aspect-ratio fijo ~1:1.2 sin position custom) y ahí sí se ve el
  pezón — se evaluó y se dejó así: es contenido médico de un
  tratamiento que trata exactamente esa zona, no hay paciente real
  identificable (foto de stock), incluido el gesto de examen que le da
  contexto clínico.
- **Perfiloplastia:** reemplaza la foto de baja resolución de la tanda
  anterior (1146x812, la que Rodolfo había aceptado usar "igual,
  aceptando algo de suavizado") por una de mucha mejor calidad
  (2560x1708) — mismo concepto (perfil femenino, foco en nariz/mentón)
  pero nítida. El `object-position` del hero también necesitó ajuste
  (20% por defecto solo mostraba el pelo, se subió a 50% para centrar
  nariz/labios/mentón).

De paso se encontró que la tarjeta de Perfiloplastia en `services.html`
todavía usaba el placeholder del template (`images/services/6.webp`,
foto b/n genérica) — nunca se había actualizado a la foto real aunque
el hero sí la tenía desde la tanda anterior. Se corrigió también.

Verificado con servidor local + Claude-in-Chrome (hero + tarjeta de
ambas páginas, hard reload). Commit `70524ee`.

## 2026-09-22 — Dominio propio (clinicavitelia.cl) + aplanado de la estructura del repo

Rodolfo compró el dominio `clinicavitelia.cl` (registrado a nombre de
"VITELIA CLINIC SPA"). Se armó todo el flujo de conexión con GitHub
Pages, guiando a Rodolfo paso a paso por chat (no tengo acceso a sus
cuentas, todo lo hizo él mismo):

- El registrador del dominio no ofrece panel propio de registros DNS
  (solo permite apuntar a nameservers externos), así que se usó
  **Cloudflare (plan Free)** solo como proveedor de DNS — nada de
  proxy/CDN/Workers, todos los registros quedaron en "DNS only".
- Registros creados en Cloudflare: 4 A (`@`) apuntando a las IPs fijas
  de GitHub Pages (185.199.108/109/110/111.153) + 1 CNAME (`www` →
  `rodolforjs.github.io`).
- Nameservers de Cloudflare (`blair.ns.cloudflare.com` y
  `osmar.ns.cloudflare.com`) agregados en el panel del registrador,
  reemplazando los que tenía por defecto.
- De mi lado: agregué el archivo `CNAME` en la raíz del repo con
  `clinicavitelia.cl` (commit `44b4013`) — GitHub Pages lo detectó
  automáticamente y quedó configurado como dominio custom. El
  certificado HTTPS lo emite GitHub solo, automáticamente, una vez que
  el DNS termine de propagar (puede tardar horas).

**Aplanado de la estructura del repo (mismo día, no planeado
originalmente):** Rodolfo notó que con el dominio propio la URL se veía
mal — `clinicavitelia.cl/Intrio%20HTML/index.html` en vez de
`clinicavitelia.cl/index.html`, por el redirect viejo de la raíz hacia
la subcarpeta `Intrio HTML/` (ver commit `ad2e40a`, sesión anterior).
No es "reestructurar el sitio" en el sentido que prohíbe `CLAUDE.md`
regla 2 (eso es sobre diseño/menús/secciones) — es solo mover archivos
de carpeta, así que se hizo directo:

- Se verificó primero que ningún HTML/CSS/JS tuviera rutas
  hardcodeadas a `Intrio HTML/` (grep sin resultados) — todo usa rutas
  relativas, así que mover la carpeta entera un nivel arriba era seguro.
- `git mv` de todo el contenido de `Intrio HTML/` a la raíz del repo
  (about.html, css/, js/, images/, fonts/, todos los `tratamiento-*`,
  `blog-*`, etc.), reemplazando el viejo `index.html` (redirect stub)
  por el `index.html` real que vivía adentro.
- La carpeta `Intrio HTML/` queda vacía y sin trackear (borrada del
  repo, solo le quedaba un `.DS_Store` ignorado).
- Sin cambios en la config de GitHub Pages (`branch: main, path: /`) —
  seguía apuntando a la raíz del repo, que ahora sí es donde vive el
  sitio de verdad.
- Actualizadas las referencias a `Intrio HTML/` en `CLAUDE.md` (working
  copy, servidor local, nota sobre ediciones manuales de Rodolfo) para
  reflejar la nueva estructura.

Commit `42c07de`. El DNS terminó de propagar y `clinicavitelia.cl` quedó
resolviendo y sirviendo el sitio correctamente (confirmado con `dig` y
`curl`, código 200). Después, ese mismo día, GitHub emitió el
certificado HTTPS automáticamente — activé "Enforce HTTPS" vía API en
cuanto detecté que el certificado ya existía (`gh api -X PUT
repos/.../pages -F https_enforced=true`), sin esperar a que apareciera
el checkbox habilitado en la UI. `https_enforced: true` confirmado,
sitio sirviendo en `https://clinicavitelia.cl/` con candado.

## 2026-09-22 — Limpieza del repo: fuera rastro del template sin usar

Rodolfo pidió un inventario de todo lo que se pudiera sacar del repo
para que quedara "sano" (sin residuos del template Intrio original) y
aprobó ejecutar la limpieza, excepto un punto que prefirió dejar para
después (fotos huérfanas en `images/real/` y `images/services/`, por
si acaso). Antes de borrar nada se verificó con grep que cada archivo
no tuviera ninguna referencia desde las 33 páginas reales del sitio.

Borrado (todo recuperable del historial de git si hiciera falta):

- **7 páginas demo del template**, que solo se referenciaban entre sí,
  ninguna real las enlazaba: `blog-single.html`, `project-single.html`,
  `projects.html`, `projects-style-2.html`, `service-single.html`,
  `services-style-2.html`, `services-style-3.html`.
- **2 formularios PHP legacy**, reemplazados hace tiempo por WhatsApp/
  Reservo y sin ninguna referencia: `contact.php`,
  `action-consultation.php`.
- **8 carpetas de imágenes demo** del template, cero referencias en
  todo el sitio real: `images/blog/`, `images/blog-thumbnail/`,
  `images/demo/`, `images/products/`, `images/projects-wide/`,
  `images/services-landscape/`, `images/slider-wide/`,
  `images/testimonial/`.
- **6 archivos CSS/JS sin usar**: los 4 esquemas de color alternativos
  del template (`css/colors/scheme-01.css` a `scheme-04.css` — solo se
  usa `scheme-costaserena.css`), `css/bootstrap.rtl.min.css` (versión
  RTL, no aplica), y los 2 JS de validación de los formularios PHP ya
  eliminados (`js/validation-consultation.js`,
  `js/validation-contact.js`).
- **Carpeta `theme/` completa**: eran copias de
  `costaserena-theme.css` y `scheme-costaserena.css` para linkear desde
  el README, pero ya estaban desincronizadas de los archivos reales en
  `css/` (confirmado con `diff`) — un riesgo de confusión, no solo
  desorden. Se actualizó el README para linkear directo a `css/`.

No se tocó (aprobado explícitamente para más adelante): las fotos
huérfanas `images/real/retrato-brazos-cruzados.webp`,
`retrato-scrubs.webp`, `retrato-desk-pensativo.webp`,
`servicio-alidya-producto.webp`, ni los placeholders sueltos
`images/services/2.webp`, `3.webp`, `6.webp`.

También se actualizaron los comentarios de `.gitignore` (referenciaban
la ruta vieja `Intrio HTML/images/...`, ya no existe desde el aplanado
de estructura).

Verificado con servidor local que las páginas reales y los assets
compartidos (CSS/JS) siguen cargando bien después de la limpieza.
Commit `471489f`.

## 2026-09-22 — Flechas del carrusel "Nuestras Especialidades" a los costados

Rodolfo pidió mover las flechas prev/next del carrusel de tratamientos
(inicio) a los costados del carrusel en vez de junto al botón "Ver
todos los tratamientos", y que ese botón quedara solo ahí.

- Se movió el markup de `.de-custom-nav[data-target="#services-carousel"]`
  (con sus `.d-prev`/`.d-next`) desde el header de la sección hacia
  adentro del `.col-lg-12` que envuelve el carrusel — la estructura
  interna (wrapper + data-target + hijos) se mantuvo intacta porque
  `designesia.js` depende de ese patrón exacto para bindear los clicks
  (`$nav.find('.d-next')`/`.d-prev`).
- CSS nuevo, **scoped** a una clase propia
  (`.services-carousel-nav-sides`) en vez de tocar `.de-custom-nav` en
  general — ese selector genérico también lo usa un carrusel
  "Contenido Educativo" que está comentado/oculto en `index.html`, no
  quería que esta iteración lo afectara si se reactiva en el futuro.
  Las flechas quedan `position: absolute`, ancladas a 20px del borde
  izquierdo/derecho del carrusel, centradas verticalmente.
- En mobile (`max-width: 767px`) las flechas se ocultan — igual
  criterio que el resto de los carruseles del sitio, ahí se navega con
  swipe/scroll táctil.
- Verificado con Claude-in-Chrome en desktop: las flechas se ven en los
  bordes del carrusel y el click de "next" sigue funcionando
  (`owl.trigger('next.owl.carousel')`).

Commit `d0a3b5a`.

## 2026-09-22 — 2 fotos reales más para los blogs "Ginecomastia" y "Tu piel no miente"

Rodolfo mandó `Recursos/IMG_3060.HEIC` (Dr. Paredes con instrumento en
mano, gorro de marca) para el post `blog-ginecomastia.html`, y
`Recursos/IMG_3058.HEIC` (Dr. Paredes atendiendo a un paciente, vista
de La Ligua de fondo, rostro del paciente no visible) para
`blog-piel.html`.

Antes de tocar nada se verificó con grep que los archivos que se iban
a reemplazar (`images/real/servicio-cirugia.webp` y
`servicio-laser-facial.webp`) estuvieran usados **exclusivamente** para
estos dos posts en todas sus apariciones (hero + tarjeta en
`blog.html` + tarjetas de "relacionados" en `blog-congresos.html`,
`blog-filosofia.html` y `blog-plasmage.html`) — confirmado, así que se
sobrescribieron directo los mismos archivos sin necesidad de renombrar
ni actualizar referencias en ningún HTML.

Quirk encontrado en el procesamiento: `IMG_3058.HEIC` traía la
orientación solo en el tag EXIF, no "horneada" en los píxeles (al
revés que la mayoría de las fotos de este proyecto) — `sips` la
convertía a JPEG pero PIL la seguía leyendo como landscape
(4032x3024) en vez de portrait. Hubo que aplicar
`ImageOps.exif_transpose()` antes de recortar; si no, el recorte
quedaba centrado en el eje equivocado. Vale la pena revisar esto en
futuras fotos que se vean raras al recortar aunque la vista previa
del chat las muestre bien orientadas.

Verificado con servidor local + Claude-in-Chrome: heroes de ambas
páginas y tarjetas en `blog.html` se ven bien con el `object-position`
existente, no hizo falta agregar ni tocar overrides de CSS.

Commit `c27305b`.

## 2026-09-22 — 6 fotos antes/después: 4 ya existían, 2 nuevas agregadas

Rodolfo mandó 6 fotos antes/después (`Recursos/IMG_2943.PNG`,
`IMG_2930/2933/2941/2932/2927.JPG.jpeg`) pidiendo agregarlas a las
páginas de tratamiento correspondientes, más un plan más grande:
sacar el slider interactivo del inicio (dejar imagen estática, guardar
el código por si se reactiva más adelante), y evaluar una sección/
galería "Antes y Después" nueva bajo el menú "Más" con visor tipo
lightbox.

**Antes de tocar nada**, se comparó cada foto nueva contra los pares
`antes-despues-*.webp` ya existentes en `images/real/` — **4 de las 6
resultaron ser fotos que ya estaban en el sitio** (mismo paciente,
mismo encuadre, solo reenviadas de nuevo sin darse cuenta):

- Foto "párpado con lunar" = `antes-despues-plasmage` (ya en
  `tratamiento-plasmage.html`)
- Foto "mejilla/mandíbula" = `antes-despues-mandibula` (ya en
  `tratamiento-acido-hialuronico.html`, no Exosomas como se propuso)
- Foto "entrecejo" = `antes-despues-entrecejo` (ya en
  `tratamiento-antienvejecimiento.html`, no Toxina Botulínica)
- Foto "ojeras" = `antes-despues-ojeras` (ya en
  `tratamiento-acido-hialuronico.html`)

Se le consultó a Rodolfo con `AskUserQuestion` qué hacer con las 2 que
tenían propuesta de tratamiento distinta al actual (mejilla→Exosomas,
entrecejo→Toxina Botulínica) — decidió **dejarlas donde están**, no
moverlas ni duplicarlas.

**Las 2 fotos genuinamente nuevas** se procesaron y agregaron:

- **Glúteos** (`IMG_2943.PNG`, imagen apilada antes arriba/después
  abajo separada por línea blanca) → dividida programáticamente
  detectando la fila blanca con numpy (`row_means>240`), guardada como
  `antes-despues-gluteos-antes/despues.webp`. Se agregó una sección
  "Antes y Después" completamente nueva en `tratamiento-alidya.html`
  (no tenía una antes) — mismo patrón exacto que las demás páginas
  (`.ba-carousel` + `.de-custom-nav`), y se agregaron los 3 scripts que
  le faltaban al final del `<body>` (`jquery.event.move.js`,
  `jquery.twentytwenty.js`, `before-after-carousel.js`), que las otras
  páginas con este componente ya tenían y esta no.
- **Párpados (paciente distinta)** (`IMG_2932.JPG.jpeg`, 4320x4320
  cuadrada) → dividida igual, con la complicación de que traía márgenes
  blancos en los 4 bordes además de la franja divisoria central; hubo
  que iterar el recorte 3 veces revisando visualmente hasta eliminar
  del todo el borde blanco residual. Guardada como
  `antes-despues-plasmage2-antes/despues.webp` y agregada como **segundo
  par** en el `data-pairs` JSON que ya existía en
  `tratamiento-plasmage.html` (ahora muestra "1/2" con flechas).

Verificado con Claude-in-Chrome: el slider de arrastre funciona en
Alidya (par único, sin flechas — comportamiento esperado), y en
Plasmage el contador "2/2" + flecha "next" cargan correctamente el
segundo par.

Commit `0235655`.

## 2026-09-22 — Galería "Antes y Después" + imagen estática en el inicio

Implementado el resto del plan grande de la sesión (slider del inicio
→ imagen estática, y galería nueva bajo "Más"):

**Investigación primero:** el template Intrio ya trae Magnific Popup
cargado (`js/vendors.js`) con varias configuraciones armadas en
`js/designesia.js` (`loadMagnificPopup()`) — entre ellas `.zoom-gallery`
(delegate a cualquier `<a>` adentro, tipo imagen, con zoom + navegación
de galería) y `.image-popup` (imagen suelta, sin galería). No hizo
falta agregar ninguna librería nueva, solo usar las clases correctas.

**Inicio (`index.html`):** el slider interactivo (`#hero-before-after`,
poblado por `js/hero-before-after.js`, rotaba entre pares cada vez que
cambiaba el testimonio) se reemplazó por una imagen estática
compuesta — `images/real/antes-despues-home-static.webp`, generada con
PIL uniendo antes+después del par "mandíbula" lado a lado (mismo par
que ya se usaba en esa rotación por tener formato apaisado). La imagen
está envuelta en `<a class="image-popup">` — al hacer click abre el
visor de Magnific Popup en grande. Debajo se agregó un link "Ver más
resultados" hacia la nueva galería.

El markup viejo (`<div id="hero-before-after"></div>`) se dejó
**comentado en el HTML, no borrado**, y el script
`js/hero-before-after.js` se dejó de cargar en `index.html` pero el
archivo sigue intacto en el repo — todo reversible si se quiere
reactivar la rotación más adelante.

**Galería nueva (`antes-despues.html`):** página nueva, mismo patrón de
header/footer que el resto del sitio (duplicado de `testimonials.html`
como base). Grid de 6 tarjetas (una por par antes/después existente en
el sitio: glúteos/Alidya, mandíbula y ojeras/Ácido Hialurónico,
entrecejo/Antienvejecimiento, y los 2 de Plasmage) — cada tarjeta
muestra las mitades antes/después lado a lado con etiqueta, ambas
clicables por separado. Todas las tarjetas están dentro de un único
contenedor `.zoom-gallery`, así que el visor navega las 12 fotos
completas (antes y después de los 6 tratamientos) con flechas
prev/next, sin tener que cerrar y volver a abrir.

**Nav:** se agregó "Antes y Después" al dropdown "Más" en las 33
páginas reales (script Python, verificado que el bloque de 3 líneas
era único por página antes de tocar nada) — más `antes-despues.html`
sumada a `sitemap.xml`.

**CSS nuevo** en `costaserena-theme.css`: `.antes-despues-thumb`
(aspect-ratio 3/4, object-fit cover) y `.antes-despues-tag` (etiqueta
"Antes"/"Después" superpuesta).

Verificado con Claude-in-Chrome: el click en la imagen del inicio abre
el visor correctamente con el título del `title` del link; en la
galería, el visor abre en la posición correcta ("1 of 18") y el botón
"next" avanza bien (probado hasta "2 of 18", Alidya Antes → Después).

Commit `c18f5a6`.

## 2026-09-22 — Corrección: Rodolfo quería rotación, no imagen fija

Malentendí el pedido original. Rodolfo aclaró: quería las **6** fotos
antes/después rotando por testimonio (como ya rotaba antes, pero con
las 6 parejas en vez de solo 2), **no** una sola imagen fija — y
explícitamente pidió no recortar ni "jugar con la diagramación" de
las fotos, mostrarlas tal cual vienen.

- Se revirtió la imagen estática compuesta
  (`antes-despues-home-static.webp`, unía antes+después en un solo
  archivo con PIL) — se borró del repo, era justo la manipulación que
  no quería.
- `js/hero-before-after.js` reescrito: mismo mecanismo de rotación
  original (cambia junto con `changed.owl.carousel` del carrusel de
  testimonios), pero con las **6 parejas** del sitio (antes solo tenía
  2 curadas por formato) y **sin** inicializar `.twentytwenty()` — ya
  no hay slider de arrastre, solo las dos mitades lado a lado con
  `w-100` (sin forzar aspect-ratio ni cropear).
- `index.html`: el contenedor `#hero-before-after` volvió a estar
  activo (ya no comentado) con clase `.zoom-gallery` agregada, así el
  click en cualquier mitad abre el visor de Magnific Popup — se
  reutiliza el binding delegado que ya inicializa `designesia.js`
  (`.zoom-gallery` con `delegate:'a'`), no hizo falta re-inicializar
  manualmente por cada rotación.
- Vuelve a cargarse `js/hero-before-after.js` en `index.html`.

Verificado con Claude-in-Chrome: el par cambia correctamente al
cambiar de testimonio (probado entrecejo → mandíbula), las fotos se
ven completas sin recortar, y el click abre el visor con el título
correcto y navegación propia del par ("1 of 2").

Commit `d520e03`.

## 2026-09-22 — Ajuste fino: apiladas (no lado a lado) + alto fijo

Segunda corrección sobre la caja del inicio, mismo día. Rodolfo
señaló dos cosas más: (1) las fotos originales vienen apiladas
(antes arriba, después abajo, formato "cuadrado"), no lado a lado
como las había puesto; (2) la sección no debía cambiar de alto al
rotar — mala UX que la caja "salte" según la proporción de cada foto.

- `js/hero-before-after.js`: el layout pasó de `row` (dos columnas,
  lado a lado) a `.hero-ba-stack` (`flex-direction: column` — antes
  arriba, después abajo).
- CSS nuevo `.hero-ba-half` en `costaserena-theme.css`: alto fijo
  (`height: 220px`) + `object-fit: cover` por mitad, así la caja mide
  siempre lo mismo sin importar si la foto es panorámica (glúteos) o
  vertical (Plasmage). Aclaración para no repetir el malentendido
  anterior: esto es un recorte **visual vía CSS**, no toca el archivo
  — la foto completa se sigue viendo sin recortar al abrir el visor
  con click.
- Verificado programáticamente midiendo la altura de la caja
  (`getBoundingClientRect().height`) al forzar el render de las 6
  parejas una por una: siempre 522px exactos, sin variación.

Commit `88b8b0e`.

## 2026-09-22 — Mismo ajuste en la galería antes-despues.html

Rodolfo pidió el mismo criterio para la galería de `antes-despues.html`:
apiladas (no lado a lado) y **una sola imagen por tarjeta** en el
visor — no dividir en antes/después separados, "ya una imagen viene
con su antes y después".

- Generadas 6 imágenes combinadas nuevas
  (`images/real/antes-despues-<slug>-combo.webp`) con PIL, apilando
  verticalmente los archivos `-antes.webp`/`-despues.webp` que ya
  existían (sin recortar su contenido, solo unidos con una línea
  blanca de separación — misma composición que traían las fotos
  originales antes de separarlas). Los archivos `-antes`/`-despues`
  sueltos NO se tocaron, los siguen usando los carruseles de arrastre
  de las páginas de tratamiento.
- `antes-despues.html`: cada tarjeta ahora es **un solo** `<a>` con la
  imagen combinada (antes se dividía en 2 columnas con 2 links y 2
  etiquetas "Antes"/"Después" superpuestas).
- **Bug encontrado y corregido en el mismo cambio:** el visor mostraba
  "9 of 12" en vez de "1 of 6" — el `.zoom-gallery` global de
  `designesia.js` usa `delegate: 'a'` sobre todo el contenedor, así
  que también agarraba los 6 links "Ver tratamiento" como si fueran
  fotos. Se resolvió sin tocar `designesia.js` (archivo del template):
  se renombró el contenedor a `.antes-despues-gallery`, se agregó
  clase `.ad-lightbox` solo a los 6 links de imagen, y se agregó una
  inicialización de Magnific Popup propia e inline al final de
  `antes-despues.html` con `delegate: 'a.ad-lightbox'` (mismo config
  visual que `.zoom-gallery`, solo más acotado).
- CSS: `.antes-despues-thumb` pasó de mitad-lado-a-lado con
  `aspect-ratio: 3/4` a imagen única con `height: 340px` fijo +
  `object-fit: cover`. Se sacaron `.antes-despues-tag` (ya no aplica,
  no hay mitades que etiquetar).
- Caso especial: el combo de Plasmage (par 1) es muy angosto y alto
  (recorte original de párpado en primer plano) — el centro por
  defecto del `object-fit: cover` caía justo en la costura entre
  antes/después, mostrando pelo/oreja en vez del ojo. Se agregó un
  `object-position: center 67%` acotado a ese archivo específico
  (mismo patrón que los overrides de hero images de sesiones
  anteriores) para anclar al ojo del "después".

Verificado con Claude-in-Chrome: las 6 tarjetas se ven apiladas y del
mismo alto; el click abre la imagen completa sin dividir ("1 of 6",
título correcto); "Ver tratamiento" navega normal, ya no lo agarra el
visor.

Commit `a418a5f`.

## 2026-09-22 — Corrección: usar la foto original, no una recompuesta

Rodolfo mostró un ejemplo puntual (Plasmage) donde la imagen original
que mandó viene **lado a lado**, no apilada — y señaló que en vez de
recomponer las fotos con PIL, debía usar el archivo tal cual él lo
subió. Las 6 fotos originales seguían disponibles en `Recursos/`
(gitignored, pero no borradas de la sesión), así que se reprocesaron
desde ahí:

- `IMG_2930.JPG.jpeg` (Plasmage, par 1): confirmado lado a lado, no
  apilado — mi composite anterior asumía mal el layout.
- Las otras 5 (`IMG_2943.PNG` glúteos, `IMG_2933` mandíbula, `IMG_2941`
  entrecejo, `IMG_2932` Plasmage par 2, `IMG_2927` ojeras) sí venían
  apiladas — coincide con lo que ya se había generado, pero igual se
  reemplazaron por el archivo original real (recortando solo el
  borde blanco/crema exterior con detección automática por
  brillo de fila/columna, sin tocar el contenido) en vez de mi
  versión recompuesta.
- Se eliminó el override de CSS `object-position: center 67%` que
  había puesto para la versión vertical vieja de Plasmage — ya no
  aplica con el archivo original (formato lado a lado, centrado por
  defecto se ve bien).
- **Mismo criterio aplicado también a la caja del inicio**
  (`#hero-before-after`), no solo a la galería: `js/hero-before-after.js`
  se simplificó para usar directamente los 6 archivos `-combo.webp`
  (una sola imagen por rotación, sin armar el apilado a mano con JS) —
  más simple y automáticamente respeta el layout real de cada foto
  (apilada o lado a lado). CSS: `.hero-ba-stack`/`.hero-ba-half` se
  reemplazó por `.hero-ba-combo` (una sola clase, alto fijo 460px).

Verificado con Claude-in-Chrome: las 6 fotos del inicio miden 538px de
alto sin variar (probado forzando las 6 una por una), y la de Plasmage
(lado a lado) se ve completa y bien encuadrada en esa caja.

Commit `2c8b7b0`.

## 2026-09-23 — Setup de Google Search Console + datos estructurados

Rodolfo terminó de configurar Search Console (propiedad de dominio
verificada, sitemap enviado, indexación manual solicitada para
inicio/services/consultation). Explícitamente decidió **no** armar el
Google Business Profile — "no me pagaron para eso", queda fuera de
alcance, no volver a proponerlo salvo que él lo pida.

Encontró que el resultado de Google mostraba como descripción el
texto del footer (email/WhatsApp/dirección) en vez de la meta
description real. Causa: el sitio no tenía **datos estructurados**
(schema.org) en ninguna página, así que Google no tenía una fuente
"oficial" de qué es el negocio y arma el snippet solo, agarrando
texto visible que le pareció relevante (el bloque de contacto del
footer, que es denso en información).

- Se acortó la meta description del inicio (de ~179 a ~138
  caracteres, dentro del límite recomendado de Google).
- Se agregó un bloque `<script type="application/ld+json">` con
  schema.org `MedicalBusiness` en `index.html`: nombre, descripción,
  dirección (`PostalAddress`), teléfono, email, Instagram. Es la
  fuente estructurada que le faltaba a Google — no garantiza que el
  snippet cambie de inmediato (depende de cuándo Google vuelva a
  rastrear), pero es la corrección técnica correcta, no solo esperar.
- Validado el JSON con `json.loads()` antes de subir.

No se agregó a las demás páginas por ahora (el snippet problemático
era específicamente el del inicio, que es la URL que la gente
comparte/busca) — si en el futuro se quiere replicar en otras páginas
clave, es directo.

Commit `4acb183`.

## 2026-09-23 — 4 fotos antes/después nuevas + reasignación + rediseño del hero del inicio

Tanda grande de cambios sobre antes/después:

**Reasignación de tratamiento:** la pareja "entrecejo" (frown lines)
que venía atribuida a Antienvejecimiento en realidad corresponde a
Toxina Botulínica — Rodolfo lo señaló directo, no fue una pregunta.
Se movió: sacada de `tratamiento-antienvejecimiento.html` (quedó sin
sección de antes/después, era la única pareja que tenía) y agregada a
`tratamiento-toxina-botulinica.html` (no tenía sección, se creó una
nueva). También se actualizó su tarjeta en `antes-despues.html`
(label + link) y su `alt` en `js/hero-before-after.js`.

**4 fotos nuevas** (`Recursos/IMG_2988.PNG`, `IMG_2998.JPG.jpeg`,
`IMG_2989.PNG`, `IMG_2994.JPG.jpeg`), procesadas igual que la tanda
anterior (recorte de borde blanco/negro exterior automático por
brillo, división en antes/despues separados detectando la franja
divisoria — esta vez una era oscura casi negra en vez de blanca,
hubo que buscarla por brillo mínimo en vez de máximo):

- **Rinomodelación** (perfil de nariz) → tratamiento nuevo, **no existe
  página** en el catálogo. Regla del proyecto (`CLAUDE.md` #5): no se
  crea la página sin verificar que el tratamiento sea real — Rodolfo
  confirmó explícitamente que en estos casos solo hay que poner el
  nombre que él dio, sin link "Ver tratamiento". Aparece en la
  galería y en el inicio, sin página propia.
- **Lipopapada Enzimática** (perfil de mentón/papada) → mismo caso,
  sin página, sin link.
- **Bioestimulación de Cuello** → coincide con
  `tratamiento-bioestimulacion.html` (ya existía, cubre "Facial,
  Cuello y Escote") — se le agregó su primera sección de antes/después
  (no tenía ninguna).
- **Toxina Botulínica** (segunda pareja, paciente distinta) →
  agregada como segundo par en el carrusel nuevo de
  `tratamiento-toxina-botulinica.html`.

Se agregaron los 3 scripts del carrusel (`jquery.event.move.js`,
`jquery.twentytwenty.js`, `before-after-carousel.js`) a
`tratamiento-toxina-botulinica.html` y `tratamiento-bioestimulacion.html`,
que no los tenían por no haber usado antes este componente.

**Galería (`antes-despues.html`):** ahora 10 tarjetas (antes 6). Las 2
sin tratamiento verificado (Rinomodelación, Lipopapada Enzimática) no
llevan el link "Ver tratamiento" en su tarjeta.

**Rediseño del hero del inicio** (`#hero-before-after`,
`js/hero-before-after.js`): dos pedidos de Rodolfo sobre el mismo
componente:

1. "Hay más fotos que testimonios, que no tengan relación" — se sacó
   la sincronización con el cambio de testimonio
   (`changed.owl.carousel`) y ahora tiene su **propia transición
   automática** cada 4.5s, independiente.
2. "Faltan las flechitas del visor como en antes-despues.html" — la
   causa era que antes solo se inyectaba **una** foto a la vez en el
   DOM (se reemplazaba en cada rotación), así que Magnific Popup no
   tenía con qué armar la galería de navegación. Ahora las **10**
   fotos se inyectan todas de una vez al cargar la página
   (`position: absolute`, apiladas, solo una con `opacity:1` vía la
   clase `.is-active`) — el crossfade lo hace un `setInterval` que
   mueve la clase, y el visor las detecta todas (`.zoom-gallery` ya
   estaba en el contenedor padre), mostrando flechas y contador "X de
   10" igual que en la página de galería completa.

CSS nuevo en `costaserena-theme.css`: `.hero-ba-slideshow` (contenedor
con alto fijo) + `.hero-ba-slide` (position absolute, fade por
opacity) — reemplaza a `.hero-ba-combo` de la sesión anterior.

Verificado con Claude-in-Chrome: el inicio cambia de foto solo (sin
esperar el testimonio), el visor abre con flechas y contador ("7 of
10" probado); la galería tiene 10 tarjetas, las 2 sin tratamiento no
tienen "Ver tratamiento"; Toxina Botulínica muestra "1/2" en su
carrusel; Bioestimulación muestra su primer par; Antienvejecimiento ya
no tiene sección de antes/después.

Commit `9fa5519`.

## 2026-09-23 — Ajuste: tarjetas sin "Ver tratamiento" del mismo alto

Rodolfo notó que las tarjetas de Rinomodelación y Lipopapada
Enzimática (sin link "Ver tratamiento") quedaban más bajas que el
resto del grid en `antes-despues.html`. Se agregó un
`<span class="fs-14 invisible">Ver tratamiento</span>` en esas 2
tarjetas — ocupa el mismo espacio que el link real pero sin mostrarse
(`.invisible` de Bootstrap, `visibility: hidden` sin sacar el elemento
del flujo), así el grid queda parejo sin necesitar CSS nuevo.

Commit `8f10e2f`.

## 2026-09-23 — Foto de Alidya: recorte nuevo con la palabra completa

Rodolfo notó que en la tarjeta de Alidya (`services.html`) la "A" de
"ALIDYA" en la caja del producto quedaba cortada por el encuadre.
Investigando, no era un tema de `object-position` — el archivo
guardado (`images/services/7.webp`, y también
`images/real/servicio-alidya-caja.webp` que comparte la misma foto en
el hero de `tratamiento-alidya.html`) ya tenía la "A" recortada
físicamente desde una sesión anterior a esta, y no había un original
sin recortar guardado en el repo para rehacer el encuadre.

Se le pidió la foto original a Rodolfo (la tenía en `Recursos/
IMG_2813.JPG.jpeg`, 2340x4160) y se rehizo el recorte con Python/PIL:
recorte vertical (ancho completo, alto ajustado a la proporción 2:3)
con un offset de 500px desde arriba para no desperdiciar el espacio
vacío de pared/techo por encima de la cabeza — deja "ALIDYA" completo
y la cara bien encuadrada, mejor aprovechado que un recorte simple
desde el borde superior.

Se guardó el mismo recorte en ambos archivos (comparten la foto). El
hero de `tratamiento-alidya.html` (banner ancho y corto) necesitó
además un `object-position: center 40%` nuevo en
`costaserena-theme.css` — el 20% por defecto solo mostraba la cara,
dejando la caja fuera del banner.

Verificado con Claude-in-Chrome: la tarjeta de `services.html` y el
hero de `tratamiento-alidya.html` muestran "ALIDYA" completo y la cara
del Dr. Paredes visibles a la vez.

Commit `ef1dd26`.

## 2026-09-23 — Ajuste de encuadre: tarjeta de Toxina Botulínica

Rodolfo señaló que el texto bordado del gorro ("Dr. Miguel Paredes S.
— Medicina Estética Regenerativa") quedaba cortado arriba en la
tarjeta de Toxina Botulínica (`services.html`, `images/services/5.webp`).
A diferencia del caso de Alidya, acá sí era puramente un tema de
`object-position` — el archivo tiene el texto completo, pero el texto
queda muy pegado al borde superior de la foto original, así que hasta
el recorte chico por defecto de `.treatment-card-thumb` (aspect-ratio
1/1.2135 vs. la foto 1350x1800) alcanzaba a cortarlo.

Se agregó `object-position: center 0%` acotado a ese archivo en
`costaserena-theme.css` — ancla el recorte arriba del todo, sin
recortar el archivo. Verificado con Claude-in-Chrome (zoom sobre el
gorro): las 3 líneas de texto se leen completas.

Commit `f548ef9`.

## 2026-09-23 — Mismo ajuste en la tarjeta de Plasmage

Mismo caso que Toxina Botulínica, esta vez en la tarjeta de Plasmage
(`services.html`, `images/services/4.webp`) — el recorte centrado por
defecto dejaba el gorro fuera, mostrando desde el mentón hacia abajo.
Rodolfo mandó una referencia de cómo debía verse (cabeza completa).
Se agregó `object-position: center 0%` acotado a ese archivo en
`costaserena-theme.css`, mismo patrón que el caso anterior. Verificado
con Claude-in-Chrome: la tarjeta ahora muestra la cabeza completa con
el gorro.

Commit `9200a66`.

## 2026-09-23 — Ajuste de encuadre: Remodelado de Glúteos y Bioregenerador Facial

Rodolfo pidió revisar dos tarjetas más de `services.html`.

- **Bioregenerador Facial** (`retrato-bioregenerador.webp`): mismo
  patrón de los casos anteriores, recorte centrado dejaba ojos y gorro
  fuera. `object-position: center 0%` acotado a `.treatment-card-thumb`.
- **Remodelado de Glúteos** (`servicio-corporal-cutout.webp`): foto
  tipo "cutout" muy angosta y alta (946x1800) — acá encontré y corregí
  un error propio en el camino: al probar el fix apliqué
  `object-position: center 0% !important` a **todas** las apariciones
  del archivo por selector de `src`, sin darme cuenta de que ese mismo
  archivo se usa también como hero (`.jarallax-img`) en
  `tratamiento-remodelado-gluteos.html`, que ya se veía bien con el
  20% por defecto — con el cambio quedó mostrando solo la coronilla
  del gorro (mal). Se corrigió acotando el override a los selectores
  `.treatment-card-thumb`/`.treatment-thumb` únicamente, dejando el
  hero sin tocar.
  - Nota técnica del proceso: hubo un momento de confusión real
    verificando este caso — el `object-position` sí se estaba
    aplicando bien, pero yo estaba haciendo zoom sobre una región de
    pantalla que correspondía a la parte de ABAJO de la tarjeta (el
    `getBoundingClientRect().top` de la imagen daba negativo, es
    decir la tarjeta estaba parcialmente arriba del viewport) — no era
    un bug del CSS, era mi propia medición mal alineada. Vale la pena
    recordar: si un `object-position` "no hace nada" visualmente,
    chequear primero `getBoundingClientRect()` del elemento antes de
    asumir que el CSS está mal.

Verificado con Claude-in-Chrome: tarjeta de Bioregenerador con
ojos/gorro visibles; tarjeta de Remodelado de Glúteos con cara/gorro
visibles; hero de `tratamiento-remodelado-gluteos.html` sin cambios
(sigue mostrando la cara con mascarilla, como antes).

Commit `99b7ed7`.

## 2026-09-24 — Foto nueva para Peeling Facial

Rodolfo pidió reemplazar la portada de Peeling Facial con
`Recursos/IMG_8336.HEIF` (Dr. Paredes con lentes de protección láser,
mascarilla y dispositivo, tratando a un paciente) — pidió explícitamente
que se viera "todo", lo más expandida posible, sin recortar de más.

- Antes usaba `retrato-marmol.webp`, un archivo **compartido** con
  `about.html` e `index.html` — se verificó con grep antes de tocar
  nada y se confirmó que no se podía sobreescribir. Se creó un archivo
  nuevo (`servicio-peeling-laser.webp`) y se actualizaron solo las 2
  referencias de Peeling Facial (hero + tarjeta de `services.html`).
- La foto se guardó **sin recortar**: el aspecto original (3024x4032 =
  3:4 exacto) coincide con el 1350x1800 que se usa en el resto del
  sitio, así que fue un resize directo, cero pérdida de encuadre —
  justo lo que pidió Rodolfo.
- Hero (`tratamiento-peeling-facial.html`, banner ancho y corto): el
  20% por defecto solo mostraba la coronilla del gorro. Se agregó
  `object-position: center 45%` acotado al archivo — muestra los
  lentes, la mascarilla y el torso (no entra la escena completa con
  paciente y dispositivo en un banner tan bajo, pero es el mejor
  balance posible sin recortar el archivo).
- Tarjeta de `services.html`: el 50% por defecto ya se veía bien
  (gorro, lentes y mascarilla completos), no hizo falta agregar
  override ahí.

Verificado con Claude-in-Chrome en ambos lugares.

Commit `01be853`.

## 2026-09-24 — Ajustes de encuadre en tarjetas combinadas de antes/después

Rodolfo pidió dos ajustes puntuales de `object-position`, transversales
entre `antes-despues.html` y el widget del inicio (mismas imágenes,
mismo archivo `-combo.webp` en ambos lugares):

- **Toxina Botulínica (segunda pareja, `antes-despues-toxina-botulinica2-combo.webp`)**:
  el "después" solo mostraba el gorro, los ojos quedaban fuera del
  recorte fijo de 340px de alto. Se fue subiendo el valor por pasos
  (75% → 85% → 95%) verificando cada vez con Claude-in-Chrome hasta
  que los ojos y cejas del "después" quedaron completos — a costa de
  que el "antes" ahora muestra menos (solo frente, sin ojos), trade-off
  aceptado porque el pedido explícito era arreglar el "después".
- **Rinomodelación (`antes-despues-rinomodelacion-combo.webp`)**: la
  nariz del "antes" se veía cortada arriba. Se bajó a 15% (menos
  recorte desde arriba) y quedó la nariz completa en ambas mitades.

Se agregaron ambas reglas con selector doble (`.antes-despues-thumb` +
`.hero-ba-slide img`) para que apliquen igual en la galería y en el
widget rotativo del inicio, sin duplicar código por página.

Commit `ba5f31b`.

## 2026-09-24 — Corrección: el ajuste anterior estaba mal planteado

Rodolfo marcó que el fix de la sesión anterior no funcionaba como
esperaba: al subir el `object-position` al 95% para el caso de Toxina
Botulínica, apareció un hueco negro enorme entre el "antes" y el
"después" — porque **una sola imagen combinada solo admite un punto
de anclaje**, así que mover el recorte para mostrar mejor una mitad
arrastra el recorte de la otra mitad con ella (no son dos "marcos"
independientes, es una ventana de recorte deslizándose sobre TODA la
imagen). Antes de tocar código, se le explicó esto a Rodolfo y se le
preguntó cómo prefería resolverlo — confirmó entender y pidió volver
al formato de 2 imágenes independientes, pero **solo para estos 2
casos puntuales** (Toxina Botulínica 2ª pareja y Rinomodelación) y
**solo en la previsualización** (grid de `antes-despues.html` +
widget del inicio) — el visor debía seguir abriendo el archivo
`-combo.webp` completo, sin dividir, porque ahí sí se veía bien.

Implementación:

- CSS: nuevas clases `.antes-despues-thumb-half` (170px de alto, para
  la galería) y `.hero-ba-half-img` (230px, para el widget del
  inicio) — cada mitad son 170/230px para sumar el mismo alto total
  que las tarjetas de una sola imagen (340px / 460px), así el grid
  sigue parejo. Se quitaron los overrides de `object-position` sobre
  los archivos `-combo.webp` (ya no se muestran así en la
  previsualización) y se agregaron overrides independientes por mitad
  (`antes-despues-toxina-botulinica2-antes.webp` y `-despues.webp` en
  88%, ninguno para las mitades de Rinomodelación porque ya se veían
  bien con el valor por defecto).
- `antes-despues.html`: las 2 tarjetas afectadas ahora tienen **2**
  `<img>` dentro del mismo `<a>` (que sigue apuntando al
  `-combo.webp` para el visor) en vez de 1.
- `js/hero-before-after.js`: se agregó una propiedad opcional
  `halves: [antes, despues]` a las entradas de `PARES` — cuando está
  presente, `renderPar` arma 2 `<img class="hero-ba-half-img">` en vez
  de 1, dentro del mismo `<a href>` (combo, para el visor). Los otros
  8 pares del array no la tienen y siguen funcionando exactamente
  igual que antes (1 sola imagen).

Verificado con Claude-in-Chrome: ambas tarjetas de la galería muestran
las dos mitades completas (cejas+ojos en Toxina Botulínica, nariz
completa en Rinomodelación) sin hueco negro; el visor sigue abriendo
la imagen combinada completa ("9 of 10", sin dividir); el widget del
inicio replica el mismo comportamiento.

Commit `0512504`.

## 2026-09-24 — Tercer caso: Ácido Hialurónico (Ojeras)

Mismo problema, tercer caso puntual: la tarjeta de Ojeras dejaba las
cejas cortadas arriba en ambas mitades (el recorte por defecto de la
imagen combinada quedaba demasiado ajustado — las cejas están muy
pegadas al borde superior en ambos archivos fuente). Esta vez, antes
de tocar código, le expliqué a Rodolfo el plan completo (mismo
patrón que los 2 casos anteriores: 2 `<img>` independientes solo en
la previsualización, visor sin cambios) y pidió que se lo explicara
primero — aprobó y se implementó igual que Toxina Botulínica/
Rinomodelación:

- `antes-despues.html`: la tarjeta de Ojeras pasa de 1 `<img
  class="antes-despues-thumb">` a 2 `<img class="antes-despues-thumb-half">`
  (antes + después), dentro del mismo `<a>` que sigue apuntando al
  `-combo.webp` para el visor.
- `js/hero-before-after.js`: se agregó `halves: [...]` a la entrada
  de Ojeras en `PARES` (mismo mecanismo ya construido para los 2
  casos anteriores, no hizo falta tocar la lógica de `renderPar`).
- CSS: `object-position: center 15%` para
  `antes-despues-ojeras-antes.webp` y `-despues.webp` — ancla el
  recorte casi arriba del todo para no perder las cejas. Selector
  genérico por `src` (no scoped a `.antes-despues-thumb-half`) porque
  estas mismas 2 fotos también las usa el carrusel de arrastre de
  `tratamiento-acido-hialuronico.html`, pero ese componente
  (`twentytwenty`) no usa `object-fit`, así que el `object-position`
  no tiene ningún efecto ahí — confirmado antes de aplicar el
  selector amplio, no hizo falta acotarlo más.

Verificado con Claude-in-Chrome en la galería (cejas+ojos completos,
visor sigue abriendo la imagen combinada "3 of 10") y en el widget del
inicio (mismo resultado).

Commit `de2164b`.

## 2026-09-24 — Encuadre de 6 tarjetas más en services.html

Rodolfo señaló que varias portadas de `services.html` se veían "muy
zoom", cortando la imagen más de la cuenta: Ginecomastia, Limpieza
Facial Avanzada, Lipolítico Facial, Lipolítico Corporal, Mesoterapia
Facial y Exosomas (más Remodelado de Glúteos y Bioregenerador Facial,
que ya tenían un ajuste previo del 2026-09-23).

**Causa (ya explicada antes de tocar código):** las 19 tarjetas de la
grilla comparten `.treatment-card-thumb` (`aspect-ratio: 1/1.2135`,
`object-fit: cover`). La mayoría de las fotos fuente son retratos
2:3 (aspect 0.667), más angostos que la caja (0.824) — `cover` escala
para llenar el ANCHO de la caja, y ese escalado de más recorta bastante
alto/bajo de la foto. `object-position` solo elige DÓNDE anclar ese
recorte ya fijo, no puede "alejar el zoom" — eso requeriría agrandar
la caja compartida, afectando las 19 tarjetas a la vez. Rodolfo eligió
NO tocar la caja compartida (opción 2: ajustar solo `object-position`
por fototarjeta) y pidió tratar la caja como un marco — la imagen ya
llena el ancho de la caja por defecto (eso lo hace `object-fit: cover`
solo), y buscar el mejor anclaje vertical (u horizontal, en el único
caso más ancho que alto) para cada una.

Medidas reales confirmadas con `sips` antes de tocar el CSS (Rodolfo
advirtió que a veces la foto original es más grande de lo que se
recuerda — se verificó en vez de asumir):

- `torso-ginecomastia.webp` 1200×1800 → `object-position: center 15%`
  (mano + examen quedan arriba, dentro del recorte).
- `servicio-equipo-facial.webp` 1200×1252 — única más ANCHA que la
  caja (recorte horizontal, no vertical) → `object-position: 42%
  center` (pantalla + cuerpo del equipo completos).
- `retrato-lipolitico-facial.webp` 1200×1800 → `center 25%` (labios +
  mandíbula, se sacrifica cuello de más abajo).
- `servicio-lipolitico-corporal.webp` 1200×1800 → `center 55%` (tras
  probar 72% y verse el gesto clínico tapado por el texto, se ajustó a
  55% — mascarilla, guantes y jeringa visibles).
- `retrato-mesoterapia.webp` 1200×1800 → `center 12%` (cara del doctor
  + dispositivo pen completos).
- `servicio-microneedling.webp` 1200×1800 → `center 35%` (punta del
  dispositivo entrando en la piel, visible).

Cada regla scoped por `[src*="archivo.webp"]` en `.treatment-card-thumb`
(mismo patrón que las 4 tarjetas ya corregidas antes), sin tocar las
fotos ni la caja compartida — no afecta otras páginas que reusen estos
archivos. Verificado visualmente con Claude-in-Chrome, las 8 tarjetas
completas del listado (recorriendo todo `services.html`).

## 2026-09-24 — Fotos de stock nuevas: Lipolítico Corporal y Remodelado de Glúteos

Rodolfo mandó 2 fotos de banco de imágenes (confirmó explícitamente que
son de stock, no de pacientes reales) para reemplazar las fotos
existentes de estos 2 tratamientos. Antes de aplicar se señalaron dos
cosas: (1) usar fotos de stock rompe el patrón del sitio hasta ahora
(toda la fotografía era documentación real del Dr. Paredes) — Rodolfo
confirmó que igual quiere usarlas; (2) la primera foto (inyección en
abdomen) no calzaba con el tratamiento sugerido originalmente
("Lipolítico Facial", que es papada/mandíbula, zona facial) — Rodolfo
confirmó reasignarla a Lipolítico Corporal (sí es zona de abdomen) y
la segunda (inyección en glúteo) a Remodelado de Glúteos.

**Archivos:** las 2 fotos originales quedaron en `Recursos/` (`IMG_3087.PNG`
y `cuidado-anticelulitico-mujer-joven-...-2048x1365.jpg` — nombre de
archivo típico de banco de imágenes, confirma que es stock), convertidas
a webp con Pillow (sips no soporta escribir webp en este entorno) y
optimizadas.

- `images/real/servicio-lipolitico-corporal.webp`: se sobreescribió en
  el mismo nombre (1080×711, antes era una foto vertical del Dr.
  Paredes) — usada en la tarjeta de `services.html` y el hero
  (`.jarallax-img`) de `tratamiento-lipolitico-corporal.html`, ambos
  usos son del mismo tratamiento, no hay conflicto de compartir con
  otro tratamiento distinto.
- `images/real/servicio-corporal-cutout.webp` → renombrado a
  `images/real/servicio-gluteos-inyeccion.webp` (el nombre "cutout"
  ya no aplica — la foto anterior era un recorte tipo silueta, la
  nueva es una foto normal horizontal; se actualizó el nombre para que
  siga siendo descriptivo, por convención del proyecto). Referencias
  actualizadas en `index.html`, `services.html` y
  `tratamiento-remodelado-gluteos.html` (`git mv` + `sed` sobre los 3
  archivos + el selector CSS).

**CSS:** ambas fotos nuevas son horizontales (~1.5 de aspecto), a
diferencia de las verticales que tenía el sitio — el recorte de
`.treatment-card-thumb`/`.treatment-thumb` (cajas verticales) y de
`.jarallax-img` (banner ancho y corto) ahora es HORIZONTAL en vez de
vertical en las tarjetas, y sigue siendo vertical mismo en el hero
(banner más ancho que la foto). Se reemplazaron las reglas viejas
(tuneadas para las fotos anteriores) por unas nuevas ancladas al punto
de inyección de cada foto: `object-position: 62% center` (Glúteos,
tarjeta), `65% center` (Lipolítico Corporal, tarjeta), `center 70%
!important` (Lipolítico Corporal, hero — el 20% general de
`.jarallax-img` dejaba solo el guante/jeringa arriba, sin mostrar la
piel/punto de inyección).

Verificado visualmente con Claude-in-Chrome en las 4 ubicaciones:
tarjetas de `services.html` (ambos tratamientos), hero de
`tratamiento-remodelado-gluteos.html` (ya se veía bien con el 20%
general, no necesitó override), hero de
`tratamiento-lipolitico-corporal.html` (sí necesitó el override de
70%), y el widget carrusel "Nuestras Especialidades" de `index.html`
(usa `.treatment-thumb`, mismo archivo de Glúteos, se ve bien sin
ajuste adicional).

## 2026-09-24 — Antes/Después de Ginecomastia (Endoláser) + ajuste fino Lipolítico Corporal

Rodolfo mandó 2 fotos reales de un paciente (antes/después de
Endoláser por ginecomastia), esta vez como 2 archivos separados (no
un collage único como las anteriores). Se armaron con el mismo
patrón que el resto de la galería:

- Convertidas a webp: `images/real/antes-despues-ginecomastia-antes.webp`
  y `-despues.webp` (1080×1350 cada una).
- Se generó `images/real/antes-despues-ginecomastia-combo.webp`
  (apilado vertical con un margen negro de 8px entre ambas, mismo
  formato que ya usan los demás combos) para que el visor siga
  abriendo un solo archivo — no vino combinada del paciente/Rodolfo
  esta vez, así que se armó localmente con Pillow en vez de mano.
- **Se usó directamente el formato de 2 `<img>` independientes**
  (`antes-despues-thumb-half`) en `antes-despues.html` y `halves` en
  `js/hero-before-after.js`, sin pasar primero por el formato de 1
  sola imagen — ya se sabía (por los 3 casos de esta semana) que una
  imagen combinada muy alta dentro de una caja de recorte fijo baja
  suele desincronizar el encuadre de ambas mitades. Verificado
  visualmente que con el recorte por defecto (sin `object-position`
  extra) ya se ve bien en ambas mitades — no hizo falta agregar CSS
  nuevo para este caso.
- Nueva tarjeta en `antes-despues.html` con link real a
  `tratamiento-endolaser.html` (si tenía tratamiento asociado, a
  diferencia de Rinomodelación/Lipopapada que no lo tienen).
- **`tratamiento-endolaser.html` no tenía sección "Antes y Después"
  todavía** (era el único tratamiento de los que sí tienen fotos
  reales sin esa sección) — se agregó siguiendo el patrón exacto de
  `tratamiento-plasmage.html` (`.ba-carousel` con `data-pairs`, antes
  de "Cuidados Posteriores"). Se detectó que a la página le faltaban
  las 2 dependencias JS del slider arrastrable
  (`jquery.event.move.js`, `jquery.twentytwenty.js`) — sin ellas el
  `.ba-carousel-stage` quedaba vacío aunque el HTML se generaba bien
  (`before-after-carousel.js` sí estaba). Se agregaron los 3 scripts
  en el orden correcto al final de la página. Verificado que el
  slider arrastrable funciona.

**Ajuste fino de Lipolítico Corporal (foto de stock nueva de ayer):**
Rodolfo pidió subir un poco el encuadre del hero para que se vea más
la inyección entrando en la piel y, dentro de lo posible, apreciar
más la mano — se probaron 3 valores (`object-position` vertical del
`.jarallax-img`: 70% mostraba la aguja pero cortaba casi toda la
mano; 45% mostraba la mano completa pero perdía casi toda la aguja;
se dejó en **58%**, el mejor punto medio entre ambos). Recordatorio
explicado en contexto: al ser `object-fit: cover` sobre una caja de
banner fija, no hay forma de "alejar la cámara" de verdad (eso
requeriría agrandar el banner o usar `object-fit: contain` con
franjas — no se tocó, solo se reposicionó el recorte existente).

## 2026-09-24 — Foto nueva de Lipolítico Facial + 2° par de Endoláser (Abdomen)

Rodolfo mandó una foto de stock para Lipolítico Facial y 2 fotos más
(separadas) de antes/después de Endoláser, esta vez de abdomen (no
ginecomastia) de otro paciente.

**Lipolítico Facial:** `images/real/retrato-lipolitico-facial.webp`
reemplazada (el archivo original de la foto de stock venía nombrado
"mesoterapia-con-adn-de-salmon..." — es una foto genérica de
inyectable facial, el nombre no coincide con el tratamiento pero
Rodolfo pidió explícitamente usarla acá). Foto cuadrada (600×600),
resolución más baja que el resto de las fotos del sitio (~1200px)
— se ve bien en la tarjeta (ancho ~360px) pero puede notarse algo
menos nítida en el hero (banner ancho, foto estirada más de 2x). Se
quitó el override viejo (`object-position: center 25%`, pensado para
el retrato de mandíbula anterior, ya no aplica) y se agregó
`object-position: center 40% !important` en el hero para no perder
ojos/jeringa (contenido balanceado a lo ancho, la tarjeta se ve bien
sin ancla adicional).

**Endoláser (Abdomen), 2° caso:** mismo patrón que Ginecomastia de
hace un rato — 2 archivos separados (`IMG_3099`/`IMG_3100`,
1080×1350 cada uno), combo armado con Pillow (stack vertical + 8px de
margen negro), tarjeta nueva en `antes-despues.html` con formato de 2
`<img>` independientes desde el inicio (mismo criterio: no esperar a
que se rompa el encuadre para split-earlas), entrada con `halves` en
`js/hero-before-after.js`. A diferencia del caso anterior, esta vez
`tratamiento-endolaser.html` YA tenía su carrusel `.ba-carousel` (se
había armado hace un rato) — se agregó como 2° par dentro del mismo
`data-pairs` (mismo patrón que Plasmage, que también tiene 2 pares
en un solo carrusel). Verificado que el contador del carrusel
muestra "1 / 2".

**Corrección el mismo día:** Rodolfo revisó la tarjeta de Endoláser
(Abdomen) en `antes-despues.html` y no se entendía — con los 170px
estándar de `.antes-despues-thumb-half` el recorte solo mostraba una
franja angosta de piel de abdomen, sin sostén ni ropa interior de
referencia, no se leía como "antes/después de un cuerpo". Pidió
hacerlo "más vertical y muy zoom out". Se agregó un override puntual
(por `src`, no toca `.antes-despues-thumb-half` en general — las
otras 4 tarjetas con este formato ya se veían bien) que sube el alto
de esas 2 imágenes específicas a 300px (de 170px), mostrando ~68% de
la foto en vertical en vez de ~39% — ahora entran sostén + ombligo +
ropa interior en ambas mitades. El widget del inicio (230px de alto)
no tenía este problema, no se tocó.

**Segunda corrección, mismo día:** Rodolfo aclaró que no se refería a
"más alto apilado" sino a un formato distinto — mostró como
referencia cómo se ve "Bioestimulación de Cuello" (foto que vino ya
combinada LADO A LADO por quien la subió, no apilada). Pidió ese
mismo estilo para Endoláser (Abdomen). Como estas 2 fotos vienen en
archivos separados (no un collage ya armado), se armó el lado a lado
con CSS: nueva clase `.ba-half-row` (`display:flex` en el `<a>`,
cada `<img>` al 50% de ancho) + `aspect-ratio: 1080/1350` (la
proporción real de la foto) en vez de una altura fija en px — así
`object-fit: cover` casi no recorta, se ve prácticamente la foto
completa. Reemplaza el fix anterior (300px de alto), que igual no
lograba el mismo efecto visual. Scoped únicamente a estas 2 imágenes
(el resto de las tarjetas -half se quedan con el formato apilado
original, que ya se veía bien).

**Tercera corrección, mismo día — REGLA FIJA nueva:** el
`aspect-ratio: 1080/1350` del fix anterior hacía la tarjeta más alta
que TODAS las demás de la grilla (se nota inmediato al lado de
"Ginecomastia" y "Lipopapada Enzimática"). Rodolfo marcó esto como
regla fija a partir de ahora: **la tarjeta de antes/después nunca
cambia de tamaño, ni más chica ni más grande que las demás** — van
dos correcciones seguidas rompiendo esto (300px de alto en el intento
1, aspect-ratio en el intento 2). Se corrigió usando `height: 340px`
en el contenedor `.ba-half-row` + `height: 100%` en cada `<img>` (no
`aspect-ratio`) — mismo alto de imagen que **todas** las demás
tarjetas (`.antes-despues-thumb` y `.antes-despues-thumb-half`
apiladas también sumaban 340px). Verificado con
`getBoundingClientRect()` que las 3 tarjetas de la fila miden
exactamente lo mismo (437px), no solo "a ojo" por screenshot.

## 2026-09-24 — Tercera foto de Lipolítico Corporal (inyección centrada)

Rodolfo mandó otra foto de stock más para Lipolítico Corporal
(reemplaza la de ayer), pidiendo explícitamente que la inyección
quede centrada. `images/real/servicio-lipolitico-corporal.webp`
sobreescrita (1536×1425, casi cuadrada) — la aguja ya estaba casi
centrada en el archivo original (x≈53%, y≈55%), así que se ancló
directo ahí en vez de tantear varios valores como la vez anterior:
`object-position: 53% center` en la tarjeta (recorte horizontal, caja
más angosta que la foto) y `center 58% !important` en el hero
(recorte vertical, banner mucho más ancho). Verificado visualmente
con zoom en el hero (aguja entrando en la piel, nítida y centrada) y
en la tarjeta de `services.html`.

## 2026-09-24 — Foto de Bioestimulación reencuadrada + foto nueva de Exosomas

**Bioestimulación Facial, Cuello y Escote:** Rodolfo mandó una
referencia de cómo quería ver la foto (más aire alrededor, menos
recortada) y señaló que el archivo original ya estaba guardado en
`Recursos/IMG_3016.jpg` (foto de cámara, 3024×4032 — mucho más
resolución que la versión ya procesada en el sitio, 1200×1800). En
vez de ajustar `object-position` sobre el recorte angosto existente,
se regeneró `images/real/retrato-bioestimulacion.webp` directo desde
el original (reducido a 1600px de ancho, mismo aspecto 3:4 del
archivo de cámara — antes se había recortado a un aspecto más angosto
2:3 sin necesidad). Sin overrides de CSS nuevos, el recorte por
defecto ya se ve bien en tarjeta y hero con el nuevo aspecto.

**Exosomas:** `images/real/servicio-microneedling.webp` reemplazada
por una foto de stock nueva (Rodolfo) — cuadrada (1080×1080),
dispositivo + ceja/pestañas. Se quitó el override viejo (pensado para
la foto anterior) y se agregaron `object-position: 60% center`
(tarjeta, recorte horizontal) y `center 55% !important` (hero,
recorte vertical). Verificado visualmente en las 4 ubicaciones
(tarjeta y hero de cada tratamiento).

## 2026-09-24 — Auditoría de todos los banners de página

Rodolfo pidió auditar todas las barras cortas "foto + título +
breadcrumb" al inicio de cada página de tratamiento/blog
(`.jarallax-img` dentro de `section.bg-dark.text-light.relative.jarallax`)
para que cada una quede en la mejor posición y "el mayor zoom out
posible" — **explícitamente excluidos**: el hero completo del inicio
(`#section-intro`, carrusel) y la franja de testimonios con fotos
(`#hero-testimonials` del inicio, y la de `about.html`), que no son
este tipo de banner. También pidió oscurecer un poco más el
degradado para disimular mejor un recorte que nunca va a ser
perfecto (límite de `object-fit: cover` ya explicado antes en varias
correcciones de esta sesión).

**Inventario:** 27 páginas usan este patrón de banner con una foto
real (`grep` de `class="bg-dark text-light relative jarallax"` +
`jarallax-img`). De esas, 10 ya tenían `object-position` ajustado en
sesiones anteriores (retrato-marmol, servicio-laser-facial,
retrato-antienvejecimiento, torso-ginecomastia,
servicio-perfiloplastia-perfil, servicio-alidya-caja,
servicio-peeling-laser, servicio-lipolitico-corporal,
retrato-lipolitico-facial, servicio-microneedling) — no se tocaron,
ya estaban verificados. De las 17 restantes con el 20% genérico, se
revisó cada foto (viendo el archivo directo, sin depender del
navegador) y se ajustó el punto de anclaje en las que el 20% dejaba
fuera la cara o el gesto clínico:

- `servicio-vial-hialuronico.webp` (Ácido Hialurónico) → 25%
- `retrato-bioregenerador.webp` (Bioregenerador Facial) → 23%
- `servicio-laser-fibra.webp` (Endoláser) → 15%
- `retrato-evaluacion-corporal.webp` (Evaluación Corporal) → 25%
- `retrato-desk-sonrisa.webp` (Evaluación Facial + blog Filosofía) → 20%
- `servicio-equipo-facial.webp` (Limpieza Facial) → 45%
- `retrato-mesoterapia.webp` (Mesoterapia) → 15%
- `servicio-plasmage.webp` (Plasmage + blog Plasmage) → 12%
- `credencial-congreso.webp` (blog Congresos) → 10%
- `servicio-cirugia.webp` (blog Ginecomastia) → 15%
- `servicio-perfil-inyeccion.webp` (blog Perfiloplastia) → 14%

Dejadas en el 20% general por verse ya bien (contenido repartido a
lo largo de toda la foto, sin un punto único que se pierda):
`servicio-inyectable.webp` (Toxina Botulínica — la foto que Rodolfo
usó como ejemplo del tipo de banner a auditar, pero que en sí ya
estaba bien encuadrada), `retrato-bioestimulacion.webp` (recién
cambiada hoy), `servicio-vista-mar.webp` (services.html + blog.html),
`servicio-gluteos-inyeccion.webp` (ya verificado en una corrección
anterior).

**Degradado más oscuro:** en vez de tocar `.sw-overlay`/
`.gradient-edge-bottom` (clases genéricas de Intrio reusadas también
en el carrusel del inicio y en la franja de testimonios — tocarlas
directo habría oscurecido justo lo que Rodolfo pidió dejar fuera), se
agregó un override scoped por el selector completo de la sección
(`section.bg-dark.text-light.relative.jarallax .sw-overlay` /
`.gradient-edge-bottom`) que sube la opacidad de .5→.65 y de .6→.75
SOLO en estos 27 banners. Verificado visualmente en 4 páginas
(Toxina Botulínica, Plasmage, Limpieza Facial, blog Congresos): las
fotos se ven notoriamente más oscuras/con mejor contraste de texto,
sin afectar el hero del inicio ni la sección de testimonios.

## 2026-09-24 — 4 ajustes puntuales de feedback (aprobados uno por uno)

Antes de implementar, expliqué mi entendimiento de cada punto y
Rodolfo confirmó/corrigió 2 de los 4 antes de dar luz verde:

1. **Tarjeta "Ácido Hialurónico" (mandíbula) en `antes-despues.html`:**
   el Dr. Paredes pidió aclarar "(Surco Nasogeniano)" en el título
   para distinguirla de la otra tarjeta de Ácido Hialurónico (Ojeras).
   Rodolfo corrigió mi propuesta inicial: **solo el texto entre
   paréntesis va más chico**, no todo el título. Se agregó
   `<span class="ad-card-title-paren">` (14px) alrededor de
   "(Surco Nasogeniano)" — el resto del `<h3 class="fs-20">` queda
   igual. `title`/`alt` de la imagen también actualizados con el
   nombre completo.
2. **Hero de `tratamiento-antienvejecimiento.html`:** el título
   "ANTIENVEJECIMIENTO" (una palabra larga, no corta sola) chocaba
   con el subtítulo de la derecha. Rodolfo propuso una solución
   distinta a la mía (yo iba a reducir el tamaño de fuente): **cortar
   la palabra en dos líneas manualmente** ("Anti" arriba,
   "envejecimiento" abajo, con un `<br>`) sin tocar el tamaño — así
   el `<h1>` se mantiene igual de grande que en el resto de páginas.
3. **Hero de `tratamiento-mesoterapia.html`:** el 15% que se había
   fijado en la auditoría de banners de hoy priorizaba la cara del
   doctor pero dejaba fuera el dispositivo/lápiz que sostiene en la
   mano (más abajo en la foto). Se sube a `object-position: center
   50% !important` para que entre el dispositivo.
4. **Hero de `tratamiento-plasmage.html`:** mismo caso — el 12%
   mostraba solo frente/ojos, sin la mano señalando el equipo (que se
   ve de fondo, borroso, más abajo). Se probó 30% (mostraba mentón/
   cuello pero la mano seguía fuera) y se subió a `object-position:
   center 48% !important`, donde sí entra la mano completa señalando
   el equipo con el logo "Dr. Miguel Paredes Soto" de fondo.

Verificado visualmente con Claude-in-Chrome en las 4 páginas.

## 2026-09-24 — Foto nueva de Ginecomastia (más zoom out, enfocada a la derecha)

Rodolfo mandó una foto nueva para Ginecomastia (torso completo, mano
con guante azul examinando, portapapeles) y pidió que quedara con
más zoom out y corrida hacia la derecha para enfocar el pecho con la
mano en vez del torso vacío de la izquierda.
`images/real/torso-ginecomastia.webp` sobreescrita — cambia de
vertical (1200×1800) a horizontal (1254×837), usada en la tarjeta de
`services.html` y el hero de `tratamiento-ginecomastia.html` (única 2
páginas que la referencian). Recorte horizontal en la tarjeta
(`object-position: 58% center`, corrido a la derecha como pidió) y
vertical en el hero (`center 30% !important`). Verificado visualmente
en ambas ubicaciones — pezón, mano y portapapeles visibles en las
dos, mucho más contexto que el recorte angosto de la foto anterior.

## 2026-09-25 — Corrección directa del Dr. Paredes: SOCHIMCE

Feedback llegó directo del Dr. Paredes por WhatsApp a Rodolfo (no
ambiguo, instrucción explícita, no requirió preguntar). En
`blog-congresos.html`, ítem 2 de la lista numerada "Formación de
especialización":

- Título: "Miembro SOCHIMCE" → **"SOCHIMCE"** (se quita "Miembro").
- Descripción: "Miembro de la Sociedad Chilena de Medicina y Cirugía
  Estética (SOCHIMCE), con asistencia al IX Congreso 2024." →
  **"Asistencia al Congreso 2025 de la Sociedad Chilena de Medicina y
  Cirugía Estética (SOCHIMCE)."** (año corregido a 2025, se quita el
  numeral "IX" que no fue confirmado para esa edición — no se
  fabrica un numeral sin que el doctor lo confirme).

Verificado que "Miembro SOCHIMCE"/"IX Congreso 2024" no aparecía en
ningún otro lugar del sitio (single-source, solo este artículo).
Verificado visualmente con Claude-in-Chrome.

## 2026-09-25 — Política de Privacidad, Cookies y Términos y Condiciones

Rodolfo preguntó por requisitos legales de privacidad/cookies para
sitios web en Chile — se investigó antes de escribir nada (ver
fuentes abajo). Estado legal encontrado:

- **Ley 19.628 (vigente hoy):** cualquier sitio que recolecte datos
  personales, incluso con solo un formulario de contacto, ya debería
  tener una Política de Privacidad. No distingue tamaño de empresa.
- **Ley 21.719 (reforma ya publicada, entra en vigor el 1 de
  diciembre de 2026):** exige además un aviso de cookies opt-in real
  (Aceptar/Rechazar con el mismo peso visual, no solo un botón
  grande de "Aceptar"), mecanismo de derechos ARCO+, y trata los
  datos de salud como categoría "sensible" — relevante porque este
  es un sitio de una clínica médica.

Se auditó primero qué recolecta/usa realmente el sitio (no se
escribió una política genérica copiada): el sitio **no tiene** Google
Analytics, píxel de Meta/Facebook, ni ningún cookie de seguimiento.
Sí usa: el iframe de agendamiento de **Reservo** (`consultation.html`,
datos van directo a Reservo), enlaces de WhatsApp/Gmail, el feed de
Instagram vía **Behold.so** (`js/instagram-feed.js`, con caché en
`localStorage` de 6h, sin datos personales), y **Google Fonts**
(carga tipografía desde servidores de Google).

**3 páginas nuevas creadas** (mismo template/header/footer que el
resto del sitio, sin tocar la estructura de Intrio):
`politica-de-privacidad.html`, `politica-de-cookies.html`,
`terminos-y-condiciones.html`. Contenido escrito desde cero en base a
lo que el sitio realmente ofrece (agendamiento vía Reservo, fotos de
antes/después con consentimiento ya confirmado, sin backend de
formulario propio, etc.) — no se copió texto de otra clínica, solo se
usó como referencia estructural el formato estándar de estas páginas
(secciones típicas: responsable del tratamiento, qué datos se
recolectan, terceros, derechos, cookies usadas vs. no usadas, ley
aplicable). Rodolfo pidió explícitamente dejarlas listas para que él
y el Dr. Paredes las revisen antes de darlas por definitivas — no son
texto legal certificado por un abogado, es un borrador fundamentado.

**Cambio transversal:** se agregó una fila de links
("Política de Privacidad · Política de Cookies · Términos y
Condiciones") en el subfooter de las 34 páginas reales existentes,
junto al copyright — hecho con script Python (reporta conteo de
coincidencias, ver convención de cambios transversales grandes),
verificado que las 34 cambiaron y ninguna quedó sin el link. Nueva
clase `.legal-links` en `costaserena-theme.css` (discreta, pasa a su
propia fila en mobile). Se agregaron las 3 páginas nuevas a
`sitemap.xml` con prioridad baja (0.3, son páginas legales, no de
contenido/conversión).

**Pendiente, fuera de este alcance:** el banner de cookies opt-in con
botones parejos (Aceptar/Rechazar) recién es obligatorio desde
diciembre 2026, y como el sitio no usa cookies de analítica/marketing
hoy, no hay nada que consentir todavía — si en el futuro se agrega
Google Analytics u otra herramienta de seguimiento, ahí sí hace falta
ese banner.

Fuentes consultadas: Ley 21.719 (Klevo, Idónea, SysifosWeb, Weblike),
Ley 19.628 (BCN, digital.gob.cl).

## 2026-09-26 — Foto nueva en el héroe de Contacto

Rodolfo mandó una foto de stock (mano firmando sobre un portapapeles,
consulta médica) para reemplazar el fondo genérico
(`images/background/2.webp`, el mismo que usan faq.html,
testimonials.html, consultation.html y antes-despues.html) del héroe
de `contact.html` — solo esta página, las demás siguen con el fondo
genérico. Nuevo archivo `images/real/servicio-consulta-manos.webp`
(1920×1080). El 20% por defecto dejaba solo el pecho/estetoscopio del
doctor; se ancló a `object-position: center 60% !important` para
mostrar la lapicera y las manos, según la referencia que envió
Rodolfo. Verificado visualmente con Claude-in-Chrome.

Rodolfo está haciendo él mismo varios ajustes de encuadre esta
sesión (ver commit `dbfd499`, slider del inicio) — le expliqué el
mecanismo (`object-position`/`background-position` según el caso,
archivo `css/costaserena-theme.css`, nunca tocar el tamaño de la
caja) para que pueda seguir ajustando sin depender de mí en cada
detalle.

**Mismo día:** Rodolfo pidió la misma foto (`servicio-consulta-manos.webp`)
para el héroe de `consultation.html` (antes también el fondo
genérico `images/background/2.webp`) — mismo override CSS ya
existente, no hizo falta uno nuevo. Rodolfo ya había ajustado el
valor de `60%` a `30%` por su cuenta en `contact.html` (usando el
mecanismo que se le explicó), y `consultation.html` queda con el
mismo valor.
