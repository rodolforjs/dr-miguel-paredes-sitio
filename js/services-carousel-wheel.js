// Permite navegar el carrusel de "Nuestras Especialidades" con el gesto
// de scroll horizontal del trackpad (dos dedos), además de las flechas
// y el drag con mouse que Owl Carousel ya trae por defecto.
(function ($) {
    $(function () {
        var $carousel = $('#services-carousel');
        if (!$carousel.length) return;

        var locked = false;

        $carousel.on('wheel', function (e) {
            var oe = e.originalEvent;
            var deltaX = oe.deltaX || 0;
            var deltaY = oe.deltaY || 0;

            // Solo actuamos si el gesto es claramente horizontal —
            // así no interferimos con el scroll vertical normal de la página.
            if (Math.abs(deltaX) <= Math.abs(deltaY) || Math.abs(deltaX) < 10) {
                return;
            }

            e.preventDefault();

            if (locked) return;
            locked = true;

            $carousel.trigger(deltaX > 0 ? 'next.owl.carousel' : 'prev.owl.carousel');

            setTimeout(function () {
                locked = false;
            }, 400);
        });
    });
})(jQuery);
