# La web de la boda de Niall & Javi

Web estática (sin necesidad de servidor de pago), bilingüe ES/EN, con 4 secciones:
Foto Explorer (minijuego), Qué ver en un día, ¡Tengo coche! y ¿Por dónde salir?

## Cómo editar el contenido

Casi todo lo que quieras cambiar está en **un solo archivo**: `js/data.js`.
Ábrelo con cualquier editor de texto (o pídeme ayuda a mí) y edita el texto
entre comillas `" "`. Cada frase tiene versión `es` y versión `en`.

- Para añadir más retos del Foto Explorer, más paradas de "Qué ver", más
  destinos de "Tengo coche", más restaurantes o más bares: copia uno de
  los bloques `{ ... }` de ese archivo y pégalo debajo, cambiando los datos.
- Las coordenadas del mapa del Foto Explorer (`lat`, `lng`) las consigues en
  Google Maps: clic derecho sobre el punto exacto → "¿Qué hay aquí?".
- Los enlaces `mapsUrl` de "Dónde comer" y "¿Por dónde salir?" los consigues
  buscando el sitio en Google Maps → botón "Compartir" → "Copiar enlace".

## El Foto Explorer: geolocalización y fotos de imgur

El juego intenta detectar la ubicación del móvil del jugador (con permiso
del navegador) para mostrarle primero el reto más cercano. Si no puede
—permiso denegado, sin GPS, o el navegador no lo soporta— le pide elegir
uno de 3 puntos de partida (Praza do Obradoiro, Mercado de Abastos o
Alameda) y ordena el resto desde ahí. Esto **requiere que la web esté en
HTTPS** (GitHub Pages ya lo hace por defecto, así que no tienes que hacer
nada extra).

Para las fotos, usamos enlaces de imgur en vez de subir los archivos:
1. Sube la foto a imgur.com como siempre.
2. Ábrela a pantalla completa, botón derecho sobre la imagen →
   "Copiar dirección de la imagen" (Copy image address).
3. Ese enlace debe empezar por `https://i.imgur.com/` y terminar en
   `.jpeg`, `.jpg` o `.png` — **no** el enlace normal `https://imgur.com/...`
   de la página, que no funciona como imagen.
4. Pega ese enlace en `clueImage` (la foto-pista) o `rewardImage` (la foto
   premio) del reto correspondiente en `js/data.js`.

Ya está relleno el primer reto (Hostal dos Reis Católicos) como ejemplo, y
hay **34 retos en blanco** más (`reto-02` a `reto-35`) listos para que los
vayas completando tú mismo, con comentarios en cada campo explicando qué va
en cada uno. Si dejas `lat`/`lng` en `null`, ese reto seguirá funcionando
pero aparecerá siempre al final de la lista (el juego no sabrá lo cerca
que está de nadie hasta que le des sus coordenadas).

## Cómo añadir fotos a los locales de "¿Por dónde salir?"

No hemos podido incrustar fotos automáticas de Google en las tarjetas de
los bares (son fotos con derechos de terceros, igual que ya hablamos con
las fotos de los sitios del Foto Explorer). En su lugar, cada local tiene
un campo `image` en `js/data.js`, vacío por defecto, listo para que subáis
vosotros una foto propia si queréis. El proceso es idéntico al del Foto
Explorer:

1. Consigue una foto del local (una vuestra, o una que tengáis derecho a
   usar — por ejemplo, si el propio bar os la cede).
