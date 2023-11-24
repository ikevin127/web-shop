export interface IPaymentStrategy {
    processPayment(amount: number): void;
}

export class StripePaymentStrategy implements IPaymentStrategy {
    processPayment(amount: number): void {
        console.log(`Processing $${amount} with Stripe`);
    }
}

export class BraintreePaymentStrategy implements IPaymentStrategy {
    processPayment(amount: number): void {
        console.log(`Processing $${amount} with Braintree`);
    }
}

export class PayPalPaymentStrategy implements IPaymentStrategy {
    processPayment(amount: number): void {
        console.log(`Processing $${amount} with PayPal`);
    }
}

export class PaymentService {
    private paymentStrategies: { [key: string]: IPaymentStrategy };

    constructor() {
        this.paymentStrategies = {
            stripe: new StripePaymentStrategy(),
            braintree: new BraintreePaymentStrategy(),
            paypal: new PayPalPaymentStrategy(),
        };
    }

    processPayment(method: string, amount: number): void {
        const strategy = this.paymentStrategies[method];

        if (!strategy) {
            throw new Error('Unsupported payment method');
        }
        
        strategy.processPayment(amount);
    }
}
