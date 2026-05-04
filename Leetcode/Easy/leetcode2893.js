var canBeEqual = function (s1, s2) {
    const evenMatch = [s1[0], s1[2]].sort().join('') === [s2[0], s2[2]].sort().join('');
    const oddMatch = [s1[1], s1[3]].sort().join('') === [s2[1], s2[3]].sort().join('');
    return evenMatch && oddMatch;
};