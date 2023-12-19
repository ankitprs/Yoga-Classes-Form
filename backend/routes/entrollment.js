import express from 'express';
import entrollmentController from '../controllers/entrollment.controller.js'

var router = express.Router();

router.post('/verify_payment', entrollmentController.verify_entrollment)
router.post('/webhook', entrollmentController.webwook_handler);

export default router;