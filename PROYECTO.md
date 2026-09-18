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

Pendiente / placeholders explícitos en el código:
- `[AÑOS]`, `[Nº] Pacientes Atendidos` en contadores del About
- `[EMAIL PENDIENTE]`, `[TELÉFONO PENDIENTE]` en contacto y footer
- 2 preguntas del FAQ marcadas `[POR CONFIRMAR CON EL DR. PAREDES]`
- Video banner sin video real (CTA deshabilitado con comentario TODO)
- Firma "John Smith" en About (Rodolfo la reemplaza después)
- Menú de navegación (Home/Services/Projects/More/Blog/Contact) sigue en
  inglés — decisión pendiente de cuándo traducirlo
- Sistema de agenda real (Cal.com u otro) no integrado

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

## Páginas de tratamientos (hecho 2026-09-18)

`services.html` es ahora el listado de los 6 tratamientos reales (fotos
reales, cada tarjeta linkea a su página propia). Páginas de detalle:
`tratamiento-ginecomastia.html`, `tratamiento-plasmage.html`,
`tratamiento-estetica-facial.html`, `tratamiento-estetica-corporal.html`,
`tratamiento-perfiloplastia.html`, `tratamiento-antienvejecimiento.html`.

Cada página de detalle tiene: hero + breadcrumb, barra de stats
(`de_count`), "Acerca del Tratamiento" + Beneficios, Proceso en 4 pasos,
Antes/Después (solo en Plasmage, Estética Facial y Antienvejecimiento —
las 3 que tienen foto real con consentimiento confirmado), Cuidados
Posteriores + Contraindicaciones (`ul-check`, con nota explícita de que
las contraindicaciones son referenciales y deben ser revisadas por el Dr.
Paredes antes de publicar — no se fabricó ninguna indicación médica
específica), y CTA de cierre. Todo construido recombinando componentes
que ya existían en Intrio, sin importar código de otro template.

Contenido grounded en info real de Instagram/historias (no inventado):
captions reales de ginecomastia ("1 de 5 consultas estéticas masculinas en
Chile"), Plasmage, piel. Perfiloplastia/Estética Corporal/Antienvejecimiento
usan descripción general de la técnica (términos estándar de medicina
estética) ya que no había caption específico — revisar con el Dr. Paredes.

Pendiente de decidir: si se agrupan en categorías tipo Riversso
(Facial/Corporal/Longevidad/Masculina) — por ahora son 6 tarjetas en un
grid simple, sin categorizar (con solo 6 tratamientos no parecía necesario
el filtro por categoría que tiene Riversso con sus 27).

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
