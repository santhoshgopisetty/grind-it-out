var robotSim = function (commands, obstacles) {
    let dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let obs = new Set(obstacles.map(([x, y]) => `${x},${y}`));
    let x = 0, y = 0, dir = 0;
    let maxDist = 0;
    for (let cmd of commands) {
        if (cmd === -2) {
            dir = (dir + 3) % 4;
        }
        else if (cmd === -1) {
            dir = (dir + 1) % 4;
        }
        else {
            let [dx, dy] = dirs[dir];
            for (let i = 0; i < cmd; i++) {
                let nx = x + dx;
                let ny = y + dy;
                if (obs.has(`${nx},${ny}`)) break;
                x = nx;
                y = ny;
                maxDist = Math.max(maxDist, x * x + y * y);
            }
        }
    }
    return maxDist;
};