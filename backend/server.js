const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// Import routes
const departmentRoutes = require("./routes/departmentRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const assetRoutes = require("./routes/assetRoutes");
const allocationRoutes = require("./routes/allocationRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const authRoutes = require("./routes/authRoutes");

dotenv.config();

// Connect Database
connectDB();

const app = express();

// 1. CORS Middleware (Must be first)
app.use(cors({
    origin: "http://localhost:5174",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

// 2. Request Parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 3. Global Logging Middleware (To prove request hits the server)
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} request to ${req.url}`);
    next();
});

// 4. Routes
app.use("/api/departments", departmentRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/assets", assetRoutes);
app.use("/api/allocations", allocationRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.json({ success: true, message: "AssetFlow Backend API Running" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});