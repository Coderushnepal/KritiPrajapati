import * as carServices from "../services/car.js";

export function getAllCars(req, res, next) {
  try {
    const data = carServices.getAllCars();
    res.json(data);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
}

export function getCarById(req, res, next) {
  const id = req.params.carIdentifier;
  try {
    const data = carServices.getCarById(id);
    res.json(data);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
}

export function saveCar(req, res, next) {
  try {
    const data = carServices.saveCar(req.body);
    res.json(data);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
}

export function updateCar(req, res, next) {
  const id = req.params.carIdentifier;
  try {
    const data = carServices.updateCar(id, req.body);
    res.json(data);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
}

export function removeCar(req, res, next) {
  const id = req.params.carIdentifier;

  try {
    const data = carServices.removeCar(id);
    res.json(data);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
}
