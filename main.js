//control speed
function controspeed(speed) {
  if (speed < 0) {
    return "Швидкість не може бути від'ємною";
  } else if (speed <= 30) {
    const minus = 7 + (speed / 30) * (9 - 7);
    return `Моментальна витрата пального при швидкості ${speed} км/год: ${minus} л/100 км`;
  } else {
    return "Максимальна швидкість для розрахунку - 30 км/год";
  }
}


const speed = 30;
const result = controspeed(speed);
console.log(result);
// fuelConsumption
function fuelConsumption(speed, offRoad = false) {
  if (speed < 0) {
    return "Швидкість не може бути від'ємною";
  } else if (speed <= 30) {
    let consumption = 7 + (speed / 30) * (9 - 7);
    if (offRoad) {
      consumption *= 1.25;
    }
    return `оментальна витрата пального при швидкості ${speed} км/год: ${consumption} л/100 км`;
  } else {
    return "Максимальна швидкість для розрахунку - 30 км/год";
  }
}

const speedOffRoad = 30;
const resultOffRoad = fuelConsumption(speedOffRoad, true);
console.log(resultOffRoad); 
