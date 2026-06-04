# Shopping Cart API - Starter Project

A RESTful API for managing users, products, and shopping carts using Express, PostgreSQL, and Sequelize.

This starter project gives you the folder structure, configuration, seed data, and Postman tests already set up. Your job is to fill in the TODO comments to build the API.

## Quick Start

### 1. Start PostgreSQL
**macOS:** `brew services start postgresql@16`
**Windows:** Should be running as a service already

### 2. Install Dependencies
```bash
npm install
```

### 3. Create .env File
Copy the example file and update if needed:
```bash
cp .env.example .env
```

Default values:
```
DB_NAME=shopping_cart_db
DB_USER=postgres
DB_PASSWORD=
DB_HOST=localhost
DB_PORT=5432
PORT=3000
```

### 4. Create Database
```bash
# Mac
createdb shopping_cart_db

# Windows
psql -U postgres -c "CREATE DATABASE shopping_cart_db;"
```

### 5. Start Building
Work through the TODO comments in the files listed below, then seed and test.

### 6. Seed Database (after completing models)
```bash
npm run seed
```
Creates 3 users, 6 products, and 5 cart items with relationships.

### 7. Start Server
```bash
npm run dev
```
Server runs at http://localhost:3000

### 8. Run Tests (after completing all TODOs)
```bash
npm test
```

## Project Structure

```
starter-app/
  config/
    database.js            -- PROVIDED: PostgreSQL connection via Sequelize
  models/
    User.js                -- TODO: Define user fields and validation
    Product.js             -- TODO: Define product fields and validation
    CartItem.js            -- TODO: Define cart item fields and validation
    index.js               -- TODO: Set up model relationships
  controllers/
    userController.js      -- TODO: Implement user CRUD operations
    productController.js   -- TODO: Implement product CRUD operations
    cartItemController.js  -- TODO: Implement cart CRUD with eager loading
  routes/
    userRoutes.js          -- TODO: Wire up user endpoints
    productRoutes.js       -- TODO: Wire up product endpoints
    cartItemRoutes.js      -- TODO: Wire up cart item endpoints
  server.js                -- TODO: Import and mount route files
  seed.js                  -- PROVIDED: Sample data creation
  .env.example             -- PROVIDED: Environment variable template
  .gitignore               -- PROVIDED: Files to exclude from git
  package.json             -- PROVIDED: Dependencies and scripts
  Shopping-Cart-API.postman_collection.json  -- PROVIDED: API test suite
```

## Task Checklist

Work through these tasks in order:

### Phase 1: Models (Define your data)
- [ ] Complete User.js - Add name, email, and address fields with validation
- [ ] Complete Product.js - Add name, description, price, category, and inStock fields
- [ ] Complete CartItem.js - Add quantity field with min/max validation
- [ ] Complete index.js - Set up User/CartItem and Product/CartItem relationships

### Phase 2: Controllers (Add the logic)
- [ ] Complete userController.js - Implement all 5 CRUD functions
- [ ] Complete productController.js - Implement all 5 CRUD functions (same pattern)
- [ ] Complete cartItemController.js - Implement all 6 functions (includes eager loading)

### Phase 3: Routes (Wire up endpoints)
- [ ] Complete userRoutes.js - Add GET, POST, PUT, DELETE routes
- [ ] Complete productRoutes.js - Add GET, POST, PUT, DELETE routes
- [ ] Complete cartItemRoutes.js - Add GET, POST, PUT, DELETE routes

### Phase 4: Server (Connect everything)
- [ ] Complete server.js - Import route files and mount them with app.use()

### Phase 5: Test
- [ ] Run `npm run seed` to populate the database
- [ ] Run `npm run dev` to start the server
- [ ] Run `npm test` to verify all endpoints work

## API Endpoints

**Users**
```
GET    /api/users
GET    /api/users/:id
POST   /api/users
PUT    /api/users/:id
DELETE /api/users/:id
```

**Products**
```
GET    /api/products
GET    /api/products/:id
POST   /api/products
PUT    /api/products/:id
DELETE /api/products/:id
```

**Cart Items**
```
GET    /api/cart-items
GET    /api/users/:userId/cart-items
GET    /api/cart-items/:id
POST   /api/cart-items
PUT    /api/cart-items/:id
DELETE /api/cart-items/:id
```

## What is Already Done For You

- **Database connection** (config/database.js) - Connects to PostgreSQL using your .env settings
- **Seed data** (seed.js) - Creates sample users, products, and cart items
- **Postman tests** - A full test suite to verify your API works
- **Package.json** - All dependencies and npm scripts configured
- **Server shell** (server.js) - Express app setup with the endpoint listing

## What You Need to Build

1. **Model definitions** - Tell Sequelize what your database tables look like
2. **Model relationships** - Connect Users to CartItems, Products to CartItems
3. **Controller functions** - The business logic for each endpoint
4. **Route definitions** - Map HTTP methods and paths to controller functions
5. **Server imports** - Import and mount your route files

## Common Errors

**PostgreSQL not running**
```
Error: connect ECONNREFUSED 127.0.0.1:5432
```
Solution: `brew services start postgresql@16` or start the Windows service

**Seed fails with validation error**
```
SequelizeValidationError
```
Solution: Your model fields or validation rules may not match the seed data. Check the TODO hints carefully.

**Cannot find module error**
```
Error: Cannot find module './routes/userRoutes'
```
Solution: Make sure the route files export the router with `module.exports = router;`

**Port in use**
```
listen EADDRINUSE :::3000
```
Solution: Change PORT in .env or stop other terminals running on port 3000

## Tips

- Start with the **models** first - nothing else works without them
- The **User controller** is the simplest - get that working, then copy the pattern
- The **CartItem controller** is the hardest because of eager loading (the `include` option)
- Use **Postman** or **Thunder Client** to test individual endpoints as you build them
- Check the **completed-app** folder if you get stuck - it has the full working solution
