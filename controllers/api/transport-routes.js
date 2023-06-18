//IMPORT EXPRESS AND MODELS
const router = require('express').Router();

const { Accomodation,Transportation,Trending, Catering } = require('../../models');

// THE CATERING ENDPOINTS
router.get('/',async (req, res) => {
    
    try{
      const transportationdata= await Transportation.findAll({
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
    const transport =transportationdata.map((transportation)=>transportation.get({plain:true}));
  
    res.render('transportation',{
     transport,
      // username: req.session.username,
      //   logged_in: req.session.logged_in
    })
  }catch(err) {
      console.log(err);
      res.status(500).json(err);
    }});


    router.get('/:id',async (req, res) => {
      // find one transportation  by its `id` value
      try{
       const transport =await Transportation.findByPk(req.params.id,{
      
      });
    
      res.render('transportation',{
        transport,
    
        // username: req.session.username,
        // logged_in: req.session.logged_in
      })
    }catch(err) {
        console.log(err);
        res.status(500).json(err);
      }});
    
    
    //EXPORT
module.exports = router;