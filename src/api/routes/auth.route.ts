import { Router } from 'express';
import { AuthValidator } from '../../validations';
import { AuthController } from '../controllers';

const router = Router();

router.post('/login', AuthValidator.loginValidator, AuthController.login);

export default router;
