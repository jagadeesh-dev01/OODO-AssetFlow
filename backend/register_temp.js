const User = require('./models/User');
const bcrypt = require('bcryptjs');
const connectDB = require('./config/db');
require('dotenv').config();

const registerUser = async () => {
    await connectDB();
    const hashedPassword = await bcrypt.hash('password123', 10);
    const newUser = await User.create({
        name: "Test User",
        email: "test@example.com",
        password: hashedPassword,
        role: "Employee",
        department: "IT"
    });
    console.log("User created successfully:", newUser);
    process.exit();
};

registerUser();