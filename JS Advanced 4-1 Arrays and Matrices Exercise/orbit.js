function orbit(input) {
    let canvasWidth = input[0];
    let canvasHeight = input[1];
    let playerX = input[2];
    let playerY = input[3];

    let grid = [];
    for (let i = 0; i < canvasWidth; i++) {
        let x = [];
        for (let j = 0; j < canvasHeight; j++) {
            x.push([]);
        }
        grid.push(x)
    }
    function sideFormula(x, y, playerX, playerY, distance) {

        distance++;
        let oldDist = distance + 1;
        let upSide = x === playerX + distance && y >= playerY - distance && y <= playerY + distance;
        let downSide = x === playerX - distance && y >= playerY - distance && y <= playerY + distance;
        let leftSide = y === playerY - distance && x >= playerX - distance && x <= playerX + distance;
        let rightSide = y === playerY + distance && x >= playerX - distance && x <= playerX + distance;

        return [upSide, downSide, leftSide, rightSide, oldDist];
    }
    let counter = 0;

    while (counter <= grid[0].length - 1) {

        for (let x = 0; x < grid.length; x++) {
            for (let y = 0; y < grid[x].length; y++) {
                let solution = sideFormula(x, y, playerX, playerY, counter)
                if (solution[0] || solution[1] || solution[2] || solution[3]) {
                    grid[x][y] = solution[4]
                }

            }
        }

        counter++
    }

    grid[playerX][playerY] = 1;
    let finished = grid.map(x=>{return x.join(" ")})
    console.log(finished.join("\n"))
}