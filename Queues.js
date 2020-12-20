const Queue = function () {
    array = [];
    this.print = () => {
        console.log(array);
    };
    this.enqueue = (element) => {
        array.push(element);
    };
    this.dequeue = () => {
        return array.shift();
    };
    this.front = () => {
        return array.length;
    };
    this.isEmpty = () => {
        return array.length === 0;
    };
};

let myQueue = new Queue();

// ? do some test here for ex:

/** 
 * myQueue.enqueue('B');
 * myQueue.enqueue('3');
 * myQueue.enqueue('n');
 * myQueue.enqueue('s');
 * myQueue.enqueue('s');
 * myQueue.enqueue('4');
 * myQueue.enqueue('d');
 * myQueue.print();
 * myQueue.dequeue();
 * console.log(myQueue.front();)
 * myQueue.print();
 * **/
