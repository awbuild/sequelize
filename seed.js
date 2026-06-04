// Seed Database with Sample Shopping Cart Data
// This file is provided for you - no changes needed here!
// Run it with: npm run seed
const { sequelize, User, Product, CartItem } = require('./models');

async function seedDatabase() {
  try {
    console.log('Starting database seed...');

    // Sync all tables (force: true drops and recreates)
    console.log('Syncing tables...');
    await sequelize.sync({ force: true });
    console.log('Tables created');

    // Create users
    console.log('Creating users...');
    const users = await User.bulkCreate([
      {
        name: 'Alice Johnson',
        email: 'alice@example.com',
        address: '123 Main St, Springfield, IL 62701'
      },
      {
        name: 'Bob Smith',
        email: 'bob@example.com',
        address: '456 Oak Ave, Chicago, IL 60601'
      },
      {
        name: 'Carol Davis',
        email: 'carol@example.com',
        address: '789 Pine Rd, Naperville, IL 60540'
      }
    ], { validate: true });
    console.log(`Created ${users.length} users`);

    // Create products
    console.log('Creating products...');
    const products = await Product.bulkCreate([
      {
        name: 'Wireless Headphones',
        description: 'High-quality wireless headphones with noise cancellation',
        price: 79.99,
        category: 'Electronics',
        inStock: true
      },
      {
        name: 'Running Shoes',
        description: 'Comfortable running shoes for all terrains',
        price: 89.99,
        category: 'Sports',
        inStock: true
      },
      {
        name: 'JavaScript Book',
        description: 'Comprehensive guide to modern JavaScript development',
        price: 39.99,
        category: 'Books',
        inStock: true
      },
      {
        name: 'Coffee Maker',
        description: 'Programmable coffee maker with thermal carafe',
        price: 59.99,
        category: 'Home',
        inStock: true
      },
      {
        name: 'Cotton T-Shirt',
        description: 'Comfortable cotton t-shirt in various colors',
        price: 19.99,
        category: 'Clothing',
        inStock: true
      },
      {
        name: 'Yoga Mat',
        description: 'Non-slip yoga mat with carrying strap',
        price: 29.99,
        category: 'Sports',
        inStock: false
      }
    ], { validate: true });
    console.log(`Created ${products.length} products`);

    // Create cart items
    console.log('Creating cart items...');
    const cartItems = await CartItem.bulkCreate([
      {
        userId: users[0].id,
        productId: products[0].id,
        quantity: 1
      },
      {
        userId: users[0].id,
        productId: products[2].id,
        quantity: 2
      },
      {
        userId: users[1].id,
        productId: products[1].id,
        quantity: 1
      },
      {
        userId: users[1].id,
        productId: products[3].id,
        quantity: 1
      },
      {
        userId: users[2].id,
        productId: products[4].id,
        quantity: 3
      }
    ], { validate: true });
    console.log(`Created ${cartItems.length} cart items`);

    console.log('');
    console.log('Database seeded successfully!');
    console.log('Summary:');
    console.log(`- Users: ${users.length}`);
    console.log(`- Products: ${products.length}`);
    console.log(`- Cart Items: ${cartItems.length}`);

    await sequelize.close();
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error.message);
    await sequelize.close();
    process.exit(1);
  }
}

seedDatabase();
