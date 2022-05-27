// 876. middleOfLinkedList.js
// Speed: faster than 90.76% 
// Memory: less than 46.51%
let middleNode = function(head) {
    let prev = head, slow = head, fast = head;
    while (1){
        prev = fast.next;
        if(prev == null) return slow;
        fast = prev.next;
        slow = slow.next;
        if(fast == null) return slow;
    }
};

// Discussion
// https://leetcode.com/problems/middle-of-the-linked-list/discuss/290798/Simple-JS-Javascript-solution

// var middleNode = function(head) {
    
//     var fastnode = head;
//     var slownode = head;
//     while(fastnode !== null && fastnode.next !== null) 
//     {
//         fastnode = fastnode.next.next
//         slownode = slownode.next
//     }
//     return slownode;
// };