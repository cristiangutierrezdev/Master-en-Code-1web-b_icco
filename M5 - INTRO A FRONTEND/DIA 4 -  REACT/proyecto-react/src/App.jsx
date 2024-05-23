import "./App.css";
import Button from "./Button"

function Link() {
  return <a href="#">Click aquí</a>;
}

const Form = () => {
  return (
    <form>
      <input type="text" />
      <input type="passwordtext" />
    </form>
  );
};

function App() {
  const edad = 18;

  return (
    <div className="padre">
      <h1>Hola clase desde H1</h1>
      <h2>Tu edad es: {edad}</h2>
      <Link />
      <Form />
      <Button />
    </div>
  );
}

export default App;

// Reglas de los componentes

/* 
1. El nomber de un componente siempre debe empezar
con la primera letra Mayúscula.

2. La forma de utilizar o llamar un componente es similar a utilizar
una etiqueta HTML ej:

<MiComponente/>

3. Un componente no debe retornar dos elementos HTML al mismo tiempo
o al mismo nivel, siempre debe retornar un elemento, este puedes un elemento
padre de mas etiquetas HTML ej:

<div>
  <h1>Hola clase desde H1</h1>
  <h2>Hola clase desde H2</h2>
</div>

*/
