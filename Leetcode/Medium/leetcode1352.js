var ProductOfNumbers = function () {
    this.arr = [1];
};

ProductOfNumbers.prototype.add = function (num) {
    if (num === 0) {
        this.arr = [1];
    } else {
        this.arr.push(this.arr[this.arr.length - 1] * num);
    }
};

ProductOfNumbers.prototype.getProduct = function (k) {
    const n = this.arr.length;

    if (k >= n) return 0;

    return this.arr[n - 1] / this.arr[n - k - 1];
};