import { Router } from 'express';

export default abstract class BaseController {
  protected _router:Router = Router();
  public get router():Router {
    return this._router;
  };

  constructor() {
    // this._router = new Router();
    this._initializeRoutes();
  }

  protected abstract _initializeRoutes():void;
}
