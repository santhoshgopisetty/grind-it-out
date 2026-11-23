var findSubtreeSizes = function (parent, s) {
    const n = parent.length;

    // Build the original tree using adjacency lists
    const children = Array.from({ length: n }, () => []);

    for (let i = 1; i < n; i++) {
        children[parent[i]].push(i);
    }

    // Store the nearest ancestor for each character
    const lastSeen = new Array(26).fill(-1);

    // Store the modified parent of every node
    const newParent = new Array(n).fill(-1);

    // First DFS: Find the closest matching ancestor
    function dfs1(node) {
        const ch = s.charCodeAt(node) - 97;

        // Save the previous nearest ancestor of this character
        const previous = lastSeen[ch];

        // If an ancestor with the same character exists,
        // make it the new parent
        if (previous !== -1) {
            newParent[node] = previous;
        } else {
            newParent[node] = parent[node];
        }

        // Current node becomes the nearest ancestor
        lastSeen[ch] = node;

        // Visit original children
        for (const child of children[node]) {
            dfs1(child);
        }

        // Backtrack: restore the previous ancestor
        lastSeen[ch] = previous;
    }

    dfs1(0);

    // Build the modified tree
    const newChildren = Array.from({ length: n }, () => []);

    for (let i = 1; i < n; i++) {
        newChildren[newParent[i]].push(i);
    }

    // Second DFS: Calculate subtree sizes
    const answer = new Array(n).fill(1);

    function dfs2(node) {
        for (const child of newChildren[node]) {
            dfs2(child);
            answer[node] += answer[child];
        }
    }

    dfs2(0);

    return answer;
};