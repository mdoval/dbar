import http from 'http';
import { Server } from 'socket.io';

const server = http.createServer();
const io = new Server(server);

io.on('connection', (socket) => {
  console.log('Cliente conectado:', socket.id);

  // Manejar eventos de notificación
  socket.on('notificar', (mensaje: string) => {
    // Broadcast a todos los clientes conectados
    io.emit('notificacion', mensaje);
  });

  // Manejar la desconexión del cliente
  socket.on('disconnect', () => {
    console.log('Cliente desconectado:', socket.id);
  });
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});