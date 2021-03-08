import BaseController from './BaseController';
import AccountController from './account/accountController'

export default class AppController extends BaseController {
  private _accountController:AccountController;

  protected _initializeRoutes():void {
    this._accountController = new AccountController();
    this.router.use('/account/', this._accountController.router);
  }
}
