# INFAMEL — tarjeta de visita digital

Web estática responsive para INFAMEL, repuestos y reparaciones de maquinaria de obras públicas y agrícola.

## Requisitos
- Node.js LTS (https://nodejs.org/)
- Visual Studio Code

## Ejecutar en local
1. Descomprime la carpeta y ábrela en VS Code.
2. Abre Terminal → New Terminal.
3. Ejecuta `npm install`.
4. Ejecuta `npm run dev`.
5. Abre la URL que muestra Vite (normalmente http://localhost:5173).

## Personalizar datos
Los datos de contacto están al inicio de `src/main.jsx`, dentro del objeto `profile`.

## Añadir PDF
1. Copia los PDF autorizados para publicación a `public/docs/`.
2. En `src/main.jsx`, busca `const documents = [];`.
3. Añade objetos al array, por ejemplo:

```js
const documents = [
  {
    title: 'Catálogo de repuestos',
    description: 'Gama de repuestos disponibles.',
    file: '/docs/catalogo-repuestos.pdf',
    category: 'Catálogo'
  }
];
```

Los archivos dentro de `public` son públicos; no subas documentos confidenciales o no autorizados.

## Comprobar la versión de producción
```bash
npm run build
npm run preview
```
La web se genera en `dist/`.

## Publicar
Para una web estática se puede utilizar Cloudflare Pages u otro alojamiento que permita expresamente uso comercial en su plan gratuito. Configuración típica: comando `npm run build`, directorio de salida `dist`. Comprueba las condiciones vigentes del proveedor antes de publicar una web de negocio.

## Notas
- El teléfono, correos, localidad, nombre y servicios se han tomado de la tarjeta facilitada.
- La imagen de portada es una imagen ilustrativa generada para este diseño; no representa necesariamente una máquina o marca comercial concreta.
- Las marcas se muestran como texto para indicar referencias de maquinaria, no como una afirmación de distribuidor oficial.
- Revisa el contenido y solicita autorización antes de publicar logotipos, catálogos o documentación de terceros.
