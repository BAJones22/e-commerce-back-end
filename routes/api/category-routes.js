const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
    try {
        const categories = await Category.findAll({ include: [Product] });
        res.status(200).json(categories);
    } catch (err) {
        res.status(500).json({ message: 'Error occurred'});
    }
});

router.get('/:id', (req, res) => {
    try {
        const category = await Category.findByPk(req.params.id, { include: [Product] });
        if (!category) {
            res.status(404).json({ message: 'Error occurred' });
            return;
        }
        res.status(200).json(category);
    }   catch (err) {
        res.status(500).json({ message: 'Error occurred'});
    }
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;