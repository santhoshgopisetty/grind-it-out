var reverseSubmatrix = function (grid, x, y, k) {
    let top = x;
    let bottom = x + k - 1;
    while (top < bottom) {
        for (let i = y; i < y + k; i++) {
            let temp = grid[top][i];
            grid[top][i] = grid[bottom][i];
            grid[bottom][i] = temp;
        }
        top++;
        bottom--;
    }
    return grid;
};