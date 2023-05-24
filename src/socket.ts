// socket.ts

import { io, Socket } from 'socket.io-client';
import config from './config.ts';

let socket: Socket;

export const getSocket = (): Socket => {
  if (!socket) {
    const socketEndpoint = config.socketEndpoint;
    socket = io(socketEndpoint);
  }
  return socket;
};
