/*
 * Caja de "antes y después" junto al carrusel de testimonios del inicio.
 * Rota entre las 6 parejas de fotos reales del sitio cada vez que
 * cambia el testimonio (automático o al hacer click en los puntos) —
 * es solo variedad visual, NO afirma que la foto corresponda a la
 * persona del testimonio que se ve en pantalla en ese momento.
 *
 * A pedido de Rodolfo (2026-09-22): sin slider de arrastre, antes
 * arriba y después abajo (igual que vienen las fotos originales, no
 * lado a lado), y con un tamaño fijo para la caja completa — si no,
 * la sección salta de alto en cada rotación porque las 6 parejas
 * tienen proporciones distintas (mala UX). El encuadre fijo se logra
 * con CSS (object-fit: cover vía la clase .hero-ba-half en
 * costaserena-theme.css), no recortando el archivo — mismo criterio
 * que el resto del sitio. Cada mitad abre el visor (Magnific Popup,
 * vía la clase .zoom-gallery del contenedor padre en index.html) al
 * hacer click, mostrando la foto completa sin ese recorte.
 */
(function () {
    var PARES = [
        { antes: "images/real/antes-despues-entrecejo-antes.webp", despues: "images/real/antes-despues-entrecejo-despues.webp", alt: "Antienvejecimiento" },
        { antes: "images/real/antes-despues-mandibula-antes.webp", despues: "images/real/antes-despues-mandibula-despues.webp", alt: "Ácido Hialurónico" },
        { antes: "images/real/antes-despues-ojeras-antes.webp", despues: "images/real/antes-despues-ojeras-despues.webp", alt: "Ácido Hialurónico (Ojeras)" },
        { antes: "images/real/antes-despues-gluteos-antes.webp", despues: "images/real/antes-despues-gluteos-despues.webp", alt: "Alidya (Anticelulítico)" },
        { antes: "images/real/antes-despues-plasmage-antes.webp", despues: "images/real/antes-despues-plasmage-despues.webp", alt: "Plasmage" },
        { antes: "images/real/antes-despues-plasmage2-antes.webp", despues: "images/real/antes-despues-plasmage2-despues.webp", alt: "Plasmage" }
    ];
    var indice = 0;

    function preload(src) {
        return new Promise(function (resolve) {
            var img = new Image();
            img.onload = resolve;
            img.onerror = resolve;
            img.src = src;
        });
    }

    function renderPar(i) {
        var par = PARES[i % PARES.length];
        var $cont = jQuery("#hero-before-after");
        if (!$cont.length) return;

        Promise.all([preload(par.antes), preload(par.despues)]).then(function () {
            $cont.html(
                '<div class="hero-ba-stack">' +
                    '<a href="' + par.antes + '" title="' + par.alt + ' — Antes"><img src="' + par.antes + '" class="hero-ba-half" alt="' + par.alt + ' — Antes"></a>' +
                    '<a href="' + par.despues + '" title="' + par.alt + ' — Después"><img src="' + par.despues + '" class="hero-ba-half" alt="' + par.alt + ' — Después"></a>' +
                '</div>'
            );
            // El contenedor #hero-before-after ya tiene la clase .zoom-gallery
            // (inicializada una sola vez por designesia.js con delegate:'a'),
            // así que no hace falta re-inicializar magnificPopup acá — el
            // delegate detecta los <a> nuevos que se inyectan en cada rotación.
        });
    }

    jQuery(window).on("load", function () {
        renderPar(indice);

        jQuery(".owl-single-dots").on("changed.owl.carousel", function () {
            indice++;
            renderPar(indice);
        });
    });
})();
