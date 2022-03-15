import {Router} from 'express';
import * as carController from './controllers/car.js';

const router = Router();

router.get("/", (req, res, next) => {
  res.send("This is the response from the index(/) route");
});

router.get("/cars", carController.getAllCars);

router.get("/cars/:carIdentifier",  carController.getCarById);

router.post("/cars", carController.saveCar);

router.put("/cars/:carIdentifier", carController.updateCar);

router.delete("/cars/:carIdentifier", carController.removeCar);

export default router;
