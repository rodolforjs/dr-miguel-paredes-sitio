/*
 * Feed de Instagram en vivo (@dr.miguelparedes_) vía Behold.so (plan gratis,
 * hasta 6 posts, JSON crudo — el diseño de las tarjetas es 100% nuestro CSS,
 * no un widget con estilo ajeno).
 *
 * Si el fetch falla (Behold caído, sin internet, límite de vistas superado),
 * la sección deja las 3 tarjetas estáticas que ya vienen en el HTML — nunca
 * se rompe ni queda vacía.
 */
(function () {
    var FEED_URL = "https://feeds.behold.so/JFUk6w8OjnGTC89TC1vn";
    var CACHE_KEY = "vitelia-ig-feed-cache-v1";
    var CACHE_TTL_MS = 6 * 60 * 60 * 1000; // 6 horas, para no gastar vistas del plan gratis
    var MESES = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];

    function formatFecha(isoString) {
        var d = new Date(isoString);
        return d.getDate() + " " + MESES[d.getMonth()] + " " + d.getFullYear();
    }

    function splitCaption(caption) {
        var texto = (caption || "").trim();
        var partes = texto.split(/\n+/).filter(Boolean);
        var titulo = (partes[0] || "Instagram").slice(0, 70);
        var resto = partes.slice(1).join(" ").trim() || partes[0] || "";
        var extracto = resto.slice(0, 140);
        if (resto.length > 140) extracto += "...";
        return { titulo: titulo, extracto: extracto };
    }

    function tarjetaHTML(post) {
        var img = (post.sizes && post.sizes.medium && post.sizes.medium.mediaUrl) || post.thumbnailUrl || post.mediaUrl;
        var partes = splitCaption(post.prunedCaption || post.caption);
        var fecha = formatFecha(post.timestamp);
        return (
            '<div class="col-lg-4 col-md-6">' +
                '<div class="hover">' +
                    '<div class="relative overflow-hidden rounded-1">' +
                        '<img src="' + img + '" class="w-100 hover-scale-1-1 blog-thumb-fixed" alt="Post de Instagram — Dr. Miguel Paredes" loading="lazy">' +
                        '<a href="' + post.permalink + '" target="_blank" rel="noopener" class="d-block abs w-100 h-100 top-0 start-0"></a>' +
                    '</div>' +
                    '<div class="pt-4">' +
                        '<h3><a class="text-dark blog-title-1line" href="' + post.permalink + '" target="_blank" rel="noopener">' + partes.titulo + '</a></h3>' +
                        '<p class="mb-3">' + partes.extracto + '</p>' +
                        '<div class="relative">' +
                            '<img src="images/brand/logo-vitelia.png" class="w-20px me-2 circle" alt="Clínica Vitelia">' +
                            '<div class="d-inline fs-14 me-5">@dr.miguelparedes_</div>' +
                            '<div class="d-inline fs-14"><i class="icofont-ui-calendar id-color me-2"></i><span>' + fecha + '</span></div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>'
        );
    }

    function render(posts) {
        var grid = document.getElementById("ig-feed-grid");
        if (!grid || !posts || !posts.length) return;
        grid.innerHTML = posts.slice(0, 6).map(tarjetaHTML).join("");
    }

    function fromCache() {
        try {
            var raw = localStorage.getItem(CACHE_KEY);
            if (!raw) return null;
            var parsed = JSON.parse(raw);
            if (Date.now() - parsed.ts > CACHE_TTL_MS) return null;
            return parsed.posts;
        } catch (e) {
            return null;
        }
    }

    function toCache(posts) {
        try {
            localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), posts: posts }));
        } catch (e) {
            /* localStorage lleno o bloqueado (modo privado) — sin problema, se pide de nuevo la próxima vez */
        }
    }

    document.addEventListener("DOMContentLoaded", function () {
        var cached = fromCache();
        if (cached) {
            render(cached);
            return;
        }

        fetch(FEED_URL)
            .then(function (res) {
                if (!res.ok) throw new Error("Behold feed HTTP " + res.status);
                return res.json();
            })
            .then(function (data) {
                if (!data || !data.posts || !data.posts.length) throw new Error("Feed vacío");
                toCache(data.posts);
                render(data.posts);
            })
            .catch(function (err) {
                console.warn("[Instagram feed] no se pudo cargar, se mantienen las tarjetas estáticas:", err);
            });
    });
})();
