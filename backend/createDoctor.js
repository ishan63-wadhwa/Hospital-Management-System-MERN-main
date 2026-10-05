require('dotenv').config();
const mongoose = require('mongoose');
const Doctor = require('./models/doctor'); // Ensure this case matches your filename exactly

async function createDoctor() {
  try {
    // 1. Hardcode your exact URI to bypass dotenv loading issues
    const uri = "mongodb+srv://ishanwadhwarbt86_db_user:Kartik63@cluster0.e1p2eq5.mongodb.net/hospital_management?appName=Cluster0";

    // 2. Add 'family: 4' to force Node.js to use IPv4, which fixes the querySrv DNS error
    await mongoose.connect(uri, { family: 4 });

    console.log('Connected to MongoDB');

    const doctor = new Doctor({
      firstName: "Rahul",
      lastName: "Sharma",
      email: "rahul.doctor@hospital.com", // If you already ran this and got a duplicate key error, change this email
      password: "Doctor@123",
      specialty: "Cardiology",
      licenseNumber: "DOC001",           // If you got a duplicate key error, change this ID (e.g., DOC002)
      phoneNumber: "9876543210",
      role: "doctor"
    });

    await doctor.save();

    console.log('Doctor created successfully');
    console.log('Doctor ID:', doctor._id);
  } catch (error) {
    console.error('Error creating doctor:', error);
  } finally {
    process.exit(); // Ensures the terminal closes the connection properly
  }
}

createDoctor();