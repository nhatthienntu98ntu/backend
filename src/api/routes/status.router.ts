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

router.get(
    '/:_id',
    // AuthMiddleware.checkToken,
    // AuthMiddleware.checkPermission(['Read']),
    StatusController.getStatusByIdController
);

router.post(
    '/addStatus',
    // AuthMiddleware.checkToken,
    // AuthMiddleware.checkPermission(['Read']),
    StatusController.addStatusController
);

router.post(
    '/updateStatus',
    // AuthMiddleware.checkToken,
    // AuthMiddleware.checkPermission(['Read']),
    StatusController.updateStatusController
);

router.delete(
    '/deleteStatus',
    // AuthMiddleware.checkToken,
    // AuthMiddleware.checkPermission(['Read']),
    StatusController.deleteStatusController
);

export default router;
