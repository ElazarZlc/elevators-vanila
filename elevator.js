const numOfElevators = 4

export const elevators = [];
for(let i=0;i<numOfElevators;i++){

    
    const elevator = {
        queue: [],
        currentFloor: 0,
        elevatorTime: 0,
        isActive: false,
      };
      elevators.push(elevator)
}