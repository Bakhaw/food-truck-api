import express from 'express';
import config from '../config';

import initializeDb from '../db';
import middleware from '../middleware';

import foodtruck from '../controller/foodtruck';

let router = express();

// connect to db
initializeDb(db => {
  router.use(middleware({ config, db })); // middleware vérifie si tout fonctionne bien

  // app/foodtruck
  router.use('/foodtruck', foodtruck({ config, db })); // fait référence au controller
});

export default router;
