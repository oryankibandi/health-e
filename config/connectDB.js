import mongoose from 'mongoose';
import 'dotenv/config';

async function connect() {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
  } catch (error) {
    console.error(error);
  }
}

export default connect;
