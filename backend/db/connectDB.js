import mongoose from "mongoose";

export const connectDB = async () => {
	try {
		const conn = await mongoose.connect("mongodb+srv://vimalkumarm472:X02xgUhfOrSNL6JN@cluster0.t683osm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (err) {
		console.error(`Error: ${err.message}`);
		process.exit(1);
	}
};
