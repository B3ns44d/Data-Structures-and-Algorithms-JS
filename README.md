## Data Structures and Algorithms in JS
<p align="center">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" /> </p>

In this repo, I will talk about some common data structures and algorithms and I will implement them using JavaScript

## stack
The stack is considered LIFO (Last In First Out) — meaning the last item you put in the stack is the first item that comes out of the stack, let's take an example If you stack books, the top book will be taken before the bottom one. Or when you browse on the internet, the back button leads you to the most recently browsed page.

![enter image description here](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lifo_stack.png/350px-Lifo_stack.png)
The books example
![enter image description here](https://visualgo.net/img/stack_illustration.png)

**Take a look at the [Stack.js](https://github.com/B3ns44d/Data-Structures-and-Algorithms-JS/blob/master/Stacks.js) function**

## Sets

The set data structure stores values without any particular order and with no repeated values. Besides being able to add and remove elements to a set, there are a few other important set functions that work with two sets at once.

-   Union — This combines all the items from two different sets and returns this as a new set (with no duplicates).
-   Intersection — Given two sets, this function returns another set that has all items that are part of both sets.
-   Difference — This returns a list of items that are in one set but NOT in a different set.
-   Subset — This returns a boolean value that shows if all the elements in one set are included in a different set.
![enter image description here](https://www.codeproject.com/KB/recipes/dotnetset/Sets02.png)

**Take a look at the [Sets.js](https://github.com/B3ns44d/Data-Structures-and-Algorithms-JS/blob/master/Sets.js) function**

## Queues & Priority Queues

Queue is similar to Stack. The only difference is that Queue uses the FIFO principle (First In First Out). In other words, when you queue for bus, the first in the queue will always board first, for ex you can think of a queue as a line of people at a grocery store. The first one in the line is the first one to be served. Just like a queue.
![enter image description here](https://miro.medium.com/max/3148/0*TRbfsq86lqDoqW6b.png)

![enter image description here](https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Data_Queue.svg/1200px-Data_Queue.svg.png)

A queue has just two main operations: enqueue and dequeue. Enqueue means to insert an item into the back of the queue and dequeue means removing the front item.

**Take a look at the [Queues.js](https://github.com/B3ns44d/Data-Structures-and-Algorithms-JS/blob/master/Sets.js) function**

## Priority Queue
A priority queue is a special type of queue in which each element is associated with a priority and is served according to its priority. If elements with the same priority occur, they are served according to their order in the queue.

Generally, the value of the element itself is considered for assigning the priority.

For example, The element with the highest value is considered as the highest priority element. However, in other cases, we can assume the element with the lowest value as the highest priority element. In other cases, we can set priorities according to our needs.

![enter image description here](https://cdn.programiz.com/sites/tutorial2program/files/Introduction.png)

### Difference between Priority Queue and Normal Queue

In a queue, the  **first-in-first-out rule**  is implemented whereas, in a priority queue, the values are removed  **on the basis of priority**. The element with the highest priority is removed first.

![enter image description here](https://www.tutorialspoint.com/data_structures_algorithms/images/queue_insert.jpg)

**Take a look at the [PriorityQueue.js](https://github.com/B3ns44d/Data-Structures-and-Algorithms-JS/blob/master/PriorityQueue.js) function**
