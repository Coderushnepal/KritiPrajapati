import diskDb from 'diskdb';

class Car{
    constructor(){
        this.filename = 'cars';
        this.db = diskDb.connect('src/db',[ this.filename] );
    }

    getAllCars(){
        return this.db[this.filename].find();
    }

    getCarById(id){
        return this.db[this.filename].findOne({ _id: id });
    }

    findCarByParams(params){
        return this.db[this.filename].findOne(params);
    }

    saveCar(data){
        return this.db[this.filename].save(data);

    }

    updateCar(id,data){
        return this.db[this.filename].update({ _id: id}, data);
    }

    removeCar(id){
        return this.db[this.filename].remove({ _id: id });
    }
}

export default Car;