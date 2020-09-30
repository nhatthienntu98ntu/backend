import { Router } from 'express';
import { PermissionController } from '../controllers';

const router = Router();

//*get all permission
router.get(
    '/',
    // AuthMiddleware.checkPermission(['Read']),
    PermissionController.getAllPermissionController
);

//* add permission
router.post(
    '/add',
    // AuthMiddleware.checkPermission(['Read']),
    PermissionController.AddPermissionController
);

//*update Permission
router.put(
    '/update/:_id',
    // AuthMiddleware.checkPermission(['Read']),
    PermissionController.UpdatePermissionController
);

//*delete permission
router.delete(
    '/delete/:_id',
    // AuthMiddleware.checkPermission(['Read']),
    PermissionController.DeletePermissionController
);

export default router;
