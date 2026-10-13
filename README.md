# lista de tareas

## Descripción del proyecto

lista de tareas es la eleccion que elegi de las  mini aplicaciónes , que esta desarrollada con **React** y **Vite** para practicar conceptos de React. Permite administrar una lista sencilla de tareas: agregar nuevas tareas, marcarlas como completadas y eliminarlas.

La aplicación utiliza componentes para separar la interfaz en partes reutilizables, props para compartir información entre componentes y el hook `useState` para mantener y actualizar los datos que cambian mientras se utiliza la aplicación.

## Funcionalidades

- Agregar tareas nuevas.
- Marcar tareas como completadas o pendientes.
- Eliminar tareas de la lista.
- Mostrar el número de tareas pendientes.
- Actualizar la interfaz cuando cambia el estado de la aplicación.

## Tecnologías utilizadas

- React
- Vite
- JavaScript
- HTML y CSS

## Preguntas de la actividad

### a) ¿Qué diferencia hay entre props y state en React?

Las **props** son datos que un componente recibe desde otro componente. Se utilizan para pasar información y configurar cómo se muestra un componente. El componente que recibe las props no debe modificarlas directamente.

El **state** es información que un componente administra internamente y que puede cambiar durante el uso de la aplicación. Cuando el estado se actualiza, React vuelve a renderizar los componentes que dependen de ese dato.

En esta aplicación, `TarjetaBienvenida` recibe el nombre y la descripción mediante props. En cambio, `App` utiliza state para guardar la lista de tareas y el texto de la tarea que se está escribiendo.

### b) ¿Por qué es importante usar una key al renderizar una lista de elementos?

La propiedad `key` ayuda a React a identificar cada elemento de una lista. Así puede reconocer cuáles elementos se agregaron, eliminaron o modificaron y actualizar la interfaz de forma más eficiente.

Cada elemento debe tener una `key` única entre los elementos de esa lista. En la aplicacion de la lista de tareas, al mostrar las tareas con `map()`, se debe asignar a cada tarea una clave estable y única, por ejemplo, un identificador propio. Esto evita advertencias y ayuda a React a mantener correctamente la correspondencia entre los datos y los elementos mostrados.

### c) Explica con tus propias palabras qué hace la función useState y da un ejemplo de dónde la usaste en tu mini aplicación.

`useState` es un hook de React que permite que un componente recuerde un dato entre renderizados. Devuelve dos elementos: el valor actual y una función para actualizarlo. Cuando se llama a esa función, React actualiza el estado y vuelve a renderizar la parte de la interfaz que depende de él.

En la lista de tareas lo utilicé en el componente `App` para guardar las tareas y el texto que se escribe en el campo para agregar una tarea. Por ejemplo:

```jsx
const [tareas, setTareas] = useState([]);
const [nuevaTarea, setNuevaTarea] = useState('');
```

`tareas` comienza como una lista vacía y `nuevaTarea` comienza como una cadena vacía. Al agregar una tarea, se actualiza la lista mediante `setTareas`; al escribir en el campo, se actualiza el texto mediante `setNuevaTarea`. Estos cambios permiten que la interfaz muestre la información actualizada.

### d) Enlace del repositorio de GitHub

`https://github.com/SamuelPerez098/t3_act4_react`

### e) Enlace del proyecto desplegado en GitHub Pages

`https://SamuelPerez098.github.io/t3_act4_react/`

## Ejecución local

Para ejecutar el proyecto en un entorno donde Node.js y npm estén instalados:

```bash
npm install
npm run dev
```

Vite mostrará en la terminal la dirección local para abrir la aplicación en el navegador.
