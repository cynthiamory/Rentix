//IMPORT EXPRESS AND MODELS
const router = require('express').Router();
const { Accomodation,Transportation,Trending, Catering } = require('../../models');

// THE CATERING ENDPOINTS
router.get('/',async (req, res) => {
    
    try{
      const Accomodata= await Accomodation.findAll({
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
    const Accomodationserial =Accomodata.map((Accomodationinfo)=>Accomodationinfo.get({plain:true}));
  
    res.render('accomodation',{
     Accomodationserial,
      // username: req.session.username,
      //   logged_in: req.session.logged_in
    })
  }catch(err) {
      console.log(err);
      res.status(500).json(err);
    }});


    router.get('/accomodation/:id',async (req, res) => {
      // find one accomodation  by its `id` value
      try{
       const Accomodata = await Accomodation.findByPk(req.params.id,{
      
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

    const accomodationserial =Accomodata.get({plain:true})
    console.log(accomodationserial)

      res.render('accomodation',{
        accomodationserial,
    
        // username: req.session.username,
        // logged_in: req.session.logged_in
      })
    }catch(err) {
        console.log(err);
        res.status(500).json(err);
      }});
    
    
    //EXPORT
module.exports = router;