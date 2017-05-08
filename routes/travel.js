const express = require('express');
const controller = require('../controllers/travelController');
const authHelpers = require('../services/auth/authHelpers');

const travelRoutes = express.Router();

travelRoutes.get('/', controller.index);
travelRoutes.get('/info/:id', controller.info);
travelRoutes.get('/info', controller.show);
travelRoutes.get('/edit/:id', controller.edit);
// travelRoutes.put('/:id', controller.update);
travelRoutes.get('/state_name/:id', controller.getCity);
travelRoutes.put('/:id', authHelpers.loginRequired, controller.update);
travelRoutes.delete('/:id',  controller.destroy);

module.exports = travelRoutes;