import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number;
}

const  connection: ConnectionObject = {};
async function connectDB() : Promise<void> {
    if (connection.isConnected) {
        console.log("database already connected");
        return;
    }
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || "", {});
        connection.isConnected = db.connections[0].readyState;
        console.log("database connected successfully");
        console.log("database connected ", connection.isConnected);
    } catch (error) {
        console.error("Error connecting to database:", error);
        process.exit(1);
    }
}

export { connectDB };