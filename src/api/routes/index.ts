import { Router } from 'express';
import AuthRoute from './auth.route';
import UserRoute from './user.route';
import StatusRouter from './status.router';
import handleNotFound from '../../helpers/handleNotFound.helper';

const router = Router();

router.use(AuthRoute);
router.use('/users', UserRoute);
router.use('/status', StatusRouter);
router.use(handleNotFound);

export default router;
