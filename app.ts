const express = require('express');
const bodyParser = require('body-parser');
import routeInitializer from './src/api/routes';

// Create the Express Application
const app = express();

// Middlewares
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Initialize routes
routeInitializer(app);

// Set the port
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;