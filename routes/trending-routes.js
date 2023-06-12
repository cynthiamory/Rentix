//IMPORT EXPRESS AND MODELS
const router = require('express').Router();
const { Trending, Product } = require('../../models');

// THE TRENDING ENDPOINTS
router.get('/', (req, res) => {
  // find
  // be sure to include its associated Products
  Trending.findAll({
    include: [ 
      {
        model: Product
      }
    ]
  })
  .then(trendingData => res.json(trendingData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  // find one trending by its `id` value
  // be sure to include its associated Products
  Trending.findOne({
    where: {
      id: req.params.id
    }, 
  
    include: [ 
      {
        model: Product,
      
      }
    ]
  })
  .then(trendingData => {
    if (!trendingData) {
      res.status(404).json({ message: 'No trending found with this id' });
      return;
    }
    res.json(trendingData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

//CREATE
router.post('/', (req, res) => {
  // create a new trending
  Trending.create(req.body)
  .then(trendingData => res.json(trendingData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// UPDATE 
router.put('/:id', (req, res) => {
  // update a trending by its `id` value
  Trending.update(
    {
      trending_name: req.body.trending_name
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(trendingData => {
      if (!trendingData) {
        res.status(404).json({ message: 'No trending found with this id' });
        return;
      }
      res.json(trendingData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//DELETE 
router.delete('/:id', (req, res) => {
  // delete a trending by its `id` value
  Trending.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(trendingData => {
    if (!trendingData) {
      res.status(404).json({ message: 'No trending items with this id' });
      return;
    }
    res.json(trendingData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

//EXPORT
module.exports = router;
