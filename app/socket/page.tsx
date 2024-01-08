import { useEffect } from 'react';
import { io, Socket } from 'socket.io-client';

const SocketComponent = () => {
  useEffect(() => {
    const socket: Socket = io(); // La URL por defecto es la misma que el servidor

    // Manejar eventos de notificación desde el servidor
    socket.on('notificacion', (mensaje: string) => {
      // Lógica para mostrar la notificación en tu aplicación
      console.log('Notificación recibida:', mensaje);
    });

    // Limpiar la conexión cuando el componente se desmonta
    return () => {
      socket.disconnect();
    };
  }, []);

  return <div>Tu componente de Next.js</div>;
};

export default SocketComponent;