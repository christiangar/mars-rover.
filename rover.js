var myRover = {
  direction: ['N'],
  coordinateX: [5],
  coordinateY: [6],
  movements: 'frbbbbbflff',
  travelLog: []
};


function command() {
  for (var i = 0; i < myRover.movements.length; i++) {
    switch (myRover.movements[i]) {
      case 'f':
        moveForward(myRover);
        break;
      case 'l':
        turnLeft(myRover);
        break;
      case 'r':
        turnRight(myRover);
        break;
      case 'b':
        moveBackward(myRover);
        break;
    }
    myRover.travelLog.push("On my way..: [" + myRover.coordinateX + ", " + myRover.coordinateY + "]");
    console.log(myRover.travelLog[i]);
  }
}

function moveForward(myRover) {
  console.log("Let's move forward!");
  if (myRover.coordinateY[0] !== 0 && myRover.direction.slice(-1)[0] == 'N') {
    myRover.coordinateY[0]--;
  }
  if (myRover.coordinateX[0] !== 9 && myRover.direction.slice(-1)[0] == 'E') {
    myRover.coordinateX[0]++;
  }
  if (myRover.coordinateY[0] !== 9 && myRover.direction.slice(-1)[0] == 'S') {
    myRover.coordinateY[0]++;
  }
  if (myRover.coordinateX[0] !== 0 && myRover.direction.slice(-1)[0] == 'W') {
    myRover.coordinateX[0]--;
  }

}

function turnLeft(myRover) {
  console.log("Let's turn left!");
  switch (myRover.direction.slice(-1)[0]) {
    case 'N':
      myRover.direction.push('W');
      console.log("New Rover Direction: " + myRover.direction.slice(-1)[0]);
      break;
    case 'S':
      myRover.direction.push('E');
      console.log("New Rover Direction: " + myRover.direction.slice(-1)[0]);
      break;
    case 'E':
      myRover.direction.push('N');
      console.log("New Rover Direction: " + myRover.direction.slice(-1)[0]);
      break;
    case 'W':
      myRover.direction.push('S');
      console.log("New Rover Direction: " + myRover.direction.slice(-1)[0]);
      break;
  }
}

function turnRight(myRover) {
  console.log("Let's turn right!");
  switch (myRover.direction.slice(-1)[0]) {
    case 'N':
      myRover.direction.push('E');
      console.log("New Rover Direction: " + myRover.direction.slice(-1)[0]);
      break;
    case 'S':
      myRover.direction.push('W');
      console.log("New Rover Direction: " + myRover.direction.slice(-1)[0]);
      break;
    case 'E':
      myRover.direction.push('S');
      console.log("New Rover Direction: " + myRover.direction.slice(-1)[0]);
      break;
    case 'W':
      myRover.direction.push('N');
      console.log("New Rover Direction: " + myRover.direction.slice(-1)[0]);
      break;
  }

}

function moveBackward(myRover) {
  console.log("Let's go backward!");
  if (myRover.coordinateY[0] !== 0 && myRover.direction.slice(-1)[0] == 'S') {
    myRover.coordinateY[0]--;
  }
  if (myRover.coordinateX[0] !== 9 && myRover.direction.slice(-1)[0] == 'W') {
    myRover.coordinateX[0]++;
  }
  if (myRover.coordinateY[0] !== 9 && myRover.direction.slice(-1)[0] == 'N') {
    myRover.coordinateY[0]++;
  }
  if (myRover.coordinateX[0] !== 0 && myRover.direction.slice(-1)[0] == 'E') {
    myRover.coordinateX[0]--;
  }
}


command(myRover);

console.log("New Rover Position: [" + myRover.coordinateX + ", " + myRover.coordinateY + "]");
console.log("Final Rover Direction: " + myRover.direction.slice(-1)[0]);
le.log("Final Rover Direction: " + myRover.direction.slice(-1)[0]);
