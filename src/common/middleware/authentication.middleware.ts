import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import decodeJWT from '../../utils/jwtDecoder';

export interface RequestModel extends Request {
  auth: { userId: string; role: string };
}

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  use(req: RequestModel, res: Response, next: NextFunction) {
    console.log('MIDDLEWARE');
    const cookies = req.cookies;
    console.log('Cookies: ',cookies.authToken);
    const token = cookies ? cookies.authToken : '';
    console.log('Token: ',token);
    const auth = decodeJWT(token);
    req.auth = auth;
    next();
  }
}
