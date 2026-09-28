// Vercel sirve un archivo 404.html (con estado HTTP 404) para cualquier URL inexistente.
// Angular prerenderiza la ruta /404; acá la copiamos a la raíz con el nombre que Vercel espera.
import { copyFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const dir = join('dist', 'repuestos-toto', 'browser');
const origen = join(dir, '404', 'index.html');

if (!existsSync(origen)) {
  console.error(`No se encontró ${origen}. ¿Se prerenderizó la ruta /404?`);
  process.exit(1);
}
copyFileSync(origen, join(dir, '404.html'));
console.log('404.html creado.');
