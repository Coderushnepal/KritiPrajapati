import { Router } from 'express';
import * as apiController from './controllers/api.js';
// import * as abcController from './controllers/abc.js';
import * as userController from './controllers/user.js';
import addUserSchema from './schemas/addUser.js';
import loginSchema from './schemas/login.js';

// import getCarsQuerySchema from './schemas/getCarsQuery.js';
import { validateBody, validateQueryParams } from './middlewares/validation.js';

const router = Router();

router.get('/', apiController.getAPIDetails);

// router.get('/abc', authenticate, validateQueryParams(getAbcsQuerySchema), abcController.getAbcs);

// router.get('/abc/:abcIdentifier', authenticate, abcController.getAbc);

router.post('/user', validateBody(addUserSchema), userController.addUser);
router.post('/me',  userController.getMe);

// router.put('/abc/:abcIdentifier', authenticate, validateBody(updateAbcSchema), abcController.updateAbc);


router.post('/users', validateBody(addUserSchema), userController.addUser);

router.post('/login', validateBody(loginSchema), userController.login);

export default router;