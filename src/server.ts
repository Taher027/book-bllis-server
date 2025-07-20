import { Server } from 'http';
import mongoose from 'mongoose';
import config from './app/config';
import app from './app';
let server: Server;
async function main() {
  try {
    mongoose.connect(config.db_url as string);
    console.log('Database connected successfully');
    server = app.listen(config.port, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
process.on('unhandledRejection', () => {
  console.log(`unhandleedRejection is detected, server shutting down..`);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
});
process.on('uncaughtException', () => {
  console.log(`uncaughtException is detected, server shutting down`);
  process.exit(1);
});
