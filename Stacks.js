// ** The Stacks Data structure

let arr = [],
  words = "B3ns44d",
  reverseWords = "";

//   !! put the letters of words to the stack array;
for (let i = 0; i < words.length; i++) {
  arr.push(words[i]);
}

// !! pop of the stack in reverse order
for (let i = 0; i < words.length; i++) {
  reverseWords += arr.pop();
}
// ! check if the reverseWords are the same words ...
if (reverseWords === words) {
  console.log(`${words} is a palindrome`);
} else {
  console.log(`${words} is not a palindrome`);
}

let MyStack = function(){
  this.count = 0;
  this.storage = {};

  this.push = (value) => {
    this.storage[this.count] = value;
    this.count++;
  };

  this.pop = () => {
    if (this.count === 0) return undefined;

    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  this.size = () => {
    return this.count;
  };

  this.peek = () => {
    return this.storage[this.count - 1];
  };
};

let myNewStack = new MyStack();

myNewStack.push("Hello");
myNewStack.push("World!");
console.log(myNewStack.peek());
// ? test all the functions here like pop or size ...

