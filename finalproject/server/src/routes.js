import { Router } from 'express';

import * as apiController from './controllers/api.js';
import * as postController from './controllers/post.js';
import * as userController from './controllers/user.js';
import * as donateController from './controllers/donate.js';
import * as updateController from './controllers/update.js';

import loginSchema from './schemas/login.js';
import addPostSchema from './schemas/addPost.js';
import addUserSchema from './schemas/addUser.js';
import addDonateSchema from './schemas/addDonate.js';
import addUpdateSchema from './schemas/addUpdate.js';
import authenticate from './middlewares/authenticate.js';
import { validateBody } from './middlewares/validation.js';

const router = Router();

router.get('/', apiController.getAPIDetails);

router.post('/signup', validateBody(addUserSchema), userController.addUser);

router.post('/login', validateBody(loginSchema), userController.login);

router.get('/users', userController.getUsers);

router.post('/post', authenticate, validateBody(addPostSchema), postController.addPost);

router.get('/posts', authenticate, postController.getPosts);

router.get('/posts/:postIdentifier', authenticate, postController.getPost);

router.post('/donate/', authenticate, validateBody(addDonateSchema),donateController.addDonation);

router.patch('/posts/report/:postIdentifier', authenticate, postController.reportPost);

router.post('/update/', authenticate, validateBody(addUpdateSchema),updateController.addUpdate);

router.delete('/posts/:postIdentifier',authenticate, postController.removePost);

router.get('/me', authenticate, userController.getUser);

router.patch('/me', authenticate, userController.updateUser);

router.get("/profile/:id", authenticate, userController.getProfileDetail);

export default router;