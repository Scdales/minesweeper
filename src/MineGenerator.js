export default function generateGrid(
  numberOfColumns,
  numberOfRows,
  numberOfMines
) {
  let grid = [];
  const newNumberOfMines =
    numberOfMines > numberOfColumns * numberOfRows
      ? numberOfColumns * numberOfRows
      : numberOfMines;
  const totalElements = numberOfColumns * numberOfRows;
  const newGrid = new Array(totalElements).fill(0);
  for (let i = 0; i < newNumberOfMines; i++) {
    let position = Math.floor(Math.random() * totalElements);
    while (newGrid[position] === 9) {
      position = Math.floor(Math.random() * totalElements);
    }
    newGrid[position] = 9;
  }

  for (let i = 0; i < numberOfRows; i++) {
    grid[i] = newGrid.slice(
      i * numberOfRows,
      i * numberOfRows + numberOfColumns
    );
  }
  for (let i = 0; i < numberOfRows; i++) {
    for (let x = 0; x < numberOfColumns; x++) {
      if (grid[i][x] === 9) {
        // top left
        if (!isNaN(grid?.[i - 1]?.[x - 1]) && grid[i - 1][x - 1] !== 9) {
          grid[i - 1][x - 1] += 1;
        }
        // top
        if (!isNaN(grid?.[i - 1]?.[x]) && grid[i - 1][x] !== 9) {
          grid[i - 1][x] += 1;
        }
        // top right
        if (!isNaN(grid?.[i - 1]?.[x + 1]) && grid[i - 1][x + 1] !== 9) {
          grid[i - 1][x + 1] += 1;
        }
        // right
        if (!isNaN(grid?.[i]?.[x + 1]) && grid[i][x + 1] !== 9) {
          grid[i][x + 1] += 1;
        }
        // bottom right
        if (!isNaN(grid?.[i + 1]?.[x + 1]) && grid[i + 1][x + 1] !== 9) {
          grid[i + 1][x + 1] += 1;
        }
        // bottom
        if (!isNaN(grid?.[i + 1]?.[x]) && grid[i + 1][x] !== 9) {
          grid[i + 1][x] += 1;
        }
        // bottom left
        if (!isNaN(grid?.[i + 1]?.[x - 1]) && grid[i + 1][x - 1] !== 9) {
          grid[i + 1][x - 1] += 1;
        }
        // left
        if (!isNaN(grid?.[i]?.[x - 1]) && grid[i][x - 1] !== 9) {
          grid[i][x - 1] += 1;
        }
      }
    }
  }
  return grid.map((row) => {
    return row.map((col) => {
      return { value: col, selected: false };
    });
  });
}
