import { BraintreePaymentStrategy, PayPalPaymentStrategy, StripePaymentStrategy } from "../../src/services/paymentProcessorService";

describe('Payment Strategies', () => {
    describe('StripePaymentStrategy', () => {
        it('should process payment', () => {
            const stripeStrategy = new StripePaymentStrategy();
            const consoleSpy = jest.spyOn(console, 'log');
            stripeStrategy.processPayment(100);
            expect(consoleSpy).toHaveBeenCalledWith('Processing $100 with Stripe');
        });
    });

    describe('BraintreePaymentStrategy', () => {
        it('should process payment', () => {
            const braintreeStrategy = new BraintreePaymentStrategy();
            const consoleSpy = jest.spyOn(console, 'log');
            braintreeStrategy.processPayment(100);
            expect(consoleSpy).toHaveBeenCalledWith('Processing $100 with Braintree');
        });
    });

    describe('PayPalPaymentStrategy', () => {
        it('should process payment', () => {
            const payPalStrategy = new PayPalPaymentStrategy();
            const consoleSpy = jest.spyOn(console, 'log');
            payPalStrategy.processPayment(100);
            expect(consoleSpy).toHaveBeenCalledWith('Processing $100 with PayPal');
        });
    });
});

afterEach(() => {
    jest.restoreAllMocks();
});
