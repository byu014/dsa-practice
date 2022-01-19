/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const arr = [];
    let cur = head;

    while(cur){
        arr.push(cur);
        cur = cur.next;
    }
    const removeI = arr.length - n;
    if(removeI > 0){
        arr[removeI - 1].next = arr[removeI].next;
    }else{
        head = head.next;
    }
    return head;

};

/*
traverse entire linked list and store each node in array
find index to remove by substracting n from length of arr
do standard linkedlist removal by linking prev node to next of node to be removed
