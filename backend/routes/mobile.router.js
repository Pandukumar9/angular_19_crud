const express = require('express');
const mobilesController = require('../controllers/mobiles.controller');

const mobilesRouter = express.Router();

mobilesRouter.post('/', mobilesController.addMobile);
mobilesRouter.get('/', mobilesController.getMobiles);
mobilesRouter.get('/:mobileId', mobilesController.getMobile);
mobilesRouter.put('/:mobileId', mobilesController.updateMobile);
mobilesRouter.delete('/:mobileId', mobilesController.deleteMobile);
mobilesRouter.delete('/', mobilesController.deleteAllMobiles);

module.exports = mobilesRouter;
