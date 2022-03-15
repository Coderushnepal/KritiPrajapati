import Car from "../models/Car.js";
import logger from "../utils/logger.js";

export function getAllCars() {
  logger.info("Fetching all cars");

  const cars = new Car().getAllCars();

  return {
    data: cars,
    message: "List of cars",
  };
}

export function getCarById(id) {
  logger.info(`Fetching car with carId ${id}`);

  const car = new Car().getCarById(id);

  //business logic
  if (!car) {
    logger.error(`Cannot find car with id ${id}`);

    throw new Error(`Cannot find car with id ${id}`);
  }

  return {
    data: car,
    message: `Details of carId ${id}`,
  };
}

export function saveCar(params) {
  logger.debug("Payload received", params);

  const existingData = new Car().findCarByParams(params);

  if (existingData) {
    logger.error("Data with the same payload already exists");

    throw new Error("Data with the same payload already exists");
  }

  logger.info("Saving the new car data");
  const data = new Car().saveCar(params);

  return {
    data,
    message: "Added the record successfully",
  };
}

export function updateCar(id, params) {
  logger.info(`Checking the existence of car with id ${id}`);

  const car = new Car().getCarById(id);

  if (!car) {
    logger.error(`Cannot find car with id ${id}`);

    throw new Error(`Cannot find car with id ${id}`);
  }

  logger.info(`Updating the data for carId ${id}`);

  new Car().updateCar(id, params);

  logger.info(`Fetching the updated data for carId ${id}`);

  const updatedData = new Car().getCarById(id);

  return {
    data: updatedData,
    message: "Record updated successfully",
  };
}

export function removeCar(id) {
  logger.info(`Checking if car with Id ${id} exists.`);

  const car = new Car().getCarById(id);

  if (!car) {
    logger.error(`Cannot delete car with id ${id} because it doesn't exist`);

    throw new Error(
      `Cannot delete car with id ${id} because it doesn't exist`
    );
  }

  new Car().removeCar(id);

  return {
    message: "Record removed successfully",
  } ;
}
