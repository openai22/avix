const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const app = express()

app.use(cors({
  origin: "*"
}))

app.use(express.json())


mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err))


const contactSchema = new mongoose.Schema({
  fullName: String,  
  email: String,
  phone: String,
  service: String,
  budget: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
})
const Contact = mongoose.model("Contact", contactSchema)


app.post("/api/contact", async (req, res) => {
  try {
    const newContact = new Contact(req.body)
    await newContact.save()
    res.status(200).json({ message: "Form submitted successfully!" })
  } catch (error) {
    res.status(500).json({ message: "Error saving data" })
  }
})

const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
