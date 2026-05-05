var rotateRight = function (head, k) {
    if (!head || k === 0) return head;

    let length = 1;
    let tail = head;
    while (tail.next !== null) {
        tail = tail.next;
        length++;
    }

    k = k % length;
    if (k === 0) return head;

    let slow = head;
    let fast = head;

    for (let i = 0; i < k; i++) {
        fast = fast.next;
    }

    while (fast.next !== null) {
        slow = slow.next;
        fast = fast.next;
    }

    let newHead = slow.next;
    slow.next = null;
    fast.next = head;

    return newHead;
};