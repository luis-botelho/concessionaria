
function Car(id,model, carType, fuelType, brand, year) {
    this.id = id;
    this.model = model;
    this.carType = carType;
    this.fuelType = fuelType;
    this.brand = brand;
    this.year = year;
}
const onix = new Car(
    1,'Onix','Hatch', 'Gas', 'Chevrolet', 2020
)
const uno = new Car(
    2,'Uno','Hatch', 'Gas', 'Fiat', 1997
)
const civic = new Car(
    3,'Toro','sedan', 'Gas', 'Honda', 2020
)
const ecosport = new Car(
    4,'Ecosport','SUV', 'Gas','Ford', 2019
)
const cars = [onix,uno,civic,ecosport]

const getValidCars = () => cars.filter(Boolean);
const getCarById = (id) => getValidCars().find((car) => car.id === id);
const getIndex = (id) => getValidCars().findIndex((car) => car.id === id);
const idValidate = (car,lastCar) => {
    if (cars.length){
        car.id = lastCar.id+1;
        cars.push(car);
    }else {
        car.id = 1 
        cars.push(car)
    }
};

const carValue = (car,error,lastCar) => {
    if(!car || !car.model || !car.carType || !car.fuelType || !car.brand || !car.year){
        error
        return;
    }else{
        idValidate(car,lastCar)
    };
};


exports.cars = cars;
exports.getValidCars = getValidCars;
exports.getCarById = getCarById;
exports.getIndex = getIndex;
exports.carValue = carValue;
exports.idValidate = idValidate;