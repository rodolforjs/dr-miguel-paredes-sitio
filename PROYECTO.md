# Clínica Vitelia (Dr. Miguel Paredes) — Estado del proyecto

> **Para retomar en una sesión nueva:** pega esto en Claude Code, en el
> directorio `~/Downloads/DrMiguelParedes_Sitio`:
>
> ```
> Lee PROYECTO.md y CLAUDE.md completos. Estoy retomando el sitio de Clínica Vitelia.
> ```

## Qué es esto

Sitio web de **Clínica Vitelia** — Medicina & Estética Avanzada —, dirigida
por el Dr. Miguel Paredes Soto, médico especialista en medicina estética
facial y corporal, La Ligua (V Región, Chile). Cliente real — Rodolfo
(sobrino del doctor) es el freelancer haciendo el sitio.

- **Repo:** https://github.com/rodolforjs/dr-miguel-paredes-sitio (público)
- **Sitio en vivo:** https://clinicavitelia.cl/ (dominio propio; también
  responde en https://rodolforjs.github.io/dr-miguel-paredes-sitio/)
- **Working copy local:** `~/Downloads/DrMiguelParedes_Sitio/` (raíz del
  repo — el sitio se aplanó desde una subcarpeta `Intrio HTML/` el
  2026-09-22, ver historial)
- **Template base:** Intrio (Designesia, licencia paga) — original intacto en
  `~/Downloads/Templates_Web/Intrio/Intrio HTML` (NUNCA editar ahí directo)

Las reglas de trabajo detalladas viven en `CLAUDE.md` (raíz del repo) — este
archivo es la bitácora de estado. Si algo entra en conflicto entre ambos,
`CLAUDE.md` tiene precedencia.

## Reglas de trabajo (no romper)

Resumen — ver `CLAUDE.md` para el detalle completo de cada una:

1. Nunca editar el template original de Intrio; todo el trabajo ocurre en
   la copia (raíz de este repo).
2. No reestructurar sin que Rodolfo lo pida explícitamente — reskinnear =
   solo colores/textos/imágenes en su lugar exacto.
3. Tipografía original de Intrio (Google Sans) — "solo colores/textos" no
   incluye tipografía.
4. No fabricar datos nunca (años de experiencia, N° pacientes, duración de
   procedimientos, etc.) — placeholders explícitos hasta que el Dr. Paredes
   confirme. Excepción: datos técnicos/clínicos *generales* de una técnica
   sí se investigan (fuentes médicas + clinicariversso.cl como referente).
5. Fotos de pacientes (antes/después, retratos) requieren consentimiento
   confirmado explícitamente antes de usarse.
6. No importar código de otros templates/sitios — solo recombinar piezas
   propias de Intrio.
7. No asociar una foto de paciente a un testimonio/nombre específico sin
   confirmación de que son la misma persona.
8. Nunca guardar credenciales en memoria/archivos del proyecto.
9. El repo es público por decisión explícita y repetida de Rodolfo, pese a
   la licencia de Intrio — no volver a plantear el tema.
10. No importar código de competidores — solo referencias visuales/de
    información, nunca su código.

## Dirección de diseño — "Costa Serena"

Paleta cálida (sand/ivory) con acento azul-grisáceo, extraído directo del
CSS de shaferplasticsurgery.com (no adivinado):

| Variable | Valor |
|---|---|
| `--primary-color` | `#5D7A88` |
| `--secondary-color` | `#D6DFE2` |
| `--bg-default` | `#F5F0E6` (sand cálido) |
| `--bg-dark-1` | `#26323A` (gris-azulado, NO verde) |

Archivos propios (no tocan el CSS del template): `css/costaserena-theme.css`
y `css/colors/scheme-costaserena.css`, cargados al final del `<head>`.

