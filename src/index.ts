import Server from './server';
import { PORT } from './utils/constants';

const server = new Server();
server.listen(PORT);
