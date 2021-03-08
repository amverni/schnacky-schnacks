import { NextFunction, Request, Response } from 'express';
import { OAuth2Client, TokenPayload } from 'google-auth-library';
import { GOOGLE_CLIENT_ID } from '../utils/constants';

const AUTH_HEADER_INDICATOR = 'Bearer ';
const GOOGLE_CLIENT = new OAuth2Client(GOOGLE_CLIENT_ID);
const NEW_USER_PATHS:string[] = [
  '/api/account/google/signup/'
];

export default function authenticateUser(req:Request, res:Response, next:NextFunction):void {
  /* only option for now is to sign in with Google */
  authenticateGoogleUser(req, res, next);
}

function authenticateGoogleUser(req:Request, res:Response, next:NextFunction):void {
  /* Check if the id token sent is present and valid */
  getGoogleToken(req).then((token:TokenPayload|null) => {
    if (!token) {
      console.log('invalid or missing token');
      res.sendStatus(404);
    }

    /* Check that the audience of the id token is correct */
    else if (token.aud !== GOOGLE_CLIENT_ID) {
      console.log('invalid audience');
      res.sendStatus(404);
    }

    /* check if user exists xor req.path is create account */
    // todo: check if user exists
    else if (/* user !== null */false && !NEW_USER_PATHS.includes(req.path)) {
      console.log('todo');
      res.status(404).send();
    }
    else {
      console.log('Valid user');
      next();
    }
  });
}

async function getGoogleToken(req:Request):Promise<TokenPayload|null> {
  const authHeader:string = req.headers.authorization || '';
  if (authHeader.startsWith(AUTH_HEADER_INDICATOR)) {
    const idToken:string = authHeader.substring(AUTH_HEADER_INDICATOR.length, authHeader.length);
    try {
      const ticket = await GOOGLE_CLIENT.verifyIdToken({
        idToken,
        audience: GOOGLE_CLIENT_ID
      });
      return ticket.getPayload();
    }
    catch (error) {
      console.log(error);
    }
  }
  return null;
}
