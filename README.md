# CPS · Una introducción a la resolución de problemas complejos

Sitio estático con una introducción abierta al **Complex Problem Solving**, montada a partir
del material público de [Javier G. Recuenco](https://x.com/Recuenco): las turras del
[Turrero Post](https://turrero.vercel.app), sus charlas y los libros que cita.

**No es el máster.** El [programa de la UNIR](https://www.unir.net/empresa/programa-resolucion-problemas-complejos/)
que él dirige es otra cosa y está enlazado desde la portada. Esto es la puerta de entrada
para quien ha oído las siglas y no sabe qué hay dentro.

## Qué hay

Seis módulos, treinta apartados de lectura, 81 ilustraciones hechas a medida en SVG, y
debajo de cada afirmación el enlace al hilo original.

| Módulo | Tema |
|---|---|
| 01 | ¿Qué es realmente el CPS? |
| 02 | Escuelas de pensamiento — De Bono, Nardone, Rumelt |
| 03 | Pensamiento crítico |
| 04 | Analizar la realidad y crear |
| 05 | Metodologías |
| 06 | Equipos y comunicación |

## Cómo está hecho

HTML escrito a mano, un CSS con sistema de diseño propio y JavaScript mínimo. Sin
dependencias, sin build, sin framework. Se abre con cualquier servidor estático:

```bash
python -m http.server 8791
```

El `.nojekyll` es necesario: hay portadas de libros cuyo nombre empieza por `_` y Jekyll
las ignoraría.

## Fuentes y créditos

Todo el contenido sale de fuentes públicas. Las tarjetas de cada turra y parte de las
portadas de libros vienen del [repositorio abierto del Turrero Post](https://github.com/karliky/turrero);
el resto de portadas, de [Open Library](https://openlibrary.org). El mérito de las ideas es
de sus autores; los errores de esta lectura son míos.

En media docena de sitios este texto corrige o matiza el material del que sale, y una de
esas correcciones es a sí mismo. Están todas señaladas en su página.

Material de estudio personal, sin ánimo de sustituir a nadie ni de lucro.
