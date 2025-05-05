const express = require('express');
const router = express.Router();
const Person = require('../models/Person');

// Get all people
router.get('/people', async (req, res) => {
    try {
        const people = await Person.find();
        res.json(people);
    } catch (err) {
        res.status(500).send('Error retrieving data');
    }
});

// Add a new person
router.post('/people', async (req, res) => {
    try {
        const person = new Person(req.body);
        await person.save();
        res.status(201).send('Person added successfully');
    } catch (err) {
        res.status(500).send('Error adding person');
    }
});

// Get person by ID
router.get('/people/:id', async (req, res) => {
    try {
        const person = await Person.findById(req.params.id);
        if (!person) return res.status(404).send('Person not found');
        res.json(person);
    } catch (err) {
        res.status(500).send('Error retrieving person');
    }
});

// Update person by ID
router.put('/people/:id', async (req, res) => {
    try {
        const person = await Person.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!person) return res.status(404).send('Person not found');
        res.json(person);
    } catch (err) {
        res.status(500).send('Error updating person');
    }
});

// Delete person by ID
router.delete('/people/:id', async (req, res) => {
    try {
        const person = await Person.findByIdAndDelete(req.params.id);
        if (!person) return res.status(404).send('Person not found');
        res.send('Person deleted successfully');
    } catch (err) {
        res.status(500).send('Error deleting person');
    }
});

module.exports = router;
