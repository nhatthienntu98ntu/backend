import { Router } from 'express';
import { AuthMiddleware } from '../../middlewares';
import { StatusController } from '../controllers';

const router = Router();

router.get(
    '/',
    // AuthMiddleware.checkToken,
    // AuthMiddleware.checkPermission(['Read']),
    StatusController.getAllStatusController
);

router.post(
    '/add',
    // AuthMiddleware.checkToken,
    // AuthMiddleware.checkPermission(['Read']),
    StatusController.addStatusController
);

router.put(
    '/update/:_id',
    // AuthMiddleware.checkToken,
    // AuthMiddleware.checkPermission(['Read']),
    StatusController.updateStatusController
);

router.delete(
    '/delete/:_id',
    // AuthMiddleware.checkToken,
    // AuthMiddleware.checkPermission(['Read']),
    StatusController.deleteStatusController
);

export default router;
