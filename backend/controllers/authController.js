const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        const { email, password, role } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ email, password: hashedPassword, role });
        await user.save();
        res.status(201).json({ message: "User registered" });
    } catch (error) {
        res.status(500).json({ message: "Error registering" });
    }
};

exports.login = async (req, res) => {
    console.log("Login attempt:", req.body);
    try {
        const { email, password, role } = req.body;
        const user = await User.findOne({ email });
        
        if (!user) return res.status(400).json({ message: "Invalid credentials" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        if (user.role !== role) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};