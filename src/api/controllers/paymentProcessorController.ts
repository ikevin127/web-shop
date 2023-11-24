import { Request, Response } from 'express';
import { PaymentService } from '../../services/paymentProcessorService';

const paymentService = new PaymentService();

export const processPayment = (req: Request, res: Response) => {
    try {
        const { amount, method } = req.body;
        paymentService.processPayment(method, amount);
        res.status(200).send('Payment processed successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
};
