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
 */
(function () {
    var PARES = [
        { src: "images/real/antes-despues-entrecejo-combo.webp", alt: "Toxina Botulínica" },
        { src: "images/real/antes-despues-toxina-botulinica2-combo.webp", alt: "Toxina Botulínica" },
        { src: "images/real/antes-despues-mandibula-combo.webp", alt: "Ácido Hialurónico" },
        { src: "images/real/antes-despues-ojeras-combo.webp", alt: "Ácido Hialurónico" },
        { src: "images/real/antes-despues-gluteos-combo.webp", alt: "Alidya (Anticelulítico)" },
        { src: "images/real/antes-despues-plasmage-combo.webp", alt: "Plasmage" },
        { src: "images/real/antes-despues-plasmage2-combo.webp", alt: "Plasmage" },
        { src: "images/real/antes-despues-bioestimulacion-cuello-combo.webp", alt: "Bioestimulación de Cuello" },
        { src: "images/real/antes-despues-rinomodelacion-combo.webp", alt: "Rinomodelación" },
        { src: "images/real/antes-despues-lipopapada-enzimatica-combo.webp", alt: "Lipopapada Enzimática" }
    ];
    var ROTATE_MS = 4500;

    jQuery(window).on("load", function () {
        var $cont = jQuery("#hero-before-after");
        if (!$cont.length) return;

        var html = '<div class="hero-ba-slideshow">';
        PARES.forEach(function (par, i) {
            html +=
                '<a href="' + par.src + '" title="' + par.alt + ' — Antes y Después" class="hero-ba-slide' + (i === 0 ? " is-active" : "") + '">' +
                    '<img src="' + par.src + '" alt="' + par.alt + ' — Antes y Después">' +
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
