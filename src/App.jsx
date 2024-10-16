import React, { useState } from 'react';
import './App.css';
import Queue from './Utils/Queue'; // Asegúrate de exportar la clase Queue correctamente
import Stack from './Utils/Stacks'; // Asegúrate de exportar la clase Stack correctamente

const App = () => {
  const [queue] = useState(new Queue());
  const [stack] = useState(new Stack());
  const [queueItems, setQueueItems] = useState([]);
  const [stackItems, setStackItems] = useState([]);
  const [queueMessage, setQueueMessage] = useState("");
  const [stackMessage, setStackMessage] = useState("");

  const handleEnqueue = () => {
    const position = queue.size() + 1; // Calcula la nueva posición
    queue.enqueue(position);
    setQueueItems([...queueItems, position]);
    setQueueMessage(`Enqueued position: ${position}`);
  };

  const handleDequeue = () => {
    if (!queue.isEmpty()) {
      const dequeued = queue.dequeue();
      setQueueItems(queueItems.slice(1)); // Actualiza la cola
      setQueueMessage(`Dequeued position: ${dequeued}`);
    } else {
      setQueueMessage("La cola está vacía");
    }
  };

  const handlePeek = () => {
    const peeked = queue.peek();
    setQueueMessage(peeked !== "la cola esta vacia" ? `Front position: ${peeked}` : peeked);
  };

  const handleIsEmpty = () => {
    const isEmpty = queue.isEmpty() ? "La cola está vacía" : "La cola no está vacía";
    setQueueMessage(isEmpty);
  };

  const handleSize = () => {
    const size = queue.size();
    setQueueMessage(`Tamaño de la cola: ${size}`);
  };

  const handlePush = () => {
    const position = stack.size() + 1; // Calcula la nueva posición
    stack.push(position);
    setStackItems([...stackItems, position]);
    setStackMessage(`Pushed position: ${position}`);
  };

  const handlePop = () => {
    if (!stack.isEmpty()) {
      const popped = stack.pop();
      setStackItems(stackItems.slice(0, -1)); // Actualiza la pila
      setStackMessage(`Popped position: ${popped}`);
    } else {
      setStackMessage("La pila está vacía");
    }
  };

  const handleStackPeek = () => {
    const peeked = stack.peek();
    setStackMessage(peeked !== "la pila esta vacia" ? `Top position: ${peeked}` : peeked);
  };

  const handleStackIsEmpty = () => {
    const isEmpty = stack.isEmpty() ? "La pila está vacía" : "La pila no está vacía";
    setStackMessage(isEmpty);
  };

  const handleStackSize = () => {
    const size = stack.size();
    setStackMessage(`Tamaño de la pila: ${size}`);
  };

  const getFuchsiaColor = (index) => {
    const intensity = Math.min(255, index * 30); // Escala de intensidad
    return `rgb(${intensity}, 0, ${intensity})`; // Devuelve un color en tonos de fucsia
  };

  return (
    <>
      <h1>Hola, ¿cómo va?</h1>

      {/* Botones para la cola */}
      <h2>Cola</h2>
      <button onClick={handleEnqueue}>Enqueue</button>
      <button onClick={handleDequeue}>Dequeue</button>
      <button onClick={handlePeek}>Peek</button>
      <button onClick={handleIsEmpty}>Is Empty</button>
      <button onClick={handleSize}>Size</button>
      <p>{queueMessage}</p>

      <div className="queue-container">
        <h2>Cola (Horizontal)</h2>
        <div className="queue">
          {queueItems.map((position, index) => (
            <div key={index} className="queue-block" style={{ backgroundColor: getFuchsiaColor(index) }}>
              {position}
            </div>
          ))}
        </div>
      </div>

      {/* Botones para la pila */}
      <h2>Pila</h2>
      <button onClick={handlePush}>Push</button>
      <button onClick={handlePop}>Pop</button>
      <button onClick={handleStackPeek}>Peek</button>
      <button onClick={handleStackIsEmpty}>Is Empty</button>
      <button onClick={handleStackSize}>Size</button>
      <p>{stackMessage}</p>

      <div className="stack-container">
        <h2>Pila (Vertical)</h2>
        <div className="stack">
          {stackItems.map((position, index) => (
            <div key={index} className="stack-block" style={{ backgroundColor: getFuchsiaColor(index) }}>
              {position}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
