/*
 * Caja de "antes y después" junto al carrusel de testimonios del inicio.
 *
 * A pedido de Rodolfo (2026-09-23): ya no rota sincronizada con el
 * carrusel de testimonios (no tiene relación una cosa con la otra, y
 * ahora hay más fotos que testimonios) — tiene su propia transición
 * automática, independiente. Además, todas las fotos quedan presentes
 * en el DOM a la vez (una visible por vez, las demás con opacity:0),
 * así el visor (Magnific Popup vía .zoom-gallery en index.html) las
 * detecta todas y muestra flechas para recorrerlas, igual que en
 * antes-despues.html — antes solo había una foto en el DOM por vez y
 * el visor no tenía cómo navegar.
 *
 * Usa la foto tal cual la subió Rodolfo (archivo `-combo.webp`,
 * antes+después ya juntos en el archivo original — apilados o lado a
 * lado según venía cada una).
 *
 * Excepción (2026-09-24): en Toxina Botulínica (2ª pareja) y
 * Rinomodelación, un solo object-position sobre la imagen combinada
 * no alcanza para encuadrar bien las dos mitades a la vez (mover el
 * recorte para arreglar una mitad desajustaba la otra). Para esos 2
 * casos puntuales se arma con 2 `<img>` independientes (`halves`),
 * cada una con su propio recorte — el link sigue apuntando al archivo
 * `-combo.webp` completo, así el visor no cambia.
 */
(function () {
    var PARES = [
        { src: "images/real/antes-despues-entrecejo-combo.webp", alt: "Toxina Botulínica" },
        { src: "images/real/antes-despues-toxina-botulinica2-combo.webp", alt: "Toxina Botulínica", halves: ["images/real/antes-despues-toxina-botulinica2-antes.webp", "images/real/antes-despues-toxina-botulinica2-despues.webp"] },
        { src: "images/real/antes-despues-mandibula-combo.webp", alt: "Ácido Hialurónico" },
        { src: "images/real/antes-despues-ojeras-combo.webp", alt: "Ácido Hialurónico", halves: ["images/real/antes-despues-ojeras-antes.webp", "images/real/antes-despues-ojeras-despues.webp"] },
        { src: "images/real/antes-despues-gluteos-combo.webp", alt: "Alidya (Anticelulítico)" },
        { src: "images/real/antes-despues-plasmage-combo.webp", alt: "Plasmage" },
        { src: "images/real/antes-despues-plasmage2-combo.webp", alt: "Plasmage" },
        { src: "images/real/antes-despues-bioestimulacion-cuello-combo.webp", alt: "Bioestimulación de Cuello" },
        { src: "images/real/antes-despues-rinomodelacion-combo.webp", alt: "Rinomodelación", halves: ["images/real/antes-despues-rinomodelacion-antes.webp", "images/real/antes-despues-rinomodelacion-despues.webp"] },
        { src: "images/real/antes-despues-lipopapada-enzimatica-combo.webp", alt: "Lipopapada Enzimática" },
        { src: "images/real/antes-despues-ginecomastia-combo.webp", alt: "Ginecomastia (Endoláser)", halves: ["images/real/antes-despues-ginecomastia-antes.webp", "images/real/antes-despues-ginecomastia-despues.webp"] },
        { src: "images/real/antes-despues-endolaser-abdomen-combo.webp", alt: "Endoláser (Abdomen)", halves: ["images/real/antes-despues-endolaser-abdomen-antes.webp", "images/real/antes-despues-endolaser-abdomen-despues.webp"] }
    ];
    var ROTATE_MS = 4500;

    jQuery(window).on("load", function () {
        var $cont = jQuery("#hero-before-after");
        if (!$cont.length) return;

        var html = '<div class="hero-ba-slideshow">';
        PARES.forEach(function (par, i) {
            var inner;
            if (par.halves) {
                inner =
                    '<img class="hero-ba-half-img" src="' + par.halves[0] + '" alt="' + par.alt + ' — Antes">' +
                    '<img class="hero-ba-half-img" src="' + par.halves[1] + '" alt="' + par.alt + ' — Después">';
            } else {
                inner = '<img src="' + par.src + '" alt="' + par.alt + ' — Antes y Después">';
            }
            html +=
                '<a href="' + par.src + '" title="' + par.alt + ' — Antes y Después" class="hero-ba-slide' + (i === 0 ? " is-active" : "") + '">' +
                    inner +
                '</a>';
        });
        html += "</div>";
        $cont.html(html);

        var $slides = $cont.find(".hero-ba-slide");
        var indice = 0;
        setInterval(function () {
            $slides.eq(indice).removeClass("is-active");
            indice = (indice + 1) % $slides.length;
            $slides.eq(indice).addClass("is-active");
        }, ROTATE_MS);

        // El contenedor #hero-before-after ya tiene la clase .zoom-gallery
        // (inicializada una sola vez por designesia.js con delegate:'a'),
        // así que no hace falta re-inicializar magnificPopup acá.
    });
})();
