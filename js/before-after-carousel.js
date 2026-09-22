/*
 * Carrusel reutilizable de antes/después para páginas de tratamiento.
 * Cada `.ba-carousel` trae sus parejas en el atributo `data-pairs` (JSON):
 *   [{"antes": "images/real/x-antes.webp", "despues": "images/real/x-despues.webp", "alt": "Zona"}, ...]
 *
 * Con 1 sola pareja no muestra flechas (no tiene sentido navegar). Con 2+,
 * las flechas reutilizan el estilo visual "de-custom-nav .d-prev/.d-next
 * circle" que ya trae el template, sin usar su JS (que es específico de
 * Owl Carousel) — el click lo maneja este archivo.
 *
 * Reutiliza el mismo patrón de precarga de imágenes que
 * js/hero-before-after.js (el plugin twentytwenty mide el alto de la
 * imagen al iniciar; si se inserta dinámicamente sin esperar a que cargue,
 * el contenedor queda con alto 0).
 */
(function () {
    function preload(src) {
        return new Promise(function (resolve) {
            var img = new Image();
            img.onload = resolve;
            img.onerror = resolve;
            img.src = src;
        });
    }

    function setup(carouselEl) {
        var $carousel = jQuery(carouselEl);
        var pairs;
        try {
            pairs = JSON.parse($carousel.attr("data-pairs"));
        } catch (e) {
            return;
        }
        if (!pairs || !pairs.length) return;

        var $stage = $carousel.find(".ba-carousel-stage");
        var $nav = $carousel.find(".ba-carousel-nav");
        var $counter = $nav.find(".ba-carousel-counter");
        var index = 0;

        function render() {
            var par = pairs[index];
            var altSuffix = par.alt ? " — " + par.alt : "";
            Promise.all([preload(par.antes), preload(par.despues)]).then(function () {
                $stage.html(
                    '<div class="twentytwenty-container rounded-1">' +
                        '<img src="' + par.antes + '" alt="Antes' + altSuffix + '">' +
                        '<img src="' + par.despues + '" alt="Después' + altSuffix + '">' +
                    '</div>'
                );
                jQuery(".twentytwenty-container", $stage).twentytwenty({
                    default_offset_pct: 0.5,
                    before_label: "Antes",
                    after_label: "Después"
                });
                if ($counter.length) $counter.text((index + 1) + " / " + pairs.length);
            });
        }

        function next() {
            index = (index + 1) % pairs.length;
            render();
        }

        function prev() {
            index = (index - 1 + pairs.length) % pairs.length;
            render();
        }

        if (pairs.length > 1) {
            $nav.removeClass("d-none").addClass("d-flex");
            $nav.find(".d-next").on("click", next);
            $nav.find(".d-prev").on("click", prev);

            // Swipe horizontal del trackpad para cambiar de pareja, igual
            // que el carrusel de "Nuestras Especialidades" del inicio.
            var wheelLocked = false;
            $stage.on("wheel", function (e) {
                var oe = e.originalEvent;
                var deltaX = oe.deltaX || 0;
                var deltaY = oe.deltaY || 0;
                if (Math.abs(deltaX) <= Math.abs(deltaY) || Math.abs(deltaX) < 10) return;
                e.preventDefault();
                if (wheelLocked) return;
                wheelLocked = true;
                deltaX > 0 ? next() : prev();
                setTimeout(function () { wheelLocked = false; }, 400);
            });
        }

        render();
    }

    jQuery(window).on("load", function () {
        jQuery(".ba-carousel[data-pairs]").each(function () {
            setup(this);
        });
    });
})();
