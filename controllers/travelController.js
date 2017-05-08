const Travel = require('../models/travel');
const controller = {};

controller.index = (req, res) => {
  Travel.findAll()
  .then(state_tbl => {
    Travel.findAllCity()
      .then(city_tbl => {
        // console.log(state_tbl, city_tbl);
        res.render('index',{
          documentTitle: 'travelx',
          stateData: state_tbl,
          cityData: city_tbl,
        });
      })
  .catch(err => {
    res.status(400).json(err);
  });
});
};

controller.getCity = (req, res) => {
  console.log(req.params.id);
  Travel.findAllCityById(req.params.id)
  .then(city_tbl => {
   // console.log(res);
    res.render('travel/travel-city', {
      documentTitle: 'travelx',
      cityData: city_tbl,
    });
  })
  .catch(err => {
    console.log('error');
    res.status(400).json(err);
  });
};


controller.show = (req, res) => {
  Travel.findAllCity()
  .then(city_tbl => {
    // console.log(city_tbl);
    res.render('travel/travel-info', {
      documentTitle: 'travelx',
      cityData: city_tbl,
      });
    })
  .catch(err => {
    res.status(400).json(err);
  });
};

controller.info = (req, res) => {
  Travel.findCityInfo(req.params.id)
  .then(city_tbl => {
    //console.log(city_tbl);
    res.render('travel/travel-edit', {
      documentTitle: 'travelx',
      cityData: city_tbl,
      id: city_tbl.id,
    });
  })
  .catch(err => {
    res.status(400).json(err);
  });
};


controller.edit = (req, res) => {
  Travel.findInfo(req.params.id)
  .then(city_tbl => {
    //console.log(city_tbl);
    res.render('travel/travel-edit', {
      documentTitle: 'travelx',
      cityData: city_tbl,
      id: req.params.id,
    });
  })
  .catch(err => {
    res.status(400).json(err);
  });
};



controller.update = (req, res) => {
  console.log(req.params);
  console.log(req.body);
  Travel.update(
    {
      food: req.body.food,
      attraction: req.body.attraction,
    },
    req.params.id
  )
    .then(food => {
      res.redirect('info');
    })
    .then(attraction => {
      res.redirect('info');
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

controller.destroy = (req, res) => {
  Travel.destroy(
    req.params.id
  )
    .then(food => {
      res.redirect('info');
    })
    .then(attraction => {
      res.redirect('info');
    })
    .catch(err => {
      res.status(400).json(err);
    });
};



module.exports = controller;