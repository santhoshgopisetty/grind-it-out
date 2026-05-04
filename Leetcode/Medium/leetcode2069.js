var Robot = function (width, height) {
    this.border = [];

    // Bottom row: (0,0) to (w-1, 0) — face East
    for (let x = 0; x <= width - 1; x++) {
        this.border.push([x, 0, "East"]);
    }

    // Right column: (w-1, 1) to (w-1, h-1) — face North
    for (let y = 1; y <= height - 1; y++) {
        this.border.push([width - 1, y, "North"]);
    }

    // Top row: (w-2, h-1) to (0, h-1) — face West
    for (let x = width - 2; x >= 0; x--) {
        this.border.push([x, height - 1, "West"]);
    }

    // Left column: (0, h-2) down to (0, 1) — face South
    for (let y = height - 2; y >= 1; y--) {
        this.border.push([0, y, "South"]);
    }

    // Add (0,0) again at the END facing South
    // This handles landing back on (0,0) after a full loop
    this.border.push([0, 0, "South"]);

    // Perimeter = total unique cells = border.length - 1
    // (because (0,0) appears twice: index 0 and last index)
    this.perimeter = this.border.length - 1;

    this.index = 0;
};

Robot.prototype.step = function (num) {
    this.index = (this.index + num) % this.perimeter;

    // If we land exactly on index 0, that means we completed
    // a full loop and arrived at (0,0) from the South
    // So redirect to the last entry which has "South"
    if (this.index === 0) {
        this.index = this.perimeter; // last entry = [0, 0, "South"]
    }
};

Robot.prototype.getPos = function () {
    return [this.border[this.index][0], this.border[this.index][1]];
};

Robot.prototype.getDir = function () {
    return this.border[this.index][2];
};