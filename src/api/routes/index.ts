import { Application } from 'express';
import paymentRoutes from './paymentRoutes';

const routeInitializer = (app: Application): void => {
    app.use('/payment', paymentRoutes);
};

export default routeInitializer;
