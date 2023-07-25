const mongoose = require("mongoose");

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected successfully!");
    } catch (err) {
        console.error("Error connecting to the database:", err);
        process.exit(1); // Exit process with a failure code (non-zero) if unable to connect to the database.
    }
};

module.exports = dbConnection;