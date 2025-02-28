function countNegativeNums(grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] < 0) {
        count++;
      }
    }
  }
  return count;
}
console.log(
  countNegativeNums([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
  ])
);
console.log(
  countNegativeNums([
    [5, 1, 0],
    [-5, -5, -5],
  ])
);

// Below both solutions are need to understand 
// O(m*n)
function countNegativeNums(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let row = rows - 1, col = 0; // Start from bottom-left
    let count = 0;
  
    while (row >= 0 && col < cols) {
      if (grid[row][col] < 0) {
        // All elements above this in the column are negative
        count += (row + 1);
        col++; // Move right
      } else {
        row--; // Move up
      }
    }
  
    return count;
  }
  
  // Test cases
  console.log(
    countNegativeNums([
      [4, 3, 2, -1],
      [3, 2, 1, -1],
      [1, 1, -1, -2],
      [-1, -1, -2, -3],
    ])
  ); // Output: 8
  
  console.log(
    countNegativeNums([
      [5, 1, 0],
      [-5, -5, -5],
    ])
  ); // Output: 3
  
// more faster  (O(m log n))
function countNegativeNums(grid) {
    let count = 0;
  
    function binarySearch(row) {
      let left = 0, right = row.length - 1;
      while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (row[mid] < 0) right = mid - 1;
        else left = mid + 1;
      }
      return row.length - left; // Count of negative numbers
    }
  
    for (let i = 0; i < grid.length; i++) {
      count += binarySearch(grid[i]);
    }
  
    return count;
  }
  
  // Test cases
  console.log(
    countNegativeNums([
      [4, 3, 2, -1],
      [3, 2, 1, -1],
      [1, 1, -1, -2],
      [-1, -1, -2, -3],
    ])
  ); // Output: 8
  
  console.log(
    countNegativeNums([
      [5, 1, 0],
      [-5, -5, -5],
    ])
  ); // Output: 3
  