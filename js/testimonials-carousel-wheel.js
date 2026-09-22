// Igual que en el carrusel de "Nuestras Especialidades": permite navegar
// el carrusel de testimonios (que hoy solo tiene puntitos, sin flechas)
// con el gesto de scroll horizontal del trackpad.
(function ($) {
    $(function () {
        $(".owl-single-dots").each(function () {
            var $carousel = $(this);
            var locked = false;

            $carousel.on("wheel", function (e) {
                var oe = e.originalEvent;
                var deltaX = oe.deltaX || 0;
                var deltaY = oe.deltaY || 0;

                if (Math.abs(deltaX) <= Math.abs(deltaY) || Math.abs(deltaX) < 10) {
                    return;
                }

                e.preventDefault();

                if (locked) return;
                locked = true;

                $carousel.trigger(deltaX > 0 ? "next.owl.carousel" : "prev.owl.carousel");

                setTimeout(function () {
                    locked = false;
                }, 400);
            });
        });
    });
})(jQuery);
