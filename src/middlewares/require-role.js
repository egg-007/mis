import { HttpError, notImplemented } from '../shared/http-error.js';
export function requireRole(...roles) {
  return function checkRole(req, res, next) {
    // MES 1 - TODO 
    if(!roles.includes(user.role))
      return next(new HttpError(401));
  };
}
