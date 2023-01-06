const router = require('express').Router();

const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
try{
   const locationData = await Category.findAll({include:[Product]})
  // be sure to include its associated Products
  res.status(200).json(locationData);
} catch (err) {
  res.status(500).json(err);
}
});

router.get('/:id', async (req, res) => {
  try{
    const locationData = await Category.findOne({where:{id:req.params.id},include:[Product]})
  // be sure to include its associated Products
  res.status(200).json(locationData);
} catch (err) {
  res.status(500).json(err);
}
});

router.post('/', async (req, res) => {
  try{
  const locationData = await Category.create(req.body) 
  res.status(200).json(locationData);
} catch (err) {
  res.status(400).json(err);
}
});

router.put('/:id', async (req, res) => {
  try{
    const locationData = await Category.update(req.body,{where:{id:req.params.id}}) 
    res.status(200).json(locationData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try{
    const locationData = await Category.destroy({where:{id:req.params.id}}) 
    res.status(200).json(locationData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;


