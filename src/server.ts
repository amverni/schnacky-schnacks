import * as Express from 'express';
import * as Cors from 'cors';
import AppController from './controllers/appController';
import authenticateUser from './middleware/auth';

export default class Server {
  private _app:Express.Application;

  constructor() {
    this._app = Express();
    this._app.use(Cors());

    this._initMiddleware();
    this._initControllers();
  }

  public listen(port:number):void {
    this._app.listen(port, () => {
      console.log(`Server listening on port ${port}...`);
    });
  }

  private _initControllers():void {
    const appController = new AppController();
    this._app.use('/api/', appController.router);
  }

  private _initMiddleware():void {
    this._app.use('/', authenticateUser);
  }
}
