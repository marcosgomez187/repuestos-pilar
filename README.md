# RepuestosPilar – sitio institucional

Sitio web de una casa de repuestos de autos hecho con **Angular 21** y **prerenderizado estático (SSG)**: cada página se genera como HTML completo durante el build, así Google lee el contenido, los meta tags y los datos estructurados sin ejecutar JavaScript. Listo para publicar en **Vercel**.

## Páginas

| Ruta | Contenido |
|---|---|
| `/` | Inicio: portada, beneficios, categorías, quiénes somos, marcas, cómo comprar, ubicación y horarios, preguntas frecuentes |
| `/productos` | Catálogo completo con buscador y filtros por categoría y marca (en la URL: `?categoria=`, `?marca=`, `?q=`) |
| `/productos/:slug` | Una página por categoría (`inyeccion`, `sensores`, `encendido`, `correas`), con los productos reales de esa categoría |
| `/nosotros` | Quiénes somos, misión/visión/valores, historia, depósito |
| `/contacto` | Dirección, teléfono, horarios y formulario (envía la consulta por WhatsApp) |
| `/404` | Página de error (se publica como `404.html`, con `noindex`) |

## Comandos

```bash
npm install
npm start        # desarrollo en http://localhost:4200
npm run build    # genera dist/repuestos-toto/browser (HTML prerenderizado)
npm test         # tests unitarios
```

## Publicar en Vercel

1. Subí el proyecto a GitHub, GitLab o Bitbucket.
2. En Vercel: **Add New → Project** e importá el repositorio. `vercel.json` ya define el build y la carpeta de salida.
3. Deploy. En **Settings → Domains** agregá el dominio y elegí uno como principal (con o sin `www`): Vercel redirige el otro.

## Antes de publicar (importante)

Confirmá estos datos:

- `src/app/core/site.config.ts` → dominio (`url`) y **horarios de atención** (son de ejemplo). Nombre, dirección, teléfono y email ya son los reales.
- `public/robots.txt` y `public/sitemap.xml` → el dominio `https://www.repuestospilar.com.ar` es un ejemplo; cambialo por el real.
- `src/app/data/catalog.ts` → categorías y preguntas frecuentes (envíos, garantía y medios de pago son texto de ejemplo: ajustalos a lo que realmente ofrecen).
- `src/app/data/productos.ts` → el catálogo real de repuestos (20 productos con foto). Para agregar uno nuevo: sumá la foto en `public/images/productos/` y un objeto al array `PRODUCTOS` con `id`, `nombre`, `codigo`, `marca` (`'Toyota'`, `'Denso'` o `'Bosch'`; para otra marca agregala también en `MARCAS_PRODUCTO`), `categoria` (el slug de una de las 4 categorías) e `imagen`/`alt`.
- Imágenes de "Quiénes somos" e íconos de categoría (`public/images/*.svg`) son ilustraciones. Las fotos de productos en `public/images/productos/` sí son reales.
- `public/og-image.png` (1200×630) es la imagen que se ve al compartir el sitio en redes.

## SEO incluido

- Título y meta description únicos por página, `lang="es-AR"`, `canonical`, `robots`.
- Open Graph y Twitter Cards.
- Datos estructurados JSON-LD: `AutoPartsStore` (negocio local con dirección, teléfono, horarios y catálogo), `WebSite`, `BreadcrumbList`, `AboutPage`, `ContactPage`, `CollectionPage`.
- Un solo `h1` por página, jerarquía de encabezados, migas de pan, enlaces internos descriptivos.
- `sitemap.xml`, `robots.txt`, `404.html` real (estado HTTP 404), URLs limpias sin `.html`.
- Rendimiento: HTML prerenderizado, CSS crítico en línea, sin fuentes ni scripts externos, imágenes con `width`/`height` y `loading="lazy"`, caché de larga duración para archivos estáticos.
- Accesibilidad: enlace "saltar al contenido", foco visible, contraste, `aria-*` en el menú, respeta `prefers-reduced-motion`.

## Después de publicar

1. **Google Search Console**: agregá la propiedad del dominio, verificala y enviá `https://TU-DOMINIO/sitemap.xml`.
2. **Google Business Profile** (Google Maps): creá la ficha con la misma dirección, teléfono y horarios que figuran en la web (consistencia NAP). Es lo que más influye en búsquedas locales como "repuestos para autos cerca de mí".
3. Pedí reseñas reales a tus clientes en Google. No inventes reseñas ni las agregues al JSON-LD sin que existan.
4. Sumá enlaces desde directorios locales, cámaras empresariales y redes sociales, y agregá los perfiles en `sameAs` de `src/app/core/schema.ts`.
5. Cuando tengas la dirección real, podés incrustar el mapa de Google en `/contacto`.
6. Revisá el rendimiento con PageSpeed Insights y los resultados enriquecidos con la prueba de Resultados Enriquecidos de Google.

