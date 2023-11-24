import { PaymentService } from "../../src/services/paymentProcessorService";

describe('PaymentService', () => {
    let paymentService: PaymentService;
    
    beforeEach(() => {
        paymentService = new PaymentService();
    });

    it('should throw error for unsupported payment method', () => {
        expect(() => {
            paymentService.processPayment('unsupported_method', 100);
        }).toThrow('Unsupported payment method');
    });

    it('should process payment using Stripe', () => {
        const processPaymentSpy = jest.spyOn(paymentService['paymentStrategies'].stripe, 'processPayment');
        paymentService.processPayment('stripe', 100);
        expect(processPaymentSpy).toHaveBeenCalledWith(100);
    });

    it('should process payment using Braintree', () => {
        const processPaymentSpy = jest.spyOn(paymentService['paymentStrategies'].braintree, 'processPayment');
        paymentService.processPayment('braintree', 100);
        expect(processPaymentSpy).toHaveBeenCalledWith(100);
    });

    it('should process payment using PayPal', () => {
        const processPaymentSpy = jest.spyOn(paymentService['paymentStrategies'].paypal, 'processPayment');
        paymentService.processPayment('paypal', 100);
        expect(processPaymentSpy).toHaveBeenCalledWith(100);
    });
});

afterEach(() => {
    jest.clearAllMocks();
});
