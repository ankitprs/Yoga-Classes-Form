import express from 'express';
import userController from '../controllers/user.controller.js'

var router = express.Router();

router.post('/', userController.submit_user_form)

export default router;