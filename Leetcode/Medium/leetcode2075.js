var decodeCiphertext = function (encodedText, rows) {
    if (rows === 1)
        return encodedText;
    const n = encodedText.length;
    const cols = n / rows;
    let i = 0, j = 0, k = 0;
    let dec = '';
    while (k < n) {
        dec += encodedText[k];
        i++;
        if (i === rows) {
            i = 0;
            j++;
        }
        k = i * (cols + 1) + j;
    }
    while (dec.length > 0 && dec[dec.length - 1] === ' ') {
        dec = dec.slice(0, -1);
    }
    return dec;
};

