const external = require('./cars')
const express = require('express');
const app = express();
const port = 3000;

// 
app.use(express.json());//faz com que as requisições trabalhem com JSON
// ROTAS
//Rota inicial
app.get('/', (req, res) =>{
    res.send('Wellcome, to Blue Car shop');
});
// CREAT
app.post('/cars', (req, res)=>{
    const car = req.body;
    const cars = external.cars
    if(!car || !car.model || !car.carType || !car.fuelType || !car.brand || !car.year){
        res.status(400).send({ message: 'Carro inválido, tente novamente'});
        return;
    }
    const lastCar = cars[cars.length -1];
    if (cars.length){
        car.id = lastCar.id+1;  
        cars.push(car);
    }else {
        car.id = 1;
        cars.push(car);
    }
});
// READ
app.get('/cars', (req, res) =>{
    carsList = external.cars
    res.send(carsList); //
});
app.get('/car/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    const car = external.getCarById(id);
    if(!car){
        res.status(404).send({ message: 'Carro não encontrado'})
    }
    res.send(car); //
});
//EDIT - PUT
app.put('/cars/:id', (req, res) => {
    const cars = external.cars;
    const id = +req.params.id-1;
    const carIndex = GetIndex(id);
    if(carIndex < 0){
        res.status(404).send({ message: 'Carro não encontrado' });
        return;
    };
    const newCar = req.body;
    if(!Object.keys(newCar).length){
        res.status(400).send({ message: 'O body está vazio'});
        return;
    }
    if(!car || !car.model || !car.carType || !car.fuelType || !car.brand || !car.year){
        res.status(400).send({ message: 'Carro inválido, tente novamente'});
        return;
    }
    const car = getCarById(id);
    cars[carIndex] = {
        ...car,
        ...newCar
    };
    res.send(car[carIndex]);

});
//Delete
app.delete("/cars/:id", (req, res) => {
    const id = +req.params.id;
    const carIndex = GetIndex(id);
    const cars = external.cars
    if(carIndex < 0 ){
      res.status(404).send({
        message: "Carro nao encontrado, tente novamente."
      });
      return;
    }
    cars.splice(carIndex, 1);
    res.send({
      message: "Carro removido com sucesso"
    });
  });

app.listen(port, () =>{
   console.log(`Server running at http://localhost:${port}`);
});