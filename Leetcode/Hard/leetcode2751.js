var survivedRobotsHealths = function (positions, healths, directions) {
    const n = positions.length;
    const indices = Array.from({ length: n }, (_, i) => i);
    indices.sort((a, b) => positions[a] - positions[b]);
    const health = [...healths];
    const alive = new Array(n).fill(true);
    const stack = [];
    for (const i of indices) {
        if (directions[i] === 'R') {
            stack.push(i);
        } else {
            let survived = true;

            while (stack.length > 0) {
                const top = stack[stack.length - 1];
                if (health[top] > health[i]) {
                    health[top]--;
                    survived = false;
                    break;
                } else if (health[top] < health[i]) {
                    health[i]--;
                    alive[top] = false;
                    stack.pop();
                } else {
                    alive[top] = false;
                    stack.pop();
                    survived = false;
                    break;
                }
            }

            if (!survived) {
                alive[i] = false;
            }
        }
    }
    const result = [];
    for (let i = 0; i < n; i++) {
        if (alive[i]) result.push(health[i]);
    }
    return result;
}