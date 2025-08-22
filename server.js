import mongooes from "mongoose";
import { MONGODB_URL, PORT } from "./utils/config.js";
import app from "./app.js";

mongooes.connect(MONGODB_URL)
    .then(() => {
        console.log("\x1b[32m%s\x1b[0m", "✅ Database connected successfully");
        app.listen(PORT, () => {
            console.log(`🚀 Server is running on http://localhost:${PORT}`);
        })
    })
    .catch((error) => {
        console.error("❌ Database connection failed:", error.message);
    })