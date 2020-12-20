const PriorityQueue = function () {
    let array = [];
    this.printArray = () => {
        (console.log(array));
    };
    this.enqueue = (element) => {
        if (this.isEmpty()) {
            array.push(element);
        } else {
            let added = false;
            for (let i = 0; i < array.length; i++) {
                if (element[1] < array[i][1]) {
                    array.splice(i, 0, element);
                    added = true;
                    break
                }
            }
            if (!added) {
                array.push(element);
            }
        }
    };
    this.dequeue = () => {
        let value = array.shift();
        return value[0];
    };
    this.front = () => {
        return array[0];
    };
    this.size = () => {
        return array.length;
    };
    this.isEmpty = () => {
        return (array.length === 0);
    };
}

let newPriorityQueue = new PriorityQueue();

// ? do some test here for ex:

/** 
 * newPriorityQueue.enqueue(['Hello World!', 2]); 
 * newPriorityQueue.enqueue(['this is...', 3]);
 * newPriorityQueue.enqueue(['B3ns44d', 1]);
 * newPriorityQueue.printCollection();
 * newPriorityQueue.dequeue();
 * console.log(newPriorityQueue.front());
 * newPriorityQueue.printCollection();
 */