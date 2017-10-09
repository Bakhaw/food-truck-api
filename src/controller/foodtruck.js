import mongoose from 'mongoose';
import { Router } from 'express';
import Foodtruck from '../model/foodtruck';
import bodyParser from 'body-parser';

export default ({ config, db }) => {
  let api = Router();

  // Post
  api.post('/add', (req, res) => {
    let newTruck = new Foodtruck();
    Object.assign({newTruck}, req.body.name);
    // newTruck.name = req.body.name;
    // newTruck.type = req.body.type;
    // newTruck.price = req.body.price;
    // newTruck.forme = req.body.forme;
    // newTruck.comment = req.body.comment;

    newTruck.save((err) => {
      if (err) {
        res.send(err);
      }
      res.json(newTruck);
    });
  });

  // Get
  api.get('/', (req, res) => {
    Foodtruck.find({}, (err, ft) => {
      if (err) {
        res.send(err)
      }
      res.json(ft)
    })
  })

// Regrouper les routes identiques toutes à la fois
// api.route('/:id')
//   .get((req, res) => {})
//   .put((req, res) => {})
//   .delete((req, res) => {})

  return api;
};
