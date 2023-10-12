const { MongoClient } = require('mongodb');

// MongoDB connection URL
const uri = 'mongodb://localhost:27017/medical';

// MongoDB connection options (optional)
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Create a MongoDB client
const client = new MongoClient(uri, options);

// Connect to the MongoDB server
async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

// Export the MongoDB client and the connect function
module.exports = { client, connectToMongoDB };
