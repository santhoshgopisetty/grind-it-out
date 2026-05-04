var minimumTotalDistance = function (robot, factory) {
    robot.sort((a, b) => a - b);
    factory.sort((a, b) => a[0] - b[0]);
    const slots = [];
    for (const [pos, limit] of factory) {
        for (let i = 0; i < limit; i++) slots.push(pos);
    }
    const n = robot.length, m = slots.length;
    const INF = Number.MAX_SAFE_INTEGER;
    const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(INF));
    for (let j = 0; j <= m; j++) dp[0][j] = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = i; j <= m; j++) {
            if (dp[i][j - 1] !== INF) {
                dp[i][j] = dp[i][j - 1];
            }
            if (dp[i - 1][j - 1] !== INF) {
                const cost = dp[i - 1][j - 1] + Math.abs(robot[i - 1] - slots[j - 1]);
                dp[i][j] = Math.min(dp[i][j], cost);
            }
        }
    }
    return dp[n][m];
};