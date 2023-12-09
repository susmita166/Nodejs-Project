const getContactModel = require("../models/contactModel");
class ContactController {
  async getContact(req, res) {
    try {
        const contacts = await getContactModel.find(); // Fetch contacts from the database
        res.status(200).json({ 'status':true, data: contacts , message: "Get all contacts."});
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
  }
  
  async postContact(req, res) {
    const validator = require('validator');
    const getDataFromBody = req.body;
    const { name = '', email = '', phone = '' } = req.body;

    if (validator.isEmpty(name) || validator.isEmpty(email) || validator.isEmpty(phone)) {
        res.status(400).json({ 'status':false, error: "All fields are mandatory" });
    } else {
      const postContact = await getContactModel.create({name, email, phone}); // Insert operation
      console.log('Data added succesfully');
      res.status(200).json({ 'status':true, data: postContact , message: "Insert Successfully"});
    }
  }
      
  
    async updateContact(req, res) {
      res.status(200).json({ message: `Update contact with ID ${req.params.id}.` });
    }
  
    async deleteContact(req, res) {
      res.status(200).json({ message: `Delete contact with ID ${req.params.id}.` });
    }
  }
  
module.exports = new ContactController();
  