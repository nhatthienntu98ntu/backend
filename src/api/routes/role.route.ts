import { Router } from 'express';
import { RoleController } from '../controllers';

const router = Router();

//*get all permission
router.get(
    '/',
    // AuthMiddleware.checkPermission(['Read']),
    RoleController.getAllRoleController
);

//* add permission
router.post(
    '/add',
    // AuthMiddleware.checkPermission(['Read']),
    RoleController.AddRoleController
);

//*update Permission
router.put(
    '/update/:_id',
    // AuthMiddleware.checkPermission(['Read']),
    RoleController.UpdateRoleController
);

//*delete permission
router.delete(
    '/delete/:_id',
    // AuthMiddleware.checkPermission(['Read']),
    RoleController.DeleteRoleController
);

export default router;
