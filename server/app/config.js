const config = {
    port: process.env.PORT || 3002,
    databaseUrl: process.env.MONGODB_URI || 'mongodb+srv://KrzysztofHydroShop:Apgy1jM8DYPuE7Ov@hydroshop.jdygtbs.mongodb.net/?retryWrites=true&w=majority',
    JwtSecret: process.env.JWT_SECRET || 'secret'
};

export default config;