**Referentes de diseño** (orden de preferencia): [Shafer Clinic](https://www.shaferplasticsurgery.com/)
(blanco minimalista, mucho aire), [Clínica Lo Arcaya](https://clinicaloarcaya.cl/implante-capilar/)
(precios reales, CTA fuerte, WhatsApp flotante), [Aesthetics Geneva](https://www.aesthetics-ge.ch/)
(ultra minimalista, wordmark serif gigante).

**Referente de información** (nunca de código/visuales): [Clínica Riversso](https://clinicariversso.cl/tratamientos)
— competidora en la zona, usada para el patrón de estructura del catálogo de
tratamientos y datos técnicos generales, nunca copiando su texto ni sus cifras.

## Datos reales confirmados (nunca inventados)

- **Nombre completo:** Dr. Miguel Paredes Soto (nombre legal: Miguel Angel
  Paredes Soto). Título de Médico Cirujano — Universidad del Zulia,
  Venezuela, 2015. Registrado en Chile ante la Superintendencia de Salud
  (RUN 26.730.052-6, inscrito 04/09/2020, EUNACOM aprobado 26/10/2020).
  Máster en Armonización Facial — FACOP (Brasil, 2024).
- **Credenciales verificadas:** asistencia al Congreso 2025 de SOCHIMCE
  (Sociedad Chilena de Medicina y Cirugía Estética — corregido por el
  propio doctor, sin numeral de edición), asistente BAAS International
  Congress, AMLC 2024.
- **Experiencia confirmada por el doctor:** "10+ años" (usado en contador
  de estadísticas). **"+300 pacientes atendidos" es una estimación
  provisional de Rodolfo, no validada por el doctor** — actualizar si él
  confirma una cifra real.
- **Contacto real:** `viteliaclinic@gmail.com`, WhatsApp `+56 9 6776 5335`,
  Santa Teresa 580, La Ligua, V Región. También atiende en Clínica Riversso,
  Av. Concón Reñaca 4000, Concón.
- **Instagram:** `@dr.miguelparedes_` (cuenta profesional/Business) — el
  sitio usa esta cuenta, no la de la clínica (`@viteliaclinic_`, decisión
  ya tomada, no reabrir el tema).
- **Equipo:** Valeska Rojas, Magíster en Cosmetología (Estética, Corporal y
  Terapéutica, Minsal Vigente) — primera integrante real del equipo.
- **Catálogo real de tratamientos** (17 en total, según lista que pasó el
  doctor): ver `faq.html`/`services.html` para el listado completo. 19
  tienen página propia (`tratamiento-*.html`); el resto (Limpieza Facial
  Avanzada, Lipolítico Facial/Corporal, Mesoterapias, Peeling Facial,
  Exosomas, Bioregenerador Facial, Bioestimulación) están en el listado del
  FAQ pero sin página dedicada.

## Estado actual del sitio

**Páginas reales (37):** homepage única (`index.html`), `about.html`,
`contact.html`, `consultation.html`, `faq.html`, `testimonials.html`,
`blog.html` + 6 artículos reales (`blog-ginecomastia.html`,
`blog-piel.html`, `blog-plasmage.html`, `blog-perfiloplastia.html`,
`blog-filosofia.html`, `blog-congresos.html`), `services.html` + 19 páginas
`tratamiento-*.html`, `antes-despues.html` (galería), y 3 páginas legales
(`politica-de-privacidad.html`, `politica-de-cookies.html`,
`terminos-y-condiciones.html`). Nav, footer, panel off-canvas y mega-menú de
Tratamientos son byte-idénticos entre todas.

**Catálogo de tratamientos:** `services.html` con chips de filtro por
categoría (Isotope.js nativo de Intrio) + 19 fichas de tratamiento
individuales, cada una con hero, stats, beneficios (grid de 4 con ícono),
proceso en 4 pasos, antes/después donde hay foto con consentimiento
(`js/before-after-carousel.js`, componente reutilizable con slider
arrastrable `twentytwenty`), cuidados/contraindicaciones (lista
referencial, pendiente de validación final del Dr. Paredes) y CTA.

**Nav mobile de Tratamientos:** acordeón corto (4 tratamientos específicos
— Toxina Botulínica, Ácido Hialurónico, Endoláser, Evaluación Personalizada
— + "Ver todos"), distinto del mega-menu compacto de desktop (4 categorías
completas). No cambiar esta estructura sin confirmar con Rodolfo cuáles son
los "4 principales".

**Integraciones:**
- **Agenda:** widget embebido de **Reservo** en `consultation.html`
  (público, URL con el ID real de la agenda del doctor). Los 25+ botones
  "Agendar Evaluación" del sitio apuntan ahí.
- **Instagram en vivo:** `js/instagram-feed.js` vía **Behold.so** (OAuth
  oficial, JSON propio, sin diseño impuesto) — muestra los 3 posts con más
  interacción, cachea 6h en `localStorage`, degrada a 3 tarjetas estáticas
  si falla. Interruptor `FEED_ENABLED` en el mismo archivo.
- **Dominio/hosting:** `clinicavitelia.cl` vía Cloudflare (solo DNS, sin
  proxy) apuntando a GitHub Pages, HTTPS forzado y activo.
- **SEO:** sitemap.xml, robots.txt, Search Console verificado (sitemap
  enviado), schema.org `MedicalBusiness` en `index.html`. Google Business
  Profile explícitamente fuera de alcance (decisión de Rodolfo).
- **Legal:** 3 páginas (privacidad/cookies/términos) redactadas a medida
  según lo que el sitio realmente usa (sin Analytics ni píxeles de
  seguimiento) — Ley 19.628 vigente; Ley 21.719 (cookies opt-in) entra en
  vigor en diciembre 2026, banner de cookies no es necesario todavía porque
  el sitio no usa cookies de analítica/marketing. Borrador pendiente de
  revisión de Rodolfo/Dr. Paredes, no es texto certificado por un abogado.

**Fotos:** viven en `images/real/` (fotos reales del doctor/clínica/
pacientes, kebab-case descriptivo) e imágenes de stock explícitamente
autorizadas por Rodolfo para algunos héroes de tratamiento (cuando no hay
foto real disponible). Encuadre se ajusta con `object-position` en
`css/costaserena-theme.css` por nombre de archivo — ver quirks técnicos en
`CLAUDE.md`, no se repiten aquí. Antes/después con consentimiento
confirmado únicamente.

## Historial resumido (por tema, no cronológico)

- **De demo de Intrio a sitio real (sept. 2026):** reskin completo de las
  ~25 páginas que aún traían contenido/menús/formularios demo de
  interiorismo (Our Services, contactos de NY, íconos sociales falsos,
  formularios PHP sin backend) a contenido real de la clínica. Auditorías
  repetidas de consistencia detectaron páginas que quedaban desincronizadas
  tras cambios transversales — lección ya documentada en `CLAUDE.md`.
- **Catálogo de tratamientos:** de 6 categorías genéricas a 19 fichas
  específicas, ampliado progresivamente (Endoláser, Remodelado de Glúteos,
  Mesoterapia, etc.) siempre verificando con el Instagram del doctor o
  autorización directa antes de agregar un tratamiento nuevo.
- **Fotos reales:** incorporadas de forma progresiva y continua durante
  septiembre 2026 (retratos, tratamientos, antes/después, credenciales),
  reemplazando placeholders del template. Ajustes de encuadre resueltos
  mayormente vía `object-position` (preferido) y en pocos casos con
  recorte físico del archivo (solo cuando el sujeto ocupaba una porción
  muy chica del original).
- **Nav/UI mobile:** varias rondas de ajuste al mega-menu de Tratamientos y
  al dropdown "Más" (de mega-menu grande a caja compacta, luego a acordeón
  corto con tratamientos específicos en vez de categorías), footer resumido
  en mobile, barra fija de "Agendar Evaluación" en mobile (oculta en
  `consultation.html`), chips de filtro con scroll horizontal.
- **Galería "Antes y Después":** página propia (`antes-despues.html`) con
  visor tipo lightbox (Magnific Popup, ya incluido en Intrio) mostrando
  todas las parejas antes/después del sitio: sin asociar fotos a
  testimonios/nombres específicos.
- **Identidad de marca:** de "sitio personal del Dr. Paredes" a "Clínica
  Vitelia" como sujeto principal — logo, copy, títulos y meta descriptions
  de las páginas reencuadrados con el doctor como Director Médico, no como
  la marca en sí.
- **Limpieza de repo (2026-09-22):** aplanado de estructura (de
  `Intrio HTML/` a la raíz), eliminadas 7 páginas demo huérfanas, 2
  formularios PHP legacy, 8 carpetas de imágenes demo sin usar, 6
  archivos CSS/JS sin usar y la carpeta `theme/` duplicada/desincronizada.
- **Datos de contacto y agenda:** correo/WhatsApp/dirección reales
  aplicados en todo el sitio (links a Gmail web y Google Maps, no
  `mailto:`/texto plano), formulario reemplazado por el widget de Reservo.

## Pendientes / no resuelto

- **Alcance "medicina general + estética":** el Dr. Paredes pidió en algún
  momento ampliar el posicionamiento más allá de estética pura — no tocar
  copy/estructura sobre esto hasta que especifique qué otros servicios de
  salud general ofrece. No fabricar servicios.
- **Precio del proyecto:** Rodolfo y el Dr. Paredes aún no lo cierran —
  conversación entre ellos, no algo que resolver en el código.
- **"+300 pacientes atendidos":** estimación provisional de Rodolfo, sin
  confirmar por el Dr. Paredes — actualizar si él da una cifra real.
- **Contraindicaciones médicas** en las páginas de tratamiento: lista
  referencial basada en fuentes generales, pendiente de revisión final del
  Dr. Paredes antes de darla por definitiva.
- **Páginas legales** (privacidad/cookies/términos): borrador fundamentado,
  pendiente de que Rodolfo y el Dr. Paredes las revisen antes de darlas por
  definitivas.
- **Banner de cookies opt-in:** no es necesario hoy (el sitio no usa
  cookies de analítica/marketing), pero será obligatorio desde diciembre
  2026 si se agrega Google Analytics u otra herramienta de seguimiento.
- **8 tratamientos del catálogo real sin página propia** (ver "Datos reales
  confirmados"): oportunidad para sumar más adelante, no creadas porque no
  se ha pedido.
