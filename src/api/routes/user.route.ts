import { Router } from 'express';
import { AuthMiddleware } from '../../middlewares';
import userModel from '../../models/user.model';
import { UserController } from '../controllers';
import { generateToken } from '../../utils/generateToken';
import { Use } from '../../validations';

const router = Router();
//*signin User
router.post(
    '/signin',
    Use.signinUserValidator,
    // AuthMiddleware.checkToken,
    // AuthMiddleware.checkPermission(['Read']),
    UserController.signinUserController
);

//*signup User
router.post(
    '/signup',
    Use.signupUserValidator,
    // AuthMiddleware.checkToken,
    // AuthMiddleware.checkPermission(['Create']),
    UserController.signupUserController
);

//*get All User
router.get(
    '/',
    // AuthMiddleware.checkToken,
    // AuthMiddleware.checkPermission(['Read']),
    UserController.getAllUserController
);

//*get User bY Id
router.get(
    '/:_id',
    // AuthMiddleware.checkToken,
    // AuthMiddleware.checkPermission(['Read']),
    UserController.getOneUserController
);

//*update User
router.put(
    '/update/:_id',
    Use.updateUserValidator,
    // AuthMiddleware.checkToken,
    // AuthMiddleware.checkPermission(['Create']),
    UserController.updateUserController
);

//*sidable User
router.delete(
    '/delete/:_idUser/:_idUserBlock',
    // AuthMiddleware.checkToken,
    // AuthMiddleware.checkPermission(['Disable']),
    UserController.disableUserController
);

export default router;
