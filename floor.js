const numOfFloors = 15;



const floors = document.getElementById("floors")

for (let index = 0; index < numOfFloors; index++) {
    const container = document.createElement("div")
    const blackLine =  document.createElement("div")
    blackLine.className = "black-line"
    const floor = document.createElement("div")
    floor.className = "floor"
    const button = document.createElement("button")
    button.className = "metal linear"
    const timer = document.createElement("p")
    timer.className = "timer"
    const floorP = document.createElement("p")
    floorP.className = "floorP"
    floorP.textContent = index


    button.appendChild(floorP)
    floor.appendChild(button)
    floor.appendChild(timer)
    container.appendChild(blackLine)
    container.appendChild(floor)
    floors.appendChild(container)
    
}
