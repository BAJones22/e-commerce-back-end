const express = require('express');
const router = express.Router();
const { Tag, Product } = require('../../models');


router.get('/', async (req, res) => {
    try {
      const tags = await Tag.findAll({ include: [Product] });
      res.status(200).json(tags);
    } catch (err) {
      res.status(500).json({ message: 'Error occurred' });
    }
  });
  
  router.get('/:id', async (req, res) => {
    try {
      const tag = await Tag.findByPk(req.params.id, { include: [Product] });
      if (!tag) {
        res.status(404).json({ message: 'Error occurred' });
        return;
      }
      res.status(200).json(tag);
    } catch (err) {
      res.status(500).json({ message: 'Error occurred' });
    }
  });
  
  router.post('/', async (req, res) => {
    try {
      const newTag = await Tag.create(req.body);
      res.status(200).json(newTag);
    } catch (err) {
      res.status(400).json({ message: 'Error occurred' });
    }
  });
  
  router.put('/:id', async (req, res) => {
    try {
      const updated = await Tag.update(req.body, { where: { id: req.params.id } });
      if (!updated[0]) {
        res.status(404).json({ message: 'Error occurred' });
      } else {
        res.status(200).json(updated);
      }
    } catch (err) {
      res.status(500).json({ message: 'Error occurred' });
    }
  });
  
  router.delete('/:id', async (req, res) => {
    try {
      const deleted = await Tag.destroy({ where: { id: req.params.id } });
      if (!deleted) {
        res.status(404).json({ message: 'Error occurred' });
      } else {
        res.status(200).json(deleted);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;