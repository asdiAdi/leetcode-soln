// A linked list is a linear data structure similar to an array. 
// However, unlike arrays, elements are not stored in a particular memory location or index. 
// Rather each element is a separate object that contains a pointer or a link to the next object in that list.

class ListNode{
    data : any;
    next : ListNode | null;
    constructor(data = null){
        this.data = data;
        this.next = null;
    }

}

// can input manually or input an array to convert it to class LinkeList
export default class LinkedList{
    head: ListNode;
    protected count: number;
    constructor(head?: ListNode | Array<any> ){
        this.count = 1;
        this.head = new ListNode();
        if (head !== undefined){
            if (Array.isArray(head)){
                this.count = 0;
                head.forEach((val) => this.add(val));
            } else this.head = head;
        }
    }

    size():number{
        return this.count;
    }

    add(data: any){
        let node = new ListNode(data);
        let current;
        if(this.count > 0){
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        } else this.head = node;
        this.count++;
    }

    printList(){
        let current = this.head;
        let str = "";
        while (current){
            str += current.data + " ";
            if(current.next !== null) current = current.next;
            else break;
        }
        console.log(str);
    }

    // insertAt
    // removeFromIndex
    // removeElement
    // indexOf
    // size of list
    // print list

    
}