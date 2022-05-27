// palindromeLinkedList.js
// Speed: faster than 68.64% 
// Memory: less than 79.42%
let isPalindrome = function(head) {
    let data = []; 
    while (head){
        data.push(head.val);
        head = head.next;
    }
    for (let i = 0; i < data.length/2; i++){
        if (data[i] !== data[data.length-i-1]) return false;
    }
    return true;
}

// Discussion Solution
// https://leetcode.com/problems/palindrome-linked-list/discuss/1137027/JS-Python-Java-C%2B%2B-or-Easy-Floyd's-%2B-Reversal-Solution-w-Explanation

// var isPalindrome = function(head) {
//     let slow = head, fast = head, prev, temp
//     while (fast && fast.next)
//         slow = slow.next, fast = fast.next.next
//     prev = slow, slow = slow.next, prev.next = null
//     while (slow)
//         temp = slow.next, slow.next = prev, prev = slow, slow = temp
//     fast = head, slow = prev
//     while (slow)
//         if (fast.val !== slow.val) return false
//         else fast = fast.next, slow = slow.next
//     return true
// };
