var judgeCircle = function (moves) {
    let x = 0, y = 0;
    for (let i = 0; i < moves.length; i++) {
        let m = moves[i];
        if (m === "L") x -= 1;
        else if (m === "R") x += 1;
        else if (m === "U") y += 1;
        else if (m === "D") y -= 1;
    }
    return x === 0 && y === 0;
};