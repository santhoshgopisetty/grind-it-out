/*
 * Approach: Interval DP on sorted robots with binary-search wall indexing
 * Each robot paints walls LEFT or RIGHT (bounded by distance & neighbors).
 * Convert wall positions to sorted indices via binary search, then DP over
 * robots tracking best wall count for left vs right choice, subtracting overlap.
 *
 * TC: O(n log n + W log W)  — sorting robots & walls + n binary searches
 * SC: O(n + W)              — sortedWalls, indexed, sortedPos, intervals arrays
 */

var maxWalls = function (robots, distance, walls) {
    const sortedWalls = [...walls].sort((a, b) => a - b);
    const W = sortedWalls.length;
    const n = robots.length;
    const indexed = robots.map((pos, i) => ({ pos, dist: distance[i] }));
    indexed.sort((a, b) => a.pos - b.pos);
    const sortedPos = indexed.map(r => r.pos);
    function lowerBound(val) {
        let lo = 0, hi = W;
        while (lo < hi) { const mid = (lo + hi) >> 1; if (sortedWalls[mid] < val) lo = mid + 1; else hi = mid; }
        return lo;
    }
    function upperBound(val) {
        let lo = 0, hi = W;
        while (lo < hi) { const mid = (lo + hi) >> 1; if (sortedWalls[mid] <= val) lo = mid + 1; else hi = mid; }
        return lo;
    }
    const intervals = [];
    for (let i = 0; i < n; i++) {
        const { pos, dist } = indexed[i];
        const leftBlock = i > 0 ? sortedPos[i - 1] : 0;
        const rightBlock = i < n - 1 ? sortedPos[i + 1] : Infinity;

        const leftLo = Math.max(pos - dist, leftBlock);
        const rightHi = Math.min(pos + dist, rightBlock);

        intervals.push({
            L: [lowerBound(leftLo), upperBound(pos)],
            R: [lowerBound(pos), upperBound(rightHi)]
        });
    }
    function rangeSize([lo, hi]) { return Math.max(0, hi - lo); }
    function overlap([lo1, hi1], [lo2, hi2]) {
        return Math.max(0, Math.min(hi1, hi2) - Math.max(lo1, lo2));
    }
    let dp = [0, 0];
    dp[0] = rangeSize(intervals[0].L);
    dp[1] = rangeSize(intervals[0].R);

    for (let i = 1; i < n; i++) {
        const newDp = [0, 0];
        for (let cur = 0; cur < 2; cur++) {
            const curInterval = cur === 0 ? intervals[i].L : intervals[i].R;
            const curSize = rangeSize(curInterval);

            for (let prev = 0; prev < 2; prev++) {
                const prevInterval = prev === 0 ? intervals[i - 1].L : intervals[i - 1].R;
                const ov = overlap(prevInterval, curInterval);
                const added = curSize - ov;
                const total = dp[prev] + added;
                if (total > newDp[cur]) newDp[cur] = total;
            }
        }
        dp = newDp;
    }

    return Math.max(dp[0], dp[1]);
}