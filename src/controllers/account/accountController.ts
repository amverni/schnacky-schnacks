import BaseController from '../baseController';
import GoogleAccountController from './google/googleAccountController';

export default class AccountController extends BaseController {
  private _googleAccountController:GoogleAccountController;

  protected _initializeRoutes():void {
    this._googleAccountController = new GoogleAccountController();
    this.router.use('/google/', this._googleAccountController.router);
  }
}
