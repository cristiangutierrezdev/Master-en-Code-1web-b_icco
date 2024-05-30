# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Reglas de los componentes

1. El nombre de un componente siempre debe empezar
   con la primera letra Mayúscula.

2. La forma de utilizar o llamar un componente es similar a utilizar
   una etiqueta HTML ej:

`<MiComponente/>`

3. Un componente no debe retornar dos elementos HTML al mismo tiempo
   o al mismo nivel, siempre debe retornar un elemento, este pued ser un elemento
   padre con= mas etiquetas HTML ej:

```
<div>
  <h1>Hola clase desde H1</h1>
  <h2>Hola clase desde H2</h2>
</div>
```
