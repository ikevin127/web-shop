# Web Shop Architecture

## I. Create the basic structure of a web shop

### Folder structure

```plaintext
/web-shop
|-- /src
|   |-- /api
|   |   |-- /controllers
|   |   |-- /routes
|   |-- /models
|   |-- /services
|   |-- /repositories
|   |-- /utils
|-- /public
|-- /tests
|   |-- /unit
|   |-- /integration
|   |-- /e2e
|-- /views
```

### File and folder structure

- `api/`: core backend functionality
  - `controllers/`: handle incoming requests and return appropriate responses
  - `routes/`: define API endpoints and route requests to the controllers
  - `models/`: schema definitions for database models
  - `services/`: business logic of the application
  - `repositories/`: abstract database interactions, providing a clean data access layer
  - `utils/`: shared utility functions and helpers
- `public/`: static assets like stylesheets, client-side JS files and images
- `tests/`: contains different types of tests:
  - `unit/`: unit tests for individual functions
  - `integration/`: integration tests for testing the interaction between different components
  - `e2e/`: end-to-end tests for testing the application as a whole
- `views/`: if SSR is used, this folder contains templates for the user interface

## Separation of business logic

All business logic is centralized in the `services` directory.

This organization ensures a clean separation from the HTTP transport layer, allowing the `controllers` to focus solely on request handling.

By using `repositories` for data access, we create a clear and layer-specific interaction with the database, enhancing the maintainability of our application.

### Design pattern choice

- **MVC pattern**: The Model-View-Controller (MVC) pattern provides a clear separation of concerns, dividing the application into logical components that handle the database models (Model), the user interface (View), and the control flow of the application (Controller).

- **Repository pattern**: This pattern is used to decouple the data layer, enabling a solid separation between the business logic and the data access logic. It makes testing and maintenance simpler by allowing the substitution of different data sources if needed.

- **Service layer pattern**: The domain logic and complex business rules are encapsulated within a Service layer. This abstraction separates the concerns, promotes code reusability and improves the overall structure and organization of the application.

## II. Create a basic implementation that would be needed to handle multiple payment processing providers.

Adding the required logic within the existing app structure will look like this:

1. **Services**: implemented logic for `PaymentService` which uses the strategy pattern for processing payments
2. **Controllers**: added logic for `PaymentController` as interface between the routes and the payment service
3. **Routes**: added routes for payment processing which will use the `PaymentController` logic
4. **Tests**: created unit tests for payment-related logic
