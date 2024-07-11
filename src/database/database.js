import mongoose from "mongoose";

async function connectDatabase() {
  await mongoose.connect(
    "mongodb+srv://joelprodrigues25:Asdqwe00*@cluster0.iwggpuq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
}

export default connectDatabase();
