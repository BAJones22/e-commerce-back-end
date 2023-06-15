const express = require('express');
const router = express.Router();
const { Category, Product } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({ include: [Product] });
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ message: 'Error occurred' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, { include: [Product] });
    if (!category) {
      res.status(404).json({ message: 'Error occurred' });
      return;
    }
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json({ message: 'Error occurred' });
  }
});

router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(400).json({ message: 'Error occurred' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updated = await Category.update(req.body, { where: { id: req.params.id } });
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
    const deleted = await Category.destroy({ where: { id: req.params.id } });
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

// const router = require('express').Router();
// const { Category, Product } = require('../../models');


// router.get('/', (req, res) => {
//     try {
//         const categories = await Category.findAll({ include: [Product] });
//         res.status(200).json(categories);
//     } catch (err) {
//         res.status(500).json({ message: 'Error occurred'});
//     }
// });

// router.get('/:id', (req, res) => {
//     try {
//         const category = await Category.findByPk(req.params.id, { include: [Product] });
//         if (!category) {
//             res.status(404).json({ message: 'Error occurred' });
//             return;
//         }
//         res.status(200).json(category);
//     }   catch (err) {
//         res.status(500).json({ message: 'Error occurred'});
//     }
// });

// router.post('/', (req, res) => {
//   try {
//     const newCategory = await Category.create(req.body);
//     res.status(200).json(newCategory);
//   } catch (err) {
//     res.status(400.json)({ message: 'Error occurred' });
//   }
// });

// router.put('/:id', (req, res) => {
//   try {
//     const update = await Category.update(req.body, { where: { id: req.params.id } });
//     !updated[0] ? res.status(404).json({ message: 'Error occurred' }) : res.status(200).json(update);
//   } catch (err) {
//     res.status(500).json({ message: 'Error occurred' });
//   }
// });

// router.delete('/:id', (req, res) => {
//   try {
//     const deleteCategory = await Category.destroy({ where: { id: req.params.id } });
//     !deleted ? res.status(404).json({ message: 'Error occurred' }) : res.status(200).json(deleteCategory);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// module.exports = router;