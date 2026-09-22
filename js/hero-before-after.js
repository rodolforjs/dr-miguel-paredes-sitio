/*
 * Caja de "antes y después" junto al carrusel de testimonios del inicio.
 * Rota entre las parejas de fotos reales cada vez que cambia el
 * testimonio (automático o al hacer click en los puntos) — es solo
 * variedad visual, NO afirma que la foto corresponda a la persona del
 * testimonio que se ve en pantalla en ese momento.
 *
 * Solo se usan parejas con el mismo formato de foto (apaisada) para que
 * la caja no salte de tamaño en cada cambio. La pareja de Plasmage es un
 * close-up vertical del párpado — no comparte formato, así que queda
 * fuera de esta rotación (se ve igual en su propia página de tratamiento).
 */
(function () {
    var PARES = [
        { antes: "images/real/antes-despues-entrecejo-antes.webp", despues: "images/real/antes-despues-entrecejo-despues.webp" },
        { antes: "images/real/antes-despues-mandibula-antes.webp", despues: "images/real/antes-despues-mandibula-despues.webp" }
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
                '<div class="twentytwenty-container rounded-1">' +
                    '<img src="' + par.antes + '" alt="Antes">' +
                    '<img src="' + par.despues + '" alt="Después">' +
                '</div>'
            );
            jQuery(".twentytwenty-container", $cont).twentytwenty({ default_offset_pct: 0.5, before_label: "Antes", after_label: "Después" });
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
