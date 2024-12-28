# Swipe Agency Project

## Descripción
SWIPE AGENCY es una agencia de representación de moda con sede en Bilbao, dedicada a promover marcas de moda y calzado en España y Portugal. Destacando por su autenticidad, sus marcas combinan diseño y tradición para ofrecer propuestas únicas y distintivas. Esta plataforma web, desarrollada en React, actúa como un "catálogo" digital, diseñado para ofrecer una experiencia óptima y adaptada a cada tipo de dispositivo. Con layouts exclusivos para desktop y mobile, tiene en cuenta las particularidades de la navegación en cada plataforma, asegurando una interacción visual y funcional cuidada y efectiva.

## Características Principales

- **Diseño responsive** con versiones específicas para desktop y mobile.
- **Sistema de rutas** para diferentes marcas.
- **Carrusel de imágenes personalizado**.
- **Header dinámico** que cambia según la marca seleccionada.
- **Componente "About" reutilizable**.

## Tecnologías Utilizadas

- React
- React Router
- CSS3
- react-responsive
- Vite
- Javascript

## Componentes Principales

### Structure
Componente base que define la estructura de dos columnas para la versión desktop:

- Carrusel de imágenes.
- Sección de información.

### Carousel
Carrusel de imágenes con:

- Navegación por flechas en los laterales.
- Contador de imágenes.
- Descripción de la imagen.
- Botón "next".

### TruncatedAbout
Componente reutilizable que muestra:

- Descripción corta de la agencia.
- Botón "Read more" que navega a la página principal.

### Home
- Página principal con información sobre la agencia.
- Botón "Contact us" que navega a la página de contacto.

### Root/RootPhone
Componentes que manejan:

- Navegación principal.
- Layout específico para cada versión.
- Enrutamiento dinámico.

## CSS y Estilos

- Estructura modular de CSS.
- Estilos específicos para versiones desktop y mobile ya que la experiencia de usuario es completamente diferente.
- Sistema de clases para los headers de cada marca.
- Manejo de gradientes y transiciones.

## Características de Diseño

### Desktop

- Layout de dos columnas.
- Navegación en la parte inferior.
- Carrusel de imágenes a pantalla completa.
- Headers con colores específicos por marca.
- Estilo editorial, minimalista y elegante.

### Mobile

- Layout vertical.
- Navegación adaptada a móvil.
- Diseño simplificado.
- Scrolling vertical.
- Estilo editorial, minimalista y elegante.

## Instalación y Uso

1. Clonar el repositorio.
2. Instalar dependencias:

   ```bash
   npm install
   ```

3. Iniciar el servidor de desarrollo:

   ```bash
   npm run dev
   ```

## Dependencias Principales

```json
{
  "dependencies": {
    "react": "^18.x",
    "react-dom": "^18.x",
    "react-router-dom": "^6.x",
    "react-responsive": "^x.x"
  }
}
```

## Características de Navegación

- Navegación entre marcas.
- Transiciones suaves entre páginas.
- Sistema de rutas anidadas.
- Manejo de estados para el carrusel.

## Manejo de Responsive

- **Punto de quiebre principal:** 768px.
- **Lógica de detección de dispositivo** con react-responsive.
- **Carga condicional de componentes.**
- **Estilos específicos por versión.**

