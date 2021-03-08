import { Request, Response } from 'express';
import BaseController from '../../baseController';

export default class GoogleAccountController extends BaseController {
  protected _initializeRoutes():void {
    this.router.post('/create/', this._createGoogleAccountPost);
  }


  private _createGoogleAccountPost(req:Request, res:Response):void {
    res.sendStatus(201);
  }
}
