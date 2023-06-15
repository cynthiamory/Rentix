//IMPORT EXPRESS AND MODELS
const router = require('express').Router();
const { Accomodation,Transportation,Trending,Catering } = require('../models');


// THE TRENDING ENDPOINTS
router.get('/',async (req, res) => {
  
  try{
    const trendingdata= await Trending.findAll({
    // include: [ 
      
    //   {
    //     model: Transportation
    //   },
    //   {
    //     model: Accomodation
    //   },
    // ]
  })
  // serialize Data
  const trending =trendingdata.map((trending)=>trending.get({plain:true}));
  console.log(trending)

  res.render('homepage',{
    trending
    // username: req.session.username,
    //   logged_in: req.session.logged_in
  })
}catch(err) {
    console.log(err);
    res.status(500).json(err);
  }});

router.get('/:id',async (req, res) => {
  // find one trending by its `id` value
  // be sure to include its associated Products
  try{
   const trend =await Trending.findByPk(req.params.id,{
  
    include: [ 
      // {
      //   model: Catering
      // },
      // {
      //   model: Transportation
      // },
      // {
      //   model: Accomodation
      // },
    ]
  });

  res.render('trending',{
    trend,

    // username: req.session.username,
    // logged_in: req.session.logged_in
  })
}catch(err) {
    console.log(err);
    res.status(500).json(err);
  }});

  //login page
  router.get('/login', (req, res) => {
    // If the user is already logged in, redirect to dashboard
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  
  router.get('/signup', (req, res) => {
    res.render('signup');
  });
























// //CREATE
// router.post('/', (req, res) => {
//   // create a new trending
//   Trending.create(req.body)
//   .then(trendingData => res.json(trendingData))
//       .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
// });

// // UPDATE 
// router.put('/:id', (req, res) => {
//   // update a trending by its `id` value
//   Trending.update(
//     {
//       trending_name: req.body.trending_name
//     },
//     {
//       where: {
//         id: req.params.id
//       }
//     }
//   )
//     .then(trendingData => {
//       if (!trendingData) {
//         res.status(404).json({ message: 'No trending found with this id' });
//         return;
//       }
//       res.json(trendingData);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// //DELETE 
// router.delete('/:id', (req, res) => {
//   // delete a trending by its `id` value
//   Trending.destroy({
//     where: {
//       id: req.params.id
//     }
//   })
//   .then(trendingData => {
//     if (!trendingData) {
//       res.status(404).json({ message: 'No trending items with this id' });
//       return;
//     }
//     res.json(trendingData);
//   })
//   .catch(err => {
//     console.log(err);
//     res.status(500).json(err);
//   });
// });

//EXPORT
module.exports = router;
