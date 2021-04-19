// Task 3

const meeatingRooms = [
  ["XXX", 3],
  ["XXXXX", 6],
  ["XXXXXX", 9],
];
function findingSeats(rooms, neededSeats) {
  if (neededSeats === 0) return "Game On";
  let numsUsedSeats = [];
  let numSeats = neededSeats;

  for (let i = 0; i < rooms.length; i++) {
    let freeSeatInRoom = rooms[i][1] - rooms[i][0].length;
    if (numSeats > 0) {
      if (freeSeatInRoom > 0) {
        if (numSeats >= freeSeatInRoom) {
          numSeats -= freeSeatInRoom;
          numsUsedSeats.push(freeSeatInRoom);
        } else {
          freeSeatInRoom -= numSeats;
          numsUsedSeats.push(freeSeatInRoom);
        }
      } else numsUsedSeats.push(0);
    }
  }
  console.log(numsUsedSeats);
  if (numSeats > 0) return "Not enough!";
  else return numsUsedSeats;
}

function printAnswer(result) {
  alert(result);
}

function init() {
  printAnswer(findingSeats(meeatingRooms, 4));
}

init();
