import { Router } from 'express';
import AuthRoute from './auth.route';
import UserRoute from './user.route';
import StatusRoute from './status.route';
import GroupRolesRoute from './grouprole.route';
import RoleRoute from './role.route';
import PermissionRoute from './permission.route';
import handleNotFound from '../../helpers/handleNotFound.helper';

const router = Router();

router.use(AuthRoute);
router.use('/users', UserRoute);
router.use('/status', StatusRoute);
router.use('/grouproles', GroupRolesRoute);
router.use('/roles', RoleRoute);
router.use('/permissions', PermissionRoute);
router.use(handleNotFound);

export default router;
