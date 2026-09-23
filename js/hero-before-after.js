/*
 * Caja de "antes y después" junto al carrusel de testimonios del inicio.
 * Rota entre las 6 parejas de fotos reales del sitio cada vez que
 * cambia el testimonio (automático o al hacer click en los puntos) —
 * es solo variedad visual, NO afirma que la foto corresponda a la
 * persona del testimonio que se ve en pantalla en ese momento.
 *
 * A pedido de Rodolfo (2026-09-22): sin slider de arrastre, usando la
 * foto tal cual la subió (archivo `-combo.webp`, antes+después ya
 * juntos en el mismo archivo original — apilados o lado a lado según
 * venía cada una, sin volver a diagramarla), y con un tamaño fijo
 * para la caja completa — si no, la sección salta de alto en cada
 * rotación porque las 6 parejas tienen proporciones distintas (mala
 * UX). El encuadre fijo se logra con CSS (object-fit: cover vía la
 * clase .hero-ba-combo en costaserena-theme.css), no recortando el
 * archivo. El click abre el visor (Magnific Popup, vía la clase
 * .zoom-gallery del contenedor padre en index.html) mostrando la
 * foto completa sin ese recorte.
 */
(function () {
    var PARES = [
        { src: "images/real/antes-despues-entrecejo-combo.webp", alt: "Antienvejecimiento" },
        { src: "images/real/antes-despues-mandibula-combo.webp", alt: "Ácido Hialurónico" },
        { src: "images/real/antes-despues-ojeras-combo.webp", alt: "Ácido Hialurónico (Ojeras)" },
        { src: "images/real/antes-despues-gluteos-combo.webp", alt: "Alidya (Anticelulítico)" },
        { src: "images/real/antes-despues-plasmage-combo.webp", alt: "Plasmage" },
        { src: "images/real/antes-despues-plasmage2-combo.webp", alt: "Plasmage" }
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

        preload(par.src).then(function () {
            $cont.html(
                '<a href="' + par.src + '" title="' + par.alt + ' — Antes y Después"><img src="' + par.src + '" class="hero-ba-combo" alt="' + par.alt + ' — Antes y Después"></a>'
            );
            // El contenedor #hero-before-after ya tiene la clase .zoom-gallery
            // (inicializada una sola vez por designesia.js con delegate:'a'),
            // así que no hace falta re-inicializar magnificPopup acá — el
            // delegate detecta el <a> nuevo que se inyecta en cada rotación.
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
