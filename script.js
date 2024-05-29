import { elevators } from "./elevator.js";





const hight = 100;
const speed = 500;

const addFloor = (newFloor) => {
  let closestElevator = 0;
  let minTime = Infinity;
  let lastFloor = 0;

  for (let index = 0; index < elevators.length; index++) {
    const elevator = elevators[index];
    lastFloor =
      elevator.queue.length > 0
        ? elevators[index].queue[elevators.length - 1]
        : elevator.currentFloor;
    let abs = Math.abs(newFloor - lastFloor);
    if (elevator.elevatorTime + abs * speed < minTime) {
      minTime = elevator.elevatorTime + abs * speed;
      closestElevator = index;
    }
  }
  lastFloor =
    elevators[closestElevator].queue.length > 0
      ? elevators[index].queue[elevators.length - 1]
      : elevators[closestElevator].currentFloor;

  elevators[closestElevator].queue.push(newFloor);
  elevators[closestElevator].elevatorTime +=
    Math.abs(newFloor - lastFloor) * speed;
  if (
    elevators[closestElevator].queue == 1 &&
    !elevators[closestElevator].isActive
  ) {
    moveElevator(elevators[closestElevator]);
  }
};

const moveElevator = (elevator) => {
    elevator.isActive = true;
  console.log(elevator);
  const nextFloor = elevator.queue[0];
  const distance = Math.abs(nextFloor - elevator.currentFloor) * hight;
  const mySpeed = Math.abs(nextFloor - elevator.currentFloor) * speed;
  const timer = setInterval(()=>{
    elevator.elevatorTime -= speed
  },speed)
  setTimeout(() => {
    clearInterval(timer,()=>{
        elevator.elevatorTime -= speed
      })
    elevator.currentFloor = elevator.queue.shift();
    if (elevator.queue == 0) {
      elevator.isActive = false;
      return;
    }
    moveElevator(elevator);
  }, mySpeed + 2000);
};
