abstract class Car {
  description: string;

  getDescription(): string {
    return this.description;
  }

  abstract cost(): number;
}

class ModelS extends Car {
  description = "Model S";

  cost(): number {
    return 73000;
  }
}

class ModelX extends Car {
  description = "Model X";

  cost(): number {
    return 77000;
  }
}

abstract class CarOptions extends Car {
  decoratedCar: Car;
  abstract getDescription(): string;
  abstract cost(): number;
}

class EnhancedAutopilot extends CarOptions {
  decoratedCar: Car;

  constructor(car: Car) {
    super();
    this.decoratedCar = car;
  }

  getDescription(): string {
    return this.decoratedCar.getDescription() + ", Enhanced Autopilot";
  }

  cost(): number {
    return this.decoratedCar.cost() + 5000;
  }
}

class RearFacingSeats extends CarOptions {
  decoratedCar: Car;

  constructor(car: Car) {
    super();
    this.decoratedCar = car;
  }

  getDescription(): string {
    return this.decoratedCar.getDescription() + ", Rear facing seats";
  }

  cost(): number {
    return this.decoratedCar.cost() + 4000;
  }
}

let myTesla = new ModelS();
myTesla = new RearFacingSeats(myTesla);
myTesla = new EnhancedAutopilot(myTesla);

console.log(myTesla.cost());
console.log(myTesla.getDescription());
