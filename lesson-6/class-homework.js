// Ex.1 Rewrite function with Class syntax
function createCar(brand, model, speed) {
	let car = {
		// properties
        brand,
        model, // We use the function parameter
		speed,
		// methods:
		accelerate: function(amount) {
			this.speed += amount;
		},

		brake: function(amount) {
			this.speed -= amount;
		},

		status: function() {
			return this.brand + this.model + " running at " + this.speed + " km/h";
		}
	};
	return car;
}

// Create a Car object using the class syntax
class Car {
    
    brand = 'Renault';
    model = 'Scenic';
    speed = 0;
    
    status = () => {
        return `${this.brand} ${this.model} running at ${this.speed} km/h`
    }
    accelerate = (amount) => {
        this.speed += amount;
        return this;
    }
    brake = (amount) => {
        this.speed -= amount;
        return this;
    }
}

const car = new Car(); // should dispay new object

// console.log(car); // Should return new object
// console.log(car.status()); // Renault Scenic running at 60 km/h 
console.log(
    car
        .brake(4)
        .accelerate(10)
        .status()
    );
car.accelerate(150);
console.log(car.status());


class CarColor extends Car {

    color = 'Red';

    carColor = () => {
        return `${this.brand} ${this.model} has ${this.color} color`
    }
}
const carColor = new CarColor("BMW", "3", "Red");

// console.log(carColor); // should display new object
// console.log(carColor.carColor());