import { Router } from 'express';
import * as apiController from './controllers/api.js';
import * as donateController from './controllers/donate.js';
import * as userController from './controllers/user.js';
import * as postController from './controllers/post.js';
import addUserSchema from './schemas/addUser.js';
import loginSchema from './schemas/login.js';
import addDonateSchema from './schemas/addDonate.js';

import addPostSchema from './schemas/addPost.js';


// import getCarsQuerySchema from './schemas/getCarsQuery.js';
import { validateBody, validateQueryParams } from './middlewares/validation.js';
import authenticate from './middlewares/authenticate.js';

const router = Router();

router.get('/', apiController.getAPIDetails);

router.get('/users', userController.getUsers);

// router.get('/abc/:abcIdentifier', authenticate, abcController.getAbc);

// router.post('/me',  userController.getMe);

// router.put('/abc/:abcIdentifier', authenticate, validateBody(updateAbcSchema), abcController.updateAbc);


router.post('/signup', validateBody(addUserSchema), userController.addUser);

router.post('/login', validateBody(loginSchema), userController.login);
router.get('/me',authenticate,userController.getUser);
router.put('/me',authenticate,userController.updateUser);


router.post('/post',authenticate, validateBody(addPostSchema),postController.addPost);

router.get('/posts',authenticate,postController.getPosts);

router.post('/donate/',authenticate, validateBody(addDonateSchema),donateController.addDonation);

router.get('/posts/:postIdentifier',authenticate,postController.getPost);



router.delete('/posts/:postIdentifier',postController.removePost);

export default router;