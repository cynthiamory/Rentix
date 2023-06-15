//IMPORT EXPRESS AND MODELS
const router = require('express').Router();
const { Accomodation,Transportation,Trending, Catering } = require('../models');

router.get('/',async (req, res) => {
    // find
    // be sure to include its associated Products
    try{
      const Cateringdata= await Catering.findAll({
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
    })
    // serialize Data
    const catering =Cateringdata.map((catering)=>catering.get({plain:true}));
  
    res.render('catering',{
     catering,
      username: req.session.username,
        logged_in: req.session.logged_in
    })
  }catch(err) {
      console.log(err);
      res.status(500).json(err);
    }});
    
    //EXPORT
module.exports = router;