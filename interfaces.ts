interface SquareConfig {
  color?: string;
  width?: number;
  height: number;
  name: string;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
  let newSquare = {color: "white", area: 100};
  if (config.color) {
      newSquare.color = config.color;
  }
  if (config.width) {
      newSquare.area = config.width * config.width;
  }

  return newSquare;
}

let mySquare = createSquare({color: null, height: null, name: null});
console.log(mySquare);


// let newSquare = {color: "white", area: 100};
// newSquare.height = 20;
// => Property 'height' does not exist on type '{ color: string; area: number; }'.
