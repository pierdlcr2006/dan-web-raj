# Razonamiento y argumentación jurídica

Proyecto Astro + Tailwind para presentar el curso de **Razonamiento y argumentación jurídica** de Daniela Ariana Valer Alfaro.

## Ejecutar

```bash
npm install
npm run dev
```

## Subir documentos

Cada semana muestra dos PDF:

- `ppt-profesor.pdf`
- `trabajo.pdf`

Los archivos van en carpetas numeradas:

```text
public/documentos/semana-01/ppt-profesor.pdf
public/documentos/semana-01/trabajo.pdf
public/documentos/semana-02/ppt-profesor.pdf
public/documentos/semana-02/trabajo.pdf
```

El visor usa PDF.js para renderizar los archivos dentro de una ventana propia estilo macOS. Si falta un PDF, se mostrará el mensaje "Documento pendiente" con la ruta esperada.

## Agregar foto

Coloca la foto en `public/images/` y actualiza este valor en `src/data/weeks.ts`:

```ts
profileImage: "/images/nombre-de-la-foto.jpg",
```

## Comandos útiles

```bash
npm run build
npm run preview
```
