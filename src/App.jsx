import { useState } from 'react';
import './App.css';

// a) Componente funcional simple
function Encabezado() {
  return (
    <header className="encabezado">
      <h1>PRUEBA DE REACT</h1>
      <p>Organizacion de actividades</p>
    </header>
  );
}

// b) Componente que recibe y muestra props
function TarjetaBienvenida({ nombre, descripcion }) {
  return (
    <section className="tarjeta-bienvenida">
      <h2>¡Hola, {nombre}!</h2>
      <p>{descripcion}</p>
    </section>
  );
}

// Componente para representar una tarea
function Tarea({ tarea, alCambiar, alEliminar }) {
  return (
    <li className={`tarea ${tarea.completada ? 'completada' : ''}`}>
      <label>
        <input
          type="checkbox"
          checked={tarea.completada}
          onChange={() => alCambiar(tarea.id)}
        />
        <span>{tarea.texto}</span>
      </label>

      <button
        className="boton-eliminar"
        onClick={() => alEliminar(tarea.id)}
        aria-label={`Eliminar ${tarea.texto}`}
      >
        Eliminar
      </button>
    </li>
  );
}

// Componente principal
function App() {
  // c) Estado para almacenar las tareas
  const [tareas, setTareas] = useState([
    { id: 1, texto: 'Estudiar componentes de React', completada: false },
    { id: 2, texto: 'Practicar el uso de props', completada: false },
    { id: 3, texto: 'Aprender a usar useState', completada: true }
  ]);

  const [nuevaTarea, setNuevaTarea] = useState('');

  // Agregar una tarea
  function agregarTarea(evento) {
    evento.preventDefault();

    const texto = nuevaTarea.trim();

    if (texto === '') {
      return;
    }

    const tarea = {
      id: Date.now(),
      texto: texto,
      completada: false
    };

    setTareas([...tareas, tarea]);
    setNuevaTarea('');
  }

  // Cambiar el estado de una tarea
  function cambiarTarea(id) {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id
          ? { ...tarea, completada: !tarea.completada }
          : tarea
      )
    );
  }

  // Eliminar una tarea
  function eliminarTarea(id) {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  }

  // Calcular las tareas pendientes
  const pendientes = tareas.filter(
    (tarea) => !tarea.completada
  ).length;

  return (
    <main className="contenedor">
      <Encabezado />

      <TarjetaBienvenida
        nombre="estudiante"
        descripcion="Esta es tu primera aplicación creada con React y Vite."
      />

      <section className="panel-tareas">
        <h2>Mis tareas</h2>

        <p className="resumen">
          Tienes {pendientes} tarea(s) pendiente(s).
        </p>

        <form onSubmit={agregarTarea} className="formulario">
          <input
            type="text"
            value={nuevaTarea}
            onChange={(evento) => setNuevaTarea(evento.target.value)}
            placeholder="Escribe una nueva tarea..."
            aria-label="Nueva tarea"
          />

          <button type="submit">Agregar</button>
        </form>

        {/* d) Renderizado dinámico mediante map() */}
        <ul className="lista-tareas">
          {tareas.map((tarea) => (
            <Tarea
              key={tarea.id}
              tarea={tarea}
              alCambiar={cambiarTarea}
              alEliminar={eliminarTarea}
            />
          ))}
        </ul>

        {tareas.length === 0 && (
          <p className="mensaje-vacio">
            No hay tareas. ¡Agrega la primera!
          </p>
        )}
      </section>

      <footer className="pie">
        Práctica de React + Vite
      </footer>
    </main>
  );
}

export default App;