2. Súbela a [imgur.com](https://imgur.com) (no hace falta cuenta).
3. Ábrela a pantalla completa, botón derecho sobre la imagen →
   "Copiar dirección de la imagen" (Copy image address).
4. El enlace debe empezar por `https://i.imgur.com/` y terminar en
   `.jpeg`, `.jpg` o `.png` — el enlace normal `https://imgur.com/...` de
   la página **no funciona** como imagen.
5. Abre `js/data.js`, busca el local por su `name`, y pega ese enlace en
   su campo `image`, por ejemplo:
   ```js
   name: "Casa das Crechas",
   music: "celta",
   tapa: false,
   gay: false,
   image: "https://i.imgur.com/XXXXX.jpeg",
   ```
6. Si dejas `image: ""` (vacío), la tarjeta se muestra igual de bien, solo
   que sin foto — no hace falta rellenarlas todas de golpe, podéis ir
   añadiéndolas poco a poco.

- El programa de las **Fiestas del Apóstol** ya está relleno con el
  calendario oficial 2026 (22-31 de julio). Si hay cambios de última hora,
  revisa santiagoturismo.com y actualiza el bloque `FIESTAS_ITEMS`.
- El **Pasaporte París-Dakar** ya trae fijas la parada de salida (Café Bar
  Paris) y la de meta (Restaurante Dakar), que son parte de la tradición
  real, además de las 15 paradas de la ruta y 4 paradas opcionales que nos
  diste. **Ojo:** para 3 de las paradas (Porto, Nova Galicia y Catedral) no
  pudimos confirmar con certeza la ubicación exacta en Google Maps — el
  propio texto de la parada lo avisa con un ⚠️. Verificadlas vosotros in
  situ o con Google Maps antes de publicar la web, y sustituid el enlace
  `mapsUrl` en `PARIS_DAKAR_ITEMS` por el correcto si hace falta.
- No hemos incluido fotos de las fachadas de los bares: son fotos con
  derechos de terceros (del propio negocio, de Google, o de otros usuarios)
  y no podemos reproducirlas en vuestra web. Si querés añadir fotos reales,
  ponedlas en `/images/paris-dakar/` y añadid el campo `image` a cada
  parada en `data.js` (funciona igual que en "Qué ver en un día").

Los textos fijos del menú y botones (los que NO cambian de una boda a otra)
están en `js/i18n.js`, dentro de `UI_TEXT`, por si quieres retocar alguna
palabra suelta.

## Los iconos de categoría

En `js/icons.js` hay un set de iconos SVG reutilizables: trísquel (celta/
folk), nota musical (moderna), luna (tranquila), tenedor (tapa), arcoíris
(gay friendly), y para "Dónde comer": pez (marisco), olla (tradicional),
plato (tapas), taza (cafetería/postre). Se aplican automáticamente según el
campo `music` / `category` que pongas en cada entrada de `data.js` — no
hace falta tocar nada más para que aparezca el icono correcto.

## Cómo añadir tus fotos

Ahora mismo hay fotos de "marcador de posición" (con el texto "sustituye
esta imagen") en la carpeta `images/`. Sustitúyelas por tus fotos reales
manteniendo el mismo nombre de archivo, o usa nombres nuevos y actualiza
la ruta correspondiente en `js/data.js`.

- `images/foto-explorer/` → fotos del minijuego (pista y recompensa de cada reto)
- `images/general/` → fotos de "Qué ver en un día" y "¡Tengo coche!"

Consejo: usa fotos en formato horizontal (apaisadas) de al menos 800px de
ancho, y no muy pesadas (menos de 500KB cada una) para que la web cargue rápido.
Puedes comprimirlas gratis en https://squoosh.app antes de subirlas.

## Cómo probarla en tu ordenador antes de publicarla

No hace falta instalar nada especial. Basta con abrir el archivo
`index.html` haciendo doble clic, y se abrirá en tu navegador. Puedes
navegar por todas las secciones y probar el cambio de idioma así, en local.

## Cómo alojarla gratis (recomendado: GitHub Pages)

GitHub Pages es gratuito, no pide tarjeta de crédito, y te da una URL
del tipo `https://tu-usuario.github.io/nombre-repositorio/`. También
puedes conectarle un dominio propio más adelante si compráis uno
(ej. niallyjavi.com).

1. Crea una cuenta gratuita en https://github.com si no tienes una.
2. Crea un repositorio nuevo (botón verde "New"). Ponle un nombre, por
   ejemplo `boda-niall-javi`. Puede ser público.
3. Sube todos los archivos de esta carpeta (`index.html`, `css/`, `js/`,
   `images/`, este `README.md`) a ese repositorio. La forma más fácil sin
   usar la terminal: en la página del repositorio, botón
   "Add file" → "Upload files", y arrastra toda la carpeta.
4. Ve a la pestaña **Settings** del repositorio → en el menú lateral
   **Pages** → en "Source" elige la rama `main` y la carpeta `/ (root)` →
   Guardar.
5. Espera 1-2 minutos. GitHub te dará la URL pública, algo como
   `https://tu-usuario.github.io/boda-niall-javi/`. ¡Esa es la web para
   compartir con los invitados!

Cada vez que quieras actualizar contenido (nuevas fotos, nuevos retos,
nuevos bares), solo tienes que subir de nuevo los archivos modificados
en "Add file" → "Upload files" y la web se actualiza sola en un minuto.

### Alternativa igual de válida: Cloudflare Pages o Netlify

Si prefieres no usar GitHub, tanto https://pages.cloudflare.com como
https://www.netlify.com tienen planes gratuitos donde puedes arrastrar
la carpeta completa directamente desde su web (drag & drop) y te dan una
URL al instante, sin necesidad de saber git.

## Sobre "¡Tengo coche!" como coordinación entre invitados

Esta sección, tal y como está montada, es una **guía de destinos**
(no un formulario donde la gente apunta si tiene coche o quiere sitio).
Si además quieres que los invitados puedan apuntarse unos con otros
("yo tengo coche y salgo de tal sitio" / "yo necesito hueco"), lo más
sencillo y gratis es crear un **Google Form** o una hoja de cálculo
compartida de Google Sheets y pegar el enlace en esta página. Dímelo y
te preparo el hueco y el texto para insertarlo.

## Sobre el Foto Explorer

El progreso de cada invitado (qué retos ha encontrado) se guarda en su
propio navegador (`localStorage`), no en un servidor. Esto significa:

- Cada persona tiene su propio progreso independiente. 
- Si borran los datos del navegador o cambian de dispositivo, el
  progreso se reinicia.
- No hay manera de ver, desde fuera, cuántos invitados han encontrado
  cada reto (no hay servidor guardando eso). Si en el futuro quieres
  ese tipo de estadística compartida, se puede añadir, pero requiere
  algo más de infraestructura (con más margen de tiempo lo montamos).
