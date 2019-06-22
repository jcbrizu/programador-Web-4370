  function Car(model, brand, year) {
  this.model = model;
  this.brand = brand;
  this.year = year;
  var id = Date.now()

  this.getId = function() {
    return id
  }
  
}
 

 Car.prototype.getCarName = function () {
   return this.model + ' ' + this.brand + ' ' + this.year;
 }


var car1 = new Car('Suran', 'Volkswagen', 2005)
var car2 = new Car('Audi TT', 'Audi', 2017)
var car3 = new Car('Gran Turismo', 'Masseratti', 2018)





console.log(car1.getCarName());
console.log(car1.getId() * 7)
console.log(car2.getCarName())
console.log(car2.getId()* 2)
console.log(car3.getCarName())
console.log(car3.getId() * 3)
