require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');

async function createPatient() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log('Connected to MongoDB');

    const patient = new User({
      firstName: "Amit",
      lastName: "Patel",
      email: "amit.patient@gmail.com",
      password: "Patient@123",
      role: "patient"
    });

    await patient.save();

    console.log('Patient created successfully');
    console.log('Patient ID:', patient._id);
  } catch (error) {
    console.error('Error creating patient:', error);
  } finally {
    await mongoose.connection.close();
  }
}

createPatient();