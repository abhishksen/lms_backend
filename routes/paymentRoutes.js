import express from 'express';
import { isAuthenticated } from '../middlewares/auth.js';
import { buySubscription, getRazorPayKey, paymentVerification } from '../controllers/paymentController.js';

const router = express.Router();

// buy a subscription
router.route('/subscribe').get(isAuthenticated, buySubscription);

// get razorpay key
router.route('/razorpaykey').get(getRazorPayKey);

// verify payment
router.route('/paymentverification').post(isAuthenticated, paymentVerification);

export default router;