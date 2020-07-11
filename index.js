class SortedLinkedList {

    constructor(f) {
        this.comparator=f;
        this.head;
        this.length=0;
    }
    add(value) {
        let newNode = { value: value, next: undefined };
        if (this.head=== undefined ) {
            newNode.next=this.head;
            this.head=newNode;
        }
        else if(this.comparator(this.head.value,newNode.value)>0){
                 let tempNode=this.head;
                 this.head=newNode;
                 newNode.next=tempNode;
        }
        else if(this.comparator(this.head.value,newNode.value)<0){
            let current = this.head;
            while (current.next !== undefined && current.next.value > value) {
                current = current.next;
            }
            newNode.next = current.next;
            current.next = newNode;
        }
        else if(this.comparator(this.head.value,newNode.value)===0){
            let current = this.head;
            while (current.next !== undefined && current.next.value === value) {
                current = current.next;
            }
            newNode.next = current.next;
            current.next = newNode;
        }
        this.length++;
    }
    toString() {
        if (this.length===0) {
            return '[]';
        }
        let linkedListString = "[";
        let currentNode = this.head;
        while (currentNode.next !== undefined) {
            linkedListString += currentNode.value.toString() + ", ";
            currentNode = currentNode.next;
        }
        linkedListString += currentNode.value.toString();
        linkedListString += "]";
        return linkedListString;
    }
    remove(value) {
        if (this.head.value=== value ){
            this.head=this.head.next;
            this.length--;
            return true;
        }
        let currentNode=this.head;
        let previousNode;
        while(currentNode.value!==value){
            previousNode=currentNode;
            currentNode=currentNode.next;
            if(currentNode===undefined){
                return false;
            }
        }
        previousNode.next=currentNode.next;
        this.length--;
        return true;
    }
}

// let scores = new SortedLinkedList((a, b) => b-a); // passing comparator function here
// scores.add(54);
// scores.add(33);
// scores.add(91);
// scores.add(44);
// scores.add(11);
// scores.add(14);
// scores.add(12);
// console.log(`${scores}`);
// let students = new SortedLinkedList((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
// students.add('Raj');
// students.add('Mark');
//  students.add('Arnav');
//  students.add('Ramesh');
// console.log(`${students}`);
let scores = new SortedLinkedList((a, b) => b-a); // passing comparator function here
scores.add(0);
scores.add(11);
  scores.add(12);
 scores.add(12);
 scores.add(14);
 scores.add(33);
 scores.add(54);
 scores.add(11);
scores.add(30);
scores.add(60);
scores.add(7);
scores.add(13);
console.log(`${scores}`);

let list1 = new SortedLinkedList();
list1.add(2);
list1.add(3);
list1.add(4);
list1.add(7);
list1.add(5);
list1.add(1);
list1.add(6);
list1.add(9);
list1.add(8);
console.log(list1.toString());
console.log(list1.remove(1));
console.log(list1.toString());
console.log(list1.remove(7));
console.log(list1.toString());
console.log(list1.remove(9));
console.log(list1.toString());
console.log(`${list1}`);
let scores = new SortedLinkedList();
scores.add(54);
scores.add(33);
scores.add(91);
scores.add(44);
console.log(`${scores}`); // Should print [33, 44, 54, 91];
console.log(scores.remove(44)); // Should print true
console.log(`${scores}`); // Should print [33, 54, 91];
console.log(scores.remove(70)); // Should print false
let list2 = new SortedLinkedList();
list2.add(2);
console.log(list2.remove(2));
console.log(`${list2}`);
let list3 = new SortedLinkedList();
list3.add(1);
list3.add(1);
list3.add(2);
list3.add(2);
list3.add(3);
list3.add(3);
console.log(`${list3}`);
list3.remove(3);
console.log(`${list3}`);
