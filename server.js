const dotenv = require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoute = require("./app/routes/Auth.routes");
const userRoute = require("./app/routes/User.routes");
const errorHandler = require("./app/middleware/Error.middleware");
const cookieParser = require("cookie-parser");
const dbConnection = require("./app/config/db.config");
const path = require("path");

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
    cors({
        origin: ["http://localhost:5000", "https://sport-mania-f115514bc017.herokuapp.com/"],
    })
);

// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes Middleware
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

// Routes
app.get("/", (req, res) => {
    res.send("Home Page");
});

// Error Middleware
app.use(errorHandler);

// Connect to DB and start server
const PORT = process.env.PORT || 5000;
dbConnection()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server Running on port ${PORT}`);
        });
    })
    .catch((err) => console.log(err));