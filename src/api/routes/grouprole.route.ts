import { Router } from 'express';
import { GroupRoleController } from '../controllers';

const router = Router();

//*get all permission
router.get(
    '/',
    // AuthMiddleware.checkPermission(['Read']),
    GroupRoleController.getAllGroupRoleController
);

//* add permission
router.post(
    '/add',
    // AuthMiddleware.checkPermission(['Read']),
    GroupRoleController.AddGroupRoleController
);

//*update Permission
router.put(
    '/update/:_id',
    // AuthMiddleware.checkPermission(['Read']),
    GroupRoleController.UpdateGroupRoleController
);

//*delete permission
router.delete(
    '/delete/:_id',
    // AuthMiddleware.checkPermission(['Read']),
    GroupRoleController.DeleteGroupRoleController
);

export default router;
