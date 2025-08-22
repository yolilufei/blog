/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
    value:number;
    next: ListNode | null;
    constructor(value: number, next: ListNode | null) {
        this.value = value;
        this.next = next;
    }
}

interface ListNode {
    value: number;
    next: ListNode | null;
}

function recursiveGetData(l: ListNode | null) {
    let num = 0;
    if (!l) {
        return num;
    }
    while (l.next) {
        num += l.value;
        l = l.next;
    }
    return num;
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const num1 = recursiveGetData(l1);
    const num2 = recursiveGetData(l2);
    const sum = num1 + num2;
    const valueList = sum.toString().split('');
    const ret = new ListNode(0, null);
    valueList.forEach((value, index) => {
        ret.next = new ListNode(Number(value), null);
    })
    return ret.next;
};


// @lc code=end

