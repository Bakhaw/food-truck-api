// Le MIDDLEWARE Vérifie à chaque requête si tout fonctionne

import { Router } from 'express';

export default({ config, db }) => {
  let api = Router();

  // add middleware here

  return api;
};
