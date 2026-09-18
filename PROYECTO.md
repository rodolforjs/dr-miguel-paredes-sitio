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
