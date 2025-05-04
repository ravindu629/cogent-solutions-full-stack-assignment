import asyncHandler from "../middleware/asyncHandler.js";
import Contact from "../models/contactModel.js";

// @desc    Register a new contact details
// @route   POST /api/contacts
// @access  Public
const registerContact = asyncHandler(async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const contact = new Contact({ name, email, phone, message });
    await contact.save();
    res.status(201).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ error: "Failed to send message" });
  }
});

export { registerContact };
